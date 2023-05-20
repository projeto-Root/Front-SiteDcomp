import React, { useState } from "react";
import CardProJect from "../../components/CardProject";
import { ButtonChangePage, LogoGroup } from "../../components/core-atoms";
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";
import MembersCarrousel from "../../components/MembersCarrousel";
import { lorem } from "../../utils/utils_content_messages";

const Representations = ({ data }) => {
  const [orderMembers, setOrderMembers] = useState(data.members);

  const handleCircularList = (operation) => {
    if (operation === "next")
      return setOrderMembers([
        ...orderMembers.slice(1, orderMembers.length),
        orderMembers[0],
      ]);
    if (operation === "previous")
      return setOrderMembers([
        orderMembers[orderMembers.length - 1],
        ...orderMembers.slice(0, orderMembers.length - 1),
      ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <LogoGroup src={data.image}></LogoGroup>
      <h1 style={{ marginTop: "1rem", color: "#222", textAlign: 'center' }}>
        O que é {data.title.toUpperCase()}
      </h1>
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "2rem",
          color: "#333",
          textAlign: 'center'
        }}
      >
        {lorem}
      </section>
      <h2 style={{ color: "#222", marginTop: "1rem", textAlign: 'center' }}>
        Projetos do {data.title.toUpperCase()}
      </h2>
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        {data?.projects &&
          data.projects.map((elem, key) => {
            return <CardProJect key={key} card={elem} />;
          })}
      </section>
      <section>
        <h2 style={{ color: "#222", marginTop: "3rem", textAlign: "center" }}>
          Membros do {data.title.toUpperCase()}
        </h2>
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
        <div
          style={{
            maxWidth: "30rem",
            width: "auto",
            margin: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ButtonChangePage>Retornar</ButtonChangePage>
          <ButtonChangePage>Próxima</ButtonChangePage>
        </div>
      </section>
    </div>
  );
};

export default Representations;
