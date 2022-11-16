import Image from "next/image"
import React from "react"
import styles from "./ServicoUm.module.css"


export function ServicoUm() {
    return (
        <section className={styles.servico1}>
            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/seuNegocioOnline.png" width={327} height={269} alt="desenvolver sites" />
                    </div>
                </div>
                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                        <h2>Construímos seu site ou loja virtual</h2>
                        <p>Todos os dias, cerca de 3,5 bilhões de pesquisas são feitas usando o buscador mais famoso do mundo, o Google.<br />Atualmente, em todos os lugares e a qualquer momento, as pessoas estão com um Smartphone nas mãos.<br />Essas pessoas, além de estarem em suas redes sociais, estão também pesquisando produtos e serviços para que possam obter orçamentos ou efetivamente comprar online.<br /> Sendo assim, é praticamente inviável nos dias de hoje um negócio não ter um website ou uma loja virtual.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}