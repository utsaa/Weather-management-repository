const express = require('express');
require('dotenv').config();
const weatherRoutes = require('./routes/weathers');
const { initModels } = require('./models');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;

initModels().then(()=>
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
