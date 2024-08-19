import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';

const Copyright = () => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            sx={{
                width: '100%',
                maxWidth: '1600px',
                padding: '20px 24px'
            }}
        >
            {'Copyright © '}
            {new Date().getFullYear()}
            {'. by Medical Unity'}
        </Typography>
    );
};

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '104px'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    background: '#ffffff',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '64px 24px'
                }}
            >
                <Grid
                    container
                    columns={16}
                    maxWidth={1600}
                    justifyContent="space-between"
                >
                    <Grid item xs={5}>
                        <Image
                            src="/logo.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={192}
                            height={32}
                            priority
                        />
                        <Typography>
                            {
                                "Medical Unity — місце, де медицина трансформується в спільноту. Наша мета — об'єднати професіоналів із різних галузей медицини для спільного розвитку і інновацій."
                            }
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        Посилання
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Контакти'}
                        </Link>
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Реклама'}
                        </Link>
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Legal'}
                        </Link>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        Наші соц. мережі
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Контакти'}
                        </Link>
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Реклама'}
                        </Link>
                        <Link href="#" underline="hover" color={'#222222B2'}>
                            {'Legal'}
                        </Link>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        Підписуйтесь на наші новини і акції!
                        <Box>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Введіть свій email"
                                multiline
                                maxRows={4}
                            />
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright />
        </Box>
    );
}
