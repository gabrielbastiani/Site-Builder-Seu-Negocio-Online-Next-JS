import Image from "next/image"
import React from "react"
import styles from "./ServicoQuarto.module.css"


export function ServicoQuarto() {
    return (
        <section className={styles.servicoInvertida1}>
            <div className={styles.linhaServicoInvertida1}>
                <div className={styles.box1ConteudoInvertida1}>
                    <div className={styles.conteudoInvertida1}>
                    <h2>Sua empresa/negócio com E-mail profissional</h2>
                    <p>Você já deve ter se deparado com varios e-mails em sua caixa de e-mails contendo o nome de uma
                        empresa
                        não é mesmo?<br/>

                        Por exemplo, fulano@nomedaempresa.com.br, então, saiba que o seu negócio também pode ter
                        diversos
                        endereços de e-mails personalizados.<br/>

                        E-mails com o nome do funcionario no inicio, e depois o nome da sua empresa.<br/>

                        Saiba que a grande parte do mercado leva com muito mais seriedade empresas com um endereço de
                        e-mail
                        profissional, do que empresas com endereços de e-mails genericos e gratuitos como por exemplo
                        Gmail ou
                        Hotmail.</p>
                    </div>
                </div>
                <div className={styles.box2ImagemInvertida1}>
                    <div className={styles.imagemInvertida1}>
                        <Image className={styles.imagemServico1} src="/emailPersonalizadoSeuNegocio.png" width={327} height={269} alt="email profissional" />
                    </div>
                </div>
            </div>
        </section>
    )
}