import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalBriefing.module.css'


export function SectionPrincipalBriefing() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/webDesignConstrucaoDeSites.png" width={1596} height={563} quality={100} alt="fale com a builder seu negocio online" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/webDesignConstrucaoDeSitesMobile.png" width={393} height={681} quality={100} alt="fale com a builder seu negocio online" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Aqui vamos começar a dar vida ao seu projeto de Website</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Fique totalmente a vontade para nos dizer como poderia ser o seu site ou e-commerce (Loja virtual). Daremos total atenção a você apos o preenchimento do Briefing abaixo.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}