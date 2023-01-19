/* 
Importaciones
*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemListContainer.css'
/* import Hooks from '../hooks/Hooks.js' */

//Componentes
import ItemList from '../itemList/ItemList'
//Core

/* 
Logica
*/
const ItemListContainer = () => {  //Funcion constructora
    const [categoria,setCategoria] = useState ("all")

    const categoriaTostadoras = () => {
        setCategoria("Tostadoras")
    }
    const categoriaOllas = () => {
        setCategoria("Ollas")
    }
    const categoriaLicuadoras = () => {
        setCategoria("Licuadoras")
    }
    const categoriaPlanchas = () => {
        setCategoria("Planchas")
    }
    const categoriaAll = () => {
        setCategoria("All")
    }


    return(
        
        <div>
            <p>Item list container</p>
            <button onClick={categoriaTostadoras}>Tostadoras</button>
            <button onClick={categoriaOllas}>Ollas</button>
            <button onClick={categoriaLicuadoras}>Licuadoras</button>
            <button onClick={categoriaPlanchas}>Planchas</button>
            <button onClick={categoriaAll}>All</button>
            <ItemList categoriaName={categoria}></ItemList>
        </div>
    )

}

/* 
Exportación
*/

export default ItemListContainer