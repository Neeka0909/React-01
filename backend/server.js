const express = require('express');


const app = express();
const port = process.env.PORT || 3500

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});





//middleware

app.use(express.json());

app.get('/reports', (req, res) => {
    res.send("hi");
});

// get reports from form
app.post('/data', (req, res) => {
    console.log(req.body);
    const runnerName = req.body.runnerName;
    const runnerSpeed = req.body.runnerSpeed;
    const runnerRadius = req.body.runnerRadius;
    const runnerStartTime = req.body.runnerStartTime;
    const runnerEndTime = req.body.runnerEndTime;
    const runnerlapCount = req.body.runnerlapCount;
    const jsondata = [
        runnerName,
        runnerSpeed,
        runnerRadius,
        runnerStartTime,
        runnerEndTime,
        runnerlapCount
    ]

    console.log(jsondata);
    conn.connect((err) => {
        if (err) throw err;
        console.log("MySql Database Connected!");

        const mySQLquery = "INSERT INTO `recode`(`name`, `speed`, `radius`, `start_time`, `end_time`, `no_of_laps`) VALUES ('" + runnerName + "', '" + runnerSpeed + "', '" + runnerRadius + "', '" + runnerStartTime + "', '" + runnerEndTime + "', '" + runnerlapCount + "')";
        console.log(mySQLquery);
        conn.query(mySQLquery, [jsondata], (err) => {
            if (err) throw err;
            res.send("Data inserted successfully");
            console.log("Data inserted successfully");
        })

    });

})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
