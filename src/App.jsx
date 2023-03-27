import React from "react";
import "./App.css";
import Representations from "./views/Representations/Representations";
import Calicomp from "./assets/LOGOCALICOMPSVG.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import Home from "./views/Home/Home";

const App = () => {
  //Arrays criados para testes
  const Projects = [
    {
      name: "Projeto 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
    {
      name: "Projeto 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
    {
      name: "Projeto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
  ];

  const Members = [
    {
      name: "Pablo",
      img: "",
    },
    {
      name: "Gyovani",
      img: "",
    },
    {
      name: "Ícaro",
      img: "",
    },
    {
      name: "Fernanda",
      img: "",
    },
    {
      name: "Vinícius",
      img: "",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template element={<Home />} />} />
        
        {/*   AQUI VOCÊ SUBSTITUI O COMPONENTE <Home /> PELO SEU COMPONETE DE REPRESENTAÇÕES */}
        <Route path="/represents" element={<Template element={<Home />}/> } />
        
        {/*  ROTA CRIADA SOMENTE PARA DEMONSTRAÇÃO DOS COMPONENTES DE REPRESENTAÇÕES  */}
        <Route
          path="/representsComponents"
          element={
            <Template
              element={
                <Representations
                  projects={Projects}
                  title={"Calicomp"}
                  image={Calicomp}
                  members={Members}
                />
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
