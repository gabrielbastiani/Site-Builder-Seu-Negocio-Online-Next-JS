import Image from "next/image";
import React from "react";
import styles from "./FerramentasOferecidasDois.module.css"


export function FerramentasOferecidasDois() {
    return (
        <section className={styles.servico1}>
            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/emailCorporativoProfissional.png" width={420} height={330} quality={100} alt="desenvolver sites" />
                    </div>
                </div>

                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                        <iframe className={styles.video1desktop} width="449" height="256"
                            src="https://www.youtube.com/embed/pJoOxC6HL4Q" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>

                    <div className={styles.containerFerramentas}>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/sitesResponsivos.png" width={83} height={83} alt="sites responsivos" />
                                <h3>Sites Responsivos</h3>
                                <p>Seu website vai funcionar em todos os tipos de dispositivos: desktop, tablet, e
                                    Smartphone.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/preparadoParaoGoogle.png" width={83} height={83} alt="preparado para o google" />
                                <h3>Preparado para o Google</h3>
                                <p>O seu website vai estar preparado e configurado para que esteja bem posicionado no
                                    principal
                                    motor de buscas do mundo, o Google.
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/designConformeSeuNegocio.png" width={83} height={83} alt="design do seu negocio" />
                                <h3>Design conforme seu negócio</h3>
                                <p>Um layout com a cara do seu negócio, criado com aparência profissional e moderna,
                                    mostrando e
                                    transmitindo confiança aos seus visitantes.​</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/mudeSeuConteudo.png" width={83} height={83} alt="mude seu conteudo do site" />
                                <h3>Mude seu conteúdo</h3>
                                <p>Altere o que quiser, a hora que quiser, todo o conteúdo do seu website ou loja
                                    virtual; imagens,
                                    preços, banners, textos e etc...
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/ferramentasDeVenda.png" width={83} height={83} alt="ferramenta de vendas" />
                                <h3>Ferramentas de venda</h3>
                                <p>Você poderá, se quiser, usar ferramentas de checkout dos melhores métodos de
                                    pagamentos online
                                    como: PagSeguro, Mercado Pago, PayPal.​</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/emailPersonalizado.png" width={83} height={83} alt="email profissional" />
                                <h3>E-mail personalizado</h3>
                                <p>Tenha quantas contas de e-mail quiser e todas elas com o nome do seu negócio, dando
                                    assim, maior
                                    profissionalismo, Ex: contato@meunegocio.com.
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/redesSociais.png" width={83} height={83} alt="redes sociais" />
                                <h3>Redes sociais</h3>
                                <p>Compartilhe tudo o que está acontecendo com o seu negócio em suas redes sociais, faça
                                    campanhas e
                                    interaja com o seu público.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/suporte24Horas.png" width={83} height={83} alt="suporte 24 horas" />
                                <h3>Suporte 24 horas</h3>
                                <p>Mais intimidade e aproximação com o seu cliente, pois sabemos como é chato ter uma
                                    dúvida e não
                                    ser respondido.
                                </p>
                            </div>
                        </div>

                    </div>

                    <p className={styles.texto}>E MUITO MAIS...</p>

                </div>
            </div>
        </section>









        /* <section className={styles.servicoInvertida1}>
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
                        <Image className={styles.imagemServico1} src="/seuNegocioOnline.png" width={420} height={330} alt="desenvolvimento web" />
                    </div>
                </div>
            </div>

            <div className={styles.breveFrase}>
                <p>Clique no botão abaixo e preencha o Briefing para o seu site, é gratuito! </p>
                <div className={styles.botao1}>
                    <a href="/briefingParaSite" target="_blank"><button>Quero Fazer Meu Site</button></a>
                </div>
            </div>
        </section> */
    )
}