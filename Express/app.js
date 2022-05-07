const express = require("express")
const path = require("path")
const app = express()
const port = 80

//serving static file
app.use('/static2', express.static('static')) //the first arguement is the false name with which it will appear on browswe 
// and the second parameter is actual directory from where it is coming


// set the template engine as pug
app.set("view engine", 'pug')

//set the views directory
app.set('views', './views')



app.listen(port, () => {
	console.log(`This is port ${port}`)
});