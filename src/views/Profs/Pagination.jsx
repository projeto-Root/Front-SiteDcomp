import React from "react";

export const Pagination = ({ pages, handleChangePage }) => {
  return (
    <div>
      <nav style={{
        heiht: "2.5rem",
        backgroundColor: "#55c",
        color: "#fff",
        borderRadius: "10px"
      }}>
        <ul
          style={{
            width: "auto",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            padding: ".5rem 1rem"
          }}
        >
          {pages.map((elem, key) => {
            return <li onClick={() => handleChangePage(key)} style={{
                cursor: "pointer"
            }}>{elem}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
};
