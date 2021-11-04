import React from "react";
import imagen from "./assets/images/imagen.png";
function App() {
  localStorage.setItem("pruebaStorage", JSON.stringify("ABCDEFGHIJK123456"));

  return (
    <div className="App">
      <h1>Hub 2</h1>
      <div className="cards__container">
        <div className="card">
          <img src={imagen} alt="proyect1" />
          <a href="">Proyect 1</a>
        </div>
        <div className="card">
          <img src={imagen} alt="proyect2" />
          <a href="">Proyect 2</a>
        </div>
      </div>
    </div>
  );
}

export default App;
