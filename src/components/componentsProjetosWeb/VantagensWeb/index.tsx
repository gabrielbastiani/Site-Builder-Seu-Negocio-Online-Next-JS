import Image from "next/image";
import React from "react";
import styles from "./VantagensWeb.module.css"


export function VantagensWeb() {
    return (

        <section className={styles.servicoInvertida1}>
            <div className={styles.linhaServicoInvertida1}>

                <div className={styles.bloco1}>
                    <div className={styles.box1ConteudoInvertida1}>
                        <div className={styles.conteudoInvertida1}>
                            <Image src="/vantagensSistemasWeb.png" width={440} height={293} alt="vantagens de ter um sistema web" />
                        </div>
                    </div>

                    <div className={styles.containerFerramentas}>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/sitesResponsivos.png" width={83} height={83} alt="acessar em qualquer lugar" />
                                <h3>Acessa de qualquer lugar</h3>
                                <p>Os Sistemas Web são acessíveis de qualquer lugar do planeta e não apenas dentro da sua empresa.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/paraTerAutoridadeNoMercado.png" width={83} height={83} alt="autoridade na internet" />
                                <h3>Acessível em celulares</h3>
                                <p>Outra vantagem é acessar o Sistema em qualquer dispositivo, como smartphones e tablets.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/mudeSeuConteudo.png" width={83} height={83} alt="expandir o negocio" />
                                <h3>Fácil instalação e manutenção</h3>
                                <p>Como os sistemas são nas Nuvens, sua empresa pode trocar os computadores sem precisar reinstalar.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/designConformeSeuNegocio.png" width={83} height={83} alt="integrar seu sistema com o seu site" />
                                <h3>Integração com seu Site</h3>
                                <p>Por estar na Nuvem, a integração de informações com o seu site fica muito mais fácil.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/ferramentasDeVenda.png" width={83} height={83} alt="automatizar um negocio na internet" />
                                <h3>Mais segurança</h3>
                                <p>Os sistemas contam com Certificado SSL (Cadeado de Segurança) e o backup é automático.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/porDentroDosNumerosDoSeuNegocio.png" width={83} height={83} alt="analisar seu negocio" />
                                <h3>Centralização das informações</h3>
                                <p>Permite que vários usuários, inclusive de várias filiais, usem o sistema simultaneamente.</p>
                            </div>
                        </div>

                    </div>

                    <p className={styles.texto}>E MUITO MAIS...</p>

                </div>

                <div className={styles.box2ImagemInvertida1}>
                    <div className={styles.imagemInvertida1}>
                        <Image className={styles.imagemServico1} src="/webDesenvolvimento.png" width={420} height={380} quality={100} alt="desenvolvimento web" />
                    </div>
                </div>
            </div>

            <div className={styles.breveFrase}>
                <p>Clique no botão abaixo e preencha o Briefing para o seu sistema, é gratuito! </p>
                <div className={styles.botao1}>
                    <a href="/briefingParaProjeto" target="_blank"><button>Quero Fazer Meu Sistema WEB ou Aplicativo de Celular</button></a>
                </div>
            </div>
        </section>
    )
}