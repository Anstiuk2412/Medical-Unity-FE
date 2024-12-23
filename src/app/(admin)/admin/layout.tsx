'use client';
import { ReactNode } from 'react';
import * as React from 'react';
import { alpha, Box, PaletteMode, Stack } from '@mui/material';
import AdminHeaderDesk from '@/components/AdminHeader';
import AdminHeaderMob from '@/components/AdminHeaderMob';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getDashboardTheme from '@/app/(admin)/admin/theme/getDashboardTheme';
import SideMenu from '@/components/SideMenu';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme] = React.useState(true);
    const dashboardTheme = createTheme(getDashboardTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });
    // This code only runs on the client side, to determine the system color preference
    React.useEffect(() => {
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem(
            'themeMode'
        ) as PaletteMode | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
    };

    return (
        <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
            <SideMenu />
            <AdminHeaderMob mode={mode} toggleColorMode={toggleColorMode} />
            <Box
                component="main"
                sx={(theme) => ({
                    position: { sm: 'relative', md: '' },
                    top: { sm: '48px', md: '0' },
                    height: { sm: 'calc(100vh - 48px)', md: '100vh' },
                    flexGrow: 1,
                    pt: 2,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto'
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 10
                    }}
                >
                    <AdminHeaderDesk
                        mode={mode}
                        toggleColorMode={toggleColorMode}
                    />
                    {children}
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

export default AdminLayout;
