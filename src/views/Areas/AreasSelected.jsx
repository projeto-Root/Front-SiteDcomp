import React, { useEffect, useState } from "react";
import { dataMenuAreas } from "../../utils/utils_menu_areas";
import "./Area.css";
import { idVideo } from "../../utils/utils";

const AreasSelected = ({ data }) => {

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
              {elem.video && (
                <iframe
                  id="player"
                  type="text/html"
                  width={widthScreen > 600 ? '500' : widthScreen > 500 ? '400' : '300'}
                  height={widthScreen > 600 ? '300' : widthScreen > 500 ? '250' : '200'}
                  style={{ marginTop: '2rem' }}
                  src={`http://www.youtube.com/embed/${idVideo(elem.video)}?autoplay=0`}
                  frameborder="0"
                ></iframe>
              )}
            </>
          );
        })}
    </>
  );
};

export default AreasSelected;
