const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let urlInput = [] 

app.get('/test', function (req, res) {
    res.sendFile('dist/index.html')
})


// POST Route
app.post('/api', async function(req, res) {
    urlInput = req.body.url;
    const fullURL = `${baseURL}key=${apiKey}&url=${urlInput}&lang=en`
    const response = await fetch(fullURL)
    const allData = await response.json()
    console.log(allData)
    res.send(allData)
   
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})