import React from "react"
import '../style/dos.css'
import img from "../imagenes/images.png"

class Tarjeta extends React.Component {
  constructor(props){
    super(props)
    this.state={
      image:'https://www.teironsurf.com/blog/wp-content/uploads/sfgs.jpg'
    }
  }  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
          image:img
      })
    },5000
  )
}

  render() {
    const {nombre,img}=this.props
    return (
      <div>
        <h1 classname="titulo"> Hi {nombre}</h1>
        <img src={this.state.image} alt="" />
      </div>
    )
  }
}
export default Tarjeta
