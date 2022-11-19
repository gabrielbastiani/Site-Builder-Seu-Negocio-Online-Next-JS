import React from "react";
import styles from './SectionBriefing.module.css'


export function SectionBriefing() {
    return (
        <section className={styles.secaoBriefing}>

            <div className={styles.explicacaoBriefing}>
                <h3>Preencha abaixo, todas as informações do Briefing para que possamos enviar uma proposta para você.</h3>
                <p>Não se preocupe, responderemos bem rápido 🙂 </p>
            </div>

            <div className={styles.linhaBriefing}>
                <div className={styles.briefing}>
                    <iframe width="700" height="3100"
                        src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/15d27e5fdd9a415f2f75cef5beda6f52"
                        frameBorder="0" allowFullScreen></iframe>
                    <p>Assim que informar todas as informações solicitadas acima, estaremos analisando-as, e realizando um
                        orçamento em cima das informações as quais você nos forneceu, Fique ligado na sua caixa de e-mail
                        pois, estaremos entrando em contato por lá, ou também se fornecido, por seu WhatsApp.</p>
                </div>
            </div>

        </section>
    )
}