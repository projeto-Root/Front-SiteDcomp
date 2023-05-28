import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { areas } from "../../utils/utils_areas";
import AreasSelected from "./AreasSelected";
import { Select } from "antd";

const Areas = ({ areaDefault }) => {

  const [areaSelected, setAreaSelected] = useState(areaDefault);

  const handleChangeArea = (value) => {
    setAreaSelected(value);
  };

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [areaSelected])

  return (
    <Box
      style={{
        padding: "2rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          maxWidth: "50rem",
          width: "100%",
        }}
      >
        <Select
          onChange={handleChangeArea}
          style={{ width: "100%" }}
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label?.toLowerCase() ?? "").includes(input?.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={areas.map((elem) => {
            return {
              value: elem.name,
              label: elem.name,
            };
          })}
        />
      </Box>
      {loading && <Spinner style={{ marginTop: '1rem' }} />}
      {!loading && <AreasSelected data={areaSelected} />}
    </Box>
  );
};

export default Areas;
