import React, { useState } from "react";

export const Pagination = ({ pages, handleChangePage, page }) => {

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
          {pages.map((elem, index) => {
            if (page == index) {
              return (
                <li onClick={() => handleChangePage(index)} style={{
                  cursor: "pointer"
                }}><p style={{ backgroundColor: '#fff', color: '#55c', width: '1.5rem', height: '1.5rem', borderRadius: '50%', textAlign: 'center' }}>{elem}</p></li>
              )
            } else {
              return (
                <li onClick={() => handleChangePage(index)} style={{
                  cursor: "pointer"
                }}>{elem}</li>
              )
            }
          })}
        </ul>
      </nav>
    </div>
  );
};
