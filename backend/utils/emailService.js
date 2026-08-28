const nodemailer = require('nodemailer');

const sendRFQEmail = async (rfqData) => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.warn('[Email Service Notice] SMTP_USER or SMTP_PASS environment variables not set. Skipping automated email dispatch.');
    return { success: false, message: 'SMTP credentials missing' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #334155;">
        <div style="text-align: center; border-b: 2px solid #d97706; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #fbbf24; margin: 0; font-size: 22px;">🥥 NEW CONTAINER RFQ RECEIVED</h2>
          <p style="color: #34d399; margin: 4px 0 0 0; font-size: 13px; font-weight: bold;">CEYLON GOLD AGRICULTURAL EXPORTS</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr style="background-color: #1e293b;">
            <td style="padding: 10px; color: #94a3b8; font-weight: bold; width: 40%;">Company Name:</td>
            <td style="padding: 10px; color: #ffffff; font-weight: bold;">${rfqData.companyName || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Contact Person:</td>
            <td style="padding: 10px; color: #ffffff;">${rfqData.contactPerson || 'N/A'}</td>
          </tr>
          <tr style="background-color: #1e293b;">
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Email Address:</td>
            <td style="padding: 10px; color: #fbbf24;"><a href="mailto:${rfqData.email}" style="color: #fbbf24; text-decoration: underline;">${rfqData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Phone / WhatsApp:</td>
            <td style="padding: 10px; color: #34d399; font-weight: bold;">${rfqData.phone || 'N/A'}</td>
          </tr>
          <tr style="background-color: #1e293b;">
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Destination Country:</td>
            <td style="padding: 10px; color: #ffffff;">${rfqData.country || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Requested Product:</td>
            <td style="padding: 10px; color: #fbbf24; font-weight: bold;">${rfqData.product || 'N/A'}</td>
          </tr>
          <tr style="background-color: #1e293b;">
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Container Load:</td>
            <td style="padding: 10px; color: #ffffff;">${rfqData.quantity} x ${rfqData.unit || 'Container'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Incoterms:</td>
            <td style="padding: 10px; color: #ffffff;">${rfqData.incoterms || 'FOB / CIF'}</td>
          </tr>
          <tr style="background-color: #1e293b;">
            <td style="padding: 10px; color: #94a3b8; font-weight: bold;">Destination Port:</td>
            <td style="padding: 10px; color: #ffffff;">${rfqData.destinationPort || 'N/A'}</td>
          </tr>
        </table>

        ${rfqData.additionalNotes ? `
          <div style="background-color: #1e293b; padding: 14px; border-radius: 8px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
            <strong style="color: #fbbf24; display: block; margin-bottom: 6px; font-size: 13px;">ADDITIONAL PROCUREMENT NOTES:</strong>
            <p style="color: #cbd5e1; margin: 0; font-size: 13px; line-height: 1.5;">${rfqData.additionalNotes}</p>
          </div>
        ` : ''}

        <div style="text-align: center; border-t: 1px solid #334155; padding-top: 14px; font-size: 11px; color: #64748b;">
          Submitted via Ceylon Gold Commercial Export Portal • ${new Date().toLocaleString()}
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Ceylon Gold Export Portal" <${smtpUser}>`,
      to: adminEmail,
      subject: `🚨 New RFQ: ${rfqData.companyName || 'Visitor Inquiry'} (${rfqData.product || 'Produce Quote'})`,
      html: htmlContent
    });

    console.log(`[Email Service Success] RFQ email sent to ${adminEmail}. MessageID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Email Service Error] Failed to send RFQ email: ${error.message}`);
    return { success: false, error: error.message };
  }
};

module.exports = { sendRFQEmail };
