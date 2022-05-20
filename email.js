const nodemailer = require('nodemailer')

const enviar = (to, subject, html) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mramirez.smartpos@gmail.com', // correo de envio
                pass: 'Bogota2022', // contraseña de envio
            },
        })

        const mailOptions = {
            from: 'mramirez.smartpos@gmail.com', // correo de envio
            to,
            subject,
            html,
        }
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) reject(err) // poner alert en caso de error 
            if (data) resolve(data)

        })
    })
}

module.exports = enviar