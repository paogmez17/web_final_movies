import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about">
      <div className="about__content">
        <h1 className="about__title">Sobre el proyecto</h1>
        <p className="about__text">
          Esta aplicación de búsqueda de películas fue creada como parte del
          proyecto final. Utiliza React, Vite y la API de OMDb para mostrar
          información básica sobre películas a partir de una búsqueda por
          título.
        </p>
        <p className="about__text">
          Front-end desarrollado por Paola Gomez como práctica de componentes,
          rutas, consumo de APIs third-party y organización del código según
          BEM.
        </p>
      </div>
    </main>
  );
}

export default About;
