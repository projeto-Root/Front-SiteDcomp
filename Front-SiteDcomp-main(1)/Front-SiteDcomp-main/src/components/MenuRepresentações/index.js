import './representationsMenu.css'; 
import calicomp from '../../assets/LOGOCALICOMPSVG.svg';
import bugados from '../../assets/LOGOBUGADOS.png';
import sofTeam from '../../assets/LOGOSOFTEAM.svg';

function RepresentationsMenu() {

    return (
        <section>
            <div className="container">
                <div class="calicomp">
                    <img src={calicomp} class="images" alt="Logo calicomp" />
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <button class="btn">Saber mais</button>
                </div>
                <div className="sofTeam">
                    <img src={sofTeam} class="images" alt="Logo SofTeam" />
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <button class="btn">Saber mais</button>
                </div>
                <div className="atletica">
                    <img src={bugados} class="images" alt="Logo atlética" />
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis atque modi minima facere dolore vero iusto omnis,
                        voluptas nulla numquam deleniti expedita.
                        Eligendi temporibus maxime dolorem officiis. Eius, dicta voluptate.</p>
                    <button class="btn">Saber mais</button>
                </div>
            </div>
        </section>
    )
}

export default RepresentationsMenu;