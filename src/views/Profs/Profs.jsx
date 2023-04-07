import React, { useEffect, useState } from "react";
import { CardProf } from "./CardProf";
import { profsInfo } from "../../utils/utils_profs";
import { Pagination } from "./Pagination";

export const Profs = () => {
  const [pagination, setPagination] = useState(0);
  const [listProfs, setListProfs] = useState(profsInfo);
  const [pages, setPages] = useState([]);
  const [data, setData] = useState([]);
  const limitPerPage = 8;
  const totalPages = Math.ceil(profsInfo.length / limitPerPage);

  const [widthPage, setWidthPage] = useState(window.innerWidth)

  const handleChangePage = (page) => {
    setPagination(page);
  };

  const renderItems = () => {
    const startPage = pagination * limitPerPage;
    const endPage = startPage + limitPerPage;
    setData(listProfs.slice(startPage, endPage));
  };

  const renderPagination = () => {
    const page = [];
    for (let index = 1; index <= totalPages; index++) {
      page.push(index);
    }
    setPages(page);
  };

  useEffect(() => {
    renderPagination();
    renderItems();
  }, []);

  useEffect(() => {
    renderItems();
  }, [pagination]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "1200px",
        justifyContent: "center"
      }}>
        {data.map((elem, key) => {
          return (
            <CardProf
              key={key}
              name={elem.name}
              areas={elem.areas}
              image={elem.image}
            />
          );
        })}
      </div>
      <Pagination handleChangePage={handleChangePage} pages={pages} />
    </div>
  );
};
