import React from "react";
import User from "../assets/user.svg";

const MembersCarrousel = ({ members }) => {
  const memberIndexDestacs = 2;

  return (
    <div
      style={{
        height: "100%",
        maxWidth: "26rem",
        width: "calc(100% - 6rem)",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "1rem"
      }}
    >
      {members &&
        members.map((elem, key) => {
          if (key === memberIndexDestacs) {
            return (
              <div
                key={key}
                style={{
                  width: "30%"
                }}
              >
                <img
                  src={elem.img || User}
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                  alt="members"
                />
              </div>
            );
          } else if (
            key === memberIndexDestacs - 1 ||
            key === memberIndexDestacs + 1
          ) {
            return (
              <div
                key={key}
                style={{
                  width: "20%"
                }}
              >
                <img
                  src={elem.img || User}
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                  alt="members"
                />
              </div>
            );
          }
        })}
    </div>
  );
};

export default MembersCarrousel;
