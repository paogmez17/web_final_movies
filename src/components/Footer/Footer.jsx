import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Datos de películas de{" "}
        <a
          className="footer__link"
          href="https://www.omdbapi.com/"
          target="_blank"
          rel="noreferrer"
        >
          OMDb API
        </a>
      </p>
    </footer>
  );
}

export default Footer;
