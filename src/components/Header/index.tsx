'use client';
import {
    AppBar,
    Avatar,
    Box,
    DialogActions,
    Dialog,
    IconButton,
    Toolbar,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import Image from 'next/image';
import Button from '@mui/material/Button';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useAuth } from '@/helpers/context/auth';
import React from 'react';

export const Header = () => {
    const { isLogin, login } = useAuth();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom:
                            '1px solid var(--stroke-black-8, #00000014)',
                        boxShadow: 'none',
                        backgroundColor: '#fff'
                    }}
                >
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            maxWidth: '1552px',
                            width: '100%'
                        }}
                    >
                        <Image
                            src="/logo.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={192}
                            height={32}
                            priority
                        />
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <IconButton
                                sx={{ backgroundColor: '#EFEEF0' }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            {isLogin ? (
                                <Box sx={{ display: 'flex', gap: '16px' }}>
                                    <IconButton
                                        sx={{ backgroundColor: '#EFEEF0' }}
                                        aria-label="notifications"
                                    >
                                        <NotificationsNoneIcon />
                                    </IconButton>
                                    <Button
                                        sx={{
                                            fontSize: '16px',
                                            width: '220px',
                                            color: '#fff',
                                            backgroundColor: '#0194FF',
                                            borderRadius: '50px',
                                            fontWeight: 700,
                                            textTransform: 'capitalize',
                                        }}
                                        variant="contained"
                                        startIcon={<PermIdentityOutlinedIcon />}
                                    >
                                        Створити пост
                                    </Button>
                                    <Avatar>U</Avatar>
                                </Box>
                            ) : (
                                <Button
                                    sx={{
                                        fontSize: '16px',
                                        width: '272px',
                                        fontWeight: 700,
                                        textTransform: 'capitalize',
                                        borderRadius: '50px'
                                    }}
                                    variant="contained"
                                    onClick={handleClickOpen}
                                    startIcon={<PermIdentityOutlinedIcon />}
                                >
                                    Увійти / Реєстрація
                                </Button>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                            (formData as any).entries()
                        );
                        const email = formJson.email;
                        const password = formJson.password;
                        login(email, password);
                    }
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
