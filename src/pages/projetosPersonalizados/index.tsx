import Head from 'next/head'
import React from 'react'
import { SectionPrincipalProjetos } from '../../components/componentsProjetosWeb/SectionPrincipalProjetos'
import { Footer } from '../../components/Footer'
import { MenuTop } from '../../components/MenuTop'


export default function ProjetosPersonalizados(){
    return(
        <>
            <Head>
                <title>Projetos WEB personalizados - Builder Seu Negócio Online</title>
            </Head>

            <MenuTop />

            <SectionPrincipalProjetos />

            <Footer />
        </>
    )
}