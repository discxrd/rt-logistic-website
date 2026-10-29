require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const {
    requestType,
    name,
    email,
    phone,
    company,
    cargoType,
    destination,
    comments,
  } = req.body;



  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: '"Lumar Group Website" <info@lumargroup.lv>',
      to: process.env.EMAIL_LOGIN,
      subject: 'Jauns ziņojums no tīmekļa vietnes formas',
      html: `
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #f7f7f7; padding: 20px; border-bottom: 1px solid #ddd;">
    <h2 style="margin: 0; color: #333; font-size: 24px;">Jauns pieprasījums no vietnes</h2>
  </div>
  <div style="padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Pieprasījuma veids:</strong><br>
          ${requestType}
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Vārds:</strong><br>
          ${name}
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">E-pasts:</strong><br>
          <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Tālrunis:</strong><br>
          <a href="tel:${phone}" style="color: #007bff; text-decoration: none;">${phone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Uzņēmums:</strong><br>
          ${company}
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Kravas veids:</strong><br>
          ${cargoType}
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 15px;">
          <strong style="color: #555;">Galamērķis:</strong><br>
          ${destination}
        </td>
      </tr>
      <tr>
        <td style="border-top: 1px solid #eee; padding-top: 15px;">
          <strong style="color: #555;">Komentārs:</strong><br>
          <p style="margin: 5px 0 0; white-space: pre-wrap;">${comments}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="background-color: #f7f7f7; padding: 15px 20px; text-align: center; color: #777; font-size: 12px;">
    <p style="margin: 0;">Šis e-pasts tika nosūtīts no jūsu vietnes kontaktformas.</p>
  </div>
</div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Ошибка при отправке письма:', err);
    res.status(500).json({ message: 'Internal error' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});