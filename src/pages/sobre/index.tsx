import Head from "next/head";
import React from "react";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";
import { SectionPrincipalSobre } from "../../components/componentsSobre/SectionPrincipalSobre";
import styles from './Sobre.module.css'
import Image from "next/image"


export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalSobre />

            <section className={styles.servico1}>
                <div className={styles.linhaServico1}>
                    <div className={styles.box1Imagem}>
                        <div className={styles.imagem1}>
                            <Image className={styles.imagemServico1} src="/ceoBuilderSeuNegocioOnlineGabrielBastiani.png" width={327} height={469} alt="gabriel campos de bastiani" />
                            <p>CEO – Gabriel Campos de Bastiani<br/> Builder Seu Negócio Online</p>
                        </div>
                    </div>
                    <div className={styles.box2Conteudo}>
                        <div className={styles.conteudo1}>
                            <h2>Sobre</h2>
                            <p>Meu nome é Gabriel Campos de Bastiani, e sou graduado em Gestão Comercial pelo centro
                                universitário UNIFTEC, MBA em E-commerce e negócios digitais e desenvolvedor WEB Jacascript FullStack.
                                <br />
                                No longo da minha jornada em empregos convencionais no mercado de trabalho, tanto na área
                                comercial, como em áreas mais técnicas onde eu já atuei. Ao longo do tempo, fui me
                                especializando em desenvolvimento de websites, e assim estando habilitado para poder ajudar
                                pequenos e médios empreendedores, e também aos profissionais autônomos e liberais a terem seus
                                próprios websites, e muito mais.
                                <br />
                                Também por meio de muitos estudos e testes práticos aqui na internet, fazendo internet
                                marketing, participando de milhares de workshops online, cursos e mentorias, até poder estar com
                                essa estrutura hoje montada aqui na internet.
                                <br />
                                Minha missão aqui além de ajudar a pequenos e médios empreendedores, e também aos profissionais
                                autônomos e liberais a terem seus próprios websites, é ajudar a quem pretende ter um negócio
                                online.
                                <br />
                                Um forte abraço, e pode contar comigo!!!</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}