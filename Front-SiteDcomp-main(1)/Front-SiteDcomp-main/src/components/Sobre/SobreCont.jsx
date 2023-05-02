import styles from "./SobreCont.module.css";
import about from "../../assets/about.jpg";

export const SobreCont = () => {
  return (
    <section className={styles.about__us}>
      <div className={styles.row}>
        <div class={styles.about__col}>
          <h1>Docentes Efetivos</h1>
          <p>
            Em 2022, os Docentes Efetivos do Departamento de Computação
            apresentavam a pontuação máxima (5) no <strong>IQCD</strong>, que é
            um indicador de desempenho adotado em instituições de ensino
            superior, principalmente aquelas que mantêm uma produção científica.
            Seu valor varia de 1 (todos os professores possuem apenas graduação)
            até 5, situação em que todos os docentes são doutores.
          </p>
          <button className={styles.explore}>Explore mais</button>
        </div>
        <div>
          <img src={about} alt="sobre" />
        </div>
      </div>
    </section>
  );
};
