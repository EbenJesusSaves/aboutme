"use client";
import { Paper, Text, createStyles, rem } from "@mantine/core";
import React from "react";
import "./main.css";
import { myFont } from "@/app/layout";
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
      </Text>
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
}));
