const nodemailer=require('nodemailer')
require('dotenv').config();

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD,

    },

});

let mailOptions={
    from:process.env.EMAIL_USER,
    to:'vinishavini321@gmail.com',
    subject:'NODEMAILER',
    text:'How to send email in Nodejs using Nodemailer'
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("Error occured"+error);
    }
    else{
        console.log("email sent successfully to:" +mailOptions.to,info.response);
    }
})