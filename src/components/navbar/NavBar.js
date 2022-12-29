/* 
Importaciones
*/

//Modulos
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
            
            <a className ='item' href=''>Home</a>
            <a className ='item' href=''>Productos</a>
            <a className ='item' href=''>Categorias</a>
            <a className ='item' href=''>Contactanos</a>
            <CardWidget cantidad ="10"/>
            
        </header>

    )

}

/* 
Exportación
*/

export default NavBar