const express = require('express')
const cors = require('cors')
const morgan =  require('morgan')
const nodemailer = require('nodemailer')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/mail', (req,res,next) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: process.env.EMAIL,
                   pass: process.env.PASS
               }
           });
           
        const mailOptions = {
            from: req.body.from, // sender address
            to: process.env.EMAIL,
            subject: req.body.subject,
            text:req.body.text
            };    
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(400).send(error)
            } else {
                res.status(200).send('Email Sent')
            }
            });
})

// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})


let server = app.listen(process.env.PORT || 4000, function() {
    console.log('app running on port', server.address().port)
})