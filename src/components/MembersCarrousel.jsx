import React from "react";

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
        gap: "1rem",
      }}
    >
      {members &&
        members?.map((elem, key) => {
          if (key === memberIndexDestacs) {
            return (
              <div
                key={key}
                style={{
                  width: "6rem",
                  height: '6rem',
                  borderRadius: '50%',
                  overflow: 'hidden'
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
          } else if (
            key === memberIndexDestacs - 1 ||
            key === memberIndexDestacs + 1
          ) {
            return (
              <div
                key={key}
                style={{
                  width: "4rem",
                  height: '4rem',
                  borderRadius: '50%',
                  overflow: 'hidden'
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
