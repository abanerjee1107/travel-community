const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/member', require('./routes/memberRoutes'));
app.use('/api/message', require('./routes/messagingRoutes'));
app.use('/api/trip', require('./routes/tripRoutes'));

// Connect to database
db.connect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
