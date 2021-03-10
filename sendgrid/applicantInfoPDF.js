const { jsPDF } = require("jspdf");

module.exports = {
  ApplicantInfo,
};

function ApplicantInfo(applicant) {
  const doc = new jsPDF();
  doc.text(10, 10, `First name: ${applicant.first_name}`);
  doc.text(20, 10, `Last name: ${applicant.last_name}`);
  doc.text(30, 10, `Email: ${applicant.email}`);
  doc.text(40, 10, `Phone Number: ${applicant.phone}`);
  doc.save(`${applicant.first_name} ${applicant.last_name} Info`);
}
