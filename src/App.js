import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Avatar, Link, Stack } from '@mui/material';
import { Email, LinkedIn, RssFeed } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Container>
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

        <Box sx={{ my: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8} md={8}>
              <Avatar
                alt="Mahendra Chouhan"
                src="/logo.jpg"
                sx={{ width: 400, height: 400, mx: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" component="h1" gutterBottom>
                Hello, I'm Mahendra Chouhan
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to my portfolio! My name is Mahendra Chouhan. I am a full-stack developer by profession and an engineer at heart. I am passionate about building scalable web and mobile applications and enjoy tinkering with various systems in my free time.
              </Typography>
              <Typography variant="body1" paragraph>
                My journey in programming began when I built my first application, a simple snake game, while I was still in school.
                Ever since then, I have been deeply in love with coding and software development.
                I graduated from IIT BHU in 2014 with a Bachelor's degree and completed my M.Tech from IIT KGP in 2016.
                Since last 4 years, I am working as a software engineer at Google, where I continue to hone my skills and take on exciting challenges.
              </Typography>
              <Typography variant="body1" paragraph>
                This website serves as a platform for me to share my knowledge and foster a community of learners. Here, you will find regular posts about various topics, ranging from interesting reads to my personal thoughts and experiences in software engineering. My goal is to learn and grow together with you, as we strive to become better engineers and innovators.
              </Typography>
              <Typography variant="body1" paragraph>
                If you would like to get in touch, feel free to reach out to me at mchouhanofficial@gmail.com. Let's grow and improve together!
              </Typography>
              <Stack spacing={2} direction="row">
                <Button
                  variant="outlined" color="inherit"
                  startIcon={<RssFeed />}
                  href="https://medium.com/@mchouhanofficial"> Medium </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/mchouhanofficial/"> LinkedIn </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
