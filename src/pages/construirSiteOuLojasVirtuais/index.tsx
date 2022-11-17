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
import { DivisorTresSites } from "../../components/componentsPageSitesLoja/DivisorTresSites";
import { Depoimento } from "../../components/componentsPageSitesLoja/Depoimento";
import { DivisorQuartoSites } from "../../components/componentsPageSitesLoja/DivisorQuartoSites";
import { Qualidade } from "../../components/componentsPageSitesLoja/Qualidade";
import { DivisorQuintoSites } from "../../components/componentsPageSitesLoja/DivisorQuintoSites";
import { ComoCriarSeuSite } from "../../components/componentsPageSitesLoja/ComoCriarSeuSite";
import { DuvidasFrequentes } from "../../components/componentsPageSitesLoja/DuvidasFrequentes";
import { BeneficiosDeUmSite } from "../../components/componentsPageSitesLoja/BeneficiosDeUmSite";
import { CallToAction } from "../../components/componentsPageSitesLoja/CallToAction";



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

            <DivisorTresSites />

            <Depoimento />

            <DivisorQuartoSites />

            <Qualidade />

            <DivisorQuintoSites />

            <ComoCriarSeuSite />

            <DuvidasFrequentes />

            <BeneficiosDeUmSite />

            <CallToAction />

            <Footer />
        </>
    )
}