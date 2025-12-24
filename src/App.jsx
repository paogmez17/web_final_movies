import React, { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import About from "./components/About/About.jsx";
import { fetchMovies } from "./utils/MoviesApi.js";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    try {
      const savedMovies = localStorage.getItem("movies");
      if (savedMovies) {
        const parsed = JSON.parse(savedMovies);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMovies(parsed);
          setVisibleCount(3);
        }
      }
    } catch (e) {
      console.error("Error al leer películas desde localStorage:", e);
    }
  }, []);

  function handleSearch(query) {
    setLoading(true);
    setError("");
    setMovies([]);
    setVisibleCount(3);

    fetchMovies(query)
      .then((results) => {
        if (results.length === 0) {
          setError("No se ha encontrado nada");
        } else {
          setMovies(results);
          // Guardar resultados en localStorage
          try {
            localStorage.setItem("movies", JSON.stringify(results));
          } catch (e) {
            console.error("Error al guardar películas en localStorage:", e);
          }
        }
      })
      .catch(() => {
        setError(
          "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleShowMore() {
    setVisibleCount((prev) => prev + 3);
  }

  const visibleMovies = movies.slice(0, visibleCount);
  const canShowMore = movies.length > visibleMovies.length;

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearch}
              movies={visibleMovies}
              loading={loading}
              error={error}
              onShowMore={handleShowMore}
              canShowMore={canShowMore}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
