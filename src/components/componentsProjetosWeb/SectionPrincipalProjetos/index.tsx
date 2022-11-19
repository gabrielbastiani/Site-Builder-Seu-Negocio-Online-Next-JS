import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalProjetos.module.css'


export function SectionPrincipalProjetos() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/webprojetos.png" width={1596} height={563} quality={100} alt="projetos web" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/webprojetosMobile.png" width={393} height={681} quality={100} alt="projetos web" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Desenvolva sistemas e aplicativos Web para o seu negócio</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Vamos desenvolver sistemas WEB e aplicativos Android IOS como ferramentas soluções para oseu negócio, pois com toda a certeza seu negócio tem um problema o qual pode ser resolvido com ferramentas onlines inteligentes.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}