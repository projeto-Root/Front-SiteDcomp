import styles from "./Card.module.css"
import LOGOCALICOMP from "../../assets/LOGOCALICOMP.png"
import perfil from "../../assets/perfil.png"

function Card({name, img, cargo}) {
    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <img src={img} alt="foto de perfil" />
                <img src={LOGOCALICOMP} alt="Logo do CALICOMP"/>
                <div className={styles.calicomp__texto}>CALICOMP</div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.right}>
                <h1>{name}</h1>
                <h2>{cargo}</h2>
            </div>
        </section>
    )
}

export default Card;