const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mysql = require('mysql');
const http = require('http');
const socketIo = require('socket.io');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const helmet = require('helmet'); // Add helmet for security headers

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet()); // Add helmet middleware for security headers

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

// Socket.io connection for notifications and chat
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Example notification event
  socket.on('sendNotification', (notification) => {
    io.emit('receiveNotification', notification); // Broadcast notification to all clients
  });

  // Example chat message event
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast message to all clients
  });
});

// Google OAuth Strategy setup (if needed)
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Example logic to handle Google OAuth
    /*
    User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            const newUser = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            });
            newUser.save((err) => {
                if (err) console.error(err);
                return done(null, newUser);
            });
        } else {
            return done(null, user);
        }
    });
    */
}));

// Routes for OAuth and API
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect after successful authentication
    });

// Example API routes (replace with your actual routes)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/member', require('./routes/memberRoutes'));
app.use('/api/message', require('./routes/messagingRoutes'));
app.use('/api/trip', require('./routes/tripRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
