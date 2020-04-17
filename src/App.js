import React, { useState } from 'react';
import Header from "./components/Header";
import Capitulo from "./components/Capitulo";
import Redactar from "./components/Redactar";
import Footer from "./components/Footer";
import capitulos from "./db/capitulos";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  const [historia, setHistoria] = useState(capitulos);

  function agregarCapitulo(nuevoCapitulo) {
    setHistoria(capitulosPrevios => {
      return setHistoria([...capitulosPrevios, nuevoCapitulo]);
    })
  }

  return (
    <div id="app" className="container">
        <Header />
        {historia.map((capitulo, index) => {
          return (
            <Capitulo key={index} titulo={index} contenido={capitulo.contenido} />
          );
        })}
        <Redactar alPublicar={agregarCapitulo} />
        <Footer />
    </div>
  );
}

export default App;