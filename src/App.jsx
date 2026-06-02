import { useState } from "react";
import Boton from "./Boton";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: color, transition: "background-color 0.4s ease" }}>
      <div className="tarjeta">
        
        <h1>¡Presiona y cambia el color!</h1>
        <p>Elige un color para transformar la pantalla:</p>
        
        <div className="botones-box">
         
          <Boton color="lightblue" texto="Azul Claro" cambiarColor={setColor} />
          <Boton color="lightgreen" texto="Verde Claro" cambiarColor={setColor} />
          <Boton color="lightpink" texto="Rosado Claro" cambiarColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
