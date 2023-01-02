import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="m-5">
            <h1 className="mb-">Runners</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Runner Name</Form.Label>
              <Form.Control type="text" placeholder="Enter circle Radius" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Radius (m)</Form.Label>
              <Form.Control type="Text" placeholder="Enter Radius" />
              <Form.Text className="text-muted">
                Radius should be enterd in meters
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Start Time(In hh:mm:ss format)</Form.Label>
              <Form.Control type="number" placeholder="Enter Start Time " />
              <Form.Text className="text-muted">
                Start Time should be enterd in hh:mm:ss format
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>End Time(In hh:mm:ss format)</Form.Label>
              <Form.Control type="number" placeholder="Enter Start Time " />
              <Form.Text className="text-muted">
                End Time should be enterd in hh:mm:ss format
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Number of laps</Form.Label>
              <Form.Control type="number" placeholder="Enter Start Time " />
            </Form.Group>

            <Button variant="primary" type="submit" className="justify-content-left">
              Submit
            </Button>

          </Form>
        </Col>
        <Col>
          <Row>
            <Form className="mt-5">
              <h2>Runners</h2>
              <Form.Group className="mb-3" >
                <Form.Label>Set Play Ground Radius</Form.Label>
                <Form.Control type="number" placeholder="Enter Ground Radius" />
              </Form.Group>

              <Button variant="primary" type="submit" className="float-right">
                Save
              </Button>
            </Form>
          </Row>
          <Row>
            <Container className="mt-5">
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
      </Row >
    </Container >
  );
}

export default App;
