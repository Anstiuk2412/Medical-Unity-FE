import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const HomeSortBlogsSection = () => {
    return (
        <Box sx={{ padding: '40px 0 24px 0' }}>
            <Button
                variant="contained"
                sx={{
                    fontSize: '16px',
                    fontWeight: 700,
                    backgroundColor: '#00000014',
                    color: '#222222'
                }}
            >
                Стрічка
            </Button>
            <Button
                variant="text"
                sx={{ fontSize: '16px', fontWeight: 700, color: '#222222B2' }}
            >
                Свіже
            </Button>
            <Button
                variant="text"
                sx={{ fontSize: '16px', fontWeight: 700, color: '#222222B2' }}
            >
                Популярне
            </Button>
        </Box>
    );
};
