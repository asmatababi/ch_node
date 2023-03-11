const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", 
    pass: "your-email-password", 
  },
});


const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient-email@example.com", 
  subject: "Test Email",
  text: "Hello World!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});