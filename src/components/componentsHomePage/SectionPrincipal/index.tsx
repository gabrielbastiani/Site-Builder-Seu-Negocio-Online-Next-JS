import React from 'react';
import styles from './SectionPrincipal.module.css'
import { BsFileEarmarkCode } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa'
import { TbBusinessplan } from 'react-icons/tb'
import { FiMail } from 'react-icons/fi'


export function SectionPrincipal() {

    return (
        <>
            <section className={styles.secaoPrincipalDesktop}>
                <div className={styles.videoFundo}>
                    <video
                        className={styles.video}
                        autoPlay
                        width="100%"
                        loop
                        muted
                    >
                        <source src="/fundoDoSiteComEfeito.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={styles.conteudoCentral}>
                    <div className={styles.conteudoBox}>
                        <div className={styles.bloco}>
                            <div className={styles.headline}>
                                <h1>Seu negócio precisa de uma solução online o mais rápido possivel!</h1>
                            </div>
                        </div>
                        <div className={styles.bloco}>
                            <div className={styles.textoHeadline}>
                                <p>Criamos para você sua presença digital, ou ferramenta online para que obtenha os melhores resultados perante a sua
                                    concorrência. Grande parte das pequenas empresas e profissionais autônomos e liberais estão
                                    encontrando muitas oportunidades de negócios na internet. E o seu negócio, vai ficar de
                                    fora?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.blocosServicos}>
                <div className={styles.servicosBlocos}>
                    <div className={styles.boxServico}>
                        <a href="/construirSiteOuLojasVirtuais" target="_blank"><BsFileEarmarkCode className={styles.icon} /></a>
                        <p>Construímos seu Website ou Loja Virtual</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/projetosPersonalizados" target="_blank"><FaCode className={styles.icon} /></a>
                        <p>Projetos Personalizados</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/estrategiasDeMarketingDigital" target="_blank"><TbBusinessplan className={styles.icon} /></a>
                        <p>Estratégias de Marketing Digital para o Seu Negócio</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/emailProfissional" target="_blank"><FiMail className={styles.icon} /></a>
                        <p>Empresa com E-mail Profissional</p>
                    </div>
                </div>
            </div>


            <section className={styles.secaoPrincipalMobile}>
                <div className={styles.videoFundoMobile}>
                    <video
                        className={styles.videoMobile}
                        autoPlay
                        width="100%"
                        loop
                        muted
                    >
                        <source src="/fundoDoSiteComEfeitoMobile.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={styles.conteudoCentralMobile}>
                    <div className={styles.conteudoBoxMobile}>
                        <div className={styles.blocoMobile}>
                            <div className={styles.headlineMobile}>
                                <h1>Seu negócio precisa de uma solução online o mais rápido possivel!</h1>
                            </div>
                        </div>
                        <div className={styles.blocoMobile}>
                            <div className={styles.textoHeadlineMobile}>
                                <p>Criamos para você sua presença digital, ou ferramenta online para que obtenha os melhores resultados perante a sua
                                    concorrência. Grande parte das pequenas empresas e profissionais autônomos e liberais estão
                                    encontrando muitas oportunidades de negócios na internet. E o seu negócio, vai ficar de
                                    fora?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className={styles.blocosServicosMobile}>
                <div className={styles.servicosBlocos}>
                    <div className={styles.boxServico}>
                        <a href="/construirSiteOuLojasVirtuais" target="_blank"><BsFileEarmarkCode className={styles.icon} /></a>
                        <p>Construímos seu Website ou Loja Virtual</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/projetosPersonalizados" target="_blank"><FaCode className={styles.icon} /></a>
                        <p>Projetos Personalizados</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/estrategiasDeMarketingDigital" target="_blank"><TbBusinessplan className={styles.icon} /></a>
                        <p>Estratégias de Marketing Digital para o Seu Negócio</p>
                    </div>
                    <div className={styles.boxServico}>
                        <a href="/emailProfissional" target="_blank"><FiMail className={styles.icon} /></a>
                        <p>Empresa com E-mail Profissional</p>
                    </div>
                </div>
            </div>
        </>
    )
}