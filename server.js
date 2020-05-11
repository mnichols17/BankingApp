const express = require('express');

const app = express();
const port = process.env.PORT || 5000

app.get('/test', (req, res) => {
    res.json({msg: "Test Works"})
})

app.listen(port, () => console.log(`Server started on ${port}`))