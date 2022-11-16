import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalPoliticas.module.css'


export function SectionPrincipalPoliticas() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/políticaDePrivacidadeGabrielDeBastianiBuilderSeuNegocioOnline.jpg" width={1596} height={563} quality={100} alt="politicas de privacidade" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/políticaDePrivacidadeGabrielDeBastianiBuilderSeuNegocioOnlineMobile.jpg" width={393} height={681} quality={100} alt="politicas de privacidade" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Conheça todas as nossas politicas de privacidade</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Queremos zelar pela sua navegabilidade em nosso website, por isso, a importância de uma boa
                                politica de privacidade.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}