//import { useForm } from 'react-hook-form'

//React-Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function Report() {
    return (
        <Col>
            <Row>
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
            </Row>
            <Row>
                <Container className="p-3">
                    <h2>Report</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Runner</th>
                                <th>Speed</th>
                                <th>Radius</th>
                                <th>Start time</th>
                                <th>End Time</th>
                                <th>Durations</th>
                                <th>Radius</th>
                                <th>Start time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10:30:30</td>
                                <td>4kmph</td>
                                <td>8.50.000</td>
                                <td>9.10.12</td>
                                <td>10.10.12</td>
                                <td>10:40:30</td>
                                <td>4kmph</td>
                                <td>8.50.000</td>
                            </tr>
                            <tr>
                                <td>10:30:30</td>
                                <td>4kmph</td>
                                <td>8.50.000</td>
                                <td>9.10.12</td>
                                <td>10.10.12</td>
                                <td>10:40:30</td>
                                <td>4kmph</td>
                                <td>8.50.000</td>
                            </tr>


                        </tbody>
                    </Table>
                </Container>
            </Row>

        </Col>
    )
}

export default Report