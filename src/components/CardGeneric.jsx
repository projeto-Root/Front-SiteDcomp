import { Box, Button } from "@chakra-ui/react";
import React from "react";

const CardGeneric = ({ data, link }) => {
  return (
    <Box
      style={{
        height: "auto",
        minHeight: "10rem",
        minWidth: "10rem",
        maxWidth: "20rem",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        style={{
          width: "80%",
          height: "14rem",
        }}
      >
        <img src={data.img} style={{ width: '100%', height: '100%', borderRadius: "10px" }} alt="course"/>
      </Box>
      <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "500" }}>
        {data.name}
      </p>
      <p style={{ textAlign: "justify", marginTop: "1rem", fontSize: "14px" }}>
        {data.describe}
      </p>
      {link && <Button colorScheme="purple" style={{ marginTop: '2rem' }} onClick={() => window.location = link}>Saiba mais</Button>}
    </Box>
  );
};

export default CardGeneric;
