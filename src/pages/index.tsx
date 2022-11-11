import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Builder Seu Negócio Online</title>
        <meta name="Builder Seu Negócio Online" content="Desenvolva sua solução online para sua empresa e negócio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>

        <nav className={styles.menuTopo}>
            <div className={styles.container}>
              <Link href="/">
                <a className={styles.logoMarca} href="/"><Image src="/LogoBuilderSeuNegocioOnline.png" width={165} height={200} alt="logo marca" /></a>
              </Link>
                <button className={styles.iconeMenuMobile} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className={styles.itensMenu} id="navbarSupportedContent">
                    <ul className={styles.itensMenu}>
                        <li>
                            <Link href="/">
                              <a className={styles.active} aria-current="page">Início</a>
                            </Link>
                        </li>
                        <li className={styles.dropdown}>
                            <a className={styles.dropdownToggle} href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Loja Virtual
                            </a>
                            <ul className={styles.menuDropdown} aria-labelledby="navbarDropdown">
                              <Link href="/projetos">
                                <li><a class="dropdown-item" href="https://loja.builderseunegocioonline.com.br"
                                        target="_blank">Visite nossa loja</a></li>
                            </ul>
                            </Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Fazer Site
                            </a>
                            <ul class="dropdown-menu menuDropdown" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="construir-site-ou-lojas-virtuais.html">Construir
                                        sites ou<br>lojas virtuais</a></li>
                                <li><a class="dropdown-item" href="briefing-para-site.html">Briefing
                                        para<br>site</a></li>
                                <li><a class="dropdown-item" href="https://terumsite.builderseunegocioonline.com.br/"
                                        target="_blank">E-book gratuito porque<br>ter um site?</a></li>
                                <li><a class="dropdown-item"
                                        href="https://servidor.builderseunegocioonline.com.br:8256/down/FjG23wT2jj96"
                                        target="_blank">Pegue nosso cartão<br>virtual</a></li>
                                <li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Estratégias
                            </a>
                            <ul class="dropdown-menu menuDropdown" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="estrategias-de-marketing-digital.html">A
                                        estratégia digital<br>certa para o seu negócio!</a></li>
                                <li><a class="dropdown-item" href="https://anuncios.builderseunegocioonline.com.br/"
                                        target="_blank">E-book gratuito anúncios<br>pagos para pequenos negócios</a>
                                </li>
                                <li><a class="dropdown-item"
                                        href="https://trabalharemcasa.builderseunegocioonline.com.br/"
                                        target="_blank">E-book gratuito para<br>Marketing de afiliados</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                E-mail Profissional
                            </a>
                            <ul class="dropdown-menu ultimo-menuDropdown" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="email-profissional.html">Tenha
                                        endereços de<br>e-mails profissionais</a></li>
                                <li><a class="dropdown-item" href="https://seuemail.builderseunegocioonline.com.br/"
                                        target="_blank">E-book gratuito porque seu negócio<br>precisa de um e-mail
                                        profissional?</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://blog.builderseunegocioonline.com.br"
                                target="_blank">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>

    </>
  )
}