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
                <iframe width="700" height="810"
                    src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/faaf53a67526e2420630319544cf3260"
                    frameBorder="0" allowFullScreen></iframe>
            </div>

        </section>
    )
}