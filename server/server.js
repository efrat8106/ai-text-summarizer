require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const summariesRoutes = require('./routes/summaries');

app.use('/api', summariesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});