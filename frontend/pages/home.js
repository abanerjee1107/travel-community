import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                {t('welcomeTitle')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('welcomeMessage')}
            </Typography>
            <Button variant="contained" color="primary">
                {t('getStarted')}
            </Button>
        </Container>
    );
};

export default Home;

