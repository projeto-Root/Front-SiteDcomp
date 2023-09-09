import React, { useEffect, useState } from "react";
import { dataMenuAreas } from "../../utils/utils_menu_areas";
import "./Area.css";
import { idVideo } from "../../utils/utils";
import Next from "../../assets/next.svg";
import { profsArea } from "./profsArea"
import MembersCarrousel from "../../components/MembersCarrousel"
import Previous from "../../assets/previous.svg";

const AreasSelected = ({ data }) => {

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const [orderProfs, setOrderProfs] = useState(Object.values(profsArea["Aprendizado de Máquina"].profsArea));
  const handleCircularList = (operation) => {
    if (operation === "next")
      return setOrderProfs([
        ...orderProfs.slice(1, orderProfs.length),
        orderProfs[0],
      ]);
    if (operation === "previous")
      return setOrderProfs([
        orderProfs[orderProfs.length - 1],
        ...orderProfs.slice(0, orderProfs.length - 1),
      ]);   
  };
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
      {data && (
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "2rem",
          }}
        >
          {data}
        </p>
      )}
      {data &&
        dataMenuAreas[data]?.content?.map((elem, index) => {
          return (
            <>
              {elem.icon && (
                <img
                  key={index}
                  src={elem.icon}
                  style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
                />
              )}
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "2rem",
                }}
              >
                {elem.topic}
              </p> 
              <p className="area">{elem.content}</p>
              {elem.img && <img style={{ marginTop: '2rem' }} src={elem.img} alt={data}/>}
              {elem.video && (
                <iframe
                  id="player"
                  type="text/html"
                  width={widthScreen > 600 ? '500' : widthScreen > 500 ? '400' : '300'}
                  height={widthScreen > 600 ? '300' : widthScreen > 500 ? '250' : '200'}
                  style={{ marginTop: '2rem' }}
                  src={`https://www.youtube.com/embed/${idVideo(elem.video)}?autoplay=0`}
                  frameborder="0"
                ></iframe>

              )}
            </>
          );
        })}
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
          <button
            style={{
              width: "2.5rem",
              height: "2.5rem",
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
          <MembersCarrousel profs={orderProfs} />
          <button
            style={{
              width: "2.5rem",
              height: "2.5rem",
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
    </>
  );
};

export default AreasSelected;
