import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { MenuTop } from '../components/MenuTop';

export default function Home() {
    return (
        <>
            <Head>
                <title>Builder Seu Negócio Online</title>
                <meta name="Builder Seu Negócio Online" content="Desenvolva sua solução online para sua empresa e negócio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuTop />

        </>
    )
}