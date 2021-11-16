import { Table, Button } from "reactstrap";
import Swal from 'sweetalert2';

const List = ({listas, setListas}) => {

    const deleteElement = (e, i) => {
        Swal.fire({
            title: 'Seguro',
            text: 'Está seguro que desea eliminar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then(resp => {
            console.log('DEL DELETE', resp, i)
            if(resp.isConfirmed){
                setListas(listas.filter((e, index) => index != i))
            }
        })
    }

    const editarElement = (e, i) => {
        console.log(listas)
    }

    return <Table>
                <thead>
                    <tr>
                        <th>Lista de Tareas</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listas.map((a, i)=> <tr style={{backgroundColor: a.listas}} key={i}>
                        <td>{a.tarea}</td>
                        <td>{a.confirmar}</td>
                        <td><Button color="danger" type="button" style={{marginLeft:'20px'}} onClick={(e) => deleteElement(e, i)} >Eliminar</Button></td>
                    </tr>)}
                </tbody>
            </Table>
}

export default List;