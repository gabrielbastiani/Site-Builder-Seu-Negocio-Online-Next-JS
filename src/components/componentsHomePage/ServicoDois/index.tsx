import Image from "next/image"
import React from "react"
import styles from "./ServicoDois.module.css"


export function ServicoDois() {
    return (
        <section className={styles.servicoInvertida1}>
            <div className={styles.linhaServicoInvertida1}>
                <div className={styles.box1ConteudoInvertida1}>
                    <div className={styles.conteudoInvertida1}>
                        <h2>Ferramentas web para o seu negócio</h2>
                        <p>Podemos ajudar o seu negócio desenvolvendo aplicações WEB, aplicativos Android e IOS.<br /> Fale conosco e explique a sua real necessidade, os problemas que tem dentro do seu negócio,<br /> assim podemos planejar juntos uma ferramenta web como, sistemas de cadastro de clientes, gerenciadores financeiros, entre tantos softwares web<br /> que podem vir a ajudar em algum problema ou melhoria dentro do seu negócio.</p>
                    </div>
                </div>
                <div className={styles.box2ImagemInvertida1}>
                    <div className={styles.imagemInvertida1}>
                        <Image className={styles.imagemServico1} src="/projetosPersonalizados.png" width={327} height={269} alt="desenvolvimento web" />
                    </div>
                </div>
            </div>
        </section>
    )
}