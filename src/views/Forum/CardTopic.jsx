import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { convertDateDefault } from "../../utils/utils";
import { ChatIcon } from "@chakra-ui/icons";
import { FiStar } from "react-icons/fi";

const CardTopic = ({
  title,
  numberComments,
  numberLikes,
  userCreated,
  dateCreated,
  id,
}) => {
  const handleSelectTopic = (id) => {
    window.location = `forum/discussion/${id}`
  };
  return (
    <Box
      style={{
        padding: "1rem",
        border: "1px solid rgba(0,0,0,.2)",
        borderRadius: "10px",
      }}
      onClick={() => handleSelectTopic(id)}
    >
      <p style={{ color: "#666", fontSize: "12px" }}>
        {convertDateDefault(dateCreated)}
      </p>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          {title} - {userCreated}
        </p>
        <Box
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".3rem",
            }}
          >
            <ChatIcon />
            <p
              style={{
                fontSize: "12px",
                color: "#333",
              }}
            >
              {numberComments}
            </p>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".3rem",
            }}
          >
            <FiStar />
            <p
              style={{
                fontSize: "12px",
                color: "#333",
              }}
            >
              {numberLikes}
            </p>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default CardTopic;
