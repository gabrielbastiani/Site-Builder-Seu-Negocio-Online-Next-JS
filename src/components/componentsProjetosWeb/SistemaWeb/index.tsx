import Image from "next/image"
import React from "react"
import styles from "./SistemaWeb.module.css"


export function SistemaWeb() {
    return (
        <section className={styles.servicoInvertida1}>
            <div className={styles.linhaServicoInvertida1}>
                <div className={styles.box1ConteudoInvertida1}>
                    <div className={styles.conteudoInvertida1}>
                        <h2>O que é um Software que fica na internet?</h2>
                        <p>Um sistema Web é um sistema projetado para ficar instalado em servidores online para serem utilizados através de um navegador (Firefox, Chrome, Internet Explorer, Safari, Edge etc...), sem necessidade de instalar nenhum programa ou software em seus computadores. Ou seja, quando um usuário ou funcionário da sua empresa acessa o Sistema Web, ele acessará de um navegador em qualquer computador, de qualquer lugar do mundo, e não da maneira como conhecemos que seria aquele de ter que instalar o software no computador para usa-lo.</p>
                    </div>
                </div>
                <div className={styles.box2ImagemInvertida1}>
                    <div className={styles.imagemInvertida1}>
                        <Image className={styles.imagemServico1} src="/sistemaWeb.png" width={327} height={269} alt="desenvolvimento web" />
                    </div>
                </div>
            </div>
        </section>
    )
}