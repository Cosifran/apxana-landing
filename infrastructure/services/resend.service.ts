import { Resend } from 'resend';
import { EmailRepository } from '@/domain/repositories/email.repository';
import { Email } from '@/domain/entities/email.entity';

export class ResendEmailService implements EmailRepository {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async send(email: Email): Promise<{ success: boolean; messageId?: string }> {
    const { data, error } = await this.resend.emails.send({
      from: email.from,
      to: email.to,
      subject: email.subject,
      html: email.html,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false };
    }

    return { success: true, messageId: data?.id };
  }
}
