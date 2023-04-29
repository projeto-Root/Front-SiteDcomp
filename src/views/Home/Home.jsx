import { Box } from "@chakra-ui/react";
import React from "react";
import {
  dcompHomeIntroduction,
  descriptionOfComments,
  descriptionOfCourses,
  descriptionOfEstructures,
} from "../../utils/utils_home";
import CardGeneric from "../../components/CardGeneric";
import CardComment from "../../components/CardComment";
import { ButtonAbout, ButtonEffect } from "../../components/core-atoms";
import VenhaFazerParte from '../../assets/venha-fazer-parte.jpg'

const Home = () => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem 4rem",
        }}
      >
        <h2 style={{ fontSize: "35px", fontWeight: "600" }}>Cursos</h2>
        <p
          style={{
            textAlign: "center",
            fontWeight: "300",
            fontSize: "14px",
            marginTop: "1rem",
            maxWidth: "1200px",
          }}
        >
          {dcompHomeIntroduction}
        </p>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            rowGap: "3rem",
            columnGap: "4rem",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          {descriptionOfCourses.map((elem, key) => {
            return <CardGeneric data={elem} key={key} />;
          })}
        </Box>
        <h2 style={{ fontSize: "35px", fontWeight: "600", marginTop: "3rem", textAlign: 'center' }}>
          Nossa estrutura
        </h2>
        <p style={{ fontSize: "14px", fontWeight: "300", marginTop: "1rem", textAlign: 'center' }}>
          Conheça um pouco mais da estrutura localizada em nosso Departamento.
        </p>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            rowGap: "3rem",
            columnGap: "4rem",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          {descriptionOfEstructures.map((elem, key) => {
            return <CardGeneric data={elem} key={key} />;
          })}
        </Box>
        <h2 style={{ fontSize: "35px", fontWeight: "600", marginTop: "3rem", textAlign: 'center' }}>
          O que nossos estudantes dizem
        </h2>
        <p style={{ fontSize: "14px", fontWeight: "300", marginTop: "1rem", textAlign: 'center' }}>
          Confira alguns depoimentos de nossos alunos sobre a experiência deles
          nos cursos do DCOMP.
        </p>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            maxWidth: '1200px'
          }}
        >
          {descriptionOfComments.map((elem, key) => {
            return <CardComment data={elem} key={key} />;
          })}
        </Box>
        <Box
          style={{
            width: "100%",
            minHeight: "20rem",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${VenhaFazerParte})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            margin: '3rem',
            maxWidth: '1200px',
            padding: '3rem 2rem',
          }}
        >
          <p style={{ color: 'white', fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>
            Escolha um de nossos cursos e venha fazer parte dessa jornada de
            aprendizado.
          </p>
          <ButtonEffect>Contate-nos</ButtonEffect>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
