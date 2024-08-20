import Button from '@mui/material/Button';
import React, { ReactNode } from 'react';

interface BlogTagProps {
    children: ReactNode;
}

export const BlogTag: React.FC<BlogTagProps> = ({ children }) => {
    return (
        <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
                background: '#EFEEF0',
                color: '#22222280',
                fontSize: '14px',
                fontWeight: '600',
                height: '26px',
                borderRadius: '50px',
                '&:hover': {
                    background: '#d4d4d4'
                }
            }}
        >
            {children}
        </Button>
    );
};
