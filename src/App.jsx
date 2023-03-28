import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import { navigate } from "./navigations";
import { routes } from "./views/Representations/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navigate &&
          navigate.map((elem, key) => {
            return (
              <Route key={key} path={elem.path} element={ elem.template ? <Template element={elem.component} /> : elem.component} />
            );
          })}
        {routes &&
          routes.map((elem, key) => {
            return (
              <Route key={key} path={elem.path} element={ elem.template? <Template element={elem.component} /> : elem.component} />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
