import React from "react";
import Tarjeta from "../componente/uno.js"
import ImagesA from "../imagenes/images.png"
import Saludo from "../componente/Saludo.js"

class Fuente extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                id:0,
                "nombre":"Cesar",
                "imagen":ImagesA
            },
            {
                id:1,
                "nombre":"Carlos",
                "imagen":ImagesA
            },
            {
                id:2,
                "nombre":"Yisus",
                "imagen":ImagesA
            }
        ]
        }
    }
    render(){
        return(
            <div>
                <Saludo/> 
                {
                    this.state.data.map((agua)=>{
                        return(
                            <Tarjeta
                            nombre={agua.nombre}
                            img={agua.imagen}
                            />
                        )
                    })
                }
            
            </div>
        )
        
    }
}
export default Fuente