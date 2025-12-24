import React from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.search.value.trim();

    if (!query) return;

    onSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        name="search"
        placeholder="Buscar película..."
        required
      />
      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
