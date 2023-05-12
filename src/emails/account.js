const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY
// sgMail.setApiKey(sendgridAPIKey)
// const sendWelcomeEmail = (email, name) => {
//     console.log('hi')
//     sgMail.send({
//         to: email,
//         from: 'jadonaman471@gmail.com',
//         subject: 'hi sir thanks to join!',
//         text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
//     })
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }

// const sendCancelationEmail = (email, name) => {
//     console.log('dlete')
//     sgMail.send({
//         to: email,
//         from: 'aman.jadon_cs19@gla.ac.in',
//         subject: 'Sorry to see you go!',
//         text: `Goodbye, ${name}. I hope to see you back sometime soon.`
//     })
// }

// module.exports = {
//     sendWelcomeEmail,
//     sendCancelationEmail
// }