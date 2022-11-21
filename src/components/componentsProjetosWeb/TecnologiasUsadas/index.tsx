import Image from "next/image";
import React from "react";
import styles from "./TecnologiasUsadas.module.css"


export function TecnologiasUsadas() {
    return (
        <section className={styles.servico1}>
            <div className={styles.linhaServico1}>
                <div className={styles.box1Imagem}>
                    <div className={styles.imagem1}>
                        <Image className={styles.imagemServico1} src="/tecnologiaDesenvolvimentoWebTecnologias.png" width={480} height={250} quality={100} alt="desenvolver sites" />
                    </div>
                </div>

                <div className={styles.box2Conteudo}>
                    <div className={styles.conteudo1}>
                        <Image src="/tecnologiasWeb.jpg" width={440} height={243} alt="tecnologias web" />
                    </div>

                    <div className={styles.containerFerramentas}>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/html5.png" width={83} height={83} alt="html 5" />
                                <h3>HTML 5</h3>
                                <p>O HTML5 é a quinta e mais recente versão do padrão HTML. Ele oferece novos recursos que aprimoram o suporte à criação de aplicativos da Web que podem interagir com o usuário, seus dados locais e servidores, de forma mais fácil e eficaz.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/css3.png" width={83} height={83} alt="css 3" />
                                <h3>CSS 3</h3>
                                <p>CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), pela qual se define estilos para um projeto web (página de internet).</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/javascript.png" width={83} height={83} alt="javascript" />
                                <h3>JavaScript</h3>
                                <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.​</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/reactjs.png" width={83} height={83} alt="react js" />
                                <h3>React JS</h3>
                                <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/nextjs.png" width={83} height={83} alt="next js" />
                                <h3>Next JS</h3>
                                <p>Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.​</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/nodejs.png" width={83} height={83} alt="node js" />
                                <h3>Node JS</h3>
                                <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/android.png" width={83} height={83} alt="App Android" />
                                <h3>Aplicativos celular Android</h3>
                                <p>Android é um sistema operacional baseado no núcleo Linux, projetado principalmente para dispositivos eletrônicos móveis com tela sensível ao toque.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/ios.png" width={83} height={83} alt="App IOS" />
                                <h3>Aplicativos celular IOS</h3>
                                <p>iOS é um sistema operacional móvel da Apple Inc. desenvolvido originalmente para o iPhone, iPod Touch e o iPad até a introdução do iPadOS em 2019, um sistema derivado do iOS. A Apple não permite que o iOS seja executado em hardware de terceiros.</p>
                            </div>
                        </div>

                        <div className={styles.linhaFerramentas}>

                            <div className={styles.ferramenta}>
                                <Image src="/typscript.png" width={83} height={83} alt="Typscript" />
                                <h3>Typescript</h3>
                                <p>TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
                            </div>

                            <div className={styles.ferramenta}>
                                <Image src="/bootstrap.png" width={83} height={83} alt="Bootstrap" />
                                <h3>Bootstrap</h3>
                                <p>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.</p>
                            </div>
                        </div>
                    </div>

                    <p className={styles.texto}>E MUITO MAIS...</p>
                    
                </div>
            </div>
        </section>
    )
}