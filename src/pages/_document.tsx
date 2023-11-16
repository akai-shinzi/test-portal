import Document, { Head, Html, Main, NextScript } from "next/document";
import { AppConfig } from "@/utils/AppConfig";

class MyDocument extends Document {
    render() {
        return (
            <Html lang={AppConfig.locale}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
