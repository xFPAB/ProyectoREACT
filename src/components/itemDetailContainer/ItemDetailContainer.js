/* 
Importaciones
*/

//Modulos
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../jsons/productos.json'
//Estilos
import './ItemDetailContainer.css'          
//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
//Core
/* 
Logica
*/
const ItemDetailContainer = () => {  //Funcion constructora

    const obtenerProducto = (id)=>{
        return new Promise((resolve) => {
            const productoFiltrado = data.find(el => el.id === parseInt(id))
            //Simulamos una demora
            setTimeout(() => {
                resolve(productoFiltrado);
            },2000)
            })
        }
    
    const [producto,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const{productoId} = useParams()

    useEffect(()=>{
        obtenerProducto(productoId)
        .then(item=>setProductos(item)
    )
    .finally(()=>{
        setLoading(false)
    })
    },[productoId])

    if(loading){
        return (
            <h2>Cargando..</h2>
        )
    }
    else return(
        <div>
        <ItemDetail {...producto}/>
        </div>

    )

}

/* 
Exportación
*/

export default ItemDetailContainer