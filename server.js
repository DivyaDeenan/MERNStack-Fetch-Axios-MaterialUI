const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//const path = require('path');
const connectDB = require('./config/db');

const cors = require('cors');


// Connect to database
connectDB();
const app = express();
// Express body parser
//app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

// Body parser
app.use(express());

// Enable cors
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.use(bodyParser.json());


// Set static folder
//app.use(express.static(path.join(__dirname, 'client/public')));

// Routes
app.use('/api/v1/profiles', require('./routes/profiles'));


app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
 

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

const PORT =3000;

app.listen(PORT, () =>
  console.log(`Server running  on port ${PORT}`)
);
