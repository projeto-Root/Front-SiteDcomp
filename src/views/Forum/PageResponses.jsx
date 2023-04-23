import React, { useEffect, useState } from "react";
import { listTopics } from "../../utils/utils_topics";
import { Box, Divider } from "@chakra-ui/layout";
import { convertDateDefault } from "../../utils/utils";
import { FiAlertCircle, FiStar } from "react-icons/fi";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import TimeLine from "./TimeLine";

const PageResponses = ({ id }) => {
  const [data, setData] = useState([]);

  const handleSelectDataForId = () => {
    listTopics.map((elem) => {
      if (elem.id == id) {
        setData(elem);
      }
    });
  };

  useEffect(() => {
    handleSelectDataForId();
  }, [data]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box
        style={{
          width: "100%",
          maxWidth: "50rem",
          border: "1px solid rgba(0,0,0,.2)",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            color: "#555",
            fontSize: "12px",
          }}
        >
          {convertDateDefault(data.dateCreated)}
        </p>
        <p style={{ fontWeight: "bold" }}>
          {data.title} - {data.userCreated}
        </p>
        <Divider />
        <p style={{ marginTop: "1rem" }}>{data.description}</p>
        <Box
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <FiStar style={{ fontSize: "1.2rem" }} title="gostei" />
            <p style={{ fontSize: "14px" }}>{data.numberLikes}</p>
          </Box>
          <FiAlertCircle style={{ fontSize: "1.2rem" }} title="denunciar" />
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          maxWidth: "50rem",
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Input placeholder="Responder comentário" />
        <Button
          colorScheme="blue"
          style={{
            fontSize: "15px",
          }}
        >
          Responder
        </Button>
      </Box>
      <Box style={{
        width: '100%',
        maxWidth: "50rem",
        marginTop: '1rem'
      }}>
          <TimeLine responses={data.responses}/>
      </Box>
    </Box>
  );
};

export default PageResponses;
