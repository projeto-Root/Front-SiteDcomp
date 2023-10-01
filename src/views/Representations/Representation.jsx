import React, { useEffect, useState } from "react";
import { ButtonChangePage, LogoGroup } from "../../components/core-atoms";
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";
import MembersCarrousel from "../../components/MembersCarrousel";
import { lorem } from "../../utils/utils_content_messages";
import CardGeneric from "../../components/CardGeneric";
import "./Representation.css";
import { members } from './members'
import { dataRepresents2 } from "../../utils/utils_represents";
import CardB from "../../components/Cardbugados";
import CardC from "../../components/Cardcalicomp"
import CardS from "../../components/Cardsofteam"
import { Modal } from "antd";

const Representations = ({ data }) => {
  const [orderMembers, setOrderMembers] = useState(Object.values(members[data.title].members));
  const [showModal, setShowModal] = useState(false)
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
  const RepresentationText = () => {
    switch (data.title.toUpperCase()) {
      case "BUGADOS":
        return dataRepresents2[2]
      case "SOFTEAM":
        return dataRepresents2[1]

      case "CALICOMP":
        return dataRepresents2[0]
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        width: "100%",
        margin: "2rem 0rem",
      }}
    >
      <LogoGroup src={data.image}></LogoGroup>
      <h1 style={{ marginTop: "1rem", color: "#222", textAlign: "center" }}>
        O que é {data.title.toUpperCase()}
      </h1>
      <section className="representation">{RepresentationText()}</section>
      <h2 style={{ color: "#222", marginTop: "1rem", textAlign: "center" }}>
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
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {data?.projects &&
          data.projects.map((elem, key) => {
            return <CardGeneric maximize={true} key={key} data={elem} link={elem.link} />;
          })}
      </section>
      <section>
        {data?.title != "Softeam" && (
          <>
            <h2
              style={{ color: "#222", marginTop: "3rem", textAlign: "center" }}
            >
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
                  gap: '1rem'
                }}
              >
                <button className="anterior"
                  onClick={() => handleCircularList("previous")}
                >
                  <img src={Previous} alt="voltar" style={{ width: "100%" }} />
                </button>
                <MembersCarrousel members={orderMembers} func={() => setShowModal(!showModal)}/>
                <button className="posterior"
                  onClick={() => handleCircularList("next")}
                >
                  <img src={Next} alt="proximo" style={{ width: "100%" }} />
                </button>
              </div>
            </div>
          </>
        )}
        {/* <div
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
        </div> */}
      </section>
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        width={600}
      >
        {data.title.toUpperCase() == "BUGADOS" ? <CardB name={orderMembers[2].name} img={orderMembers[2].img} cargo={orderMembers[2].cargo}/> : <CardC name={orderMembers[2].name} img={orderMembers[2].img} cargo={orderMembers[2].cargo}/>}
      </Modal>
    </div>
  );
};

export default Representations;
