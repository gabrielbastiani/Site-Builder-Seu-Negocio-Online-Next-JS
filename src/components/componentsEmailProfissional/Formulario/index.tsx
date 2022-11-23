import Image from 'next/image'
import React from 'react'
import styles from './Formulario.module.css'


export function Formulario() {
    return (
        <section className={styles.ultimaSecao}>

            <div className={styles.imagemFinal}>
                <Image src="/meuNegocioOnlineComMarketing.png" width={350} height={370} quality={100} />
            </div>

            <p className={styles.formularioMob}>Preencha o formulário abaixo, para que possamos lhe enviar por e-mail ou WhatsApp, uma
                proposta do serviço de
                e-mail para o<br />seu negócio (Respondemos super rápido não se preocupe!!!).</p>

            <div className={styles.formulario}>
                <iframe width="700" height="1150" src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/945b99adb70f0ff740ea177f6d35e332" frameborder="0" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowfullscreen></iframe>
            </div>

        </section>
    )
}