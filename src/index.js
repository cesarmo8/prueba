import React from "react";
import ReactDOM from "react-dom";

const datos={
  Nombre:"cesar",
  Apellido: "Morales",
  Edad:25,
  avatar: 'https://www.google.com/imgres?q=grafiti&imgurl=https%3A%2F%2Fpolicomerciofiles.s3.amazonaws.com%2F079e307c-56df-497c-af76-b41eb108f959_reformated.webp&imgrefurl=https%3A%2F%2Fwww.artradelatam.com%2Fpost%2Fgraffiti-tour-conociendo-ciudades-a-traves-del-arte-2&docid=8438npUVj24UaM&tbnid=kpMD6oyfBVkZvM&vet=12ahUKEwiWyO-5z9mFAxXQRjABHa3XBPsQM3oECCUQAA..i&w=723&h=380&hcb=2&ved=2ahUKEwiWyO-5z9mFAxXQRjABHa3XBPsQM3oECCUQAA'
}
function obtener(datos){
  return `tu apellido es: ${datos.apellido}, tu nombre es: ${datos.nombre}, tu edad es: ${datos.edad}`
}
const elemento=(
  <div>
    <h1>hola {obtener(datos)}</h1>
    <img src={datos.avatar}/>
  </div> 
)

const contenedor= document.getElementsById('root')
ReactDOM.render(elemento,comtenedor)