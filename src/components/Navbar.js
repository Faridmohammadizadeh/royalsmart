import React from "react";
import Image from "next/image";
import "./navbar.module.css";

import logo from "../assests/logo.png";

const items = [
  {
    titel: "Home",
    link: "#",
  },
  {
    titel: "Aboutus",
    link: "#",
  },
  {
    titel: "Services",
    link: "#",
  },
  {
    titel: "Fleet",
    link: "#",
  },
  {
    titel: "News & Events",
    link: "#",
  },
  {
    titel: "Contact",
    link: "#",
  },
];

export function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleNavbar = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Image src={logo} alt="logo" className="navLogo" />
        </div>
      </div>
    </nav>
  );
}
