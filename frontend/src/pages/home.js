import React from "react";
import { Typography, Link, Button, Grid, Avatar, Stack } from "@mui/material";
import { LinkedIn, RssFeed } from "@mui/icons-material";

const Home = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8} md={8}>
        <Avatar
          alt="Mahendra Chouhan"
          src="/logo.jpg"
          sx={{ width: 400, height: 400, mx: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" component="h1" gutterBottom>
          Hello, I'm Mahendra Chouhan
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my portfolio! My name is Mahendra Chouhan. I am a
          full-stack developer by profession and an engineer at heart. I am
          passionate about building scalable web and mobile applications and
          enjoy tinkering with various systems in my free time.
        </Typography>
        <Typography variant="body1" paragraph>
          My journey in programming began with a simple snake game built in a
          school computer lab. That spark turned into a lifelong obsession with
          how code can solve real-world problems. Today, with over 9 years of
          experience at companies like Google and Atlassian, that same curiosity
          drives me to build systems that handle massive scale without losing
          sight of the end-user experience.
        </Typography>
        <Typography variant="body1" paragraph>
          I specialize in bridging the gap between complex, high-performance
          backend architecture and seamless, intuitive front-end interfaces.
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          If you’re looking for a dedicated professional to help you build
          robust mobile or web applications, feel free to reach out to me at{" "}
          <Link href="mailto:mchouhanofficial@gmail.com">
            mchouhanofficial@gmail.com
          </Link>
          .
        </Typography>
        <Typography variant="h6" gutterBottom>
          Tech Stack
          <Typography variant="body1">
            Kotlin, Java, TypeScript, React, AWS, DynamoDB, Spanner, Node.js
          </Typography>
        </Typography>

        <Typography variant="h6">
          Experience
          <Typography component="div">
            <ul>
              <li>
                <Typography variant="body1" component="span">
                  <Link
                    href="https://www.atlassian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Atlassian (1.5+ years)
                  </Link>
                  : Currently working as a Senior Software Engineer, focusing on
                  building scalable web applications and enhancing user experiences.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <Link
                    href="https://www.store.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google (4+ years)
                  </Link>
                  : Contributed and maintained gCMS, a content management system
                  for Google Store e-commerce business.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <Link
                    href="https://teenpattigold.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Moonfrog Labs (1.5 years)
                  </Link>
                  : Contributed and enhanced Teen Patti Gold, a real-time card
                  game with over 3M daily users, as a fullstack engineer.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <Link
                    href="https://olacabs.com/features"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ola Cabs (1 Year)
                  </Link>
                  : Contributed and Enhanced Ola play, as fullstack engineer,
                  focusing on scalability and performance.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <Link
                    href="https://www.appdynamics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AppDynamics (1 Year)
                  </Link>
                  : Contributed to DbMon, a database monitoring product by
                  AppDynamics.
                </Typography>
              </li>
            </ul>
          </Typography>
        </Typography>

        <Typography variant="h6" gutterBottom>
          Education
          <Typography component="div">
            <ul>
              <li>
                <Typography variant="body1">
                  M.Tech, Computer Science – IIT Kharagpur (2016)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  B.Tech, Electronics – IIT BHU (2014)
                </Typography>
              </li>
            </ul>
          </Typography>
        </Typography>

        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<RssFeed />}
            href="https://medium.com/@mchouhanofficial"
          >
            {" "}
            Medium{" "}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/mchouhanofficial/"
          >
            {" "}
            LinkedIn{" "}
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
