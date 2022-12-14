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
                                <h3>Design conforme seu neg??cio</h3>
                                <p>Um layout com a cara do seu neg??cio, criado com apar??ncia profissional e moderna,
                                    mostrando e
                                    transmitindo confian??a aos seus visitantes.???</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/mudeSeuConteudo.png" width={83} height={83} alt="mude seu conteudo do site" />
                                <h3>Mude seu conte??do</h3>
                                <p>Altere o que quiser, a hora que quiser, todo o conte??do do seu website ou loja
                                    virtual; imagens,
                                    pre??os, banners, textos e etc...
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/ferramentasDeVenda.png" width={83} height={83} alt="ferramenta de vendas" />
                                <h3>Ferramentas de venda</h3>
                                <p>Voc?? poder??, se quiser, usar ferramentas de checkout dos melhores m??todos de
                                    pagamentos online
                                    como: PagSeguro, Mercado Pago, PayPal.???</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/emailPersonalizado.png" width={83} height={83} alt="email profissional" />
                                <h3>E-mail personalizado</h3>
                                <p>Tenha quantas contas de e-mail quiser e todas elas com o nome do seu neg??cio, dando
                                    assim, maior
                                    profissionalismo, Ex: contato@meunegocio.com.
                                </p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/redesSociais.png" width={83} height={83} alt="redes sociais" />
                                <h3>Redes sociais</h3>
                                <p>Compartilhe tudo o que est?? acontecendo com o seu neg??cio em suas redes sociais, fa??a
                                    campanhas e
                                    interaja com o seu p??blico.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/suporte24Horas.png" width={83} height={83} alt="suporte 24 horas" />
                                <h3>Suporte 24 horas</h3>
                                <p>Mais intimidade e aproxima????o com o seu cliente, pois sabemos como ?? chato ter uma
                                    d??vida e n??o
                                    ser respondido.
                                </p>
                            </div>
                        </div>

                    </div>

                    <p className={styles.texto}>E MUITO MAIS...</p>

                </div>
            </div>
        </section>
    )
}