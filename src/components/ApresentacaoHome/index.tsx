import Image from "next/image";
import React from "react";
import styles from './Apresentacao.module.css'


export function Apresentacao() {
    return (
        <section className={styles.apresentacaoPessoal}>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className={styles.elementorShapeFill} opacity="0.33"
                    d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
                </path>
                <path className={styles.elementorShapeFill} opacity="0.66"
                    d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
                </path>
                <path className={styles.elementorShapeFill}
                    d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
                </path>
            </svg>
            <div className={styles.imagemGabriel}>
                <Image src="/gabrielDeBastianiBuilderSeuNegocioOnline.png" width={560} height={445} alt="apresentacao gabriel builder" />
            </div>

            <div className={styles.secaoApresentacao}>
                <div className={styles.apresentacao}>
                    <div className={styles.boxTitulo}>
                        <div className={styles.textoApresentacaoTitulo}>
                            <h1>Quem Fundou</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.apresentacao}>
                    <div className={styles.boxTexto}>
                        <div className={styles.textoApresentacao}>
                            <p>Me chamo Gabriel Campos de Bastiani, formado em Gestão Comercial pelo centro
                                universitário UNIFTEC da cidade de Caxias do Sul-RS;
                                Junto ao conhecimento obtido na faculdade, e principalmente pelo conhecimento de longa
                                data
                                em Web
                                Design (criação e desenvolvimento de sites e lojas virtuais e programação WEB), aliando tudo isso com
                                técnicas
                                de
                                Marketing Digital;
                                Fundei a Builder Seu Negócio Online, vislumbrando o mercado de pequenas e médias
                                empresas, e
                                os
                                profissionais autônomos e liberais.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.apresentacao}>
                    <div className={styles.boxTitulo}>
                        <div className={styles.textoApresentacaoTitulo}>
                            <h1>Nossa Missão</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.apresentacao}>
                    <div className={styles.boxTexto}>
                        <div className={styles.textoApresentacao}>
                            <p>Ajudar pequenas e médias empresas, como também profissionais autônomos e liberais, a
                                colocarem seus negócios aqui na internet, para assim aumentarem consideravelmente as
                                procuras por
                                orçamentos e, consecutivamente, vendas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}