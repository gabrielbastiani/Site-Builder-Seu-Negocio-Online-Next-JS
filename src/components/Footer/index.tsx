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
                <div className={styles.contentFooterMenu}>
                    <h2>Menu</h2>
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
                                <li><a href="/politicasDePrivacidade">Politicas de Privacidade</a></li>
                                <li><a href="/contato">Contato</a></li>
                                <li><a href="/sobre">Sobre</a></li>
                                <li><a href="https://builderseunegocioonline.com.br/server-sitemap.xml">Site Map</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.contentFooter}>
                    <h2>Blog</h2>
                    <Link href="https://blog.builderseunegocioonline.com.br" target="_blank">
                        <Image className={styles.blog} src="/blogBuilderSeuNegocioOnline.png" width={120} height={160} alt="blog" />
                    </Link>
                    <p>Visite o Blog da Builder Seu Negócio Online para ver conteúdos incríveis!!!</p>
                    <Link href="https://blog.builderseunegocioonline.com.br" target="_blank">
                        <button>Blog</button>
                    </Link>
                </div>
                <div className={styles.contentFooter}>
                    <h2>Nosso Cartão</h2>
                    <Link href="https://servidor.builderseunegocioonline.com.br:8256/down/FjG23wT2jj96" target="_blank">
                        <Image className={styles.cartao} src="/cartaoDeVisitas.jpg" width={180} height={340} alt="cartao de visitas gabriel" />
                    </Link>
                </div>
            </section>
            <section className={styles.fimDoRodape}>
                <div className={styles.redesSociais}>
                    <h3>Redes Sociais</h3>
                    <Link href="https://www.facebook.com/builderseunegocioonline" target="_blank">
                        <Image className={styles.redes} src="/facebookBuilderSeuNegocioOnline.png" width={55} height={55} alt="facebook builder seu negocio online"/>
                    </Link>
                    <Link href="https://www.instagram.com/builderseunegocioonline" target="_blank">
                        <Image className={styles.redes} src="/instagranBuilderSeuNegocioOnline.png" width={55} height={55} alt="instagram builder seu negocio online"/>
                    </Link>
                    <Link href="https://builderseunegocioonline.com.br/canalnoyoutube" target="_blank">
                        <Image className={styles.redes} src="/youtubeBuilderSeuNegocioOnline.png" width={55} height={55} alt="youtube builder seu negocio online"/>
                    </Link>
                    <Link href="https://br.pinterest.com/gabrielcbastiani" target="_blank">
                        <Image className={styles.redes} src="/pinterestBuilderSeuNegocioOnline.png" width={55} height={55} alt="pintrest builder seu negocio online"/>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5554996860104" target="_blank">
                        <Image className={styles.redes} src="/whatsappBuilderSeuNegocioOnline.png" width={55} height={55} alt="whatsapp builder seu negocio online"/>
                    </Link>
                </div>

                <hr className={styles.divisor} />
            </section>

            <div className={styles.copyrightFooter}>
                <h5>Copyright {anoAtual} © Todos os direitos reservados. Desenvolvido por Gabriel Campos de Bastiani.</h5>
            </div>

        </footer>
    )
}