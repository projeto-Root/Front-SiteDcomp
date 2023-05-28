import React, { useEffect, useState } from "react";
import { CardProf } from "./CardProf";
import { profsInfo } from "../../utils/utils_profs";
import { Modal, Pagination } from "antd";
import { Spinner } from "@chakra-ui/react";
import './Profs.css'

export const Profs = () => {
  const [pagination, setPagination] = useState(0);
  const [listProfs] = useState(profsInfo);
  const [data, setData] = useState([]);
  const limitPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [dataProf, setDataProf] = useState({});

  const handleOpen = (data, isModal) => {
    setOpen(true);
    setDataProf(data);
  };

  const handleClose = () => {
    setOpen(false);
    setDataProf({});
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [data]);

  const handleChangePage = (page) => {
    setPagination(page - 1);
    setCurrentPage(page - 1);
  };

  const renderItems = () => {
    const startPage = pagination * limitPerPage;
    const endPage = startPage + limitPerPage;
    setData(listProfs.slice(startPage, endPage));
  };

  useEffect(() => {
    renderItems();
  }, [pagination]);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "25px", marginTop: "2rem" }}>
          Docentes Efetivos
        </h2>
        <p
          className="prof"
        >
          Em 2022, os Docentes Efetivos do Departamento de Computação
          apresentavam a pontuação máxima (5) no <strong>IQCD</strong>, que é um
          indicador de desempenho adotado em instituições de ensino superior,
          principalmente aquelas que mantêm uma produção científica. Seu valor
          varia de 1 (todos os professores possuem apenas graduação) até 5,
          situação em que todos os docentes são doutores.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1200px",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {loading && <Spinner margin="1rem" />}
          {!loading &&
            data.map((elem, key) => {
              return (
                <CardProf
                  key={key}
                  name={elem.name}
                  areas={elem.areas}
                  image={elem.image}
                  dataProf={elem}
                  handleOpen={handleOpen}
                />
              );
            })}
        </div>
        <Pagination
          onChange={handleChangePage}
          defaultCurrent={currentPage}
          total={listProfs?.length}
        />
      </div>
      <Modal
        open={open}
        onCancel={handleClose}
        cancelText="Área 1"
        onOk={handleClose}
        okText="Área 2"
        width={600}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {dataProf && (
            <CardProf
              name={dataProf.name}
              areas={dataProf.areas}
              image={dataProf.image}
              isModal={true}
            />
          )}
        </div>
      </Modal>
    </>
  );
};
