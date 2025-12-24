const OMDB_BASE_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = "6a86b874"; // pon aquí tu API key

export function fetchMovies(query) {
  const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(
    query
  )}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al consultar la API");
      }
      return res.json();
    })
    .then((data) => {
      // OMDb devuelve { Response: "True", Search: [...] } o { Response: "False", Error: "..." }
      if (data.Response === "False") {
        // tratamos esto como "sin resultados"
        return [];
      }
      return data.Search || [];
    })
    .catch((error) => {
      console.error("Error en fetchMovies:", error);
      throw error; // lo volvemos a lanzar para manejarlo en App
    });
}
