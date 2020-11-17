const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Index route
app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.use('/gigs', require('./routes/module'));
app.use('/submodule', require('./routes/submodule'));
app.use('/usergroup', require('./routes/usergroup'));
app.use('/mapping',require('./routes/usergroupmapping'))
app.use('/page',require('./routes/pages'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
