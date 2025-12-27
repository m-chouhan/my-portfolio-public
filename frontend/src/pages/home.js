import React from "react";
import { 
  Typography, 
  Button, 
  Grid, 
  Avatar, 
  Stack, 
  Box, 
  Chip,
  Container, 
  Divider
} from "@mui/material";
import { LinkedIn, Article, ArrowForward } from "@mui/icons-material";

const TechChip = ({ label }) => (
  <Chip 
    label={label} 
    variant="outlined" 
    sx={{ 
      mr: 1, 
      mb: 1, 
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      '&:hover': { borderColor: '#000', backgroundColor: 'transparent' }
    }} 
  />
);

const ExperienceItem = ({ company, role, duration, description, link }) => (
  <Box sx={{ mb: 4, position: 'relative', pl: 3, borderLeft: '2px solid #f0f0f0', '&:hover': { borderLeft: '2px solid #000' }, transition: 'all 0.3s' }}>
    <Typography variant="h6" sx={{ color: '#000', mb: 0.5 }}>
      {company}
    </Typography>
    <Typography variant="subtitle2" sx={{ color: '#666', mb: 1, fontStyle: 'italic' }}>
      {role} • {duration}
    </Typography>
    <Typography variant="body2" color="text.secondary" component="div">
      {description}
    </Typography>
  </Box>
);

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
      {/* Hero Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Box 
            sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 20,
                left: 20,
                right: -20,
                bottom: -20,
                border: '2px solid #000',
                zIndex: 0,
                borderRadius: '50% 50% 0 0'
              }
            }}
          >
            <Avatar
              alt="Mahendra Chouhan"
              src="/logo.jpg"
              sx={{ 
                width: '100%', 
                height: 'auto', 
                aspectRatio: '1/1',
                borderRadius: '50% 50% 0 0',
                border: '1px solid #000',
                position: 'relative',
                zIndex: 1,
                bgcolor: '#f5f5f5'
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#3d5afe' }}>
            Senior Software Engineer, Atlassian
          </Typography>
          <Typography variant="h1" gutterBottom sx={{ mb: 3 }}>
            Engineering <br/>
            <span className="text-gradient">for Scale.</span>
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, maxWidth: 600 }}>
            My programming journey began with a simple snake game in a school lab. 
            That spark became an obsession with solving real-world problems through code. 
            Today, with <b>9+ years of experience</b> at tech giants like <b>Google</b> and <b>Atlassian</b>, 
            I try to bridge the gap between complex backend architecture and seamless frontend experiences.
          </Typography>

          <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}>
            {['System Design', 'Cloud Architecture', 'Game Development', 'Full Stack'].map(skill => (
              <TechChip key={skill} label={skill} />
            ))}
          </Box>
          
          <Stack spacing={2} direction="row">
            <Button 
              variant="contained" 
              color="primary" 
              disableElevation
              endIcon={<ArrowForward />}
              href="mailto:mchouhanofficial@gmail.com"
            >
              Get in touch
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/mchouhanofficial/"
            >
              LinkedIn
            </Button>
            <Button 
              variant="text" 
              startIcon={<Article />}
              href="https://medium.com/@mchouhanofficial"
            >
              Writings
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container spacing={6} sx={{ mb: 10 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ExperienceItem 
            company="IIT Kharagpur"
            role="M.Tech, Computer Science"
            duration="2016"
            description="Specialized in Computer Science and Engineering."
          />
          <ExperienceItem 
            company="IIT BHU"
            role="B.Tech, Electronics"
            duration="2014"
            description="Bachelor of Technology in Electronics Engineering."
          />
        </Grid>
      </Grid>

      <Divider sx={{ mb: 10 }} />

      {/* Experience Section */}
      <Grid container spacing={6} sx={{ mb: 12 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom>
            Career<br/>Path
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ExperienceItem 
            company="Atlassian"
            role="Senior Software Engineer (P50) | Backend"
            duration="June 2024 – Present"
            description="Leading AI agent development for Jira Service Management handling 10k daily queries, improving resolution rates by 5% through enterprise integrations."
          />
          <ExperienceItem 
            company="Google"
            role="Software Engineer"
            duration="4+ years"
            description="Contributed and maintained gCMS, a content management system for Google Store e-commerce business."
          />
          <ExperienceItem 
            company="Moonfrog Labs"
            role="Full Stack Engineer"
            duration="1.5 years"
            description="Enhanced Teen Patti Gold, a real-time card game with over 3M daily users."
          />
          <ExperienceItem 
            company="Ola Cabs"
            role="Software Engineer"
            duration="1 Year"
            description="Worked on Ola Play, focusing on scalability and performance optimization."
          />
          <ExperienceItem 
            company="AppDynamics (Cisco)"
            role="Software Engineer"
            duration="1 Year"
            description="Contributed to DbMon, a database monitoring product by AppDynamics."
          />
        </Grid>
      </Grid>


    </Container>
  );
};

export default Home;
