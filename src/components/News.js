import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./banner.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assests/news1.jpeg";
import img2 from "../assests/news2.jpeg";
import img3 from "../assests/news3.png";
import img4 from "../assests/news4.png";
import img5 from "../assests/news5.jpeg";

const settings = {
  dots: true, // Show navigation dots
  infinite: false, // Infinite loop
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 3, // Number of slides to show at once
  slidesToScroll: 1,
  adaptiveHeight: false,
};

const newsList = [
  {
    image: img1,
    text: "Trustworthy and reliable transportaition for your buisness events in Dubai and Dhabi with RSL",
    link: "#",
  },
  {
    image: img2,
    text: "The quickest and easiest  way to premiere transportation: Become an Rsl",
    link: "#",
  },
  {
    image: img3,
    text: "Dubai airport transfer | Dubai Airport Limusine Service",
    link: "#",
  },
  {
    image: img4,
    text: "Corporate Transportation Services | VIP Limo Transportation",
    link: "#",
  },
  {
    image: img2,
    text: "Limousine Intercity Transport | Family Intercity Transport",
    link: "#",
  },
  {
    image: img5,
    text: "Meet Abdol Rahman Al Jabri Dubai's Youngest Milionaire",
    link: "#",
  },
];

function NewsItem({ news }) {
  return (
    <div className={styles.slide_items_card}>
      <Image src={news.image} alt="news image" className={styles.slide_image} />
      <div className={styles.slide_info}>
        <p>{news.text}</p>
      </div>
    </div>
  );
}

function News() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.news}>
      <div className={styles.news_titles}>
        <h3>BLOG</h3>
        <h1>NEWS</h1>
      </div>
      <div className={styles.news_swiper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newsList.map((each) => (
            <SwiperSlide>
              <NewsItem news={each} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default News;
