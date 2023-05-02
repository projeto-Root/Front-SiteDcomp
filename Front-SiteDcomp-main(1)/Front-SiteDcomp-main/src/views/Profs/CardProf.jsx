import React from "react";
import Dcomp from "../../assets/dcomp-icon.png";
import "./CardProf.css"

export const CardProf = ({ name, areas, image }) => {
  return (
    <div
      className="card"
      style={{
        margin: "2rem",
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "rgb(59, 59, 224)",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        minHeight: "14rem",
        height: "auto"
      }}
    >
      <div
        style={{
          width: "10rem",
          backgroundColor: "rgb(42, 187, 206)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px 0px 0px 10px",
        }}
      >
        <img
          src={image}
          alt="prof"
          style={{
            height: "8rem",
            width: "calc(100% - 1rem)",
            borderRadius: "10px",
            marginTop: "1rem",
          }}
        />
        <div
          style={{
            width: "3.5rem",
            height: "3.5rem",
            marginTop: "1rem",
          }}
        >
          <img
            src={Dcomp}
            alt="dcomp"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <p
          className="nameProf"
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
          }}
        >
          {name}
        </p>
        <div
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
        >
          {areas.map((elem, key) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: "1rem",
                }}
              >
                <img
                  key={key}
                  src={elem.image}
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                />
                <p style={{ marginTop: ".5rem" }} className="nameAreas">{elem.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
