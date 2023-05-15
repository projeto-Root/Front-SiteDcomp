import React from "react";
import './MenuRepresentações.css'; 
import calicomp from '../../assets/LOGOCALICOMPSVG.svg';
import bugados from '../../assets/BUGADOS1.png';
import sofTeam from '../../assets/LOGOSOFTEAM.svg';

const Representations = () => {
    return (
        <section>
            <div className="container">
                <div className="calicomp">
                    <img src={calicomp} className="images" alt="Logo calicomp" />
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <a href="represents/calicomp"><button className="btn">Saber mais</button></a>
                </div>
                <div className="sofTeam">
                    <img src={sofTeam} className="images" alt="Logo SofTeam" />
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <a href="represents/softeam"><button className="btn">Saber mais</button></a> 
                </div>
                <div className="atletica">
                    <img src={bugados} className="images" alt="Logo atlética" />
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <a href="represents/bugados"><button className="btn">Saber mais</button></a>
                </div>
            </div>
        </section>
    )
}


export default Representations