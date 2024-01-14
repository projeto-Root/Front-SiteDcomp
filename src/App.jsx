import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import { navigations } from "./navigations";
import { ChakraProvider } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";

//O esquema de rotas da aplicação é definido neste arquivo, ele não precisa ser alterado por enquanto
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {navigations.map((elem, key) => {
            return (
              <Route
                key={key}
                path={elem.path}
                element={
                  elem.template ? (
                    <Template
                      element={elem.component}
                      isHome={elem.isHome}
                      title={elem.title}
                    />
                  ) : (
                    elem.component
                  )
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      <CookieConsent
      buttonStyle={{borderRadius: '6px',
      background: '#1677ff',
      color: '#fff'}}
      style={{background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff'}}
      buttonText={'Aceitar'}
      >Caro usuário, gostaríamos de informar que em conformidade com a Lei Geral de Proteção de Dados (LGPD), nosso site não faz uso de cookies para coleta de informações pessoais. Priorizamos sua privacidade e segurança online. Caso tenha alguma dúvida ou necessite de mais esclarecimentos sobre nossa política de privacidade, por favor, não hesite em nos contatar.
      Atenciosamente, LAWD.
      </CookieConsent>
    </ChakraProvider>
  );
};

export default App;
