import React from "react";
import styles from './SectionBriefingProjetos.module.css'


export function SectionBriefingProjetos() {
    return (
        <section className={styles.secaoBriefing}>

            <div className={styles.explicacaoBriefing}>
                <h3>Preencha abaixo, todas as informações do Briefing para projetos Web e aplicativos para celular para que possamos enviar<br /> uma proposta para você.</h3>
                <p>Não se preocupe, responderemos bem rápido 🙂 </p>
            </div>

            <div className={styles.linhaBriefing}>
                <div className={styles.briefing}>
                <iframe width="700" height="1800" src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/115f3d501a1ab2046945d5f07133c344" frameborder="0" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowfullscreen></iframe>
                    <p>Assim que informar todas as informações solicitadas acima, estaremos analisando-as, e realizando um
                        orçamento em cima das informações as quais você nos forneceu, Fique ligado na sua caixa de e-mail
                        pois, estaremos entrando em contato por lá, ou também se fornecido por você, por seu WhatsApp.</p>
                </div>
            </div>

        </section>
    )
}