import Head from 'next/head'
import { Apresentacao } from '../components/componentsHomePage/ApresentacaoHome';
import { DivisorDoisHome } from '../components/componentsHomePage/DivisorDoisHome';
import { DivisorQuartoHome } from '../components/componentsHomePage/DivisorQuartoHome';
import { DivisorTresHome } from '../components/componentsHomePage/DivisorTresHome';
import { DivisorUmHome } from '../components/componentsHomePage/DivisorUmHome';
import { Footer } from '../components/Footer';
import { MenuTop } from '../components/MenuTop';
import { SectionPrincipal } from '../components/componentsHomePage/SectionPrincipal';
import { ServicoDois } from '../components/componentsHomePage/ServicoDois';
import { ServicoQuarto } from '../components/componentsHomePage/ServicoQuarto';
import { ServicoTres } from '../components/componentsHomePage/ServicoTres';
import { ServicoUm } from '../components/componentsHomePage/ServicoUm';
import { TextoChamadaHome } from '../components/componentsHomePage/TextoChamadaHome';


export default function Home() {
    return (
        <>
            <Head>
                <title>Builder Seu Negócio Online</title>
                <meta name="Builder Seu Negócio Online" content="Desenvolva sua solução online para sua empresa e negócio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuTop />

            <SectionPrincipal />

            <TextoChamadaHome />

            <ServicoUm />

            <DivisorUmHome />

            <ServicoDois />

            <DivisorDoisHome />

            <ServicoTres />

            <DivisorTresHome />

            <ServicoQuarto />

            <DivisorQuartoHome />

            <Apresentacao />

            <Footer />

        </>
    )
}