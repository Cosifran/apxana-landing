import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//Import components
import Nav from "./components/nav";
import Footer from "./components/footer";
//Import toaster
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APXANA TECH",
  description: "Consultoría tecnológica, desarrollo de software y soluciones digitales para empresas. Transformamos ideas en innovación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen">
          <Nav />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
