const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const waterRoutes = require('./routes/waterRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use('/api/water', waterRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
