import React from "react";
import "./MenuRepresentações.css";
import { Box } from "@chakra-ui/react";
import { dataRepresents } from "../../utils/utils_represents";
import CardGeneric from "../../components/CardGeneric";

const Representations = () => {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        rowGap: "3rem",
        columnGap: "4rem",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      {dataRepresents.map((elem, key) => {
        return <CardGeneric data={elem} key={key} link={elem.link}/>;
      })}
    </Box>
  );
};

export default Representations;
