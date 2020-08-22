// Code inspired from Code institute module 'Sending Emails Using EmailJS' & emailjs.com templates API - to send inquiry from the contact form to my email
function sendMail(contactForm) {
  emailjs
    .send("gmail", "contact_form_huzzah", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      Subject: contactForm.subject.value,
      Inquiry: contactForm.inquiry.value,
    })
    .then(
      function (response) {
        alert("Your message has been sent!", response);
      },
      function (error) {
        alert("Send email failed! Please try again.", error);
      }
    );
  contactForm.reset();
  return false; // To block from loading a new page
}
