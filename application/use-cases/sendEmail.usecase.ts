import { Email } from "@/domain/entities/email.entity";
import { EmailRepository } from "@/domain/repositories/email.repository";


export class SendEmailUseCase {
  constructor(private emailRepo: EmailRepository) {}

  async execute(email: Email) {
    return await this.emailRepo.send(email);
  }
}
