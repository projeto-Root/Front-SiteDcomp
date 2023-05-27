import React, { useEffect, useState } from "react";
import { CardProf } from "./CardProf";
import { profsInfo } from "../../utils/utils_profs";
import { Pagination } from "./Pagination";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";

export const Profs = () => {
  const [pagination, setPagination] = useState(0);
  const [listProfs, setListProfs] = useState(profsInfo);
  const [pages, setPages] = useState([]);
  const [data, setData] = useState([]);
  const limitPerPage = 8;
  const totalPages = Math.ceil(profsInfo.length / limitPerPage);

  const [currentPage, setCurrentPage] = useState("0");

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
    setPagination(page);
    setCurrentPage(page);
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
          style={{
            textAlign: "justify",
            margin: "2rem 4rem",
          }}
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
          handleChangePage={handleChangePage}
          pages={pages}
          page={currentPage}
        />
      </div>
      <Modal isOpen={open} onClose={handleClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-1rem -2rem' }}>
            {dataProf && (
              <CardProf
                name={dataProf.name}
                areas={dataProf.areas}
                image={dataProf.image}
                isModal={true}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Box style={{ display: 'flex', gap: '1rem' }}>
              <Button colorScheme="purple" size='sm' onClick={() => window.location = '/menuareas'}>Menu das áreas</Button>
              <Button size='sm' onClick={handleClose}>Fechar</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
