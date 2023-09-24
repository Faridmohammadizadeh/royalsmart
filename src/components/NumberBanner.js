import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import icon3 from "../assests/icon3.png";

import bannerImage from "../assests/banner1.png";

const infos = [
  {
    icon: icon1,
    num: 300,
    title: "Employees",
  },
  {
    icon: icon2,
    num: 500,
    title: "Cars",
  },
  {
    icon: icon3,
    num: 1000,
    title: "Dreivers",
  },
];

export default function NumberBanner() {
  return (
    <div className={styles.numbers_background}>
      <div className={styles.numbers_container}>
        {infos.map((info) => (
          <div className={styles.numbers_item}>
            <Image src={info.icon} alt="icon" className={styles.numbers_icon} />
            <div className={styles.numbers_info}>
              <h2>{info.num}+</h2>
              <h3>{info.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
