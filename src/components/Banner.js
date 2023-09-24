import styles from "./banner.module.css";
import Image from "next/image";

import img from "../assests/asset 4.png";

function Banner() {
  return <Image src={img} alt="banner" className={styles.banner_image} />;
}

export default Banner;
