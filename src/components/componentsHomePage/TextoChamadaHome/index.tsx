import React from "react"
import styles from "./TextoChamadaHome.module.css"


export function TextoChamadaHome() {
    return (
        <div className={styles.divisor}>
            <hr className={styles.divisorUm} />
                <h2>Conheça nossos serviços para o seu negócio</h2>
            <hr className={styles.divisorDois} />
        </div>
    )
}