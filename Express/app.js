const express = require("express")
const path = require("path")
// const fs = require("fs")
const app = express()
const port = 3000
var con = require('./demo_db_connection');




//serving static file
// app.use('/1', express.static('static')) //the first arguement is the false name with which it will appear on browswe 
// and the second parameter is actual directory from where it is coming


app.use('/static', express.static(path.join(__dirname, 'Static'))) 
// simply helps to bring form data to express
app.use(express.urlencoded());

// set the template engine as pug
app.set("view engine", 'pug')

//set the views directory
app.set('views', './views')

// pug is given different url and express.static is given different url
// app.get('/2', (req, res) => {
// 	res.render('demo', { title: 'Hey Nipun', message: 'You will become an IAS officer soon' })
// })

app.get('/', (req, res) => {
	res.status(200).render('demo2');
})

app.post('/submit', (req, res) => {
	//  console.log(req.body)
	var name = req.body.name
	var age = req.body.age
	var gender = req.body.gender
	var address = req.body.address
	var more = req.body.more 
	res.status(200).send('demo2');

	var sql = "INSERT INTO gym  VALUES ('"+ name +"','"+ age +"','"+ gender +"','"+ address +"','"+ more +"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

	// let outputToWrite = `	Client Name = ${name}
	// Age = ${age}
	// Gender = ${gender}
	// Address = ${address}
	// More about Person = ${more}`

	// fs.writeFileSync("output.txt",outputToWrite)

	// console.log(outputToWrite)
})


app.listen(port, () => {
	console.log(`This is port ${port}`)
});