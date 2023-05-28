import React from "react";
import Dcomp from "../../assets/dcomp-icon.png";
import "./CardProf.css";

const widthLine = ".15rem";
const sizeCircle = ".4rem";
const colorLines = "rgb(60, 60, 256)";

const Line1 = () => {
  return (
    <div
      style={{
        width: widthLine,
        height: "4rem",
        backgroundColor: colorLines,
        position: "absolute",
        right: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "4rem",
          height: widthLine,
          backgroundColor: colorLines,
          position: "absolute",
          right: "0rem",
          display: "flex",
          alignItems: "center",
          bottom: "1rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            left: "0rem",
          }}
        ></div>
      </div>
      <div
        style={{
          width: sizeCircle,
          height: sizeCircle,
          backgroundColor: colorLines,
          position: "absolute",
          borderRadius: "50%",
          bottom: "0rem",
        }}
      ></div>
    </div>
  );
};

const Line2 = () => {
  return (
    <div
      style={{
        width: "5rem",
        height: widthLine,
        backgroundColor: colorLines,
        position: "absolute",
        right: "0rem",
        display: "flex",
        alignItems: "center",
        top: "5rem",
      }}
    >
      <div
        style={{
          width: widthLine,
          height: "2.5rem",
          backgroundColor: colorLines,
          position: "absolute",
          right: "1rem",
          display: "flex",
          justifyContent: "center",
          top: "0rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            bottom: "0rem",
          }}
        ></div>
      </div>
      <div
        style={{
          width: sizeCircle,
          height: sizeCircle,
          backgroundColor: colorLines,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

const Line3 = () => {
  return (
    <div
      style={{
        width: "7rem",
        height: widthLine,
        backgroundColor: colorLines,
        position: "absolute",
        right: "0rem",
        display: "flex",
        alignItems: "center",
        top: "9rem",
      }}
    >
      {/*Subline 3.1*/}
      <div
        style={{
          width: widthLine,
          height: "2rem",
          backgroundColor: colorLines,
          position: "absolute",
          right: "5rem",
          display: "flex",
          justifyContent: "center",
          top: "0rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            bottom: "0rem",
          }}
        ></div>
      </div>
      {/*Subline 3.2*/}
      <div
        style={{
          width: widthLine,
          height: "3rem",
          backgroundColor: colorLines,
          position: "absolute",
          right: "2.5rem",
          display: "flex",
          justifyContent: "center",
          bottom: "0rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            top: "0rem",
          }}
        >
          {/*Subline 3.3*/}
          <div
            style={{
              width: "3rem",
              height: widthLine,
              backgroundColor: colorLines,
              position: "absolute",
              right: ".1rem",
              display: "flex",
              alignItems: "center",
              top: "1rem",
            }}
          >
            <div
              style={{
                width: sizeCircle,
                height: sizeCircle,
                backgroundColor: colorLines,
                position: "absolute",
                borderRadius: "50%",
                left: "0rem",
              }}
            ></div>
          </div>
          {/*Subline 3.4*/}
          <div
            style={{
              width: "2.5rem",
              height: widthLine,
              backgroundColor: colorLines,
              position: "absolute",
              right: ".1rem",
              display: "flex",
              alignItems: "center",
              top: "2rem",
            }}
          >
            <div
              style={{
                width: sizeCircle,
                height: sizeCircle,
                backgroundColor: colorLines,
                position: "absolute",
                borderRadius: "50%",
                left: "0rem",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: sizeCircle,
          height: sizeCircle,
          backgroundColor: colorLines,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

const Line4 = () => {
  return (
    <div
      style={{
        width: "2rem",
        height: widthLine,
        backgroundColor: colorLines,
        position: "absolute",
        right: "0rem",
        display: "flex",
        alignItems: "center",
        top: "10.5rem",
      }}
    >
      <div
        style={{
          width: widthLine,
          height: "1.5rem",
          backgroundColor: colorLines,
          position: "absolute",
          left: "0rem",
          display: "flex",
          justifyContent: "center",
          top: "0rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            bottom: "0rem",
          }}
        ></div>
      </div>
    </div>
  );
};

const Line5 = () => {
  return (
    <div
      style={{
        width: widthLine,
        height: "4rem",
        backgroundColor: colorLines,
        position: "absolute",
        right: "3rem",
        display: "flex",
        justifyContent: "center",
        bottom: "0rem",
      }}
    >
      <div
        style={{
          width: "1.5rem",
          height: widthLine,
          backgroundColor: colorLines,
          position: "absolute",
          right: "0rem",
          display: "flex",
          alignItems: "center",
          bottom: "2rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            left: "0rem",
          }}
        ></div>
      </div>
      <div
        style={{
          width: sizeCircle,
          height: sizeCircle,
          backgroundColor: colorLines,
          position: "absolute",
          borderRadius: "50%",
          top: "0rem",
        }}
      ></div>
    </div>
  );
};

const Line6 = () => {
  return (
    <div
      style={{
        width: widthLine,
        height: "1.5rem",
        backgroundColor: colorLines,
        position: "absolute",
        right: "4.5rem",
        display: "flex",
        alignItems: "center",
        bottom: "0rem",
      }}
    >
      <div
        style={{
          width: "1.5rem",
          height: widthLine,
          backgroundColor: colorLines,
          position: "absolute",
          right: "0rem",
          display: "flex",
          alignItems: "center",
          top: "0rem",
        }}
      >
        <div
          style={{
            width: sizeCircle,
            height: sizeCircle,
            backgroundColor: colorLines,
            position: "absolute",
            borderRadius: "50%",
            left: "0rem",
          }}
        ></div>
      </div>
    </div>
  );
};

const Line7 = () => {
  return (
    <div
      style={{
        width: widthLine,
        height: "3rem",
        backgroundColor: colorLines,
        position: "absolute",
        right: "6.5rem",
        display: "flex",
        justifyContent: "center",
        bottom: "0rem",
      }}
    >
      <div
        style={{
          width: sizeCircle,
          height: sizeCircle,
          backgroundColor: colorLines,
          position: "absolute",
          borderRadius: "50%",
          top: "0rem",
        }}
      ></div>
    </div>
  );
};

const StyleCard = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "10rem",
        position: "absolute",
        right: "0rem",
        zIndex: "1",
      }}
    >
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />
      <Line6 />
      <Line7 />
    </div>
  );
};

export const CardProf = ({ name, areas, image, dataProf, isModal, handleOpen }) => {

  return (
    <div
      onClick={() => {
        if(!isModal) {
          handleOpen(dataProf)
        } 
      }}
      className="card"
      style={{
        margin: "1rem",
        width: "100%",
        maxWidth: "500px",
        background: "linear-gradient(45deg, dodgerblue, rgb(30, 30, 256))",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        minHeight: "14rem",
        height: "auto",
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
          position: "relative",
        }}
      >
        <StyleCard />
        <p
          className="nameProf"
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
            width: "100%",
            paddingLeft: "1rem",
            zIndex: "2",
          }}
        >
          {name}
        </p>
        <div
          style={{
            width: "100%",
            marginTop: "1rem",
            zIndex: "2",
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
                <p style={{ marginTop: ".5rem" }} className="nameAreas">
                  {elem.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
