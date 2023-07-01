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
} from "react-icons/ai";
import { templateMessages } from "../utils/utils_content_messages";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import "./template.css";

const Template = ({ element, isHome, title }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreen = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  const handleChangeMenu = (path) => {
    window.location = path;
  };

  const redirect = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div style={{ width: "100%", height: "auto" }}>
      {widthScreen < 950 && (
        <Menu>
          <MenuButton
            colorScheme="blue"
            as={IconButton}
            icon={<HamburgerIcon />}
            style={{
              border: "none",
              position: "fixed",
              zIndex: "1000",
              right: "2rem",
              top: "2rem",
            }}
          ></MenuButton>
          <MenuList bg="#fff" zIndex="1000">
            {navigate.map((elem, key) => {
              return (
                <li key={key} style={{ marginTop: "1rem" }}>
                  <MenuItem
                    color="#aaf"
                    fontSize="15px"
                    bg="#fff"
                    transition="all .1s linear"
                    _hover={{
                      bg: "#f1f1f1",
                      color: "#aaf",
                      border: "none",
                      transition: "all .1s linear",
                    }}
                    onClick={() => handleChangeMenu(elem.path)}
                  >
                    {elem.name}
                  </MenuItem>
                </li>
              );
            })}
          </MenuList>
        </Menu>
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
            {widthScreen >= 950 &&
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
      <main style={{ backgroundColor: "#fafafa", paddingBottom: "2rem" }}>
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
              <ButtonEffect onClick={() => window.location = '/contact'}>
                Visite-nos para saber mais
              </ButtonEffect>
            </>
          )}
          {!isHome && <TitlePage>{title}</TitlePage>}
        </section>
        <section className="mainSection">{element}</section>
      </main>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "dodgerblue",
          borderRadius: "15px 15px 0px 0px",
        }}
      >
        <div className="dispositionFooter">
          <div className="dispositionAbout">
            <p style={{ fontSize: "20px" }}>Sobre</p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "16px",
                maxWidth: "600px",
                marginTop: "1rem",
              }}
            >
              {templateMessages.about}
            </p>
          </div>
          <div className="iconsControl">
            <p style={{ fontSize: "20px" }}>Contatos</p>
            <div className="dispositionIcons">
              <AiFillFacebook style={{ fontSize: "1.5rem" }} />
              facebook
            </div>
            <div className="dispositionIcons">
              <AiFillTwitterSquare style={{ fontSize: "1.5rem" }} />
              twitter
            </div>
            <div className="dispositionIcons">
              <AiFillInstagram style={{ fontSize: "1.5rem" }} />
              instagram
            </div>
            <div className="dispositionIcons">
              <AiFillLinkedin style={{ fontSize: "1.5rem" }} />
              linkedin
            </div>
          </div>
        </div>
        <div
          style={{
            width: "calc(100% - 2rem)",
            borderTop: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <p
            style={{
              color: "#fff",
            }}
          >
            Feito por Projeto Root, 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Template;
