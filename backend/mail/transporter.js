import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service:'Mail.ru',
  auth:{
    user:process.env.MY_EMAIL,
    pass:process.env.MY_PASSWORD
  }
})

export default transporter;