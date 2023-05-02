import styles from "./Card.module.css"
import LOGOCALICOMP from "../../assets/LOGOCALICOMP.png"
import perfil from "../../assets/perfil.png"

function Card() {
    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <img src={perfil} alt="foto de perfil" />
                <img src={LOGOCALICOMP} alt="Logo do CALICOMP"/>
                <div className={styles.calicomp__texto}>CALICOMP</div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.right}>
                <h1>
                    Membro de representação
                </h1>
            </div>
        </section>
    )
}

export default Card;