import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

import playStore from "../assests/ads22.png";
import appleStore from "../assests/ads23.png";
import carImage from "../assests/ads11.png";
import cotesIcon from "../assests/ads12.png";

const banner1P =
  "Royal smart limousine LLC (formaly known as  Royal Luxury Transport LLC) is a member of the Rashid Al Jabri Group of Companies.";

const banner2P =
  "A short description to give the user more context about how the users can use it";

function Advertize() {
  function BannerOne() {
    return (
      <div className={styles.ads_banner1_background}>
        <div className={styles.ads_banner1_info}>
          <h2>Royal Smart Limousin</h2>
          <h1>Testimonials</h1>
          <p>{banner1P}</p>
          <Image
            src={cotesIcon}
            alt=""
            className={styles.ads_banner1_info_image}
          />
          <h6>nolan white</h6>
        </div>
        <Image
          src={carImage}
          alt="tesla car"
          className={styles.ads_banner1_image}
        />
      </div>
    );
  }

  function BannerTwo() {
    return (
      <div className={styles.ads_banner2_background}>
        <div className={styles.ads_banner2_info}>
          <h1>RSL Mobile App</h1>
          <p>{banner2P}</p>
          <div className={styles.ads_banner2_info_button_container}>
            <Image
              src={playStore}
              alt="playStore"
              className={styles.btn_playstore}
            />
            <Image
              src={appleStore}
              alt="appleStore"
              className={styles.btn_playstore}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BannerOne />
      <BannerTwo />
    </>
  );
}

export default Advertize;
