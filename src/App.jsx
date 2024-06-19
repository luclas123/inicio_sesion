import { Component, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './Componentes/Formulario';
import Formulario2 from './Componentes/Formulario2';
import './App.css'
import Boton from './Boton';



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      contraseña:"",
      nombre:"",
      apellido:"",
      dni:"",
      token:"",
      public:"",
      private:[]
    }
  }

  registrar(user, pass, nombre, apellido, dni){
    const url = "http://10.0.4.103:3001/api/registrar";
    const data = {
      user,
      pass,
      nombres: nombre,
      apellidos: apellido,
      documento: dni
    }
    axios.post(url, data)
    .then((response)=>{
      alert("usuario registrado.");
      console.log(response.data);
         
      
    }
    )
    .catch((error)=>{
      console.log(error);
    });
  }

  iniciarSesion(user, pass){
    const url = "http://10.0.4.103:3001/api/ingresar";
    const data = {
      user,
      pass,
    }

    axios.post(url, data)
    .then((response)=>{
      this.setState({token: response.data.token});
      alert("sesion iniciada correctamente");
    })
     .catch((error)=>{
      console.log(error);
     })

  }

  mostrarDatos(token){
    const urlPublic = "http://10.0.4.103:3001/api/public";
    axios.get(urlPublic)
    .then((response)=>{
      console.log(response.data);
      this.setState({public: response.data});
    }
    )
    .catch((erro)=>{
      console.log(error);
    })

    const urlPrivate = "http://10.0.4.103:3001/api/private/lista";
    const config = {
      header:{
        authorization: token
      }
    }

    axios.get(urlPrivate, config)
    .then((response)=>{
      this.setState({private: response.data});
    })
    .chat((error)=>{
      console.log(error);
    })
  }




  render(){
    return(
        <div className='form'> 
        <h2>Registrarse</h2>
          <Formulario registrar = {(user, pass, nombre, apellido, dni) =>
            this.registrar(user, pass, nombre, apellido, dni)
          }/>

      <br />
      <h2>Iniciar Sesion</h2>
      <Formulario2
      iniciarSesion = {(user, pass)=>
        this.iniciarSesion(user, pass)
      }
      />
      <button
      className='Boton'
      onClick={()=> this.mostrarDatos(this.state.token)}>Mostrar datos</button>

      <datos>{this.state.public}</datos> 

      <datos>{this.state.private}</datos>     
      </div>
    )
  }
}
