//base dependencies imported
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const axios = require('axios');
//install body parser

// displays html code on the page
app.use(express.static('public'));
//-----------------------------------------------------------------------------------------------------
// middleware functions start
//CORS code (reconciling port:3000 and port:8080 security issues)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

//Body Parser code starts
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//Body Parser code ends
//middleware functions end
//----------------------------------------------------------------------------------------------------
//Outside API requests
//POST request that receives CO2 data based on meat consumption
// from an outside API using an axios GET request
app.post('/meat/:meattype', (req, res) => {
    const meatType = req.params.type;

    axios.get(`https://opendata.socrata.com/resource/8nz9-yn2p.json?food=${meatType}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})
//POST request that receives CO2 data based on flight distance
// from an external API and holds it until a fetch request retrieves it
// from a front-end
app.post('/travel/:origin/:destination', (req, res) => {
    const userOrigin = req.params.origin;
    const userArrival = req.params.destination;

   axios.get(`http://impact.brighterplanet.com/flights.json?origin_airport=${userOrigin}&destination_airport=${userArrival}&timeframe=2018-01-01%2F2019-01-01`)
        .then(response => {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})

//code to start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`The server is chugging along at ${PORT}`);
});