/* 
Importaciones
*/

//Modulos
//Estilos
import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'
//Componentes
//Core

/* 
Logica
*/
const ItemDetail = (props) => {  //Funcion constructora

    const {nombre,categoria,precio,descripcion,stock} = props.data

    return(
        <div>
           <p> {categoria} </p>
           <p> {nombre} </p>
           <p> {descripcion} </p>
           <p> {precio} </p>
           <ItemCount stock = {stock}> </ItemCount>
        </div>

    )

}

/* 
Exportación
*/

export default ItemDetail