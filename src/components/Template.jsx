import React from "react";

const Template = ({ element }) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <header style={{
        height: "4rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row-reverse",
      }}>
        <nav style={{
            height: "100%",
            width: "auto",
        }}>
            <ul style={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexDirection: "row",
            }}>
                <li><a href="/">Início</a></li>
                <li><a href="/represents">Representações</a></li>
                <li><a href="/representsComponents">Representações (Temporário)</a></li>
            </ul>
        </nav>
      </header>
      <main>{element}</main>
      <footer></footer>
    </div>
  );
};

export default Template;
