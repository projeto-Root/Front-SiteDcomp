import React from "react";
import "./MyComp.css";

const MyComp = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold", fontSize: "25px", marginTop: "2rem" }}>
        MyComp
      </h2>
      <p className="mycomp">
        O MyComp é um serviço oferecido pelo Projec Root com o objetivo de
        auxiliar o estudante de computação a entender melhor como suas
        preferências e experiências refletem nas áreas de estudo da Computação.
        De acordo com algumas perguntas, o aluno poderá conhecer qual das áreas
        do Departamento abraça melhor o seu perfil.
      </p>
      <script type="text/javascript">
        {(function (d, s, id, u) {
          if (d.getElementById(id)) return;
          var js,
            sjs = d.getElementsByTagName(s)[0],
            t = Math.floor(new Date().getTime() / 1000000);
          js = d.createElement(s);
          js.id = id;
          js.async = 1;
          js.src = u + "?" + t;
          sjs.parentNode.insertBefore(js, sjs);
        })(
          document,
          "script",
          "os-widget-jssdk",
          "https://www.opinionstage.com/assets/loader.js"
        )}
        ;
      </script>
      <div
        className="quizperfil os_widget"
        id="os-widget-1135646"
        data-path="/gyovani-santos/qual-o-meu-perfil-computacional"
        data-of="gyovani-santos"
        data-opinionstage-widget="0641cea8-2dc4-480c-9c3e-7db982f2aa5c"
      ></div>
    </>
  );
};

export default MyComp;
