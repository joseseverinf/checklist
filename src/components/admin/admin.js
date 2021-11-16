import { useState } from "react"
import { Container, Row, Col } from "reactstrap";
import Checklist from "./form";
import View from "./view";
import List from "./list";

const initialState = {
    tarea: '',
    confirmar: false,
}



const Admin = (props) => {

    const [listas, setListas] = useState([]);
    const [inputs, setInputs] = useState(initialState); 

    return <Container>
            <Row>
                <Col xs={6}>
                    <Checklist inputs={inputs} setInputs={setInputs} initialState={initialState} listas={listas} setListas={setListas}/>
                </Col>
                <Col xs={6}>
                    <View inputs={inputs}/>
                </Col>
                <Col xs={6}>
                    {listas && listas.length > 0 && <List setListas={setListas} listas={listas}/>}
                </Col>
            </Row>
    </Container>
}

export default Admin; 