const express = require('express');
const app = express();
const port = process.env.PORT || 3500

const conn = require('./Controller/Connection');

app.get('/reports', (req, res) => {
    res.send("hi");
}
);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
