/* 
Importaciones
*/

//Modulos

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'
import { useState } from 'react'
//Core

/* 
Logica
*/
const ItemList = (props) => {  //Funcion constructora


        const listaDeProductos = [
        {
            id:1,
            nombre:"Olla Hudson",
            descripcion:"De las mejores ollas del mercado",
            precio:16000,
            categoria:"Ollas",
            stock:3
        },
        {
            id:2,
            nombre:"Tostadora Hilux",
            descripcion:"La mejor tostadora del mercado",
            precio:7900,
            categoria:"Tostadoras",
            stock:10
        },
        {
            id:3,
            nombre:"Licuadora JX23",
            descripcion:"La mejor licuadora del mercado",
            precio:10000,
            categoria:"Licuadoras",
            stock:5
        },
        {
            id:4,
            nombre:"Plancha gamma italian gold",
            descripcion:"La mejor plancha del mercado",
            precio:19000,
            categoria:"Planchas",
            stock:9
        },
        ]
        //  
        
        let productosRenderizables = []

        if(props.categoriaName === "All"){
        productosRenderizables = listaDeProductos.map( productos =><Item key={productos.id} id={"productos" + productos.id} data={productos}/>)
        }
        else{
        const productosPorCategoria = listaDeProductos.filter(e=> e.categoria === props.categoriaName)
        productosRenderizables = productosPorCategoria.map( productos => <Item key={productos.id} id={"productos" + productos.id} data={productos}/>)
        }


/* 
        const [productos,setProductos] = useState([])
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>))) */
    return(
        <div>
            <p>Este es el item list</p>
            {productosRenderizables}
        </div>

    )

}

/* 
Exportación
*/

export default ItemList