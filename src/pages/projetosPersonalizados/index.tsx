import Head from 'next/head'
import React from 'react'
import { ApresentacaoDoServico } from '../../components/componentsProjetosWeb/ApresentacaoDoServico'
import { DivisorDoisProjetos } from '../../components/componentsProjetosWeb/DivisorDoisProjetos'
import { DivisorQuartoProjetos } from '../../components/componentsProjetosWeb/DivisorQuartoProjetos'
import { DivisorTresProjetos } from '../../components/componentsProjetosWeb/DivisorTresProjetos'
import { DivisorUmProjetos } from '../../components/componentsProjetosWeb/DivisorUmProjetos'
import { Processo } from '../../components/componentsProjetosWeb/Processo'
import { SectionBriefingProjetos } from '../../components/componentsProjetosWeb/SectionBriefingProjetos'
import { SectionPrincipalProjetos } from '../../components/componentsProjetosWeb/SectionPrincipalProjetos'
import { SistemaWeb } from '../../components/componentsProjetosWeb/SistemaWeb'
import { TecnologiasUsadas } from '../../components/componentsProjetosWeb/TecnologiasUsadas'
import { VantagensWeb } from '../../components/componentsProjetosWeb/VantagensWeb'
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

            <ApresentacaoDoServico />

            <DivisorUmProjetos />

            <SistemaWeb />

            <DivisorDoisProjetos />

            <VantagensWeb />

            <DivisorTresProjetos />

            <Processo />

            <DivisorQuartoProjetos />

            <TecnologiasUsadas />

            <SectionBriefingProjetos />

            <Footer />
        </>
    )
}