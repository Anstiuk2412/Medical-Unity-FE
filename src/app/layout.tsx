import * as React from 'react';
import "./globals.css";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import {Header} from "@/components/Header";
import {AuthProvider} from "@/helpers/context/auth";

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Header/>
                    {props.children}
                </ThemeProvider>
            </AuthProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
