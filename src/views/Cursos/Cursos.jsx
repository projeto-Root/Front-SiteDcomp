import React from "react";
import InfoCC from "../../components/InfoCC";
import InfoSI from "../../components/InfoSI";
import InfoEC from "../../components/InfoEC";
import styles from "./Cursos.module.css"

const Cursos = () => {
    return (
        <div className={styles.cursos}>
            <InfoCC />
            <InfoEC />
            <InfoSI />
        </div>
    )
}

export default Cursos;