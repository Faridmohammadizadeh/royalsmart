import React, { useEffect, useRef, Component } from "react";
import styles from "./banner.module.css";

import Image from "next/image";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SquareIcon from "@mui/icons-material/Square";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Icon } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import icon1 from "../assests/banner_form1.svg";
import icon2 from "../assests/banner_form2.svg";
import icon3 from "../assests/banner_form3.svg";

class BannerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    return (
      <>
        <div className={styles.rideoptions}>
          <div
            className={
              this.state.activeIndex === 0
                ? styles.rideoptions_button_active
                : styles.rideoptions_button
            }
            onClick={() => this.setState({ activeIndex: 0 })}
          >
            ONE WAY
          </div>
          <div
            className={
              this.state.activeIndex === 1
                ? styles.rideoptions_button_active
                : styles.rideoptions_button
            }
            onClick={() => this.setState({ activeIndex: 1 })}
          >
            HOURLY HIRE
          </div>
        </div>
        <div className={styles.banner_form_container}>
          <div className={styles.banner_form_section}>
            <div className={styles.banner_form_section_label}>
              <PlaceIcon className="mr-2" />
              <p>PICK UP</p>
            </div>
            <Autocomplete
              disablePortal
              options={[""]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Pickup Location"
                  variant="standard"
                />
              )}
            />
          </div>

          {this.state.activeIndex === 0 ? (
            <div className={styles.banner_form_section}>
              <div className={styles.banner_form_section_label}>
                <PlaceIcon className="mr-2" />
                <p>PICK UP</p>
              </div>
              <Autocomplete
                disablePortal
                options={[""]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Pickup Location"
                    variant="standard"
                  />
                )}
              />
            </div>
          ) : (
            <div className={styles.banner_form_section}>
              <div className={styles.banner_form_section_label}>
                <AccessTimeIcon className="mr-2" />
                <p>HOUTLY HIRE</p>
              </div>
              <Autocomplete
                disablePortal
                options={[""]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="HOUTLY HIRE"
                    variant="standard"
                  />
                )}
              />
            </div>
          )}
          <div className={styles.banner_form_section}>
            <div className={styles.banner_form_section_label}>
              <CalendarTodayIcon className="mr-2" />
              <p>DATE</p>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth={true}>
              <Box components={["DateTimePicker"]}>
                <DateTimePicker fullWidth={true} />
              </Box>
            </LocalizationProvider>
          </div>
          <div className={styles.banner_form_section}>
            <div className={styles.banner_form_section_label}>
              <AccessTimeIcon className="mr-2" />
              <p>TIME</p>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="00:00 am" />
            </LocalizationProvider>
          </div>

          <div className={styles.banner_form_submit_section}>
            <p>Chauffer will wait 15 minutes free of charge</p>
            <Button variant="contained" className={styles.submitform}>
              SEARCH
            </Button>
          </div>
        </div>
      </>
    );
  }
}

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
      <div className={styles.bannerviddiv}>
        <video
          playsInline
          loop={true}
          muted={true}
          autoPlay={true}
          controls={false}
          alt="All the devices"
          src="https://uploadkon.ir/uploads/524628_23vidvid.mp4"
          ref={videoEl}
          className={styles.bannervid}
        />
      </div>

      <div className={styles.bannerfromcard}>
        <BannerForm />
      </div>

      <div className={styles.banner_pic_one}>
        <div className={styles.banner_pic_text}>
          <p>Be Our</p>
          <p>Corporate Partner</p>
        </div>
      </div>
      <div className={styles.banner_pic_two}>
        <div className={styles.banner_pic_text}>
          <p>Be Our</p>
          <p>Driver/Investor</p>
        </div>
      </div>
    </div>
  );
}
