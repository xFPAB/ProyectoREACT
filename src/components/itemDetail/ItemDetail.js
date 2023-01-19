/* 
Importaciones
*/

//Modulos
//Estilos
import './ItemDetail.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'

//Core

/* 
Logica
*/
const ItemDetail = ({titulo,categoria,descripcion,precio,stock,img}) => {  //Funcion constructora



        return(
            <article>
            <p> {categoria} </p>
            <p> {titulo} </p>
            <p> {descripcion} </p>
            <p> {precio} </p>
            <ItemCount stock = {stock}> </ItemCount>
            <img src={img} height='100px' width='100px'></img>
            </article>
            )


}

/* 
Exportación
*/

export default ItemDetail