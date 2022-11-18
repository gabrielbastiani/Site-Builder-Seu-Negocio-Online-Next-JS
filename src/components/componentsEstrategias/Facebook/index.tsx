import React from "react";
import styles from './Facebook.module.css'


export function Facebook() {
    return (
        <section>
            <div className={styles.timeline}>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 1</span>
                        <h2>Entender seu Negócio</h2>
                        <p>Vamos de preferencia conversar com você por uma ligação por vídeo conferencia, ou no ultimo caso
                            pelo Whatsapp mesmo.

                            Para que possamos entrevistar você, e assim entender qual o seu negócio, o que você faz, o que
                            pretende para o futuro do seu negócio entre outras informações que possam ser relevantes para
                            suas campanhas no Facebook Ads.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 2</span>
                        <h2>Analisar o Segmento</h2>
                        <p>Através de pesquisas, do seu mercado de negócios, vamos identificar quem é o público ideal para
                            realizar seus anúncios e assim, começar a dimensionar o seu anúncio.

                            Também é feito uma integração do Pixel do Facebook com o seu Website ou Loja virtual se claro
                            você tiver algum dos dois, para futuro remarketing.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 3</span>
                        <h2>Criação das Campanhas</h2>
                        <p>Nessa etapa, definimos quais serão as campanhas e começamos o processo de criação das artes e
                            textos.

                            Com tudo pronto, iniciamos os testes no Facebook e todos os anúncios passam por uma aprovação
                            das políticas do Facebook e Instagram.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 4</span>
                        <h2>Melhorar as Campanhas</h2>
                        <p>Após a campanha estar rodando no Facebook e no Instagram por algumas horas, vamos realizar
                            possíveis otimizações para entregar os anúncios para o melhor público.

                            Com isso é possível reduzir os gastos desnecessários, e potencializando a possibilidade de que
                            pessoas cliquem no anuncio e assim comprem seu produto ou serviço, ou entre em contato com você.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 5</span>
                        <h2>Relatórios</h2>
                        <p>Após um certo tempo, faremos o levantamento dos dados e apresentamos a você, qual foi o
                            desempenho da sua campanha para os públicos selecionados, entre vários outros dados que possam
                            ser relevantes para o seu planejamento futuro do seu negócio.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}