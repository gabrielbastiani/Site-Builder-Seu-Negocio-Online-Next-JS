import Image from "next/image";
import React, { useState } from "react";
import styles from './ComoCriarSeuSite.module.css'


export function ComoCriarSeuSite() {

    const [showQuestion1, setShowQuestion1] = useState(false);
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [showQuestion3, setShowQuestion3] = useState(false);

    const showOrHide1 = () => {
        setShowQuestion1(!showQuestion1);
    }

    const showOrHide2 = () => {
        setShowQuestion2(!showQuestion2);
    }

    const showOrHide3 = () => {
        setShowQuestion3(!showQuestion3);
    }


    return (
        <section className={styles.comoCriamos}>
            <div className={styles.linhaConteudo}>
                <div className={styles.colunaConteudo}>
                    <div className={styles.etapa}>
                        <a href='#titulo' onClick={showOrHide1}>ETAPA 1 - CADASTRO E CONTRATO</a>
                        {showQuestion1 ? <div className={styles.boxEtapa}>
                            <p>Você vai precisar preencher um Briefing de site, que se encontra aqui. Vou entrar em
                                contato com
                                você por WhatsApp ou por telefonema, para alinhar os detalhes, e assim, formalizar um
                                contrato
                                de prestação de serviços para você, além das opções de pagamento.</p>
                        </div> : null}
                    </div>

                    <div className={styles.etapa}>
                        <a href='#titulo' onClick={showOrHide2}>ETAPA 2 - EXECUÇÃO DO SITE</a>
                        {showQuestion2 ? <div className={styles.boxEtapa}>
                            <p>Vou fazer toda a estruturação visual do site e deixamos ele prontinho para você, porém
                                todos os
                                conteúdos devem ser fornecidos por você, como textos, álbuns de fotos, orçamento, dados
                                de
                                contato, etc. Enquanto os conteúdos vão sendo inseridos você já pode ver como está
                                ficando seu
                                site. Caso não tenha todos os conteúdos, você mesmo pode inserí-los futuramente pois,
                                daremos as
                                instruções suficientes para que faça isso. É extremamente fácil manter o seu site
                                atualizado.
                            </p>
                        </div> : null}
                    </div>

                    <div className={styles.etapa}>
                        <a href='#titulo' onClick={showOrHide3}>ETAPA 3 - SEU SITE FINALIZADO</a>
                        {showQuestion3 ? <div className={styles.boxEtapa}>
                            <p>Após sua aprovação seu site já estará no ar, podendo ser acessado por computadores,
                                tablets ou
                                celulares. E fique tranquilo, manteremos sempre contato para que assim que você precisar
                                de
                                ajuda, vou estar a sua disposição.</p>
                        </div> : null}
                    </div>
                </div>
                <div className={styles.imgDestaque}>
                    <Image src="/briefingDeConstrucaoDeSites.jpg" width={283} height={283} quality={100} alt="como fazer o site" />
                </div>
            </div>

            <div className={styles.breveFrase2}>
                <p>Vamos conversar e interagir bastante para que obtenha o melhor resultado com o seu site ou loja virtual,
                    fique a vontade em<br /> clicar no botão abaixo e me fale no Briefing o que você deseja em seu futuro
                    projeto.
                </p>
                <div className={styles.botao1}>
                    <a href="/briefingParaSite" target="_blank"><button>Vamos là?</button></a>
                </div>
            </div>
        </section>
    )
}