const express = require('express')
const sendMail = require('@sendgrid/mail')
sendMail.setApiKey(process.env.API_KEY)

const router = express.Router()

router.post('/', (req,res,next) => {
    try{
        const message = {
            to:process.env.EMAIL,
            from: req.body.from,
            subject: ` ${req.body.name}--${req.body.subject}`,
            text:req.body.message
        }
        sendMail.send(message)
        res.status(200).json({message:'Email Delivered'})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err})
    }

})

module.exports = router