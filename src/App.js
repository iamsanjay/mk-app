//import logo from './assets/images/icon.png';
import './App.css';
import TextGenerator from './Components/TextGenerator.jsx';
import {Container, Row, Col, Image} from "react-bootstrap";
import Background from './assets/images/animallogic_back.jpg';
function App() {
  return (
    <Container>
      <Row>
        <Image src={Background}/>
      </Row>
      <Row>
        <TextGenerator />
      </Row>
    </Container>
  );
}

export default App;
