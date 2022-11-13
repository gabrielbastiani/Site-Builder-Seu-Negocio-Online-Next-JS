import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'
import { AiFillPhone, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { FaMapMarker, FaGithubSquare } from 'react-icons/fa'


export function Footer() {

    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <section className={styles.sectionContentFooter}>
                <div className={styles.contentFooter}>
                    <h2>Menu</h2>
                    <hr />
                    <br />
                    <br />
                    <div className={styles.menuNavMobile}>
                        <nav>
                            <ul className={styles.menuMobile}>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/projetosPersonalizados">Projetos Personalizados</a></li>
                                <li><a href="#">Seu Website</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/construirSiteOuLojasVirtuais">Construir sites ou<br /> lojas virtuais</a></li>
                                        <li><a href="/briefingParaSite">Briefing para site</a></li>
                                        <li><a href="https://terumsite.builderseunegocioonline.com.br">E-book gratuito porque<br /> ter um website</a></li>
                                        <li><a href="#">Pegue nosso cartão<br /> virtual</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Estratégias</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/estrategiasDeMarketingDigital">Estratégia digital<br /> certa para o seu negócio!</a></li>
                                        <li><a href="https://anuncios.builderseunegocioonline.com.br">E-book gratuito anúncios<br /> pagos para pequenos negócios</a></li>
                                        <li><a href="https://trabalharemcasa.builderseunegocioonline.com.br">E-book gratuito para<br /> Marketing de afiliados</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">E-mail Profissional</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/emailProfissional">Tenha endereços de<br /> e-mails profissionais</a></li>
                                        <li><a href="https://seuemail.builderseunegocioonline.com.br">E-book gratuito porque seu negócio<br /> precisa de um e-mail profissional?</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://blog.builderseunegocioonline.com.br">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
         
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles.contactsFooter}>
                        <div className={styles.containerContacts}>
                            <span><AiFillPhone color='var(--orange)' size={38} /></span>
                            <Link href="https://api.whatsapp.com/send?phone=5554996860104" target="_blank"><p> (54) 99686-0104</p></Link>
                        </div>
                        <div className={styles.containerContacts}>
                            <span><GrMail color='var(--orange)' size={38} /></span>
                            <Link href="mailto:contato@builderseunegocioonline.com.br"><p> contato@builderseunegocioonline.com.br</p></Link>
                        </div>
                        <div className={styles.containerContacts}>
                            <span><FaMapMarker color='var(--orange)' size={38} /></span>
                            <p>Rua José Soares de Oliveira 2417 Caxias do Sul-RS CEP: 95034-100</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contentFooter}>
                    <h2>Blog</h2>
                    <hr />
                    <br />

                </div>
                <div className={styles.contentFooter}>
                    <h2>Nosso Cartão</h2>
                    <hr />
                    <br />
                    <br />
                    
                </div>
                <div className={styles.contentFooter}>
                    <h2>Redes Sociais</h2>
                    <hr />
                    <br />
                    <br />
                    <Link href="https://www.facebook.com/builderseunegocioonline" target="_blank">
                        <AiFillFacebook color='var(--orange)' size={45} />
                    </Link>
                    <Link href="https://www.instagram.com/builderseunegocioonline" target="_blank">
                        <AiFillInstagram color='var(--orange)' size={45} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabriel-campos-de-bastiani" target="_blank">
                        <AiFillLinkedin color='var(--orange)' size={45} />
                    </Link>
                    <Link href="https://github.com/gabrielbastiani" target="_blank">
                        <FaGithubSquare color='var(--orange)' size={45} />
                    </Link>

                    <br />
                    <br />

                    <h3>Entre em contato</h3>
                    <hr />

                </div>
            </section>

            <div className={styles.copyrightFooter}>
                <h5>Copyright {anoAtual} © Todos os direitos reservados. Desenvolvido por Gabriel Campos de Bastiani.</h5>
            </div>

        </footer>
    )
}