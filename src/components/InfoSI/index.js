import styles from "./InfoSI.module.css";
import si from "../../assets/si.png";

function InfoSI() {
  return (
    <div className={styles.container}>
      <img src={si} alt="icon Sistemas de Informação" />
      <h1>Sistemas da Informação</h1>
      <p>
      O Bacharel em Sistemas de Informação deve ser capaz de gerenciar e desenvolver modelos associados e métodos de gestão da área de sistemas de informação além de modelos empregados no diagnóstico, planejamento, implementação e avaliação de projetos de sistemas de informação.
      </p>
      <button className={styles.btn}>Saiba Mais</button>
    </div>
  );
}

export default InfoSI;