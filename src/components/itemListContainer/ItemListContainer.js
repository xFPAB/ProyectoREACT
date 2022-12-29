/* 
Importaciones
*/

//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
//Core

/* 
Logica
*/
const ItemListContainer = (props) => {  //Funcion constructora

    return(
        <div>
            <h1> Bienvenidos a LuzBianca Bazar! </h1>
            <p>
            Este es el componente contenedor ItemListContainer {props.greeting}
            </p>
        </div>
    )

}

/* 
Exportación
*/

export default ItemListContainer