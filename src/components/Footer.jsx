import React from "react";

function Footer() {
  let currentDate = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentDate}</p>
    </footer>
  );
}

export default Footer;
