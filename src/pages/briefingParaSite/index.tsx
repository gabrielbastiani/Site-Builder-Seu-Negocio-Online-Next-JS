import Head from "next/head";
import React from "react";
import { SectionPrincipalBriefing } from "../../components/componentsBriefingParaSite/SectionPrincipalBriefing";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";
import styles from './BriefingParaSite.module.css';


export default function BriefingParaSite(){
    return(
        <>
            <Head>
                <title>Briefing para site - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalBriefing />

            <Footer />
        </>
    )
}