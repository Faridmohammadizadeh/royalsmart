"use client";

import React, { Component } from "react";

import Image from "next/image";
import styles from "../../components/banner.module.css";
import Map from 'react-map-gl';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import SquareIcon from "@mui/icons-material/Square";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import logo from "../../assests/logo.png";
import { Icon } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import car1 from "../../assests/sedan.png";
import car2 from "../../assests/xl.png";
import car3 from "../../assests/vip.png";
import car4 from "../../assests/vipplus.png";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carData: [
        {
          type: "SEDAN",
          image: car1,
          index: 0,
        },
        {
          type: "XL",
          image: car2,
          index: 1,
        },
        {
          type: "VIP",
          image: car3,
          index: 2,
        },
        {
          type: "VIP PLUS",
          image: car4,
          index: 3,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className={styles.navv}>
          <Image src={logo} alt="logo" className="w-16" />
          <h1>Book a Ride</h1>
          <div></div>
        </div>
        <div className={styles.form_box}>
          <div>
          <Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />

          </div>
          <div className={styles.booking_form}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {},
              }}
              noValidate
              autoComplete="off"
            >
              <div className={styles.form_part}>
                <p>Car Type</p>
                <div className={styles.form_cars_container}>
                  {this.state.carData.map((item) => (
                    <div
                      key={item.index}
                      className={
                        item.index === this.state.activeIndex
                          ? styles.form_cars_card_active
                          : styles.form_cars_card
                      }
                      onClick={() => this.setState({ activeIndex: item.index })}
                    >
                      <Image src={item.image} className="w-16" />
                      <p>{item.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.form_part}>
                <p>Name</p>
                <TextField
                  fullWidth
                  id="name"
                  placeholder="Name"
                  variant="outlined"
                />
              </div>

              <div className={styles.form_part}>
                <p>Email</p>
                <TextField
                  fullWidth
                  id="email"
                  placeholder="Email"
                  variant="outlined"
                />
              </div>
              <div className={styles.form_part}>
                <p>Mobile Number</p>
                <TextField fullWidth id="mobile" variant="outlined"/>
              </div>

              <div className={styles.form_part}>
                <p>Pickup & Drop</p>
                <div>
                  <div className={styles.form_part_section}>
                    <PlaceIcon className="mr-2" />
                    <TextField
                      fullWidth
                      id="pickup"
                      placeholder="Pickup"
                      variant="outlined"
                    />
                  </div>
                  <div className={styles.form_part_section}>
                    <SquareIcon className="mr-2" />
                    <TextField
                      fullWidth
                      id="drop"
                      placeholder="Drop"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.form_part}>
                <p>Pickup Time</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box components={["DateTimePicker"]}>
                    <DateTimePicker />
                  </Box>
                </LocalizationProvider>
              </div>

              <div className={styles.form_part}>
                <p>Type</p>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="transfer"
                    control={<Radio />}
                    label="Transfer"
                  />
                  <FormControlLabel
                    value="fullday"
                    control={<Radio />}
                    label="Fullday"
                  />
                  <FormControlLabel
                    value="halfday"
                    control={<Radio />}
                    label="Halfday"
                  />
                </RadioGroup>
              </div>
            </Box>
            <div className={styles.submitformdiv}>
            <Button
              variant="contained"
              className={styles.submitform}
            >
              Select Pickup
            </Button>
            </div>
          </div>

        </div>
      </>
    );
  }
}
