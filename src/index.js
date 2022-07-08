//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//define app
const app = express();

//temp fake db
const profiles = [
  {
    devName: "bob",
    role: "Software Developer",
    languages: ["JavaScript", "NodeJS"]
  }
]

//Middleware!
//security
app.use(helmet());
//parse json body -> json obj
app.use(bodyParser.json())
//cors
app.use(cors());
//http logging
app.use(morgan('combined'));

//define endpoint
app.get('/', (req, res) => {
  res.send(profiles);
})

//start server
app.listen(3001, () => {
  console.log("Server listening on port 3001")
})
