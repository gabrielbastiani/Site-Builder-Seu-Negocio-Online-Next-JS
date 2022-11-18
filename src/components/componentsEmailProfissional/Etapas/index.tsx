import Image from "next/image";
import React from "react";
import styles from './Etapas.module.css'


export function Etapas() {
    return (
        <section>
            <div className={styles.tituloSecao}>
                <h1>PRINCIPAIS VANTAGENS DO EMAIL PROFISSIONAL</h1>
            </div>
            <div className={styles.timeline}>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <h2>SEGURANÇA</h2>
                        <Image src="/políticaDePrivacidadeGabrielDeBastianiBuilderSeuNegocioOnlinePequena.jpg" width={110} height={110} quality={100} alt="email seguranca" />
                        <p>Quando falamos de e-mail profissional, sua empresa/negócio recebera serviços de antivírus e AntiSpam para que mantenha o máximo possível livre de e-mails maliciosos contendo vírus ou até mesmo fraudes financeiras, o que garante um reforço essencial no combate a hackers e falhas de sistema.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <h2>SER MAIS PRODUTIVO</h2>
                        <Image src="/recursosDoSeuSiteOuLojaPequena.jpg" width={110} height={110} quality={100} alt="analise de segmento" />
                        <p>A questão operacional, no ponto de vista de edição, envio e organização de um e-mail profissional. Você será capaz de hierarquizar arquivos dentro do servidor, permitindo o acesso remoto apenas a quem você desejar na sua empresa.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <h2>SUPORTE PROFISSIONAL</h2>
                        <Image src="/depoimentosBuilderSeuNegocioOnlinePequena.jpg" width={110} height={110} quality={100} alt="suporte profissional com um email" />
                        <p>Esse é um dos melhores pontos que você encontrará apenas aqui na Builder Seu Negócio Online, adquirindo o serviço de e-mail profissional. É a qualidade do suporte técnico oferecido. Perder clientes e negócios por causa de falhas de comunicação, é de fato muito ruim para o seu negócio. Porém fique tranquilo, temos um excelente serviço de suporte capacitado. Tendo em vista que maioria dos provedores de e-mail gratuitos não oferece um suporte técnico por causa da quantidade de pessoas que atende, fazendo com que seus usuários fiquem presos a chats ou fóruns para tentarem resolver os seus problemas.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <h2>ACESSE SEU E-MAIL DE QUALQUER LUGAR</h2>
                        <Image src="/mulherComputadorWebsitePequena.jpg" width={110} height={110} quality={100} alt="acesse seu email" />
                        <p>Acesse seus e-mail de qualquer dispositivo móvel, ou qualquer computador com acesso a internet, seja onde você estiver, daremos a você, uma dica de aplicativo incrível a ser usado no seu smartphone para que possa usar varias contas de e-mail em uma caixa de entrada só. Além de poder usar o próprio sistema de Webmail que oferecemos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}