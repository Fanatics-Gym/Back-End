const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (email) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Fanatics Football",
    text:
      "Thank you for applying to the Fanatics Football League! We will review your application and get back to you shortly! We have included your information submited as an attachment in a PDF File. ",
  };

  sgMail.send(msg).catch((err) => {
    console.log(err);
  });
};
