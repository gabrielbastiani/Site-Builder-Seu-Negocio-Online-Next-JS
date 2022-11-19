import Head from "next/head";
import React from "react";
import CallToAction from "../../components/componentsBriefingParaSite/CallToAction";
import { SectionBriefing } from "../../components/componentsBriefingParaSite/SectionBriefing";
import { SectionPrincipalBriefing } from "../../components/componentsBriefingParaSite/SectionPrincipalBriefing";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";


export default function BriefingParaSite(){
    return(
        <>
            <Head>
                <title>Briefing para site - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalBriefing />

            <SectionBriefing />

            <CallToAction />

            <Footer />
        </>
    )
}