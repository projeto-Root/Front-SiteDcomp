import React from "react";
import "./MenuRepresentações.css";
import calicomp from "../../assets/calicomp.svg";
import BUGADOS1 from "../../assets/BUGADOS1.png";
import LOGOSOFTEAMSVG from "../../assets/LOGOSOFTEAMSVG.svg";

const Representations = () => {
  return (
    <section>
      <div className="container">
        <div className="calicomp">
          <img src={calicomp} className="images" alt="Logo calicomp" />
          <h1>CALICOMP</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            atque modi minima facere dolore vero iusto omnis, voluptas nulla
            numquam deleniti expedita. Eligendi temporibus maxime dolorem
            officiis. Eius, dicta voluptate.
          </p>
          <a href="represents/calicomp">
            <button className="btn">Saber mais</button>
          </a>
        </div>
        <div className="sofTeam">
          <img src={LOGOSOFTEAMSVG} className="images" alt="Logo SofTeam" />
          <h1>SofTeam</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            atque modi minima facere dolore vero iusto omnis, voluptas nulla
            numquam deleniti expedita. Eligendi temporibus maxime dolorem
            officiis. Eius, dicta voluptate.
          </p>
          <a href="represents/softeam">
            <button className="btn">Saber mais</button>
          </a>
        </div>
        <div className="atletica">
          <img src={BUGADOS1} className="images" alt="Logo atlética" />
          <h1>Atlética</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            atque modi minima facere dolore vero iusto omnis, voluptas nulla
            numquam deleniti expedita. Eligendi temporibus maxime dolorem
            officiis. Eius, dicta voluptate.
          </p>
          <a href="represents/bugados">
            <button className="btn">Saber mais</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Representations;
