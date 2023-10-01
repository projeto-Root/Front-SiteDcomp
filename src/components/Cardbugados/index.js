import styles from "./CardB.module.css";
import CardBugados from "../../assets/CardBugados.svg";
import ICONbugados from "../../assets/ICONbugados.svg";
import LOGOBUGADOS from "../../assets/BUGADOS1.png";

function CardB({img, name, cargo}) {
  return (
    <div className="overlay">
      <section
      className={styles.card}
      style={{
        backgroundImage: `url(${CardBugados})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.left}>
        <img src={img} alt="foto de perfil" className="fotoPerfil"/>
        <img
          src={LOGOBUGADOS}
          alt="logo da atlética Bugados"
          className="bugados"
        />
      </div>
      <div className={styles.vertical}></div>
      <div className={styles.right}>
        <h1>{name}</h1>
        <h2>{cargo}</h2>
      </div>
    </section>
    </div>
  );
}

export default CardB;
