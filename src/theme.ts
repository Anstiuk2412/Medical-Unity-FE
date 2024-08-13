'use client';
import '../public/font/stylesheet.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Gilroy, sans-serif', // Set Gilroy as the default font
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0194FF', // Set the primary color for buttons
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                    color: '#fff', // Button text color
                    backgroundColor: '#0194FF', // Button background color
                    '&:hover': {
                        backgroundColor: '#017ACC', // Button hover color
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;
