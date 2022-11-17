import Image from "next/image";
import React, { useState } from "react";
import styles from './BeneficiosDeUmSite.module.css'


export function BeneficiosDeUmSite() {

    const [showQuestion1, setShowQuestion1] = useState(false);
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [showQuestion3, setShowQuestion3] = useState(false);
    const [showQuestion4, setShowQuestion4] = useState(false);
    const [showQuestion5, setShowQuestion5] = useState(false);
    const [showQuestion6, setShowQuestion6] = useState(false);
    const [showQuestion7, setShowQuestion7] = useState(false);
    const [showQuestion8, setShowQuestion8] = useState(false);

    const showOrHide1 = () => {
        setShowQuestion1(!showQuestion1);
    }

    const showOrHide2 = () => {
        setShowQuestion2(!showQuestion2);
    }

    const showOrHide3 = () => {
        setShowQuestion3(!showQuestion3);
    }

    const showOrHide4 = () => {
        setShowQuestion4(!showQuestion4);
    }

    const showOrHide5 = () => {
        setShowQuestion5(!showQuestion5);
    }

    const showOrHide6 = () => {
        setShowQuestion6(!showQuestion6);
    }

    const showOrHide7 = () => {
        setShowQuestion7(!showQuestion7);
    }

    const showOrHide8 = () => {
        setShowQuestion8(!showQuestion8);
    }


    return (
        <section className={styles.beneficiosSite}>

            <div className={styles.fundoDivisor1}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg1}
                    viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg2}
                    viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>
            </div>

            <div className={styles.tituloEtiqueta1}>
                <h2>Benefícios de ter um Site</h2>
            </div>

            <div className={styles.imagemPerguntas1}>
                <Image src="/beneficiosInternetWebsite.png" width={600} height={450} quality={100} alt="beneficios de um site" />
            </div>

            <div className={styles.contatinerBeneficios}>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide1}>BENEFÍCIO 1</a>
                    {showQuestion1 ? <div className={styles.boxBeneficios}>
                        <p>A sua empresa ou escritório estará disponível 24 horas por dia, 365 dias por ano para seus
                            clientes e pessoas interessadas.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide2}>BENEFÍCIO 2</a>
                    {showQuestion2 ? <div className={styles.boxBeneficios}>
                        <p>A sua empresa terá uma visibilidade global para alcançar novos mercados.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide3}>BENEFÍCIO 3</a>
                    {showQuestion3 ? <div className={styles.boxBeneficios}>
                        <p>Melhora a imagem da sua empresa, tornando-a mais profissional.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide4}>BENEFÍCIO 4</a>
                    {showQuestion4 ? <div className={styles.boxBeneficios}>
                        <p>Melhora a comunicação com seus clientes.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide5}>BENEFÍCIO 5</a>
                    {showQuestion5 ? <div className={styles.boxBeneficios}>
                        <p>Divulga melhor seus produtos e serviços.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide6}>BENEFÍCIO 6</a>
                    {showQuestion6 ? <div className={styles.boxBeneficios}>
                        <p>Baixo investimento, utilizar o site de uma empresa como meio de comunicação não é custo e sim
                            investimento. Excelente relação custo x benefício, se comparado com qualquer mídia
                            convencional,
                            como televisão, jornais e rádio.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide7}>BENEFÍCIO 7</a>
                    {showQuestion7 ? <div className={styles.boxBeneficios}>
                        <p>Recolher informações valiosas com os formulários online. Com eles o empreendedor pode obter
                            informações importantes sobre o mercado e os seus clientes. Esta ferramenta é excelente para
                            auxiliar ações de mercado, na hora de fazer promoção dos seus produtos e serviços.</p>
                    </div> : null}
                </div>

                <div className={styles.beneficios}>
                    <a href='#titulo' onClick={showOrHide8}>BENEFÍCIO 8</a>
                    {showQuestion8 ? <div className={styles.boxBeneficios}>
                        <p>O seu catálogo ou portfólio pode ser alterado a qualquer momento, é fácil, econômico e rápido
                            de
                            alterar. As suas capacidades são quase ilimitadas e permitem mais e melhor informações aos
                            seus
                            clientes.</p>
                    </div> : null}
                </div>
            </div>

            <div className={styles.fundoDivisor1Inferior}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>
            </div>

        </section>
    )

}