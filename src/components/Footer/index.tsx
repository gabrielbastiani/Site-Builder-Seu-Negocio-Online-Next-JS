import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'


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
                                <li><a href="https://builderseunegocioonline.com.br">Inicio</a></li>
                                <li><a href="#">Projetos Personalizados</a>
                                    <ul className={styles.drpdown}>
                                        <li><a href="/projetosPersonalizados">Projetos Web a App's</a></li>
                                        <li><a href="/briefingParaProjeto">Briefing para projetos</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/dbqowgV2aWQ4">Pegue nosso cartão<br /> virtual</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Seu Website</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/construirSiteOuLojasVirtuais">Construir sites ou<br /> lojas virtuais</a></li>
                                        <li><a href="/briefingParaSite">Briefing para site</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/57RFUz45MEne">E-book gratuito porque<br /> ter um website</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/dbqowgV2aWQ4">Pegue nosso cartão<br /> virtual</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Estratégias</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/estrategiasDeMarketingDigital">Estratégia digital<br /> certa para o seu negócio!</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/Px4XmD9V2yAs">E-book gratuito anúncios<br /> pagos para pequenos negócios</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/LoazbpOYADaQ">E-book gratuito para<br /> Marketing de afiliados</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">E-mail Profissional</a>
                                    <ul className={styles.drpdownMobile}>
                                        <li><a href="/emailProfissional">Tenha endereços de<br /> e-mails profissionais</a></li>
                                        <li><a href="https://servidor.builderseunegocioonline.com.br:8256/down/2kp0n40dAaGB">E-book gratuito porque seu negócio<br /> precisa de um e-mail profissional?</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://blog.builderseunegocioonline.com.br">Blog</a></li>
                                <li><a href="/politicasDePrivacidade">Politicas de Privacidade</a></li>
                                <li><a href="/contato">Contato</a></li>
                                <li><a href="/sobre">Sobre</a></li>
                                <li><a href="https://builderseunegocioonline.com.br/sitemap-0.xml">Site Map</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.contentFooter}>
                    <h2>Blog</h2>
                    <Link href="https://blog.builderseunegocioonline.com.br" target="_blank">
                        <Image className={styles.blog} src="/blogBuilderSeuNegocioOnline.png" width={120} height={160} quality={100} alt="blog" />
                    </Link>
                    <p>Visite o Blog da Builder Seu Negócio Online para ver conteúdos incríveis!!!</p>
                    <Link href="https://blog.builderseunegocioonline.com.br" target="_blank">
                        <button>Blog</button>
                    </Link>
                </div>
                <div className={styles.contentFooter}>
                    <h2>Nosso Cartão</h2>
                    <Link href="https://servidor.builderseunegocioonline.com.br:8256/down/dbqowgV2aWQ4" target="_blank">
                        <Image className={styles.cartao} src="/cartaoDeVisitas.png" width={180} height={340} quality={100} alt="cartao de visitas gabriel" />
                    </Link>
                </div>
            </section>
            <section className={styles.fimDoRodape}>
                <div className={styles.redesSociais}>
                    <h3>Redes Sociais</h3>
                    <Link href="https://www.facebook.com/builderseunegocioonline" target="_blank">
                        <Image className={styles.redes} src="/facebookBuilderSeuNegocioOnline.png" width={55} height={55} quality={100} alt="facebook builder seu negocio online" />
                    </Link>
                    <Link href="https://www.instagram.com/builderseunegocioonline" target="_blank">
                        <Image className={styles.redes} src="/instagranBuilderSeuNegocioOnline.png" width={55} height={55} quality={100} alt="instagram builder seu negocio online" />
                    </Link>
                    <Link href="https://builderseunegocioonline.com.br/canalnoyoutube" target="_blank">
                        <Image className={styles.redes} src="/youtubeBuilderSeuNegocioOnline.png" width={55} height={55} quality={100} alt="youtube builder seu negocio online" />
                    </Link>
                    <Link href="https://br.pinterest.com/gabrielcbastiani" target="_blank">
                        <Image className={styles.redes} src="/pinterestBuilderSeuNegocioOnline.png" width={55} height={55} quality={100} alt="pintrest builder seu negocio online" />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5554996860104" target="_blank">
                        <Image className={styles.redes} src="/whatsappBuilderSeuNegocioOnline.png" width={55} height={55} quality={100} alt="whatsapp builder seu negocio online" />
                    </Link>
                </div>
                <hr />
            </section>

            <div className={styles.footer}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image className={styles.imgLogo} src="/LogoBuilderWhite.png" width={170} height={50} alt="logomarca" />
                    </Link>
                    <p>Builder Seu Negócio Online<br /> Rua José Soares de Oliveira<br /> Número: 2417<br /> Caxias do Sul-RS<br /> CEP: 95034-100</p>
                </div>

                <div className={styles.copyrightFooter}>
                    <h5>Copyright {anoAtual} © Todos os direitos reservados. Desenvolvido por Gabriel Campos de Bastiani.</h5>
                </div>
            </div>

        </footer>
    )
}