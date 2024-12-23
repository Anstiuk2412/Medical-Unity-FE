'use client';
import '../public/font/stylesheet.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Gilroy, sans-serif' // Set Gilroy as the default font
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0194FF' // Set the primary color for buttons
        }
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'h3' },
                    style: {
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: '32px'
                    }
                }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        textTransform: 'unset',
                        borderRadius: '10px',
                        color: '#fff',
                        backgroundColor: '#0194FF',
                        '&:hover': {
                            backgroundColor: '#017ACC',
                            boxShadow: 'none'
                        },
                        boxShadow: 'none'
                    }
                },
                {
                    props: { variant: 'text' },
                    style: {
                        borderRadius: '10px',
                        textTransform: 'unset'
                    }
                }
            ]
        },
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa'
                    })
                })
            }
        }
    }
});

export default theme;
