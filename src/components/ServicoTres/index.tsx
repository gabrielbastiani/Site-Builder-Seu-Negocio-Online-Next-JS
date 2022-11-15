import Image from "next/image"
import React from "react"
import styles from "./ServicoTres.module.css"


export function ServicoTres() {
    return (
        <section className={styles.servico1}>
            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/estrategiasDeMarketingDigitalParaoSeuNegocio1.png" width={327} height={269} alt="estrategias de marketing digital" />
                    </div>
                </div>
                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                    <h2>Faremos a sua estratégia de Marketing Digital Para o Seu Negócio</h2>
                    <p>Na maioria das vezes, ter apenas um Website ou uma loja virtual “ATIRADA” NO MUNDO DA INTERNET
                        pode ser
                        dinheiro jogado fora ou você não terá um retorno financeiro de médio a longo prazo.<br/>Tendo em
                        vista
                        que seu site será novo e no começo estará em baixas posições perante o Google, Bing, entre
                        outros
                        buscadores, NINGUÉM VAI TE ENCONTRAR NA INTERNET.<br/>Sabendo disso, desenvolvemos estratégias de
                        Marketing Digital personalizadas para o seu negócio, para que você obtenha resultados em um
                        curto
                        período de tempo e efetive muitas vendas, ou ao menos orçamentos com uma enxurrada de potenciais
                        clientes que vamos levar para o seu negócio com nossas estratégias digitais.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}