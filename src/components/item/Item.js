/* 
Importaciones
*/

//Modulos
//Estilos
import './Item.css'
import { Link } from 'react-router-dom'
//Componentes
import ItemCount from '../itemCount/ItemCount.js'
//Core

/* 
Logica
*/
const Item = (props) => {  //Funcion constructora

    //Crear array de objetos
    
    const {titulo,categoria,stock,descripcion,precio,id} = props.data

    return(
        <div>
           <p> {categoria} </p>
           <p> {titulo} </p>
           <p> {descripcion} </p>
           <p> {precio} </p>
           <Link to={`/producto/${id}`}> Ver Detalle del producto</Link>
           <ItemCount stock = {stock}> </ItemCount>
        </div>

    )

}

/* 
Exportación
*/

export default Item