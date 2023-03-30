import React from "react";
import { Navbar } from "./Navbar";
import background from "../assets/homepage.jpg";

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar />
    </div>
  );
};
