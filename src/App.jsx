import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import { navigations } from "./navigations";

//O esquema de rotas da aplicação é definido neste arquivo, ele não precisa ser alterado por enquanto
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {navigations.map((elem, key) => {
            return (
              <Route key={key} path={elem.path} element={ elem.template ? <Template element={elem.component} isHome={elem.isHome} title={elem.title} /> : elem.component} />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
