import * as React from 'react';
import { BannerCarousel } from '@/components/BannerCarousel';
import Box from '@mui/material/Box';
import { HomeSortBlogsSection } from '@/components/HomeSortBlogsSection';
import { BlogCard } from '@/components/BlogCard';

export default function Home() {
    const blogCards = Array.from({ length: 6 }, (_, index) => index + 1);

    return (
        <Box>
            <BannerCarousel />
            <HomeSortBlogsSection />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 895px) minmax(0, 370px)',
                    gap: '24px'
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: '24px'
                    }}
                >
                    {blogCards.map((card, index) => (
                        <BlogCard key={index} />
                    ))}
                </Box>
                <Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '245px',
                            border: '1px solid #ebebeb'
                        }}
                    ></Box>
                </Box>
            </Box>
        </Box>
    );
}
