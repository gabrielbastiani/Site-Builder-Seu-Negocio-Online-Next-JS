import Head from "next/head";
import React from "react";
import { Etapas } from "../../components/componentsEmailProfissional/Etapas";
import { ExplicacaoSection } from "../../components/componentsEmailProfissional/ExplicacaoSection";
import { Formulario } from "../../components/componentsEmailProfissional/Formulario";
import { SectionPrincipalEmail } from "../../components/componentsEmailProfissional/SectionPrincipalEmail";
import { Footer } from "../../components/Footer";
import { MenuTop } from "../../components/MenuTop";


export default function EmailProfissional() {

    return (
        <>
            <Head>
                <title>Email Profissional - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalEmail />

            <ExplicacaoSection />

            <Etapas />

            <Formulario />

            <Footer />
        </>
    )
}