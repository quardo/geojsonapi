const express = require('express');
const app = express();
const cors = require('cors')
const GeoJson = require('./GeoJson/GeoJsonRoutes');
const {corsOptions} = require('./Common/config')
var http = require('http');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(cors(corsOptions));

let httpServer= http.createServer(app);

httpServer.listen(3000,()=>{
    console.log("listening");
});


app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

app.use('/GeoJson', GeoJson);