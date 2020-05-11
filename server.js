const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/transactions', require('./routes/transactions'));

app.listen(port, () => console.log(`Server started on ${port}`));