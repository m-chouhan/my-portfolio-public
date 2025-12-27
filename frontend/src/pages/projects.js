import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import comingSoonImage from '../assets/comingsoon.png'; // Import the image

const Projects = () => {
    return (
        <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
            <Box sx={{ mb: 4 }}>
                <img 
                    src={comingSoonImage} 
                    alt="Coming Soon" 
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} 
                />
            </Box>
            <Typography variant="h2" gutterBottom>
                Projects
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Something awesome is in the works. Stay tuned!
            </Typography>
        </Container>
    );
};

export default Projects;
