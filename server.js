const express = require('express')
const cors = require('cors')
const morgan =  require('morgan')
const nodemailer = require("nodemailer");
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/mail', (req,res,next) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.CLIENT,
            clientSecret: process.env.SECRET,
            refreshToken: process.env.REFRESH,
            accessToken: process.env.ACCESS
        }
       });
    let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: req.body.subject,
    text: req.body.message
    };

    transporter.sendMail(mailOptions, function (err) {
        if(err){
            console.log(err);
            res.status(400).send(err)
        } else {
            console.log('Email Sent');
            res.status(200).send('Email Sent')
        }
    })
    
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