import Head from "next/head";
import React from "react";
import { SectionPrincipalEstrategia } from "../../components/componentsEstrategias/SectionPrincipalEstrategia";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";
import styles from './Estrategias.module.css'


export default function EstrategiasDeMarketingDigital(){
    return(
        <>
        <Head>
            <title>Estratégias de Marketing Digital - Builder Seu Negócio Online</title>
        </Head>

        <MenuTop />

        <SectionPrincipalEstrategia />

        <Footer />
        </>
    )
}