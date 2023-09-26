import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import icon1 from "../assests/fleet_icon1.png";
import icon2 from "../assests/fleet_icon2.png";

import car1 from "../assests/fleet_lexus_es.png";
import car2 from "../assests/fleet_voleks_teramont.png";
import car3 from "../assests/fleet_tesla_y.png";
import car4 from "../assests/fleet_mecedess_vclass.png";
import car5 from "../assests/fleet_cadillac_escalae.png";
import car6 from "../assests/fleet_toyota_previa.png";
import car7 from "../assests/fleet_honda_odyssey.png";
import car8 from "../assests/fleet_kia_carinival.png";
import car9 from "../assests/fleet_gmc_yukon.png";
import car10 from "../assests/fleet_chevrolet_traverse.png";
import car11 from "../assests/fleet_toyota_highlander.png";
import car12 from "../assests/fleet_mercedess_sclass.png";
import car13 from "../assests/fleet_chevrolet_subu.png";

const fleetItems = [
  {
    name: "LEXUS ES 300s",
    image: car1,
    passengers: "3",
    baggage: "2",
  },
  {
    name: "VOLKSWAGON TERAMONT",
    image: car2,
    passengers: "5",
    baggage: "3",
  },
  {
    name: "TESLA Model Y",
    image: car3,
    passengers: "3",
    baggage: "2",
  },
  {
    name: "Mercedes V-Class",
    image: car4,
    passengers: "6",
    baggage: "4",
  },
  {
    name: "Cadillac Escalas ESV",
    image: car5,
    passengers: "6",
    baggage: "4",
  },
  {
    name: "Toyota Previa",
    image: car6,
    passengers: "5",
    baggage: "3",
  },
  {
    name: "Honda Odyssey",
    image: car7,
    passengers: "5",
    baggage: "3",
  },
  {
    name: "KIA Carinival",
    image: car8,
    passengers: "6",
    baggage: "4",
  },
  {
    name: "GMC Yukon XL",
    image: car9,
    passengers: "6",
    baggage: "4",
  },
  {
    name: "Chevrolet Teaverse",
    image: car10,
    passengers: "5",
    baggage: "4",
  },
  {
    name: "Toyota Highlander",
    image: car11,
    passengers: "5",
    baggage: "3",
  },
  {
    name: "Mercedess S-Class",
    image: car12,
    passengers: "3",
    baggage: "2",
  },
  {
    name: "Chevtolet Suburban",
    image: car13,
    passengers: "6",
    baggage: "4",
  },
];

function FleetCard({ fleetcar }) {
  return (
    <div className={styles.fleet_card}>
      <div className={styles.fleet_card_image_box}>
        <Image
          src={fleetcar.image}
          alt="luxury car"
          className={styles.fleet_card_image}
        />
        <h2 className={styles.fleet_card_title}>{fleetcar.name}</h2>
      </div>
      <div className={styles.fleet_card_info_box}>
        <div className={styles.fleet_card_info}>
          <Image src={icon2} alt="seat" className="w-7 ml-0" />
          <h3>Passengers</h3>
          <h3>{fleetcar.passengers}+1</h3>
        </div>
        <div className={styles.vertical_line}></div>
        <div className={styles.fleet_card_info}>
          <Image src={icon1} alt="bag" className="w-7" />
          <h3>Baggage</h3>
          <h3>{fleetcar.baggage}</h3>
        </div>
      </div>
      <div>
        <div className={styles.fleet_card_link}>
          <a href="#">Book a Ride</a>
          <a href="#">{">"}</a>
        </div>
        <div className={styles.fleet_card_link}>
          <a href="#">Book a Ride</a>
          <a href="#">{">"}</a>
        </div>
      </div>
    </div>
  );
}

function Fleet() {
  return (
    <>
      <h1 className={styles.fleer_titel}>FLEET</h1>
      <div className={styles.news_swiper}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {fleetItems.map((each) => (
            <SwiperSlide>
              <FleetCard fleetcar={each} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Fleet;
