import React from "react"
import './style/uno.css'

class Tarjeta extends React.Component {
  render() {
    const {nombre,img}=this.props
    return (
      <div>
        <h1 classname="titulo">hola {nombre}</h1>
        <img src={img} alt="" />
      </div>
    )
  }
}
export default Tarjeta
