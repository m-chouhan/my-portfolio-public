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
          My journey in programming began when I built my first application, a
          simple snake game, while I was still in school. Ever since then, I
          have been deeply in love with coding and software development. I
          graduated from IIT BHU in 2014 with a Bachelor's degree and completed
          my M.Tech from IIT KGP in 2016.
        </Typography>
        <Typography variant="body1" paragraph>
          I have 8+ years of software development experience across leading tech
          companies. I worked at Google for over four years and am currently a
          Software Engineer at Atlassian, where I continue to hone my skills and
          tackle exciting challenges.
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
          Skills
          <Typography variant="body1">
            <ul>
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Scalable Application Development</li>
            </ul>
          </Typography>
        </Typography>

        <Typography variant="h6" gutterBottom>
          Frameworks
          <Grid container gutterBottom>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <li>Angular</li>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <li>Spring Boot</li>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <li>Node.js</li>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <li>Android</li>
              </Typography>
            </Grid>
          </Grid>
        </Typography>

        <Typography variant="h6">
          Experience
          <Typography component="div">
            <ul>
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
