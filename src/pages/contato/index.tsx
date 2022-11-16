import Head from "next/head";
import React from "react";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";
import { SectionPrincipalContato } from "../../components/componentsContato/SectionPrincipalContato";
import styles from './Contato.module.css'
import Image from "next/image"


export default function Contato() {
    return (
        <>
            <Head>
                <title>Contato - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalContato />

            <section className={styles.servicoInvertida1}>
                <div className={styles.linhaServicoInvertida1}>
                    <div className={styles.box1ConteudoInvertida1}>
                        <div className={styles.imagemCartao}>
                        <h2>Cartão de contato virtual</h2>
                            <Image className={styles.imagemServicocartao} src="/cartaoDeVisitas.jpg" width={280} height={480} quality={100} alt="cartao de contato gabriel de bastiani" />
                        </div>
                    </div>
                    <div className={styles.box2ImagemInvertida1}>
                        <div className={styles.imagemInvertida1}>
                        <h2>WhatsApp para contato direto</h2>
                            <Image className={styles.imagemServico1} src="/whatsappContato.png" width={327} height={325} quality={100} alt="whatsapp gabriel de bastiani" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}