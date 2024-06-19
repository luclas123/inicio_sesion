import { Component } from "react";
import Boton from "../Boton";

export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state ={}
    }
 
    render(){
        return(
            <form>
                <input
                type="text"
                placeholder="Nombre"></input> <br />
                <input
                type="text"
                placeholder="Apellido"></input> <br />
                <input
                type="number"
                placeholder="DNI"></input> <br />
                <input
                type="text"
                placeholder="user"></input> <br />
                <input
                type="password"
                placeholder="password"></input> <br />

             <Boton>Enviar</Boton>
            </form>
        )
    }

}