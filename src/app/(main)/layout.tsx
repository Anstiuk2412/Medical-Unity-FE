import * as React from 'react';
import '@/app/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/helpers/context/auth';
import { fetchIsLoggedIn } from '@/helpers/auth/IsLogin';
import { NavigationSection } from '@/components/NavigateSection';
import Box from '@mui/material/Box';
import Footer from '@/components/Footer';

export default async function RootLayout(props: { children: React.ReactNode }) {
    const isLoggedIn = await fetchIsLoggedIn();

    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <AuthProvider isLoggedIn={isLoggedIn}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Header />
                            <div className="contentContainer">
                                <div className="content">
                                    <NavigationSection />
                                    <Box
                                        sx={{
                                            width: '100%',
                                            paddingRight: '24px',
                                            maxWidth: '1313px'
                                        }}
                                    >
                                        {props.children}
                                    </Box>
                                </div>
                            </div>
                            <Footer />
                        </ThemeProvider>
                    </AuthProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
