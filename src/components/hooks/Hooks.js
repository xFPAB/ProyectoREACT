/* 
Importaciones
*/

//Modulos
import {useState , useEffect} from 'react'
//Estilos
import './Hooks.css'
//Componentes
//Core

/* 
Logica
*/
const Hooks = () => {  //Funcion constructora

    //Hooks de estado
    // Constructor [ESTADO, Funcion que actualiza el estado ] = Inicializacion del Estado (el valor por default)
    const [contador,setContador] = useState(0)
    const [newDate, setNewDate] = useState("")

    //Hooks de efectos
    //UseEffect (funcion (inicio , fin)) , cantidad de instancias
    useEffect(()=> {
        console.log("Componente iniciando")
    })

    const newDateNow = () => {
        const date = new Date()
        setNewDate(date.getSeconds())
        console.log(newDate);
    }


    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return(
        <p>
            <button onClick={sumar}>Sumar</button>
            <p>{contador}</p>
            <button onClick={restar}>Restar</button>
            <button onClick={newDateNow}>Date</button>
            <p>{newDate}</p>
        </p>
    )

}

/* 
Exportación
*/

export default Hooks

//ejecuta la vista
// inicializa el componente
//se renderiza
//cambio el estado
//se renderiza
//cambio el estado
//se renderiza
//cambio de componente
//componente se destruye