import styles from "./CardS.module.css";
import ICONSoft from "../../assets/ICONsoft.svg";
import softeam from "../../assets/LOGOSOFTEAM.svg";
import CardSofteam from "../../assets/CardSofteam.svg";

function CardS() {
  return (
    <section
      className={styles.card}
      style={{
        backgroundImage: `url(${CardSofteam})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.left}>
        <img src={ICONSoft} alt="foto de perfil" />
        <img src={softeam} alt="Logo da Softeam" className={styles.softeam}/>
        <div className={styles.softeam__texto}>SOFTEAM</div>
      </div>
      <div className={styles.vertical}></div>
      <div className={styles.right}>
        <h1>Membro de representação</h1>
      </div>
    </section>
  );
}

export default CardS;
