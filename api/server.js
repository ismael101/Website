const express = require('express')
const email = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors())

app.use('/email', email)

app.use((req,res,next) => {
	res.status(404).send("Not Found")
})
app.use((err,req,res,next) => {
	console.error(err.stack)
	res.status(500).send("Server Error")
})
app.listen(process.env.PORT,() => {  
    console.log(`Server running on port ${process.env.PORT}`)
})
