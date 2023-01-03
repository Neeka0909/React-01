//Site Css
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


//React-Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

//import components
import RunnersForm from './views/runnerForm'
import Report from './views/report'

function App() {


  return (
    <Container>
      <Row>
        <RunnersForm />
      </Row>
      <Row>
        <Report />
      </Row >
    </Container >
  );
}

export default App
