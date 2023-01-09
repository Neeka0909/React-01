//React
import { useForm } from 'react-hook-form'

import axios from 'axios'

//React-Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'



function RunnersForm() {
    //Form Validation hook
    const { register, setError, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched", reValidateMode: "onSubmit" });
    //max radius set to 15 meters
    const maxRadius = 15

    //data validate function
    const formValidate = (data) => {
        let formData = {
            runnerName: data.name,
            runnerRadius: data.radius,
            runnerStartTime: data.startTime,
            runnerEndTime: data.endTime,
            runnerlapCount: data.laps
        }
        let radius = data.radius
        if (radius > maxRadius) {
            console.log("Radius is greater than 15")
            setError("radius", { message: "Runner radius should be less than " + maxRadius }) //maxradius validation
            return
        }

        //data send to server
        const SendData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/data', formData)
                console.log(response)
                alert("Runners Details Added Successfully")
                window.location.reload()
            } catch (error) {
                console.log(error)
                alert("Error Adding Runners Details")

            }
        }
        SendData()
        console.log(formData)
    }

    return (
        // Runners data input form
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
                        <Form.Text className="text-danger">
                            {errors.name.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Radius (m)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Radius"
                        max={15}
                        min={1}

                        {...register("radius", { required: "Please Enter a circle radius." })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please select a radius grater than 15
                    </Form.Control.Feedback>
                    {errors.radius && (
                        <Form.Text className="text-danger">
                            {errors.radius.message}
                        </Form.Text>
                    )}

                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Start Time(In hh:mm:ss format)</Form.Label>
                    <Form.Control
                        type="time"
                        placeholder="Enter Start Time "
                        step={1}
                        {...register("startTime", { required: "Please Enter a Start Time." })}
                    />
                    {errors.startTime && (
                        <Form.Text className="text-danger">
                            {errors.startTime.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label>End Time(In hh:mm format)</Form.Label>
                    <Form.Control
                        type="time"
                        placeholder="Enter Start Time "
                        step={1}
                        {...register("endTime", { required: "Please Enter a End Time." })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter a valid End Time. your end time should be greater than your start time.
                    </Form.Control.Feedback>
                    {errors.endTime && (
                        <Form.Text className="text-danger">
                            {errors.endTime.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom04">
                    <Form.Label>Number of laps</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Number of Laps "
                        min={1}
                        {...register("laps", { required: "Please Enter a Nunmer of Lap Counts." })}
                    />
                    {errors.laps && (
                        <Form.Text className="text-danger">
                            {errors.laps.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit" className="justify-content-left">
                    Submit
                </Button>

            </Form>
        </Col>
    )
}

export default RunnersForm