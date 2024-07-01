import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Travel Community!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Connect with like-minded travelers and plan your next adventure.
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </Container>
    );
};

export default Home;
