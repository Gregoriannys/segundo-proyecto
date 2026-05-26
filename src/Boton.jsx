import React from "react";

function Boton(props) {
  return (
    <button 
      style={{ backgroundColor: props.color }} 
      onClick={() => props.cambiarColor(props.color)} 
    >
      {props.texto} 
    </button>
  );
}

export default Boton;