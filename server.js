const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const profiles = require('./routes/profiles');

app.use('/api/profiles', profiles);

app.listen(port, () => console.log(`Server started on ${port}`));