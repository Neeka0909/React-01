const express = require('express')


const app = express();
const port = process.env.PORT || 3500

const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});



//middleware
app.use(express.json());

app.get('/reports', (req, res) => {
    conn.connect((err) => {
        if (err) throw err
        console.log("MySql Database Connected!")

        const selectQuery = "SELECT * FROM recode"
        conn.query(selectQuery, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log("Data recived successfully : " + result)
        })
    });
})
// get reports from form
app.post('/data', (req, res) => {
    console.log(req.body)


    const jsondata = [
        req.body.runnerName,
        req.body.runnerSpeed,
        req.body.runnerRadius,
        req.body.runnerStartTime,
        req.body.runnerEndTime,
        req.body.runnerlapCount
    ]

    console.log(jsondata)
    conn.connect((err) => {
        if (err) throw err
        console.log("MySql Database Connected!")

        const mySQLquery = "INSERT INTO `recode`(`name`, `speed`, `radius`, `start_time`, `end_time`, `no_of_laps`) VALUES (?)"
        conn.query(mySQLquery, [jsondata], (err) => {
            if (err) throw err
            res.send("Data inserted successfully");
            console.log("Data inserted successfully")
        })

    })

})

app.post('/radius', (req, res) => {
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
