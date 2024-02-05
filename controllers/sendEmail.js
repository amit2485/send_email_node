const nodemailer = require("nodemailer")


const sendEmail = async(req,res) => {

    try{
        let testAccount = await nodemailer.createTestAccount()

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'samanta97@ethereal.email',
                pass: 'kdxzjQAugDYT84Sk3K'
            }
        });

    let info = await transporter.sendMail({
        from:'"Amit Das"<d.amit.24@gmail.com>',
        to:'cars@example.com',
        subject:"Hello",
        html:'<h2>Sending emails with Node js first</h2>'

    })
    res.json(info)
    }catch(error){
        console.log(error);
    }
    
   
}

module.exports = sendEmail;