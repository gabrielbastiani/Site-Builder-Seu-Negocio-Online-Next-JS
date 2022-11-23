import Image from "next/image"
import React, { useState } from "react"
import styles from "./ExplicacaoSection.module.css"
import Modal from 'react-modal';
import { ModalEmail } from "../../ModalEmail";


export function ExplicacaoSection() {

    const [modalVisible, setModalVisible] = useState(false);

    function handleCloseModal(){
        setModalVisible(false);
    }

    function handleOpenModalView(){
        setModalVisible(true);
    }


    Modal.setAppElement('#__next')

    return (
        <section className={styles.servico1}>

            <div className={styles.apresentacaoInicio}>
                <h2>Profissionais e empresas são obrigado a terem caixas de e-mail, pois é um dos canais mais importantes de
                    comunicação com seus clientes e fornecedores</h2>
                <p>Por mais que os aplicativos como o WhatsApp e outras redes sociais estejam em um aumento e visibilidade
                    constante, nos negócios, o e-mail ainda é necessário e útil em muitos momentos. Tarefas básicas para os
                    clientes e empresas, como por exemplo, fazer compras pela internet, na prática não podem ser realizadas
                    sem a utilização de uma conta de e-mail.</p>
            </div>

            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/emailCorporativoProfissional.png" width={327} height={380} alt="email profissional" />
                    </div>
                    <div className={styles.botao1}>
                        <button onClick={ () => handleOpenModalView()}>Quero Meu E-mail Profissional</button>
                    </div>
                </div>
                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                        <p>E-mails não profissionais, utilizam domínios dos provedores em que se está hospedado, como @gmail.com ou @hotmail.com, o e-mail profissional faz com que o uso do domínio do proprietário, possa ser criado um endereço próprio de e-mail. O novo nome pode ser escolhido de forma livre, mas não pode repetir um que já esteja em uso.
                            E sem falar, que o e-mail profissional permite o uso de uma hospedagem de mensagens, onde suas mensagens de e-mails vão ser armazenadas para o bem do seu negócio.
                            E um grande alivio para você ao usar o e-mail profissional, sobre o comum, se tratara da qualidade do suporte técnico oferecido pela Builder Seu Negócio Online. Com o contato junto a um profissional, as manutenções/soluções de problemas são garantidos, o que não acontece com o uso de e-mails comuns.</p>
                    </div>
                </div>
            </div>

            { modalVisible && (
                <ModalEmail
                    isOpen={modalVisible}
                    onRequestClose={handleCloseModal}
                />
            )}

        </section>
    )
}