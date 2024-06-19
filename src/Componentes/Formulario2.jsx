import { Component } from "react";
import Boton from "../Boton";

export default class Formulario2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }



    render(){
        return(
            <form>
                <input 
                type="text"
                placeholder="user"
                ></input> <br />
                <input
                type="password"
                placeholder="password"></input><br />
                <Boton>Ingresar</Boton>
            </form>
        )
    }
}