import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalEmail.module.css'


export function SectionPrincipalEmail() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/tenhaUmEmailProfissional.jpg" width={1596} height={563} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/tenhaUmEmailProfissionalMobile.jpg" width={393} height={681} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Seu negócio com endereço de e-mail profissional</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Tenha mais credibilidade perante seus clientes, com endereços de e-mails profissionais para o seu negócio. Mostre organização e profissionalismo no seu negócio.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}