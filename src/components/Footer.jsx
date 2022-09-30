import React from "react";

function Footer() {
  return (
    <footer className="page-footer orange darken-4">
      <div className="container">© {new Date().getFullYear()} Copyright</div>
    </footer>
  );
}

export default Footer;
