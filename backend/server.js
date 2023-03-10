const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3500

//middleware
app.use(express.json());
app.use(cors());

//initiate mysqli connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

// get reports from database (report route)
app.get('/reports', (req, res) => {
    const selectQuery = "SELECT * FROM recode"
    conn.query(selectQuery, (err, result) => {
        if (err) {
            //console.log(err)
            res.send("Error retrieving data")
        }
        res.send(result)
    })
});

// get reports from users (data post route)
app.post('/data', (req, res) => {
    //console.log(req.body)
    conn.connect((err) => {
        if (err) {
            //console.log(err)
            console.log("Connection error")
        }
        console.log("Databse Connection established")
    })


    const jsondata = [
        req.body.runnerName,
        req.body.runnerRadius,
        req.body.runnerStartTime,
        req.body.runnerEndTime,
        req.body.runnerlapCount
    ]

    //console.log(jsondata)
    const mySQLquery = "INSERT INTO `recode`(`name`, `radius`, `start_time`, `end_time`, `no_of_laps`) VALUES (?)"
    conn.query(mySQLquery, [jsondata], (err) => {
        if (err) {
            //console.log(err)
            res.send("Error inserting data")
        }
        res.send("Data inserted successfully");
        console.log("Data inserted successfully")
    })

})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
