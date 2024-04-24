import React from "react"
import ReactDOM from "react-dom"
import Tarjeta from "./componente/uno"
import ImagesA from "./imagenes/images.png"

const contenedor = document.getElementById('root')
ReactDOM.render(
    <Tarjeta
    nombre= "cesar"
    img={ImagesA}
/>, contenedor)


