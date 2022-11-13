import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Menu.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

export function MenuTop() {

    const [showMenu, setShowMenu] = useState(false);

    const showOrHide = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header className={styles.headerTop}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image className={styles.imgLogo} src="/LogoBuilderWhite.png" width={170} height={50} alt="logomarca" />
                </Link>
            </div>
            <nav>
                <ul className={styles.menu}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/projetosPersonalizados">Projetos Personalizados</a></li>
                    <li><a href="#">Seu Website</a>
                        <ul className={styles.drpdown}>
                            <li><a href="/construirSiteOuLojasVirtuais">Construir sites ou<br /> lojas virtuais</a></li>
                            <li><a href="/briefingParaSite">Briefing para site</a></li>
                            <li><a href="https://terumsite.builderseunegocioonline.com.br">E-book gratuito porque<br /> ter um website</a></li>
                            <li><a href="#">Pegue nosso cartão<br /> virtual</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Estratégias</a>
                        <ul className={styles.drpdown}>
                            <li><a href="/estrategiasDeMarketingDigital">Estratégia digital<br /> certa para o seu negócio!</a></li>
                            <li><a href="https://anuncios.builderseunegocioonline.com.br">E-book gratuito anúncios<br /> pagos para pequenos negócios</a></li>
                            <li><a href="https://trabalharemcasa.builderseunegocioonline.com.br">E-book gratuito para<br /> Marketing de afiliados</a></li>
                        </ul>
                    </li>
                    <li><a href="#">E-mail Profissional</a>
                        <ul className={styles.drpdown}>
                            <li><a href="/emailProfissional">Tenha endereços de<br /> e-mails profissionais</a></li>
                            <li><a href="https://seuemail.builderseunegocioonline.com.br">E-book gratuito porque seu negócio<br /> precisa de um e-mail profissional?</a></li>
                        </ul>
                    </li>
                    <li><a href="https://blog.builderseunegocioonline.com.br">Blog</a></li>
                </ul>
            </nav>

            <div className={styles.iconMobile}>
                <GiHamburgerMenu color='var(--white)' size={35} onClick={showOrHide} />
            </div>

            {showMenu ? <div className={styles.menuNavMobile}>
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
            </div> : null}
        </header>
    )
}