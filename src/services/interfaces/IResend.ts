export interface IResend {
  sent(email: string, subject: string, html: string): Promise<void>;
}