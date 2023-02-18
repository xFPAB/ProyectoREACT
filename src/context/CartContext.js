/******************************************************                                              
 IMPORTACIONES
*******************************************************/

//useContext, createContext => react
import {useContext, createContext, useState} from "react";

//1- crear el contexto
//2- exportar el contexto creado
export const CartContext = createContext([])

//3- crear nuestra funcion para poder usar el contexto
//4- podemos definirlo como un hook personalizado
//5- exportar la funcion que almacena el hook useCartContext
export const useCartContext = () => { useContext(CartContext) }

//6- crear el componente del contexto proveedor

const CartProvider = () = {

    

    return(
        <>
        </>
    )

}

export default CartProvider