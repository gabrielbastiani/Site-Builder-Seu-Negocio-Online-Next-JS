import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './Qualidade.module.css'


export function Qualidade() {
    return (
        <section className={styles.secaoGarantia}>
            <div className={styles.satisfacaoGarantia}>
                <div className={styles.garantia}>
                    <h2>Satisfação garantida ou seu dinheiro 100% de volta*</h2>
                    <p className={styles.paragrafo1}>Para você ter a segurança e, acima de tudo, a confiança que você vai ficar
                        satisfeito com a
                        qualidade do
                        seu Website ou loja virtual que faremos para você, seguiremos o que está na lei te
                        disponibilizando 7
                        DIAS DE GARANTIA.<br /> Aqui conosco você está amparado pelo:</p>
                    <Link href="https://freitascjr.jusbrasil.com.br/artigos/230508589/produto-comprado-na-internet-pode-ser-devolvido-em-ate-7-dias-e-sem-motivacao" target="_blank">
                        <p className={styles.leiConsumidor}>Código de Defesa do Consumidor – Lei 8078/90 | Lei nº 8.078, de 11 de setembro de 1990 – Artigo 49</p>
                    </Link>
                    <p className={styles.paragrafo2}>*Basta entrar em contato conosco nos primeiros 7 dias, que devolvemos 100% do
                        seu dinheiro e
                        continuamos
                        parceiros sem problema algum, pois precisamos ser justos e honestos não é mesmo?<br /> Então
                        aproveite
                        esta grande oportunidade! A sua empresa ou negócio merece ter presença digital com um website ou
                        loja
                        virtual profissional.</p>

                    <div className={styles.secaoSelos}>
                        <div className={styles.selo1}>
                            <Image src="/construcaoDeSitesCom7DiasDeGarantia.png" width={193} height={200} quality={100} alt="site de qualidade" />
                        </div>
                        <div className={styles.selo2}>
                            <Image src="/seloTopQualidade.png" width={193} height={200} quality={100} alt="site de qualidade" />
                        </div>
                    </div>

                    <div className={styles.secaoBannerPagamento}>
                        <div className={styles.boxFormasPagamento}>
                            <h3>Formas de pagamento seguro! Parcele em até 12x, ou a vista no boleto ou transferência
                                bancária</h3>
                            <Image src="/formasDePagamentosProjetosWebsites.jpg" width={350} height={380} quality={100} alt="formas de pagamento" />
                        </div>
                    </div>
                </div>

                <div className={styles.breveFrase1}>
                    <p className={styles.frase1}>Clique no botão abaixo e preencha o Briefing para o seu site, para que possamos conversar sobre o seu
                        projeto.<br/> Orçamento gratuito e pagamento pelo seu projeto somente após a sua aprovação.
                    </p>
                    <div className={styles.botao1}>
                        <a href="/briefingParaSite" target="_blank"><button>Quero Fazer Meu Site</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}