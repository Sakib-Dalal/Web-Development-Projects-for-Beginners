import React from "react";

const data = new Date();
const year = data.getFullYear();

function Footer() {
    return <footer><p>Copyright C {year}</p></footer>
};

export default Footer;