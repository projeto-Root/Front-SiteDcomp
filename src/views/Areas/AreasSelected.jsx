import React, { useEffect, useState } from "react";
import { dataMenuAreas } from "../../utils/utils_menu_areas";
import "./Area.css";
import { idVideo } from "../../utils/utils";
import Next from "../../assets/next.svg";
import { profsArea } from "./profsArea"
import MembersCarrousel from "../../components/MembersCarrousel"
import Previous from "../../assets/previous.svg";
import { Modal, Pagination } from "antd";
import { CardProf } from "../Profs/CardProf";
import { members } from "../Representations/members";

const AreasSelected = ({ data }) => {
  const [memberSelect, setMemberSelect] = useState()
  console.log(memberSelect)
  const [open, setOpen] = useState(false)
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  console.log(data)
  const [orderProfs, setOrderProfs] = useState(Object.values(profsArea[data].profsArea));
  console.log(orderProfs)
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
  useEffect(() => {
    if (orderProfs){
      setMemberSelect(orderProfs.length == 3 ? 1 : orderProfs.length == 1 ? 0 : 2)
    }
    
  }, [orderProfs])
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
          <MembersCarrousel members={orderProfs} func={()=>setOpen(!open)}/>
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
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        cancelText="Cancel"
        onOk={() => setOpen(false)}
        okText="Ok"
        width={600}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {orderProfs.length > 0 && (
            <CardProf
              name={orderProfs[orderProfs.length == 3 ? 1 : orderProfs.length == 1 ? 0 : 2].name}
              areas={orderProfs[orderProfs.length == 3 ? 1 : orderProfs.length == 1 ? 0 : 2].areas}
              image={orderProfs[orderProfs.length == 3 ? 1 : orderProfs.length == 1 ? 0 : 2].img}
              isModal={true}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default AreasSelected;
