import { Box } from "@chakra-ui/react";
import React from "react";

const CardGeneric = ({ data }) => {
  return (
    <Box
      style={{
        height: "auto",
        minHeight: "10rem",
        minWidth: "10rem",
        maxWidth: "18rem",
        width: "100%",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "12rem",
          backgroundColor: "dodgerblue",
          borderRadius: "10px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${data.img})`,
        }}
      ></Box>
      <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "500" }}>
        {data.name}
      </p>
      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "14px" }}>
        {data.describe}
      </p>
    </Box>
  );
};

export default CardGeneric;
