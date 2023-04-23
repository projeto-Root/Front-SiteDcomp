import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { convertDateDefault } from "../../utils/utils";

const Coment = ({ data }) => {
  return (
    <Box
      style={{
        marginTop: "1rem",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        {data.userCreated} - {convertDateDefault(data.dateCreated)}
      </p>
      <p style={{ fontSize: "14px" }}>{data.description}</p>
      <Divider />
      <Box style={{
        paddingLeft: '2rem'
      }}>
        {data.reResponse &&
          data.reResponse?.map((elem) => {
            return (
              <Box mt='1rem'>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {elem.userCreated} - {convertDateDefault(elem.dateCreated)}
                </p>
                <p style={{ fontSize: "14px" }}>{elem.description}</p>
                <Divider />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Coment;
