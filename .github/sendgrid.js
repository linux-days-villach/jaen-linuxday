#! /usr/bin/env node

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: '',
  from: '',
  subject: `${process.env.SUBJECT}`,
  text: 'Hello plain world!',
  html: `
    <h1>Kundenanfrage</h1> 
    <p><b>Projekt:</b> ${process.env.PROJECT_LINK}</p>
    <p><b>Kunde:</b> ${process.env.FIRST_NAME} ${process.env.LAST_NAME}</p> 
    <p><b>Kontakt E-Mail:</b> ${process.env.EMAIL}</p> 
    <p><b>Kontakt Telefon-Nr.:</b> ${process.env.TELEPHONE}</p> 
    <p><b>Nachricht:</b></p>
    <p>${process.env.MESSAGE}</p>`
}

sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()))
