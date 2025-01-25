import { ResetPassword } from "@/user/application/resetPaswword";
import type { IResend } from "@/services/interfaces/IResend";

export class ResetPasswordController {
  constructor(private resetPassword: ResetPassword, private email: IResend) {}

  async run({ body: { email }, set, update, url }: { body: { email: string }, set: any, update: any, url: string }) {
    try {
      const user = await this.resetPassword.run(email);
      if (!user) {
        set.status = 400;
        return {
          message: "User not found"
        }
      }
      const token = await update.sign({ id: user.id });

      set.value = 200;
      await this.email.sent(email, "Cambio de contraseña", 
      `
        <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperar contraseña</title>
  </head>
  <body style="width:100%;font-family:Montserrat, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#F6F6F6">
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
      <tbody>
        <tr>
          <td valign="top" style="padding:0;Margin:0">
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tbody>
                <tr>
                  <td align="center" style="padding:0;Margin:0;background-color:#ffffff">
                    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" role="none">
                      <tbody>
                        <tr>
                          <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="padding:0;Margin:0;font-size:0px">
                                            <img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_7eaca9f07ed40c6120e36893d625becf/images/74941620307889660.png" alt="Eid al-Adha" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Eid al-Adha" height="373" width="560">
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                            <h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#333333">¿Olvidaste tu contraseña?</h1>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                            <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:19.2px;color:#333333;font-size:16px">
                                              Hola,
                                              <br>
                                              <br>
                                              Hemos recibido una solicitud para restablecer la contraseña de la cuenta asociada a el correo <strong>${email}</strong>. Si no realizaste esta solicitud, puedes ignorar este correo.
                                              <br>
                                              <br>
                                              Para restablecer tu contraseña, haz clic en el botón de abajo:
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                            <span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#F4B459;border-width:0px;display:inline-block;border-radius:10px;width:auto">
                                              <a href="${url}/${token}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:18px;padding:10px 20px 10px 20px;display:inline-block;background:#F4B459;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:21.6px;width:auto;text-align:center">
                                                RESTABLECER CONTRASEÑA
                                              </a>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:30px;font-size:0">
                                            <table border="0" width="80%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:0;Margin:0;border-bottom:1px solid #f4b459;background:none;height:1px;width:100%;margin:0px"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                            <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:19.2px;color:#333333;font-size:16px">
                                              Tiene <strong>15 minutos </strong>para restablecer tu contraseña. Después de este tiempo, el enlace expirará.
                                              <br>
                                              <br>
                                              ¿No hiciste esta solicitud? No te preocupes, tu cuenta es segura. Simplemente ignora este correo y tu contraseña seguirá siendo la misma.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
      `);
      return {
        message: "Email sent"
      }
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
      
    }

  }
}