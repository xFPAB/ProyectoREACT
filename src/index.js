/* ##############################################
        IMPORTACIONES
  ############################################### */

/* 
MODULOS
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
/* 
ESTILOS
*/
import './index.css';
/* 
COMPONENTES 
*/
import NavBar from './components/navbar/NavBar.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
/* 
Core
*/
import reportWebVitals from './reportWebVitals';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

/* ##############################################
        Logica
  ############################################### */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/productos' element={<ItemListContainer/>}/>
      <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>} />
      <Route exact path='/contactanos' element={<AboutUs/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
