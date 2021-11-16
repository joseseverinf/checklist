import { AiOutlineCheck } from 'react-icons/ai';

const View = (props) => {
    return <ul>
        {props.inputs.tarea && <li>Tarea: {props.inputs.tarea} </li>}
        {props.inputs.confirmar && <li>Confirmar: <AiOutlineCheck /></li>}
    </ul>
}

export default View;