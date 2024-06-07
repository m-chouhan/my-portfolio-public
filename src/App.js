import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Avatar, Link, Stack } from '@mui/material';
import { Email } from '@mui/icons-material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mahendra's Portfolio
          </Typography>
          <Button
            color="inherit"
            startIcon={<Email />}
            href="mailto:mchouhanofficial@gmail.com"
          >
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Mahendra Chouhan"
                src="/logo.jpg"
                sx={{ width: 200, height: 200, mx: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" gutterBottom>
                Hello, I'm Mahendra Chouhan
              </Typography>
              <Typography variant="body1" paragraph gutterBottom>
                Welcome to my portfolio! My name is Mahendra Chouhan, I am a fullstack developer by profession and engineer by heart.
                I love building scalable web and mobile applications, and tinker with various systems in my free time.
                I built my first application, which was a snake game when I was in school, and ever since then I am in love with programming.
                If you want to get in touch, reach out to me at mchouhanofficial@gmail.com.

                My intention behind creating this website is to share what I know and create a community of learners, who can keep sharing and improving each other.
                That means i will be regularly posting some content here, be it something that I read or my own thoughts, with the intention to become a better software engineer.
                Lets Grow together!!
              </Typography>
              <Typography variant="h4" component="h4" paragraph>
                You can find my content on                
              </Typography>
              <Stack spacing={2} direction="row">
                <Button variant="outlined"> Medium </Button>
                <Button variant="outlined"> Enjoy Algorithms</Button>
                <Button variant="outlined"> LinkedIn </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
