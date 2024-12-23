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
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap'
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px',
                        maxWidth: '895px',
                        flex: '1 1 375px',
                        minWidth: '375px'
                    }}
                >
                    {blogCards.map((card, index) => (
                        <BlogCard key={index} />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px',
                        width: '100%',
                        flex: '1 1 0',
                        minWidth: '200px',
                        maxWidth: '370px'
                    }}
                >
                    <Skeleton variant="rounded" height={245} />
                </Box>
            </Box>
        </Box>
    );
}
