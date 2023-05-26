import React from "react";
import { Box } from "@chakra-ui/react";
import { descriptionOfCourses } from "../../utils/utils_home";
import CardGeneric from "../../components/CardGeneric";

const Cursos = () => {
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
      {descriptionOfCourses.map((elem, key) => {
        return <CardGeneric data={elem} key={key} link='#'/>;
      })}
    </Box>
  );
};

export default Cursos;
