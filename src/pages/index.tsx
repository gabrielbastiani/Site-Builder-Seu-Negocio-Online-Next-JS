import Head from 'next/head'
import { Footer } from '../components/Footer';
import { MenuTop } from '../components/MenuTop';
import { SectionPrincipal } from '../components/SectionPrincipal';
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

            <Footer />

        </>
    )
}