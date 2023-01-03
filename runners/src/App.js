//Site Css
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//React
import { useForm } from 'react-hook-form';

//React-Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


function App() {
  //Form Validation hook
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched", reValidateMode: "onSubmit" });

  const formValidate = (data) => {
    console.log(data);
    let formData = {
      runnerName: data.name,
      runnerRadius: data.radius,
      runnerStartTime: data.startTime,
      runnerEndTime: data.endTime,
      runnerlapCount: data.laps
    }
    console.log(formData);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form className="p-3" noValidate onSubmit={handleSubmit(formValidate)} >
            <h1>Runners</h1>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Runner Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Runner Name"
                {...register("name", { required: "Please Enter a Runner Name." })}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Radius (m)</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Radius"
                {...register("radius", { required: "Please Enter a circle radius." })}
              />
              {errors.radius && (
                <Form.Control.Feedback type="invalid">
                  {errors.radius.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Start Time(In hh:mm:ss format)</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Start Time "
                {...register("startTime", { required: "Please Enter a Start Time." })}
              />
              {errors.startTime && (
                <Form.Control.Feedback type="invalid">
                  {errors.startTime.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>End Time(In hh:mm format)</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Start Time "
                {...register("endTime", { required: "Please Enter a End Time." })}
              />
              {errors.endTime && (
                <Form.Control.Feedback type="invalid">
                  {errors.endTime.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>Number of laps</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Start Time "
                {...register("laps", { required: "Please Enter a Nunmer of Lap Counts." })}
              />
              {errors.laps && (
                <Form.Control.Feedback type="invalid">
                  {errors.laps.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="justify-content-left">
              Submit
            </Button>

          </Form>
        </Col>
        <Col>
          <Row>
            <Form className="p-3">
              <h2>Runners</h2>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Set Play Ground Radius</Form.Label>
                <Form.Control type="number" placeholder="Enter Ground Radius" />
              </Form.Group>

              <Button variant="primary" type="submit" className="float-right">
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
      </Row >
    </Container >
  );
}

export default App
