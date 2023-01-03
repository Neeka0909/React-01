import React, { useState, useEffect } from 'react'
import axios from 'axios'

//React-Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const PI = 3.14

function Report() {

    //data append on report page
    const [recode, setrecode] = useState()
    useEffect(() => {
        axios.get("http://localhost:3500/reports")
            .then((res) => {
                console.log(res.data)
                setrecode(res.data)
            })
            .catch((err) => console.log(err))


    }, [])

    //hh:mm:ss time difference 
    const timeDiffernce = (timeReading1, timeReading2) => {
        var time1 = timeReading1.split(":")
        var time2 = timeReading2.split(":")
        var hour1 = parseInt(time1[0])
        var hour2 = parseInt(time2[0])
        var min1 = parseInt(time1[1])
        var min2 = parseInt(time2[1])
        var sec1 = parseInt(time1[2])
        var sec2 = parseInt(time2[2])
        var hour = hour2 - hour1
        var min = min2 - min1
        var sec = sec2 - sec1
        if (sec < 0) {
            sec = sec + 60
            min = min - 1
        }
        if (min < 0) {
            min = min + 60
            hour = hour - 1
        }
        if (hour < 0) {
            hour = hour + 24
        }
        return hour + min / 60 + sec / 3600
    }

    return (
        <Col>
            {/* <Row>
                <Form className="p-3">
                    <h2>Runners Ground </h2>
                    <Form.Group className="mb-3 p-1" controlId="validationCustom01">
                        <Form.Label>Set Play Ground Radius</Form.Label>
                        <Form.Control type="number" placeholder="Enter Ground Radius" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="m-1">
                        Save
                    </Button>
                </Form>
            </Row> */}
            {/* report table */}
            <Row>
                <Container className="p-3">
                    <h2>Report</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Runner</th>
                                <th>Speed (kmph)</th>
                                <th>Radius</th>
                                <th>Start time</th>
                                <th>End Time</th>
                                <th>Durations</th>
                                <th>Number of Laps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(recode) && recode.map((item) => {
                                    var lenght = 2 * PI * item.radius * item.no_of_laps
                                    var timeDuration = timeDiffernce(item.start_time, item.end_time).toFixed(2)
                                    var speed = (lenght / timeDuration).toFixed(2)

                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{speed}</td>
                                            <td>{item.radius}</td>
                                            <td>{item.start_time}</td>
                                            <td>{item.end_time}</td>
                                            <td>{timeDuration}</td>
                                            <td>{item.no_of_laps}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </Row>

        </Col>
    )
}

export default Report