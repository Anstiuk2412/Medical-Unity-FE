import * as React from 'react';
import '@/app/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AuthProvider } from '@/helpers/context/auth';
import { fetchIsLoggedIn } from '@/helpers/auth/IsLogin';
import Box from '@mui/material/Box';
import { isAdmin } from '@/actions/auth/isAdmin';
import { notFound } from 'next/navigation';

export default async function RootLayout(props: { children: React.ReactNode }) {
    const isLoggedIn = await fetchIsLoggedIn();
    const { data } = await isAdmin();

    // if (!data) {
    //     notFound();
    // }

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
