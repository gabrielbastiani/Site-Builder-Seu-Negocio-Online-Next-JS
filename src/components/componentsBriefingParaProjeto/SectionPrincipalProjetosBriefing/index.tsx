import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalProjetosBriefing.module.css'


export function SectionPrincipalProjetosBriefing() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/briefingProjetos.png" width={1596} height={563} quality={100} alt="briefing projetos web" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/briefingProjetosMobile.png" width={393} height={681} quality={100} alt="briefing projetos web" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Seu negócio vai ter a solução que merece</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Vamos desenvolver sistemas WEB e aplicativos Android IOS como ferramentas soluções para oseu negócio, abaixo você vai encontrar um grande formulario necessario que preencha e ssim poderemos começar a tratar do seu projeto WEB juntos</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}