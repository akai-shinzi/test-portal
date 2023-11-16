import "@/styles/global.css";
import "@/styles/index.scss";
import "@/assets/i18n/i18n-config";
import "../satoshi.css"

import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import { store } from "@/redux";
import { isServerSideRendered } from "@/utils/CommonUtils";

if (process.env.NODE_ENV !== "production" && !isServerSideRendered()) {
    import("react-dom").then((ReactDOM) => {
        import("@axe-core/react").then((axe) => {
            axe.default(React, ReactDOM, 1000, {});
        });
    });
}

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default MyApp;
