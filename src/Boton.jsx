import { Children, Component } from "react";



const Boton = ({ onClick, children }) => {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  };
  
  

export default Boton;