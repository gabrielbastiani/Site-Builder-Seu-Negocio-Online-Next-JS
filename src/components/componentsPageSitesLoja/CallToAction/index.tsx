import Image from "next/image";
import React from "react";
import styles from './CallToAction.module.css'


export function CallToAction(){
    return(
        <section className={styles.callToAction}>

            <div className={styles.chamada}>
                <h1>CHEGOU A SUA VEZ!!!</h1>
            </div>

            <div className={styles.descricoes}>
                <h2>CHEGOU A HORA DE COLOCAR SEU NEGÓCIO EM OUTRO PATAMAR</h2>
                <p>Para que tudo saia da melhor forma para você, fique tranquilo, nossa GRANDE proposta para você que
                    chegou
                    até aqui é te oferecer o nosso melhor em todos os quesitos.<br/>

                    Realizando todo o processo de produção até a finalização do seu projeto TOTALMENTE GRATUITO, e você
                    só
                    ira pagar pelo seu site se tiver aprovado todo o nosso trabalho até o final, e assim mesmo
                    assegurando o
                    seu direito de 7 dias de garantia após o pagamento.<br/>

                    Assim iremos zelar por uma grande parceria comercial e um relacionamento sincero e saudável para
                    todos.
                </p>
                <div className={styles.botao}>
                    <a href="/briefingParaSite" target="_blank"><button>Vou fazer meu site então!</button></a>
                </div>

                <p>Pagamento em até 12x no cartão de crédito, boleto bancário no pagamento a vista ou transferência
                    bancaria.</p>

                <div className={styles.imagensFinal}>
                    <div className={styles.finalImagem}>
                        <Image src="/satisfacaoGarantidaDeTerUmSite.png" width={240} height={210} quality={100} alt="satisfacao do cliente" />
                    </div>
                    <div className={styles.finalImagem}>
                        <Image className={styles.finalImagem2} src="/formasDePagamentosProjetosWebsitesFinal.jpg" width={330} height={310} quality={100} alt="formas de pagamento" />
                    </div>
                    <div className={styles.finalImagem}>
                        <Image src="/construcaoDeSitesCom7DiasDeGarantiaFinal.png" width={240} height={210} quality={100} alt="garantia de 7 dias" />
                    </div>
                </div>

                <div className={styles.divisorFundoUltimoBaixo}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                        <path opacity="0.33"
                            d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                        <path opacity="0.33"
                            d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                        <path opacity="0.33"
                            d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                        <path d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}