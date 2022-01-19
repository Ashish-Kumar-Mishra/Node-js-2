const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index1.pug', params);
})
app.post('/', (req, res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite=`the name of client is ${name},${age}years old ,${gender},residing at${address} .More about you ${more}`

    fs.writeFileSync("output.txt",outputToWrite);
    const params = {'message': 'Your form submitted successfully'};
    res.status(200).render('index1.pug', params);
    
});
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


