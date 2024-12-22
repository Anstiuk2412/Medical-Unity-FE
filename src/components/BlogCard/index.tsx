import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { BlogTag } from '@/components/BlogTag';

export const BlogCard = () => {
    return (
        <Box
            sx={{
                padding: '32px',
                background: '#fff',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '32px',
                border: '1px solid #ebebeb',
                borderRadius: '12px',
                maxWidth: '895px'
            }}
        >
            <Box>
                <Skeleton
                    variant="rounded"
                    width={302}
                    height={245}
                />
            </Box>
            <Box
                sx={{
                    flex: '1',
                    minWidth: '320px'
                }}
            >
                <BlogTag>Розробка</BlogTag>
                <Typography variant="h3" sx={{ paddingTop: '15px' }}>
                    Як керувати віддаленою Zigbee-мережею за допомогою WireGuard
                </Typography>
                <Typography>
                    Привіт, спільното. У цьому посібнику я розповім, як керувати
                    віддаленою Zigbee-мережею, (ZHA та Z2M) за допомогою
                    влаштованого VPN-клієнта WireGuard в координаторі SLZB-06.
                    росія — держава терорист. російський військовий корабель,
                    пішов нах***!
                </Typography>

                <Box></Box>
            </Box>
        </Box>
    );
};
