import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="m-5">
            <h1>Runners</h1>
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
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
