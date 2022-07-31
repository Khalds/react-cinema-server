const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

async function mail(from, to, subject, html) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "magomed.arkhiyev@bk.ru",
      pass: "DDLx9AKeirjxDKgLpkQX",
    },
  });

  let info = await transporter.sendMail({
    from: "magomed.arkhiyev@bk.ru",
    to,
    subject,
    html,
    attachments: [
      {
        filename: "ticket",
        href: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-ticket-design-template-fd0090203df014a14c107ad92884662a_screen.jpg?ts=1561415928",
      },
    ],
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview UPR: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = mail;
