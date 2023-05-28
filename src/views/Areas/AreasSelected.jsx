import React, { useState } from "react";
import { dataMenuAreas } from "../../utils/utils_menu_areas";

const AreasSelected = ({ data }) => {
  return (
    <>
      {data && (
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: '2rem'
          }}
        >
          {data}
        </p>
      )}
      {data &&
        dataMenuAreas[data]?.content?.map((elem, index) => {
          return (
            <>
              {elem.icon && (
                <img
                  src={elem.icon}
                  style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
                />
              )}
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                {elem.topic}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  textAlign: "justify",
                  marginTop: "2rem",
                }}
              >
                {elem.content}
              </p>
            </>
          );
        })}
    </>
  );
};

export default AreasSelected;
