"use client";
import {
  Container,
  Grid,
  Group,
  Paper,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import "./main.css";
import { myFont } from "@/app/layout";
import hero from "../../assets/replicate-prediction-2f2teczbzcbu3ntitkrie23hjdy.png";
import lowerThird from "../../assets/Untitled-3-bg.png";
import lowerThirdTxt from "../../assets/text.png";
import Image from "next/image";
import Ticker from "react-ticker";
import s from './main.module.css'

export const LandingPage = () => {
  const { classes } = useStyles();

  return (
    <div className="main" style={{ overflow: 'hidden' }}>
      <Container
        size={"xl"}
        display={"flex"}
        styles={{ justifyContent: "space-between" }}
      >
        <Grid>
          <Grid.Col
            span={5}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 128 }}
              sx={{ fontSize: "60px", textAlign: "start", fontWeight: "bold" }}
            >
              Design, <br />
              Develop and <br />
              Build for <br />
              Amazing People
            </Text>
          </Grid.Col>
          <Grid.Col span={7}>
            <Image src={hero} layout="responsive" alt="Hero Picture" />
          </Grid.Col>
        </Grid>
      </Container>
      <div style={{ position: 'relative' }}>


        <div
        // style={{ position: "relative" }}
        >
          <Image
            src={lowerThird}
            alt="lower 3"
            layout="responsive"
          // style={{ position: "relative" }}
          />
        </div>
        <div
          style={{ position: "absolute", top: 20, }}
        >
          <div style={{ display: 'flex' }}>
            <Image src={lowerThirdTxt} alt="lower 3" layout="responsive" className={s.move} />
            <Image src={lowerThirdTxt} alt="lower 3" layout="responsive" className={s.move} />
          </div>

        </div>  </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    width: "80rem",
    alignItems: "center",
    borderRadius: "20px",
  },
  mainImage: {
    position: "relative",
    top: "-20rem",
  },
}));
