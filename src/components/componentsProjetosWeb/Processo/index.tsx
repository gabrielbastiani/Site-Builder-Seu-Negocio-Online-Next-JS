import Image from "next/image"
import React from "react"
import styles from "./Processo.module.css"


export function Processo() {
    return (
        <section className={styles.servico1}>
            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/etapasdosev.png" width={627} height={510} alt="desenvolver sites" />
                    </div>
                </div>
                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                        <h2>Como faremos</h2>
                        <p>Para desenvolver o seu Sistema Web, a Builder Seu Negócio Online conta com ferramentas que acelera o desenvolvimento do projeto. Utilizamos as linguagens de programação mais utilizadas da internet, sempre levando em consideração a criação de uma interface limpa, clara e amigável, com design moderno, profissional e 100% responsivo. O Sistema Web será desenvolvido exatamente de acordo com as necessidades do seu negócio para que resolva e melhore mais ainda o seu dia a dia do seu negócio.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}