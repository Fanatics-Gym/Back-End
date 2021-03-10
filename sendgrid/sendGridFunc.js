const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  Applied,
  Approved,
};

const Applied = (email) => {
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

const Approved = (email) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Fanatics Football",
    text:
      "You have been approved for the Fanatics Football League. Follow this link to choose your gear size",
  };
  sgMail.send(msg).catch((err) => {
    console.log(err);
  });
};
