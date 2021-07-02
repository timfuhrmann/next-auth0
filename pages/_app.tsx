import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../app/css/theme";
import { GlobalStyle } from "../app/css/GlobalStyle";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Navigation } from "../app/components/Navigation";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <UserProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <Component {...pageProps} />
            </ThemeProvider>
        </UserProvider>
    );
};

export default App;
