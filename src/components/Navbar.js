import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

import logo from "../assests/logo.png";
import logotype from "../assests/logo-type.png";

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
    <nav className="fixed w-full h-24 bg-black">
      <div className="flex justify-between items-center h-full w-full px-20 2xl:px-40">
        <div>
          <Link href="/">
            <div className="flex justify-between items-center">
              <Image src={logo} alt="logo" width="70" height="50" />
              <Image src={logotype} alt="logo" height="50" className="ml-4" />
            </div>
          </Link>
        </div>
        <div>
          <ul className={styles.navitem}>
            {items.map((item) => (
              <Link href={item.link}>
                <li key={item.titel} className="m-2">
                  {item.titel}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
