const sgMail = require("@sendgrid/mail");
const PDF = require("./applicantInfoPDF");
const fs = require("fs");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  Applied,
  Approved,
  Rejected,
};

function Applied({ info }) {
  // attachment = fs.readFileSync(PDF.ApplicantInfo(info)).toString("base64");
  console.log(info);
  const msg = {
    to: info.email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Fanatics Football",
    text:
      "Thank you for applying to the Fanatics Football League! We will review your application and get back to you shortly! We have included your information submited as an attachment in a PDF File. ",
    // attachments: [
    //   {
    //     content: attachment,
    //     filename: `${info.first_name} ${info.last_name} Info.pdf`,
    //     type: "application/pdf",
    //     disposition: "attachment",
    //   },
    // ],
  };

  sgMail.send(msg).catch((err) => {
    console.log(err);
  });
}

function Approved(email, applID) {
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Fanatics Football Accepted",
    text: `You have been approved for the Fanatics Football League. Click the button to create an account and choose gear`,
    html: `<a href='http://localhost:3000/new-p-signUp/${applID}'>Click Here</a>`,
  };
  sgMail.send(msg).catch((err) => {
    console.log(err);
  });
}

function Rejected(email) {
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Fanatics Football Rejected",
    text: "You have been Rejected from the Fanatics Football League.",
  };

  sgMail.send(msg).catch((err) => {
    console.log(err);
  });
}
