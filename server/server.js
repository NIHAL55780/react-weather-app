const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Exit the process with an error code
});

const weatherRoutes = require('./routes/weather');
app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
