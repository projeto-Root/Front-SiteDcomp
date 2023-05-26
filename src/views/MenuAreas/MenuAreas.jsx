import React, { useEffect, useState } from "react";
import { areas } from "../../utils/utils_areas";
import CardArea from "./CardAreas";
import { Pagination } from "../Profs/Pagination";
import './MenuAreas.css'
import { Spinner } from "@chakra-ui/react";
import CardGeneric from "../../components/CardGeneric";

const MenuAreas = () => {
  const [pagination, setPagination] = useState(0);
  const [listAreas, setListAreas] = useState(areas);
  const [pages, setPages] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState('0')

  const handleChangePage = (page) => {
    setPagination(page);
    setPage(page)
  };

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [data])

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
        {loading && <Spinner margin='1rem'/>}
        {!loading && data.map((area) => {
          return (
            <CardGeneric
              link={area.link}
              data={area}
            />
          );
        })}
      </div>
      <Pagination
        handleChangePage={handleChangePage}
        pages={pages}
        page={page}
      ></Pagination>
    </div>
  );
};

export default MenuAreas;
