import { Box, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { areas } from "../../utils/utils_areas";
import AreasSelected from "./AreasSelected";
import { useLocation } from "react-router-dom";

const Areas = () => {

  const location = useLocation()
  let inicial

  if (location.state) {
    inicial = location.state.title
  } else {
    inicial = 'Arquitetura de Computadores'
  }

  const [areaSelected, setAreaSelected] = useState(inicial);

  

  const handleChangeArea = (event) => {
    const { value } = event.target;
    setAreaSelected(value);
  };

  return (
    <Box style={{ 
        padding: "2rem", 
        display: "flex", 
        flexDirection: "column",
        alignItems: 'center'
    }}>
      <Box
        style={{
          maxWidth: "60rem",
          width: '100%',
        }}
      >
        <Select value={areaSelected} onChange={handleChangeArea} style={{ width: '100%' }}>
          {areas.map((elem, key) => {
            return (
              <option key={key}>
                <a href={elem.link}>{elem.name}</a>
              </option>
            );
          })}
        </Select>
      </Box>
      <AreasSelected data={areaSelected} />
    </Box>
  );
};

export default Areas;
