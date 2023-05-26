import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { lorem } from "../../utils/utils_content_messages";
import MembersCarrousel from "../../components/MembersCarrousel";
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";

const AreasSelected = ({ data }) => {
  const [orderMembers, setOrderMembers] = useState(data?.members);

  const handleCircularList = (operation) => {
    if (operation === "next")
      return setOrderMembers([
        ...orderMembers?.slice(1, orderMembers?.length),
        orderMembers[0],
      ]);
    if (operation === "previous")
      return setOrderMembers([
        orderMembers[orderMembers?.length - 1],
        ...orderMembers?.slice(0, orderMembers?.length - 1),
      ]);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        gap: "2rem",
      }}
    >
      <Box
        style={{
          height: "4rem",
          width: "4rem",
          backgroundColor: "dodgerblue",
        }}
      ></Box>
      <Box>
        {data && (
          <>
            {/* {data.img ? <p>{data.img}</p> : ''}
            {data.topic ? <p>{data.topic}</p> : ''}
            {data.content ? <p>{data.content}</p> : ''}
            {data.name ? <p>{data.name}</p> : ''} */}
          </>
        )}
      </Box>
      <div
        style={{
          maxWidth: "30rem",
          width: "auto",
          height: "8rem",
          margin: "2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "3rem",
              height: "3rem",
              padding: ".8rem",
              borderRadius: "50%",
              border: "1px solid #333",
              backgroundColor: "#fff",
              cursor: "pointer",
              marginTop: "3rem",
            }}
            onClick={() => handleCircularList("previous")}
          >
            <img src={Previous} alt="voltar" style={{ width: "100%" }} />
          </button>
          <MembersCarrousel members={orderMembers} />
          <button
            style={{
              width: "3rem",
              height: "3rem",
              padding: ".8rem",
              borderRadius: "50%",
              border: "1px solid #333",
              backgroundColor: "#fff",
              cursor: "pointer",
              marginTop: "3rem",
            }}
            onClick={() => handleCircularList("next")}
          >
            <img src={Next} alt="proximo" style={{ width: "100%" }} />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default AreasSelected;
