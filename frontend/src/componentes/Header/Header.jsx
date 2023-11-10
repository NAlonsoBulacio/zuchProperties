import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../multimedia/logo.png";
import logoLetras from "../../multimedia/logo-letras.png";
import logoEdificio from "../../multimedia/logo-edificio.png";
import menu from "../../multimedia/menu.svg";
import "./Header.css";
import MenuPhone from "../MenuPhone/MenuPhone";
import { useLocation } from 'react-router-dom';
const Header = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    setCurrentPage(currentPath);
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full">
      <header
        className="header text-white p-4"
        style={{ height:"133px" }}
      >
        <div
          className="mx-auto flex items-center justify-between lg:hidden"
          style={{ maxWidth: "1150px", height: "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "87px", weight: "87px" }}
            />
            <nav className="font-poppins-200 space-x-4"></nav>
          </div>
          <button className="hamburguer" onClick={handleMenuToggle}>
            <img src={menu} alt="MI-MENU" width={40} height={40} />
          </button>
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex"
          style={{ maxWidth: "1150px", height: "91px" }}
        >
          <div className="logo flex items-center space-x-4">
            <a href="/">
            <img
              src={logoEdificio}
              alt="Logo"
              style={{ height: "99px", weight:"99px" }}
            />
            </a>
            <a href="/">
            <img
              src={logoLetras}
              alt="Logo"
              style={{ height: "74px", weight: "74px" }}
            />
            </a>
            <nav className="font-poppins-200 space-x-4"></nav>
          </div>

          <div className="flex justify-center items-center space-x-10">
            <nav className="font-poppins-400 m-auto space-x-10">
              <a
                href="/"
                className={currentPage === "/" ? "active" : "a-h"}
              >
                Inicio
              </a>
              <a
                href="/properties"
                className={currentPage === "/properties" ? "active" : "a-h"}
              >
                Propiedades
              </a>
              <a
                href="/aboutus"
                className={currentPage === "/aboutus" ? "active" : "a-h"}
              >
                Quiénes Somos
              </a>

              <a
                href="/contact"
                className={currentPage === "/contact" ? "active" : "a-h"}
              >
                Contacto
              </a>
            </nav>
            <div className="flex items-center mr-6">
              <button className="whatsapp flex items-center justify-center px-4 py-1 rounded-full border space-x-2">
                <BsWhatsapp className="h-5 w-5"/>
                <span>Whatsapp</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>{menuOpen ? <MenuPhone /> : ""}</div>
    </div>
  );
};

export default Header;
