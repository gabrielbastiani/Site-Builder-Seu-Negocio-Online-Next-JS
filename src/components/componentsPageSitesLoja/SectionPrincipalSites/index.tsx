import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalSites.module.css'


export function SectionPrincipalSites() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/mulherComputadorWebsite.jpg" width={1596} height={563} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/mulherComputadorWebsiteMobile.jpg" width={393} height={681} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Seu negócio agora em outro nível com um website ou uma loja virtual!</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Seu negócio PRECISA e MERECE um website ou loja virtual profissional!
                            Atrairá mais clientes, terá mais orçamentos e converterá muito mais em vendas.
                            Agora seus visitantes serão seus clientes!</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}