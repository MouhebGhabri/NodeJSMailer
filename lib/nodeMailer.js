"use strict";
const nodemailer = require("nodemailer");
//const fs = require("fs");
// async..await is not allowed in global scope, must use a wrapper
const nodeMailer = async () => { //to, subject, html
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        auth: {
            user: "example@gmail.com",
            pass: "password of smtp",

        },
    });

    const message = {
        from: '"mouheb" example@gmail.com', // sender address
        to: 'example@gmail.com', // list of receivers
        subject: "Subject", // Subject line
        html: "<h1>Hello</h1>", // html body
    };

    // send mail with defined transport object
    await transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("mail sent:" + info.response);
        }
    });
};

module.exports = {
    nodeMailer,
};