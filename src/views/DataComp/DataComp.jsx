import React, { useEffect, useState } from "react";
import "./DataComp.css";

const DataComp = () => {
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

  return (
    <>
      <h2 style={{ fontWeight: "bold", fontSize: "25px", marginTop: "2rem" }}>
        DATACOMP
      </h2>
      <p className="datacomp">
        O DataComp é um serviço desenvolvido pelo Project Root, focado em
        oferecer uma análise de Business Intelligence a respeito de dados
        relacionados ao Departamento de Computação. É possível visualizar
        graficamente a distribuição dos professores nas áreas da computação,
        além de verificar relações entre essas áreas e subáreas.
      </p>
      <iframe
        style={{
          marginTop: "2rem",
          border: "1px solid rgba(0,0,0,.2)",
          borderRadius: "10px",
        }}
        title="painel-profs"
        width={
          widthScreen > 1050
            ? "1000"
            : widthScreen > 850
            ? "800"
            : widthScreen > 650
            ? "600"
            : widthScreen > 410
            ? "400"
            : widthScreen > 300
            ? "300"
            : "275"
        }
        height={
          widthScreen > 1050
            ? "630"
            : widthScreen > 850
            ? "500"
            : widthScreen > 650
            ? "375"
            : widthScreen > 410
            ? "300"
            : "225"
        }
        src="https://app.powerbi.com/view?r=eyJrIjoiNzJhM2VlZjUtYmVhMi00NGE2LTk2N2EtY2U1MTI0NDQ4MDExIiwidCI6IjhlNTRmODJjLTBmOWQtNGE2Ny1iNTZlLTk5M2I3Y2ExOWVmMiJ9"
        frameborder="1"
        // allowFullScreen="true"
      ></iframe>
    </>
  );
};

export default DataComp;
