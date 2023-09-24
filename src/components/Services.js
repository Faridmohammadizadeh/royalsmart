import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

import icon1 from "../assests/serv1.svg";
import icon2 from "../assests/serv2.svg";
import icon3 from "../assests/serv3.svg";
import icon4 from "../assests/serv4.svg";
import icon5 from "../assests/serv5.svg";
import icon6 from "../assests/serv6.svg";
import icon7 from "../assests/serv7.svg";
import icon8 from "../assests/serv8.svg";
import icon9 from "../assests/serv9.svg";

const servicesItems = [
  {
    titel: "Airport Transport",
    icon: icon1,
    link: "#",
  },
  {
    titel: "City Tour",
    icon: icon2,
    link: "#",
  },
  {
    titel: "Hourly Hire",
    icon: icon3,
    link: "#",
  },
  {
    titel: "Corporates",
    icon: icon4,
    link: "#",
  },
  {
    titel: "Events",
    icon: icon5,
    link: "#",
  },
  {
    titel: "Enterprise",
    icon: icon6,
    link: "#",
  },
  {
    titel: "RSL Driver",
    icon: icon7,
    link: "#",
  },
  {
    titel: "RSL Mobile App",
    icon: icon8,
    link: "#",
  },
  {
    titel: "Institutions",
    icon: icon9,
    link: "#",
  },
];

function Services() {
  return (
    <div className="items-center">
      <h1 className={styles.titel}>Services</h1>
      <div className={styles.services_container}>
        {servicesItems.map((item) => (
          <div key={item.titel} className={styles.services_item}>
            <Image src={item.icon} alt={item.titel} width="70" height="50" />
            <p className={styles.services_item_title}>{item.titel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
