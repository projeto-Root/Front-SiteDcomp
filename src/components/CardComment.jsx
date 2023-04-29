import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const CardComment = ({ data }) => {
  return (
    <Box
      style={{
        marginTop: "2rem",
        border: "1px solid rgba(0,0,0,.2)",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "18px",
          }}
        >
          <Box
            style={{
              width: "2rem",
              height: "2rem",
              backgroundColor: "dodgerblue",
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${data.img})`,
            }}
          ></Box>
          <span style={{ fontWeight: "bold" }}>{data.name}</span>
        </Box>
        <span style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <AiOutlineStar style={{ color: "dodgerblue" }} /> {data.rate}
        </span>
      </Box>
      <Divider style={{ margin: "1rem 0rem" }} />
      <p>{data.describe}</p>
    </Box>
  );
};

export default CardComment;
