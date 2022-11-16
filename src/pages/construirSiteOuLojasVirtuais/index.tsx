import Head from "next/head";
import React from "react";
import { DivisorUmSites } from "../../components/componentsPageSitesLoja/DivisorUmSites";
import { FerramentasOferecidas } from "../../components/componentsPageSitesLoja/FerramentasOferecidas";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";
import { PerguntasAlvo } from "../../components/componentsPageSitesLoja/PerguntasAlvo";
import { SectionPrincipalSites } from "../../components/componentsPageSitesLoja/SectionPrincipalSites";
import styles from './ConstruirSiteOuLojasVirtuais.module.css'
import { DivisorDoisSites } from "../../components/componentsPageSitesLoja/DivisorDoisSites";
import { FerramentasOferecidasDois } from "../../components/componentsPageSitesLoja/FerramentasOferecidasDois";


export default function ConstruirSiteOuLojasVirtuais(){
    return(
        <>
            <Head>
                <title>Desenvolver sites e lojas virtuais - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalSites />

            <PerguntasAlvo />

            <DivisorUmSites />

            <FerramentasOferecidas />

            <DivisorDoisSites />

            <FerramentasOferecidasDois />

            <Footer />
        </>
    )
}