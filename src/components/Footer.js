import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

import logo from "../assests/logo.png";
import appleStoreWhite from "../assests/applestore-white.jpeg";
import playStoreWhite from "../assests/playstore-white.jpeg";

const exploreContents = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "َAbout Us",
    link: "#",
  },
  {
    title: "Mission Vision & Values",
    link: "#",
  },
  {
    title: "Our Promise",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "Fleet",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
];

const moreContents = [
  {
    title: "Blog/News",
    link: "#",
  },
  {
    title: "Locate Us",
    link: "#",
  },
];

const contactContents = [
  {
    title: "Hotline: 600530005",
    link: "#",
  },
  {
    title: "Head Office: +9714 39 777 46",
    link: "#",
  },
  {
    title: "Email: info@royalsmartlimousine.com",
    link: "#",
  },
];

function Footer() {
  function Elementer({ contents }) {
    return (
      <div>
        {contents.map((content) => (
          <a href={content.link} className={styles.footer_content}>
            {content.title}
          </a>
        ))}
      </div>
    );
  }

  function Explore() {
    return (
      <div>
        <h1 className={styles.footer_title}>Explore</h1>
        <Elementer contents={exploreContents} />
      </div>
    );
  }

  function More() {
    return (
      <div>
        <h1 className={styles.footer_title}>More</h1>
        <Elementer contents={moreContents} />
      </div>
    );
  }

  function Contact() {
    return (
      <div>
        <h1 className={styles.footer_title}>Contact</h1>
        <Elementer contents={contactContents} />
        <br />
        <div className={styles.footer_stores_container}>
          <Image
            src={appleStoreWhite}
            alt="apple store"
            className={styles.footer_stores}
          />
          <Image
            src={playStoreWhite}
            alt="play store"
            className={styles.footer_stores}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.footer}>
      <div className={styles.ads_banner1_info}>
        <h2 className="ml-12">Royal Smart Limousin</h2>
        <h1 className="ml-12">Follow uses On Instagram</h1>
      </div>
      <div className={styles.footer_links}>
        <Image src={logo} alt="logo" className="w-20 mb-6" />
        <div className={styles.footer_contents}>
          <Explore />
          <More />
          <Contact />
        </div>
      </div>
      <div className={styles.footer_under}>
        <p>Copyright © 2023. Royal Smart Limousine. All Rights Reserved</p>
        <p>Member of Rashid Al Jabri Group of Companies</p>
      </div>
    </div>
  );
}

export default Footer;
