import "./MembersCarrousel.css"
import React, { useState } from "react";
import CardB from "../components/Cardbugados/index"

const MembersCarrousel = ({ members, func }) => {
  const memberIndexDestacs = members.length == 3 ? 1 : 2;
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
        gap: ".5rem",
      }}
    >
      {members &&
        members?.map((elem, key) => {
          if (members.length == 1) {
            const member = members[0]
            return (
              <div
                onClick={func}
                key={member}
                style={{
                  width: "5.5rem",
                  height: '5.5rem',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={member.img}
                  style={{
                    width: "100%",
                    height: '100%',
                    backgroundColor: "#111",
                  }}
                  alt="members"
                />
              </div>
            )
          } 
          if (key === memberIndexDestacs) {
            return (
              <div
                className="middle-img"
                key={key}
                style={{
                  height: '5rem',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={elem.img}
                  onClick={func}
                  style={{
                    width: "100%",
                    height: '100%',
                    backgroundColor: "#111",
                  }}
                  alt="members"
                />
              </div>
            );
          } else if (
            members.length < 4 ||
            key === memberIndexDestacs - 1 ||
            key === memberIndexDestacs + 1
          ) {
            return (
              <div
                className="side-img"
                key={key}
                style={{
                }}
              >
                <img
                  src={elem.img}
                  style={{
                    width: "100%",
                    height: '100%',
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
