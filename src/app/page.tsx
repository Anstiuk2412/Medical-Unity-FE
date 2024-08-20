import * as React from 'react';
import { BannerCarousel } from '@/components/BannerCarousel';
import Box from '@mui/material/Box';
import { HomeSortBlogsSection } from '@/components/HomeSortBlogsSection';
import { BlogCard } from '@/components/BlogCard';
import Skeleton from '@mui/material/Skeleton';

export default function Home() {
    const blogCards = Array.from({ length: 6 }, (_, index) => index + 1);

    return (
        <Box>
            <BannerCarousel />
            <HomeSortBlogsSection />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        'calc(895 / 1289* 100%) calc(370 / 1289* 100%)',
                    gap: '24px'
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px',
                    }}
                >
                    {blogCards.map((card, index) => (
                        <BlogCard key={index} />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px'
                    }}
                >
                    <Skeleton variant="rounded" height={245} />
                </Box>
            </Box>
        </Box>
    );
}
