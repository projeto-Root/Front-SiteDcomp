import styles from "./InfoEC.module.css";
import ec from "../../assets/ec.png";

function InfoEC() {
  return (
    <div className={styles.container}>
      <img src={ec} alt="Ciência da Computação" />
      <h1>Engenharia da Computação</h1>
      <p>
      O Engenheiro de Computação deverá ter uma sólida formação técnico-científica e profissional geral que o capacite com os conhecimentos de Ciência da Computação e de Engenharia Elétrica necessários ao projeto de sistemas de computação completos.
      </p>
      <button className={styles.btn}>Saiba Mais</button>
    </div>
  );
}

export default InfoEC;