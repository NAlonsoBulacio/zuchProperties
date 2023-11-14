import React from "react";
import "./MenuPhone.css";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className="menu-phone font-poppins-400">
      <a href="/">Inicio</a>
      <a href="/places">Propiedades</a>
      <a href="/about-us">Nosotros</a>
      <a href="/contact">Contacto</a>
      <button onClick={handleMenuToggle}>
        <AiOutlineClose
          className=""
          style={{ height: "30px", width: "30px" }}
        />
      </button>
    </div>
  );
};

export default MenuPhone;
