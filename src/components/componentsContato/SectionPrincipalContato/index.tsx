import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalContato.module.css'


export function SectionPrincipalContato() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/faleComigoBuilderSeuNegocioOnline.jpg" width={1596} height={563} quality={100} alt="fale com a builder seu negocio online" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/faleComigoBuilderSeuNegocioOnlineMobile.jpg" width={393} height={681} quality={100} alt="fale com a builder seu negocio online" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Entre em contato conosco será um prazer</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Será um prazer em retirar suas dúvidas, e assim entender melhor o que deseja para o seu
                                negócio.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}