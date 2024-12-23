'use client';

import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';

const buttons = [
    {
        name: 'Головна',
        path: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Форум',
        path: '/forum',
        icon: <ForumIcon />
    },
    {
        name: 'Стрічка',
        path: '/allNews',
        icon: <WebIcon />
    },
    {
        name: 'Робота',
        path: '/work',
        icon: <WorkIcon />
    },
    {
        name: 'Календар',
        path: '/calendar',
        icon: <CalendarMonthIcon />
    }
];

export const NavigationSection = () => {
    const pathname = usePathname();

    return (
        <Box
            sx={{
                '@media (max-width: 768px)': {
                    overflow: 'scroll',
                    width: '100vw',
                    flexDirection: 'row',
                    paddingBottom: '30px'
                },
                width: 'min-content',
                display: 'flex',
                gap: '12px',
                flexDirection: 'column',
                padding: '0 24px'
            }}
        >
            {buttons.map((button) => (
                <Button
                    sx={{
                        minWidth: '239px',
                        height: '68px',
                        padding: '24px 32px 24px 32px',
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        ...(pathname !== button.path && {
                            border: 'none',
                            color: '#222222B2',
                            '&:hover': {
                                border: 'none'
                            }
                        })
                    }}
                    href={button.path}
                    startIcon={button.icon}
                    key={button.name}
                    variant={
                        pathname === button.path ? 'contained' : 'outlined'
                    }
                >
                    {button.name}
                </Button>
            ))}
        </Box>
    );
};
