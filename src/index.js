import React from "react"
import ReactDOM from "react-dom"
import Tarjeta from "./componente/uno"
import ImagesA from "./imagenes/images.png"
import Saludo from "./componente/Saludo.js"

const contenedor = document.getElementById('root')
ReactDOM.render(
    <div>
        <Saludo/>
        <Tarjeta
        nombre="Cesar"
        img={ImagesA}
        />, 
</div>,contenedor);


