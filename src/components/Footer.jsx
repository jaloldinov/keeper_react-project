import React from "react";

function Footer() {
  let currentDate = new Date().getFullYear();
  return (
    <footer>
      <p>jaloldinovuz ⓒ {currentDate}</p>
    </footer>
  );
}

export default Footer;
