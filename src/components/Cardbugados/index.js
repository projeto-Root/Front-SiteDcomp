import styles from "./CardB.module.css";
import CardBugados from "../../assets/CardBugados.svg";
import ICONbugados from "../../assets/ICONbugados.svg";
import LOGOBUGADOS from "../../assets/LOGOBUGADOS.png";

function CardB() {
  return (
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
        <img src={ICONbugados} alt="foto de perfil" />
        <img
          src={LOGOBUGADOS}
          alt="logo da atlética Bugados"
          className={styles.bugados}
        />
        <div className={styles.bugados__texto}>BUGADOS</div>
      </div>
      <div className={styles.vertical}></div>
      <div className={styles.right}>
        <h1>Membro de representação</h1>
      </div>
    </section>
  );
}

export default CardB;
