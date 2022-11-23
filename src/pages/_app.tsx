import { AppProps } from 'next/app';
import CookieConsent from "react-cookie-consent";
import '../../styles/globals.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ChatOnline } from '../components/ChatOnline';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        location="top"
        buttonText="Aceito"
        declineButtonText="Não aceito"
        cookieName="myAwesomeCookieName2"
        style={{ background: "var(--orange)" }}
        buttonStyle={{ color: "var(--white)", fontSize: "15px", background: "var(--black)" }}
        expires={150}
        enableDeclineButton
        onDecline={() => {
          /* alert("nay!"); */
        }}
      >
        Este site usa cookies para melhorar a experiência do usuário.{" "}
      </CookieConsent>
      <FloatingWhatsApp
          phoneNumber = "54996860104"
          accountName="Builder Seu Negocio Online"
          allowEsc
          allowClickAway
          notification
          notificationSound
          chatMessage='Olá, em que posso ajudar?'
          placeholder='Escreva aqui!'
          statusMessage='Respondemos rápido'
          avatar='/logoBuilderFavicon.jpg'
          buttonStyle={{left: '50px'}}
          chatboxStyle={{left: '20px'}}
        />
        <ChatOnline />
    </>
  )
}

export default MyApp