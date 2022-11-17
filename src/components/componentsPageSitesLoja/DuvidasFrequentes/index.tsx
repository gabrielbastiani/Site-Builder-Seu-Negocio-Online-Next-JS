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
                <h2>Dúvidas Mais<br/> Frequentes</h2>
            </div>

            <div className={styles.imagemPerguntas}>
                <Image src="/fazerSitesPerguntasFrequentess.png" width={600} height={450} quality={100} alt="perguntas para um site" />
            </div>

            <div className={styles.contatinerPerguntas}>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide1}>POR QUE VOCÊ DEVE CRIAR UM SITE NA BUILDER SEU NEGÓCIO ONLINE?</a>
                    {showQuestion1 ?  <div className={styles.boxPergunta}>
                        <p>Com o nosso amor a profissão, você vai ver que criar um site com a Builder Seu Negócio Online
                            é a
                            escolha certa para seu negócio. Temos diversos modelos de sites com aparência moderna e
                            profissional.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide2}>MEU SITE VAI FUNCIONAR BEM EM TABLETS E CELULARES?</a>
                    {showQuestion2 ? <div className={styles.boxPergunta}>
                        <p>Todos os nossos desenvolvimentos em websites, são totalmente compatíveis com todas
                            tecnologias
                            mobile, assim, você não precisa se preocupar com isso.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide3}>VOU TER UM DOMÍNIO COM O NOME DO MEU NEGÓCIO?</a>
                    {showQuestion3 ? <div className={styles.boxPergunta}>
                        <p>Seu site terá um endereço personalizado www da sua empresa.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide4}>VOU TER UM E-MAIL PROFISSIONAL COM O NOME DO MEU NEGÓCIO?</a>
                    {showQuestion4 ? <div className={styles.boxPergunta}>
                        <p>Seu site vai ter direito a ter endereços de e-mails ilimitados, com o nome do seu negócio.
                            exemplo “contato@meunegocio.com”.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide5}>QUANDO VOU RECEBER MEU WEBSITE?</a>
                    {showQuestion5 ? <div className={styles.boxPergunta}>
                        <p>Após todas as informações necessárias repassadas para a Builder Seu Negócio Online, vamos
                            começar
                            a realizar o trabalho, pedimos um prazo de até 20 dias para entrega finalizada do seu
                            projeto
                            para que aprove, e assim podermos falar em cobranças.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide6}>SE EU TIVER QUALQUER PROBLEMA, OU DÚVIDA, O QUE EU FAÇO?</a>
                    {showQuestion6 ? <div className={styles.boxPergunta}>
                        <p>Você poderá entrar em contato com nós pelo <a
                                href="https://api.whatsapp.com/send?phone=5554996860104">WhatsApp (54) 99686-0104</a> ou
                            pelo e-mail: contato@builderseunegocioonline.com.br que vamos ajudar no que for preciso.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide7}>VOU TER QUE PAGAR TODOS OS MESES PELA HOSPEDAGEM DO MEU SITE, E PELO VALOR ANUAL
                        DO
                        MEU DOMÍNIO?</a>
                        {showQuestion7 ? <div className={styles.boxPergunta}>
                        <p>Para ter as melhores opções de valores, adquira nossos serviços de hospedagem e domínio.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide8}>VOU TER TOTAL ACESSO AO PAINEL ADMINISTRATIVO DO MEU WEBSITE PARA EDITAR ELE A
                        HORA
                        QUE EU QUISER?</a>
                        {showQuestion8 ? <div className={styles.boxPergunta}>
                        <p>Sim, você vai ter o acesso total, assim que pronto e publicado na internet, vamos enviar para
                            você login e senha.</p>
                    </div> : null}
                </div>

                <div className={styles.pergunta}>
                    <a href='#titulo' onClick={showOrHide9}>EM QUAL PLATAFORMA SERÁ DESENVOLVIDO MEU WEBSITE?</a>
                    {showQuestion9 ? <div className={styles.boxPergunta}>
                        <p>Seu Website será desenvolvido em <a href="https://br.wordpress.org" target="_blank">WordPress</a>, a ferramenta mais usadas por Webdesign e agências peloredor do mundo.</p>
                    </div> : null}
                </div>
            </div>
        </section>
    )
}