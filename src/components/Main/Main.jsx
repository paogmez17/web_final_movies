import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesList from "../MoviesList/MoviesList.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function Main({ onSearch, movies, loading, error, onShowMore, canShowMore }) {
  const visibleMovies = movies; // Main no decide cuántas, eso viene desde App si quieres

  return (
    <main className="main">
      <div className="main__content">
        <SearchForm onSearch={onSearch} />

        {loading && <Preloader />}

        {!loading && error && <p className="main__message">{error}</p>}

        {!loading && !error && <MoviesList movies={visibleMovies} />}

        {!loading && !error && canShowMore && (
          <div className="show-more">
            <button
              type="button"
              className="show-more__button"
              onClick={onShowMore}
            >
              Mostrar más
            </button>
          </div>
        )}

        <section className="main__info">
          <h2 className="main__title">¿Cómo funciona?</h2>
          <p className="main__text">
            Usa el buscador de arriba para encontrar películas por título. La
            aplicación obtiene los datos desde OMDb API y muestra los resultados
            en tarjetas. Puedes cargar más resultados con el botón “Mostrar
            más”.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Main;
