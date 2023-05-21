import React, { useEffect, useState } from "react";
import { areas } from "../../utils/utils_areas";
import CardArea from "./CardAreas";
import { Pagination } from "../Profs/Pagination";
import './MenuAreas.css'

const MenuAreas = () => {
  const [pagination, setPagination] = useState(0);
  const [listAreas, setListAreas] = useState(areas);
  const [pages, setPages] = useState([]);
  const [data, setData] = useState([]);

  const handleChangePage = (page) => {
    setPagination(page);
  };

  const renderItems = () => {
    const startPage = pagination * limitPerPage;
    const endPage = startPage + limitPerPage;
    setData(listAreas.slice(startPage, endPage));
  };

  const renderPagination = () => {
    const page = [];
    for (let index = 1; index <= totalPages; index++) {
      page.push(index);
    }
    setPages(page);
  };

  const limitPerPage = 6;
  const totalPages = Math.ceil(areas.length / limitPerPage);

  useEffect(() => {
    renderItems();
    renderPagination();
  }, []);

  useEffect(() => {
    renderItems();
  }, [pagination]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
         className="gridareas"
      >
        {data.map((area) => {
          return (
            <CardArea
              link={area.link}
              imagem={area.image}
              descricao={area.description}
              titulo={area.name}
            />
          );
        })}
      </div>
      <Pagination
        handleChangePage={handleChangePage}
        pages={pages}
      ></Pagination>
    </div>
  );
};

export default MenuAreas;
