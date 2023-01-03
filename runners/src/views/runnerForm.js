//React
import { useForm } from 'react-hook-form'
import axios from 'axios'

//React-Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


function RunnersForm() {
    //Form Validation hook
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched", reValidateMode: "onSubmit" });

    const formValidate = (data) => {
        let formData = {
            runnerName: data.name,
            runnerRadius: data.radius,
            runnerStartTime: data.startTime,
            runnerEndTime: data.endTime,
            runnerlapCount: data.laps
        }
        //time validation
        //calculate time difference in hh:mm:ss format
        let time1 = data.startTime
        let time2 = data.endTime
        
        const timeDiff = (time1, time2) => {
            let time1Arr = time1.split(":")
            let time2Arr = time2.split(":")
            let time1Sec = parseInt(time1Arr[0]) * 3600 + parseInt(time1Arr[1]) * 60 + parseInt(time1Arr[2])
            let time2Sec = parseInt(time2Arr[0]) * 3600 + parseInt(time2Arr[1]) * 60 + parseInt(time2Arr[2])
            let timeDiff = time2Sec - time1Sec
            let timeDiffHr = Math.floor(timeDiff / 3600)
            let timeDiffMin = Math.floor((timeDiff - timeDiffHr * 3600) / 60)
            let timeDiffSec = timeDiff - timeDiffHr * 3600 - timeDiffMin * 60
            let timeDiffStr = timeDiffHr + ":" + timeDiffMin + ":" + timeDiffSec
            return timeDiffStr
        }


        const SendData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/data', formData)
                console.log(response)
                alert("Runners Details Added Successfully")
                //window.location.reload()
            } catch (error) {
                console.log(error)
                alert("Error Adding Runners Details")

            }
        }
        SendData()
        console.log(formData)

    }


    return (
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
                        {...register("radius", { required: "Please Enter a circle radius." })}
                    />
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