import { Box } from "@chakra-ui/react";
import { Button } from "antd";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid rgba(0,0,0,.2)",
        borderRadius: "10px",
        padding: "1rem",
        justifyContent: "space-between",
        backgroundColor: '#fff'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ddd",
            width: "100%",
            padding: ".5rem",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {data.name}
          </p>
        </div>
        <Box
          style={{
            width: "50%",
            height: "8rem",
            marginTop: "2rem",
          }}
        >
          <img
            src={data.img}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            alt="course"
          />
        </Box>
        <p
          style={{ textAlign: "justify", marginTop: "2rem", fontSize: "14px" }}
        >
          {data.describe}
        </p>
      </div>
      {link && (
        <Button
          type="primary"
          style={{ marginTop: "2rem", width: '80%' }}
          onClick={() => (window.location = link)}
        >
          Saiba mais
        </Button>
      )}
    </Box>
  );
};

export default CardGeneric;
