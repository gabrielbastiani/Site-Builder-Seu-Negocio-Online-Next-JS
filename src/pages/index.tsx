import Head from 'next/head'
import { Apresentacao } from '../components/ApresentacaoHome';
import { DivisorDoisHome } from '../components/DivisorDoisHome';
import { DivisorQuartoHome } from '../components/DivisorQuartoHome';
import { DivisorTresHome } from '../components/DivisorTresHome';
import { DivisorUmHome } from '../components/DivisorUmHome';
import { Footer } from '../components/Footer';
import { MenuTop } from '../components/MenuTop';
import { SectionPrincipal } from '../components/SectionPrincipal';
import { ServicoDois } from '../components/ServicoDois';
import { ServicoQuarto } from '../components/ServicoQuarto';
import { ServicoTres } from '../components/ServicoTres';
import { ServicoUm } from '../components/ServicoUm';
import { TextoChamadaHome } from '../components/TextoChamadaHome';


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