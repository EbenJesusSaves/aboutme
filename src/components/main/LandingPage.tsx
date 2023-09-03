"use client";
import { Paper, Text } from "@mantine/core";
import React from "react";
import "./main.css";
import { myFont } from "@/app/layout";
export const LandingPage = () => {
  return (
    <Paper className="main">
      <Text
        sx={{ fontSize: "200px" }}
        className={`${myFont.className} textGrad`}
      >
        My Story
      </Text>
    </Paper>
  );
};
