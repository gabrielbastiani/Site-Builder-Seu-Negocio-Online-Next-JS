import Image from "next/image";
import React from "react";
import styles from './SectionPrincipalEstrategia.module.css'


export function SectionPrincipalEstrategia() {
    return (
        <section className={styles.secaoPrincipalDesktop}>

            <div className={styles.imagemFundo}>
                <Image src="/marketingDeNegociosLocais.jpg" width={1596} height={563} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.imagemFundoMobile}>
                <Image src="/marketingDeNegociosLocaisMobile.jpg" width={393} height={681} quality={100} alt="desenvolver websites" />
            </div>

            <div className={styles.conteudoCentral}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.headline}>
                            <h1>Seu negócio precisa ser estratégico aqui na internet</h1>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textoHeadline}>
                            <p>Ter um Website ou sua Loja virtual é essencial sem sombra de duvidas aqui na internet, porém, ter uma estratégia de Marketing Digital aliada a sua estrutura online vai proporcionar ao seu negócio ter muito retorno em vendas ou no minimo contatos de futuros clientes.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}