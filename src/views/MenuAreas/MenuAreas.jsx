import React, { useEffect, useState } from "react";
import { areas } from "../../utils/utils_areas";
import './MenuAreas.css'
import { Spinner } from "@chakra-ui/react";
import CardGeneric from "../../components/CardGeneric";
import { Pagination } from "antd";

const MenuAreas = () => {
  const [pagination, setPagination] = useState(0);
  const [listAreas] = useState(areas);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)

  const handleChangePage = (page) => {
    setPagination(page-1);
    setPage(page-1)
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

  const limitPerPage = 10;

  useEffect(() => {
    renderItems();
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
              style={{ marginTop: '1rem' }}
            />
          );
        })}
      </div>
      <Pagination onChange={handleChangePage} defaultCurrent={page} total={listAreas?.length}/>
    </div>
  );
};

export default MenuAreas;
