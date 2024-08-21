import * as React from 'react';
import '@/app/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AuthProvider } from '@/helpers/context/auth';
import { fetchIsLoggedIn } from '@/helpers/auth/IsLogin';
import SideMenu from '@/components/SideMenu';
import Box from '@mui/material/Box';

export default async function RootLayout(props: { children: React.ReactNode }) {
    const isLoggedIn = await fetchIsLoggedIn();

    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <AuthProvider isLoggedIn={isLoggedIn}>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' }
                            }}
                        >
                            {props.children}
                        </Box>
                    </AuthProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
