import { Box } from "@chakra-ui/layout";
import React from "react";
import Coment from "./Coment";

const TimeLine = ({ responses }) => {

  const line = () => {
    return <Box></Box>;
  };

  return (
    <Box>
      {responses?.map((elem, key) => {
        return <Coment data={elem} />;
      })}
    </Box>
  );
};

export default TimeLine;
