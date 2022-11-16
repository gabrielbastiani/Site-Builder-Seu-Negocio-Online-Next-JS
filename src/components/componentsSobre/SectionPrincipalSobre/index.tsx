import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalSobre.module.css'


export function SectionPrincipalSobre() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/fundoPaginaSobre.png" width={1596} height={563} quality={100} alt="sobre a builder seu negocio online" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/fundoPaginaSobreMobile.png" width={393} height={681} quality={100} alt="sobre a builder seu negocio online" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Um pouco sobre o fundador e sua biografia</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Um trabalho feito com muito vigor e uma sede por fazer a diferença, conte com
                            profissionalismo e responsabilidade.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}