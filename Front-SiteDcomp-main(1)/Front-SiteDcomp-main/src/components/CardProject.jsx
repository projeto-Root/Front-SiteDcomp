import React from "react";
import { ButtonAbout } from "./core-atoms";

const CardProJect = ({ card }) => {
  return (
    <div
      style={{
        minHeight: "25rem",
        height: "auto",
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "12rem",
          width: "100%",
          position: "relative",
          backgroundColor: "dodgerblue",
        }}
      ></div>
      <h4 style={{ width: "100%", textAlign: "center", fontWeight: "400" }}>
        {card.name}
      </h4>
      <p
        style={{
          marginTop: ".5rem",
          padding: "1rem",
          width: "100%",
          textAlign: "justify",
          color: "#333",
          fontSize: "15px",
        }}
      >
        {card.description}
      </p>
      <ButtonAbout>Saber mais</ButtonAbout>
    </div>
  );
};

export default CardProJect;
