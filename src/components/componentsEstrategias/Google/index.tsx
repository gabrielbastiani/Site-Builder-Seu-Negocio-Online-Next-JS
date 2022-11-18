import React from "react";
import styles from './Google.module.css'


export function Google() {
    return (
        <section className={styles.sectionTimeline}>
            <div className={styles.timeline}>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 1</span>
                        <h2>Entender seu Negócio</h2>
                        <p>Vamos de preferencia conversar com você por uma ligação por vídeo conferencia, ou no ultimo caso pelo Whatsapp mesmo. Para que possamos entrevistar você, e assim entender qual o seu negócio, o que você faz, o que pretende para o futuro do seu negócio entre outras informações que possam ser relevantes para suas campanhas no Google Ads.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 2</span>
                        <h2>Analisar o Segmento</h2>
                        <p>Através de pesquisas, do seu mercado de negócios, vamos identificar quem é o público ideal para realizar seus anúncios e assim, começar a dimensionar o seu anúncio. Também é feito uma busca no seu Website ou Loja virtual para entender as principais palavras-chave.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 3</span>
                        <h2>Pesquisa de Palavras-Chave</h2>
                        <p>Para aumentar as chances de que o seu Website ou Loja virtual apareça logo no inicio do Google. As palavras-chaves que seu anúncio irá aparecer, realizamos uma pesquisa na própria ferramenta do Google Ads para descobrir sinônimos e outras ideias para o início da campanha.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 4</span>
                        <h2>Criação de Campanhas</h2>
                        <p>Nessa etapa, vamos dar inicio a montagem das campanhas com toda pesquisa realizada anteriormente. Estruturamos as Campanhas > Grupos de Anúncios e Palavras-chave. Também criamos os anúncios e extensões de anúncios, tudo para que tenha o melhor resultado em poucos dias.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["left"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 5</span>
                        <h2>Otimizar sua Campanha</h2>
                        <p>Depois de poucos dias de campanha, realizamos alguns ajustes finos e alterações se for o caso como: locais, horários e até mesmo faixa etária do público. Toda personalização é para gerar os melhores resultados para o seu negócio.</p>
                    </div>
                </div>
                <div className={`${styles["container"]} ${styles["right"]}`}>
                    <div className={styles.content}>
                        <span className={styles.eta}>ETAPA 6</span>
                        <h2>Apresentação de Resultados</h2>
                        <p>Todos os meses, vamos apresentar os relatórios e resultados das campanhas. Nessa reunião também é discutido possíveis ações para os meses seguintes. E o potencial do seu negócio aqui na internet, lembrando que podemos usar também o Youtube para o seu anuncio pois, ele é do Google.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}