const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mysql = require('mysql');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const mysqlDb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'travel_community'
});

mysqlDb.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// MongoDB connection
mongoose.connect('mongodb://localhost/travel_community', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/member', require('./routes/memberRoutes'));
app.use('/api/message', require('./routes/messagingRoutes'));
app.use('/api/trip', require('./routes/tripRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
