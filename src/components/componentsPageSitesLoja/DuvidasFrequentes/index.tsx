import Image from 'next/image'
import React, { useState } from 'react'
import styles from './DuvidasFrequentes.module.css'


export function DuvidasFrequentes(){

    const [showQuestion1, setShowQuestion1] = useState(false);
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [showQuestion3, setShowQuestion3] = useState(false);
    const [showQuestion4, setShowQuestion4] = useState(false);
    const [showQuestion5, setShowQuestion5] = useState(false);
    const [showQuestion6, setShowQuestion6] = useState(false);
    const [showQuestion7, setShowQuestion7] = useState(false);
    const [showQuestion8, setShowQuestion8] = useState(false);
    const [showQuestion9, setShowQuestion9] = useState(false);

    const showOrHide1 = () => {
        setShowQuestion1(!showQuestion1);
    }

    const showOrHide2 = () => {
        setShowQuestion2(!showQuestion2);
    }

    const showOrHide3 = () => {
        setShowQuestion3(!showQuestion3);
    }

    const showOrHide4 = () => {
        setShowQuestion4(!showQuestion4);
    }

    const showOrHide5 = () => {
        setShowQuestion5(!showQuestion5);
    }

    const showOrHide6 = () => {
        setShowQuestion6(!showQuestion6);
    }

    const showOrHide7 = () => {
        setShowQuestion7(!showQuestion7);
    }

    const showOrHide8 = () => {
        setShowQuestion8(!showQuestion8);
    }

    const showOrHide9 = () => {
        setShowQuestion9(!showQuestion9);
    }

    
    return(
        <section className={styles.perguntas}>

            <div className={styles.fundoDivisor}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path className={styles.fundo1} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path className={styles.fundo2} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>

                <svg className={styles.svgBaixo} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path className={styles.fundo1} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path className={styles.fundo2} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>
            </div>

            <div className={styles.tituloEtiqueta}>
                <h2>D??vidas Mais<br/> Frequentes</h2>
            </div>

            <div className={styles.imagemPerguntas}>
                <Image src="/fazerSitesPerguntasFrequentess.png" width={600} height={450} quality={100} alt="perguntas para um site" />
            </div>

            <div className={styles.contatinerPerguntas}>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide1}>POR QUE VOC?? DEVE CRIAR UM SITE NA BUILDER SEU NEG??CIO ONLINE?</a>
                    {showQuestion1 ?  <div className={styles.boxPergunta}>
                        <p>Com o nosso amor a profiss??o, voc?? vai ver que criar um site com a Builder Seu Neg??cio Online
                            ?? a
                            escolha certa para seu neg??cio. Temos diversos modelos de sites com apar??ncia moderna e
                            profissional.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide2}>MEU SITE VAI FUNCIONAR BEM EM TABLETS E CELULARES?</a>
                    {showQuestion2 ? <div className={styles.boxPergunta}>
                        <p>Todos os nossos desenvolvimentos em websites, s??o totalmente compat??veis com todas
                            tecnologias
                            mobile, assim, voc?? n??o precisa se preocupar com isso.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide3}>VOU TER UM DOM??NIO COM O NOME DO MEU NEG??CIO?</a>
                    {showQuestion3 ? <div className={styles.boxPergunta}>
                        <p>Seu site ter?? um endere??o personalizado www da sua empresa.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide4}>VOU TER UM E-MAIL PROFISSIONAL COM O NOME DO MEU NEG??CIO?</a>
                    {showQuestion4 ? <div className={styles.boxPergunta}>
                        <p>Seu site vai ter direito a ter endere??os de e-mails ilimitados, com o nome do seu neg??cio.
                            exemplo ???contato@meunegocio.com???.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide5}>QUANDO VOU RECEBER MEU WEBSITE?</a>
                    {showQuestion5 ? <div className={styles.boxPergunta}>
                        <p>Ap??s todas as informa????es necess??rias repassadas para a Builder Seu Neg??cio Online, vamos
                            come??ar
                            a realizar o trabalho, pedimos um prazo de at?? 20 dias para entrega finalizada do seu
                            projeto
                            para que aprove, e assim podermos falar em cobran??as.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide6}>SE EU TIVER QUALQUER PROBLEMA, OU D??VIDA, O QUE EU FA??O?</a>
                    {showQuestion6 ? <div className={styles.boxPergunta}>
                        <p>Voc?? poder?? entrar em contato com n??s pelo <a
                                href="https://api.whatsapp.com/send?phone=5554996860104">WhatsApp (54) 99686-0104</a> ou
                            pelo e-mail: contato@builderseunegocioonline.com.br que vamos ajudar no que for preciso.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide7}>VOU TER QUE PAGAR TODOS OS MESES PELA HOSPEDAGEM DO MEU SITE, E PELO VALOR ANUAL
                        DO
                        MEU DOM??NIO?</a>
                        {showQuestion7 ? <div className={styles.boxPergunta}>
                        <p>Para ter as melhores op????es de valores, adquira nossos servi??os de hospedagem e dom??nio.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide8}>VOU TER TOTAL ACESSO AO PAINEL ADMINISTRATIVO DO MEU WEBSITE PARA EDITAR ELE A
                        HORA
                        QUE EU QUISER?</a>
                        {showQuestion8 ? <div className={styles.boxPergunta}>
                        <p>Sim, voc?? vai ter o acesso total, assim que pronto e publicado na internet, vamos enviar para
                            voc?? login e senha.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide9}>EM QUAL PLATAFORMA SER?? DESENVOLVIDO MEU WEBSITE?</a>
                    {showQuestion9 ? <div className={styles.boxPergunta}>
                        <p>Seu Website ser?? desenvolvido em <a href="https://br.wordpress.org" target="_blank">WordPress</a>, a ferramenta mais usadas por Webdesign e ag??ncias peloredor do mundo.</p>
                    </div> : null}
                </div>
            </div>
        </section>
    )
}