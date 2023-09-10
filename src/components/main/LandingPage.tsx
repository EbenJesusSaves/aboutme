"use client";
import { Paper, Text, createStyles, rem } from "@mantine/core";
import React from "react";
import "./main.css";
import { myFont } from "@/app/layout";
import hero from "../../assets/d82c112c-f406-4023-82d5-f3079ea4d0a9_storyHero.avif";
import Image from "next/image";

export const LandingPage = () => {
  const { classes } = useStyles();

  return (
    <Paper className="main">
      <Text
        sx={{ fontSize: "300px", textAlign: "center", lineHeight: "300px" }}
        className={`${myFont.className} textGrad`}
      >
        About
        <br /> Me
        <Image src={hero} alt="jo" className={classes.mainImage} />
      </Text>
      <Text sx={{ textAlign: "center" }}>This is something I love doing</Text>
    </Paper>
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
