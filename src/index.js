import React from "react";
import ReactDOM from "react-dom";
import Tarjeta from "./Componete/DUNO";
import ImagesA from "./imagenes/1.png"


const contenedor =document.getElementById('root')
ReactDOM.render(
<Tarjeta
nombre="Maicol"
img={ImagesA}
/>, contenedor)