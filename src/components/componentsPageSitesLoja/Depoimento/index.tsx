import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './Depoimento.module.css'

export function Depoimento() {
    return (
        <section className={styles.secaoDepoimentos}>
            <div className={styles.descricaoDepoimentos}>
                <div className={styles.depoimentos}>
                    <h2>Veja no vídeo abaixo o que falam do nosso trabalho!</h2>
                    <p className={styles.paragrafo}>Não confunda os serviços de construções e desenvolvimento de sites e lojas
                        virtuais da Builder Seu
                        Negócio Online com esses construtores de sites gratuitos que são vistos na internet.<br />

                        Muitos serviços oferecidos em outros locais possuem muitas limitações, NÃO GARANTEM QUE O SITE
                        SERÁ SEU
                        DE VERDADE e provavelmente você terá que fazer tudo sozinho.</p>

                    <Link href="/briefingParaSite" target="_blank"><p className={styles.textoDestaque}>Nossos sites são criados
                        100% por nós.</p></Link>

                    <Link href="/briefingParaSite" target="_blank">
                        <p className={styles.textoDestaque}>Atendemos todo o Brasil</p>
                    </Link>

                    <div className={styles.videoDepoimento}>
                        <iframe className={styles.video} width="519" height="292" src="https://www.youtube.com/embed/wYkiUhZJY08"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>

                    <div className={styles.diferenciais}>
                        <div className={styles.boxDiferenciais}>
                            <Image src="/experienciaEmFazerSites.png" width={83} height={83} quality={100} alt="experiencia em sites" />
                            <p>São mais de 5 anos de experiência e sempre em constante aprendizado no mercado que
                                atuamos.</p>
                        </div>
                        <div className={styles.boxDiferenciais}>
                            <Image src="/sucessoDoCliente.png" width={83} height={83} quality={100} alt="sucesso do cliente" />
                            <p>Tenha certeza que não criamos somente sites, também queremos que nossos clientes tenham
                                sucesso
                                com o nosso serviço prestado.</p>
                        </div>
                        <div className={styles.boxDiferenciais}>
                            <Image src="/qualidadeEmSites.png" width={83} height={83} quality={100} alt="site de qualidade" />
                            <p>Nossos serviços e produtos têm como padrão seguir a melhor qualidade, sempre buscando a
                                necessidade de mercado dos nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}