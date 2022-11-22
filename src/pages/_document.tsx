import Document, { Html, Head, Main, NextScript } from "next/document";
import Analytics from "../components/Analytics";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <Analytics />
                </body>
            </Html>
        )
    }
}