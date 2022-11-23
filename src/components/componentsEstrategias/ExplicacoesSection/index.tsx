import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from './ExplicacoesSection.module.css'
import { ModalEstrategias } from "../../ModalEstrategias";
import Modal from 'react-modal';


export function ExplicacoesSection() {

    const [modalVisible, setModalVisible] = useState(false);

    function handleCloseModal() {
        setModalVisible(false);
    }

    function handleOpenModalView() {
        setModalVisible(true);
    }

    const [totalTimeMilesunds1, setTotalTimeMilesund1] = useState(0);
    const [totalTimeMilesunds2, setTotalTimeMilesund2] = useState(0);
    const [totalTimeMilesunds3, setTotalTimeMilesund3] = useState(0);

    const text1 = '71'
    const text2 = '96'
    const text3 = '73'

    useEffect(() => {
        if (totalTimeMilesunds1 === 71) {
            text1
            return
        } else {
            setTimeout(() => {
                setTotalTimeMilesund1(totalTimeMilesunds1 + 1)
            }, 10)
        }
    }, [totalTimeMilesunds1])

    useEffect(() => {
        if (totalTimeMilesunds2 === 96) {
            text2
            return
        } else {
            setTimeout(() => {
                setTotalTimeMilesund2(totalTimeMilesunds2 + 1)
            }, 10)
        }
    }, [totalTimeMilesunds2])

    useEffect(() => {
        if (totalTimeMilesunds3 === 73) {
            text3
            return
        } else {
            setTimeout(() => {
                setTotalTimeMilesund3(totalTimeMilesunds3 + 1)
            }, 10)
        }
    }, [totalTimeMilesunds3])


    Modal.setAppElement('#__next')

    return (
        <section className={styles.secaoExplicacoes}>

            <p className={styles.explicacoes}>Sem sombras de dúvidas não é por nada que, a compra de trafego, ou seja, pagar para que uma multidão de
                pessoas visitem seu Website ou loja virtual é uma maneira muito rápida para alcançar quem procura e tem
                interesse em seu produto ou serviço.<br />

                A Builder Seu Negócio Online realiza campanhas para Facebook Ads, encontrando o público ideal para
                apresentar seus anúncios. E claro que trabalhamos com campanhas no Google Ads e mostramos sua empresa e
                negócio para aquelas pessoas que digitarem algum interesse por seu produto ou serviço.</p>

            <div className={styles.linhaContadorExplicacoes}>
                <div className={styles.contadorExplicacoes}>
                    <span className={styles.counterUp}>{totalTimeMilesunds1}</span><span className={styles.porcento}>%</span>
                    <p>Das pesquisas feitas no Google, dão como resultado os cliques nos links que ficam na primeira página
                        do Google.</p>
                </div>
                <div className={styles.contadorExplicacoes}>
                    <span className={styles.counterUp}>{totalTimeMilesunds2}</span><span className={styles.porcento}>%</span>
                    <p>Toda participação de uma empresa no mercado em termos das vendas de um determinado produto, vem do
                        Google.</p>
                </div>
                <div className={styles.contadorExplicacoes}>
                    <span className={styles.counterUp}>{totalTimeMilesunds3}</span><span className={styles.porcento}>%</span>
                    <p>De grandes empresas mundiais, dizem que que as principais estrategias de Marketing de anuncios são
                        feitas com o Facebook Ads.</p>
                </div>
            </div>

            <div className={styles.bannerAnuncios}>
                <Image src="/estrategiasDigitaisMarketing.png" width={750} height={710} quality={100} alt="estrategias de marketing digital" />
            </div>

            <div className={styles.linhaApresentacao}>
                <div className={styles.apresentacao}>
                    <h2>Facebook Ads</h2>
                </div>
                <div className={styles.apresentacao}>
                    <h2>Google Ads</h2>
                </div>
            </div>
            <div className={styles.linhaApresentacaoTexto}>
                <div className={styles.apresentacaoTexto}>
                    <p>São mais de 2,2 Bilhões de usuários mensais, o Facebook conta com 120 milhões de brasileiros com
                        perfis ativos e atualmente é uma das redes sociais com toda certeza de maior potencial para que
                        possamos anunciar o seu negócio.<br />

                        Com tantos dados, realizar anúncios no Facebook fica fácil de ter uma grande chance de atingir
                        milhares de futuros clientes. A grande diferença, dele para o Google Ads é que no Facebook Ads, o
                        seu anúncio aparece para o usuário, ou seja, você vai em busca da atenção das pessoas, enquanto no
                        Google Ads, as pessoas encontram seu anúncio através de buscas no próprio Google ou no YouTube.</p>
                </div>
                <div className={styles.apresentacaoTexto}>
                    <p>Anunciar no Google é uma das formas mais rápidas e eficazes para alguém encontrar seu serviço ou
                        produto. Pois estamos falando da maior e melhor plataforma de buscas na internet que existe
                        atualmente.<br />

                        Através das pesquisas que o usuário faz no buscador, seu produto/serviço pode se destacar dos
                        concorrentes, recebendo uma quantidade maior de tráfego, que nada mais é do que pessoas entrando no
                        seu website ou loja virtual, e assim, poder gerar mais clientes qualificados.</p>
                </div>
            </div>

            <div className={styles.botao1}>
                <button onClick={() => handleOpenModalView()}>Quero Faturar Mais</button>
            </div>

            { modalVisible && (
                <ModalEstrategias
                    isOpen={modalVisible}
                    onRequestClose={handleCloseModal}
                />
            )}

        </section>
    )
}