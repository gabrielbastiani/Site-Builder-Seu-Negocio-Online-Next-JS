import Image from 'next/image'
import styles from '../../styles/404.module.css'
import Head from 'next/head'
import Link from 'next/link'


export default function NotFound() {

   return (
      <>
         <Head>
            <title>404 não existe - Builder Seu Negócio Online</title>
         </Head>
         <div className={styles.containerCenter}>
            <Image src='/LogoBuilderBlack.png' width={440} height={150} alt="Logo Builder Seu Negócio Online" />

            <div className={styles.login}>
               <h1>DESCULPE ESSA PÁGINA NÃO EXISTE!!!</h1>
               <Link href="/">
                  <a>Clique aqui para retornar a página de inicio</a>
               </Link>
            </div>

         </div>
      </>
   )
}