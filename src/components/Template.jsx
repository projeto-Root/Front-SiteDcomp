import React, { useEffect, useState } from "react";
import { navigate } from "../navigations";
import DCOMP from "../assets/dcomp.jpg";
import BACKGROUND from "../assets/background.jpg";
import { ButtonEffect, MenuOption, TitlePage } from "./core-atoms";
import LOGO from "../assets/logo.png";
import DCOMPICON from "../assets/dcomp-icon.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { templateMessages } from "../utils/utils_content_messages";

const Template = ({ element, isHome, title }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  useEffect(() => {
    if (widthScreen <= 850) {
      console.log("mobile");
    } else {
      setOpenMenu(false);
    }
  }, [widthScreen]);

  const redirect = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div style={{ width: "100%", height: "auto" }}>
      {widthScreen < 850 && (
        <aside
          style={{
            height: "100vh",
            width: openMenu ? "100%" : "0",
            maxWidth: "20rem",
            backgroundColor: "#228",
            position: "fixed",
            zIndex: "1000",
            right: "0",
            transition: "all .3s ease-in-out",
          }}
        >
          <div style={{}}>
            {!openMenu && (
              <AiOutlineMenu
                onClick={() => setOpenMenu(true)}
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  cursor: "pointer",
                  position: "fixed",
                  top: "3rem",
                  transition: "all .3s ease-in-out",
                  right: "4rem",
                }}
              />
            )}
            {openMenu && (
              <AiOutlineClose
                onClick={() => setOpenMenu(false)}
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  cursor: "pointer",
                  position: "fixed",
                  top: "3rem",
                  transition: "all .3s ease-in-out",
                  right: "4rem",
                }}
              />
            )}
          </div>
          <nav
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "6rem",
              overflow: "hidden",
            }}
          >
            {widthScreen < 850 &&
              navigate.map((elem, key) => {
                return (
                  <li key={key} style={{ marginTop: "1rem" }}>
                    <MenuOption style={{ fontSize: "20px" }} href={elem.path}>
                      {elem.name}
                    </MenuOption>
                  </li>
                );
              })}
          </nav>
        </aside>
      )}
      <header
        style={{
          height: "7rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          zIndex: 999,
          paddingRight: "3rem",
          paddingLeft: "3rem",
        }}
      >
        <img
          src={LOGO}
          alt="logo"
          style={{
            height: "5rem",
          }}
        />
        <nav
          style={{
            width: "auto",
          }}
        >
          <ul
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              flexDirection: "row",
            }}
          >
            {widthScreen >= 850 &&
              navigate.map((elem, key) => {
                return (
                  <li key={key}>
                    <MenuOption href={elem.path}>{elem.name}</MenuOption>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
      <main>
        <section
          style={{
            height: isHome ? "100vh" : "50vh",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${
              isHome ? DCOMP : BACKGROUND
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          {isHome && (
            <>
              <img src={DCOMPICON} alt="dcomp" />
              <TitlePage>Departamento de Computação</TitlePage>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "14px",
                  marginTop: "1rem",
                  maxWidth: "700px",
                }}
              >
                {templateMessages.apresentationDepartment}
              </p>
              <ButtonEffect onClick={redirect}>
                Visite-nos para saber mais
              </ButtonEffect>
            </>
          )}
          {!isHome && <TitlePage>{title}</TitlePage>}
        </section>
        <section style={{ margin: "1rem 0rem" }}>{element}</section>
      </main>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#000", fontWeight: "bold" }}>Sobre nós</h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            marginTop: "1rem",
            maxWidth: "1200px",
            width: "100%",
            padding: "0rem 3rem",
          }}
        >
          {templateMessages.about}
        </p>
        <div
          style={{
            color: "#77c",
            margin: "1rem",
            display: 'flex'
          }}
        >
          <AiFillFacebook style={{ fontSize: "1.5rem" }} />
          <AiFillTwitterSquare style={{ fontSize: "1.5rem" }} />
          <AiFillInstagram style={{ fontSize: "1.5rem" }} />
          <AiFillLinkedin style={{ fontSize: "1.5rem" }} />
        </div>
        <p
          style={{
            marginBottom: "1rem",
          }}
        >
          Feito por Project Root
        </p>
      </footer>
    </div>
  );
};

export default Template;
