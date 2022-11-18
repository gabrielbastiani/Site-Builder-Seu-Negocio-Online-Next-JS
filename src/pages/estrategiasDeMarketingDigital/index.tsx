import Head from "next/head";
import React from "react";
import { DivisorDoisEstrategias } from "../../components/componentsEstrategias/DivisorDoisEstrategias";
import { DivisorUmEstrategias } from "../../components/componentsEstrategias/DivisorUmEstrategias";
import { ExplicacoesSection } from "../../components/componentsEstrategias/ExplicacoesSection";
import { Facebook } from "../../components/componentsEstrategias/Facebook";
import { Google } from "../../components/componentsEstrategias/Google";
import { SectionPrincipalEstrategia } from "../../components/componentsEstrategias/SectionPrincipalEstrategia";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";


export default function EstrategiasDeMarketingDigital(){
    return(
        <>
        <Head>
            <title>Estratégias de Marketing Digital - Builder Seu Negócio Online</title>
        </Head>

        <MenuTop />

        <SectionPrincipalEstrategia />

        <ExplicacoesSection />

        <DivisorUmEstrategias />

        <Facebook />

        <DivisorDoisEstrategias />

        <Google />

        <Footer />
        </>
    )
}