/* 
Importaciones
*/

//Modulos
//Estilos
import './CardWidget.css'
//Componentes
//Core

/* 
Logica
*/
const CardWidget = (props) => {  //Funcion constructora

    return(
        <a className ='item' href=''>
            ICONO CARRITO {props.cantidad}
        </a>
    )

}

/* 
Exportación
*/

export default CardWidget