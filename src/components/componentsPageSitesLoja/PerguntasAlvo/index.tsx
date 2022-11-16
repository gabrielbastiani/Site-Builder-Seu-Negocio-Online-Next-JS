import React from "react";
import styles from './PerguntasAlvo.module.css'
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr'


export function PerguntasAlvo() {
    return (
        <section className={styles.perguntasAlvos}>
            <h2>Seja Honesto!</h2>
            <div className={styles.alvoPergunta}>
                <p>Você acha que ter um website ou loja virtual seria benéfico para o seu negócio?</p>
                <div className={styles.linha}>
                    <div className={styles.resposta}>
                        <p>Sim</p>
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckboxSelected color="green" />
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckbox color="green" />
                    </div>
                    <div className={styles.resposta}>
                        <p>Não</p>
                    </div>
                </div>
            </div>

            <div className={styles.alvoPergunta}>
                <p>Você gostaria de alcançar mais clientes, e sempre quis usar a internet para isso?</p>
                <div className={styles.linha}>
                    <div className={styles.resposta}>
                        <p>Sim</p>
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckboxSelected color="green" />
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckbox color="green" />
                    </div>
                    <div className={styles.resposta}>
                        <p>Não</p>
                    </div>
                </div>
            </div>

            <div className={styles.alvoPergunta}>
                <p>Alcançar mais clientes do que o seu concorrente, sempre foi um problema para você?</p>
                <div className={styles.linha}>
                    <div className={styles.resposta}>
                        <p>Sim</p>
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckboxSelected color="green" />
                    </div>
                    <div className={styles.boxPerguntaAlvo}>
                        <GrCheckbox color="green" />
                    </div>
                    <div className={styles.resposta}>
                        <p>Não</p>
                    </div>
                </div>
            </div>

            <h3>Se você respondeu SIM para qualquer uma destas<br /> perguntas, então você precisa de uma<br /> presença online!
            </h3>
        </section>
    )
}