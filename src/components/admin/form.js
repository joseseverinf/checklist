import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import '../../App.css';

const Checklist = ({inputs, setInputs, initialState, listas, setListas}) => {

    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const actualizarFormularioChecked = (e) => {
        const {id, checked} = e.target;
        setInputs({
            ...inputs,
            [id]: checked
        });
        if(id === 'nuevo'){
            setInputs({
                ...inputs,
                usado: false
            });
        } else if(id === 'usado'){
            setInputs({
                ...inputs,
                nuevo: false
        });
    }
}
    const agregarElemento = (e) => {
        e.preventDefault();
        setListas([
            ...listas,
            inputs
        ]);
        setInputs(initialState);
    }
    
   
   
    return <Form onSubmit={agregarElemento}>
            
                <Row>
                    <h1>Lista de Tareas</h1>
                    <Col xs={12}>
                        <FormGroup>
                            <Label htmlFor="modelo">Lista de Tareas</Label>
                            <Input type="text" id="tarea" name="tarea" required minLength="2"  maxLength="30" value={inputs.tarea} onChange={actualizarFormulario}/>
                        </FormGroup>
                    </Col>
                    
                    <Col xs={12}>
                        <FormGroup>
                            <Label htmlFor="confirmar">Confirmar</Label>
                            <Input className="space" type="checkbox" id="confirmar" name="confirmar" required checked={inputs.confirmar} onChange={actualizarFormularioChecked}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Button color="primary" type="submit">Agregar</Button>
                            
                        </FormGroup>
                    </Col>
                </Row>    
            </Form>
}

export default Checklist;