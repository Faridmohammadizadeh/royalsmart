import React, { useEffect, useRef } from "react";
import styles from "./banner.module.css";

export default function Banner() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <div
      className={styles.bannerviddiv}>
        <video
          playsInline
          loop={true}
          muted={true}
          autoPlay={true}
          controls={false}
          alt="All the devices"
          src="https://s6.uupload.ir/filelink/NcUCRnAM39FL_708543e6d3/vidvid_trvh.mp4"
          ref={videoEl}
          className={styles.bannervid}
        />
      </div>

      <div className={styles.bannerfromcard}>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
        <h2>
          sasasasa
        </h2>
        <h3>
          sakjlsak
        </h3>
      </div>
    </div>
  );
}
