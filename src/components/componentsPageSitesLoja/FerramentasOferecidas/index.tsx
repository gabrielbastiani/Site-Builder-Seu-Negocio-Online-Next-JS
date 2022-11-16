import Image from "next/image";
import React from "react";
import styles from "./FerramentasOferecidas.module.css"


export function FerramentasOferecidas() {
    return (

        <section className={styles.servicoInvertida1}>
            <div className={styles.linhaServicoInvertida1}>

                <div className={styles.bloco1}>
                    <div className={styles.box1ConteudoInvertida1}>
                        <div className={styles.conteudoInvertida1}>
                            <iframe className={styles.video1desktop} width="449" height="256"
                                src="https://www.youtube.com/embed/eUAWlyaqsik" title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className={styles.containerFerramentas}>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/seuNegocioVaiSerEncontradoNaInternet.png" width={83} height={83} alt="encontrar na internet" />
                                <h3>Para ser encontrado</h3>
                                <p>Ter um website é a forma mais barata de alguém encontrar seu negócio e saber o
                                    que você faz.
                                    E isso significa orçamentos e mais vendas.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/paraTerAutoridadeNoMercado.png" width={83} height={83} alt="autoridade na internet" />
                                <h3>Para ter autoridade no mercado</h3>
                                <p>Você confiaria em algum negócio hoje em dia que não tenha pelo menos um website
                                    ou e-commerce?
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/paraExpandiroNegocioNaInternet.png" width={83} height={83} alt="expandir o negocio" />
                                <h3>Para expandir o negócio</h3>
                                <p>Você certamente tem planos de expandir seus negócios não é mesmo? Com toda
                                    certeza um website e
                                    uma presença online vai te ajudar.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/paraVenderMaisNaInternet.png" width={83} height={83} alt="para vender mais" />
                                <h3>Para vender mais</h3>
                                <p>Você vai poder se relacionar com diversos clientes ao mesmo tempo estando online,
                                    assim, o
                                    calculo é o seguinte: relacionamento + engajar = vendas.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/paraAutomatizarSeuNegocioNaInternet.png" width={83} height={83} alt="automatizar um negocio na internet" />
                                <h3>Para automatizar</h3>
                                <p>Ter um website é a forma mais barata de alguém encontrar seu negócio e saber o
                                    que você faz.
                                    E isso significa orçamentos e mais vendas.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/porDentroDosNumerosDoSeuNegocio.png" width={83} height={83} alt="analisar seu negocio" />
                                <h3>Por dentro dos números</h3>
                                <p>Poderá analisar em tempo real tudo o que está acontecendo com o seu negócio,
                                    podendo ser sempre
                                    mais assertivo.</p>
                            </div>
                        </div>

                    </div>

                    <p className={styles.texto}>E MUITO MAIS...</p>

                </div>

                <div className={styles.box2ImagemInvertida1}>
                    <div className={styles.imagemInvertida1}>
                        <Image className={styles.imagemServico1} src="/seuNegocioOnline.png" width={420} height={330} quality={100} alt="desenvolvimento web" />
                    </div>
                </div>
            </div>

            <div className={styles.breveFrase}>
                <p>Clique no botão abaixo e preencha o Briefing para o seu site, é gratuito! </p>
                <div className={styles.botao1}>
                    <a href="/briefingParaSite" target="_blank"><button>Quero Fazer Meu Site</button></a>
                </div>
            </div>
        </section>
    )
}