import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './ApresentacaoDoServico.module.css'

export function ApresentacaoDoServico() {
    return (
        <section className={styles.secaoDepoimentos}>
            <div className={styles.descricaoDepoimentos}>
                <div className={styles.depoimentos}>
                    <h2>Você ou o seu negócio precisa de uma solução ou sistema online especifico?</h2>
                    <p className={styles.paragrafo}>Seu negócio ou até mesmo você tem um problema, fraqueza especifica e entenda que com uma solução online seja a solução? Fale com a gente que iremos planejar e desenvolver o seu sistema web exatamente como você precisa. Aqui abaixo vamos explicar com mais detalhes como funciona, e as grandes vantagens de ter um sistema web em seu negócio!</p>

                    <div className={styles.videoDepoimento}>
                        <Image src="/programacaoWeb.png" width={600} height={410} quality={100} alt="programacao web" />
                    </div>
                </div>
            </div>
        </section>
    )
}