const mailer = require('nodemailer');

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"aagamshah111.am1@gmail.com",
            pass:"jyau yjgt jyxm tsii"
        }
    })

    const mailOptions = {
        from: 'aagamshah111.am1@gmail.com',
        to: to,
        subject: subject,
        text: text
        //html:"<h1>"+text+"</h1>"
    } 

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}
