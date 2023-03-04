import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>©1997-{currentYear} Netflix, Inc.</p>
      <p>Gabriel Charib © {currentYear}</p>
    </footer>
  );
};

export default Footer;
