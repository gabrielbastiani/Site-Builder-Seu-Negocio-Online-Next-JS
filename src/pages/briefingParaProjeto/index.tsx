import Head from "next/head";
import React from "react";
import { SectionPrincipalProjetosBriefing } from "../../components/componentsBriefingParaProjeto/SectionPrincipalProjetosBriefing";
import { SectionBriefingProjetos } from "../../components/componentsProjetosWeb/SectionBriefingProjetos";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";


export default function briefingParaProjeto(){
    return(
        <>
            <Head>
                <title>Briefing para projetos WEB - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalProjetosBriefing />

            <SectionBriefingProjetos />

            <Footer />
        </>
    )
}