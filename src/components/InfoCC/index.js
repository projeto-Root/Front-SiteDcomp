import styles from "./InfoCC.module.css";
import cc from "../../assets/cc.png";

function InfoCC() {
  return (
    <div className={styles.container}>
      <img src={cc} alt="Ciência da Computação" />
      <h1>Ciência da Computação</h1>
      <p>
        Computação deverá assumir um papel de racionalização, desenvolvimento e
        automação de rotinas administrativas das organizações, e no suporte aos
        seus sistemas de controle operacional e gerencial, através da análise,
        projeto e implementação de sistemas.
      </p>
      <button className={styles.btn}>Saiba Mais</button>
    </div>
  );
}

export default InfoCC;
