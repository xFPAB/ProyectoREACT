/* 
Importaciones
*/

//Modulos
import { Link } from 'react-router-dom'
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'
//Componentes
//Core

/* 
Logica
*/
const NavBar = () => {  //Funcion constructora

    return(
        <header className='navbar'>
            
            <Link to="/" className ='item'>Home</Link>
            <Link to="/productos" className ='item'>Productos</Link>
            <Link to="/" className ='item'>Categorias</Link>
            <Link to="/contactanos" className ='item'>Contactanos</Link>
            <CardWidget cantidad ="10"/>
            
        </header>

    )

}

/* 
Exportación
*/

export default NavBar