import React from 'react';
import { Toolbar, Typography, Container, Box, Tabs, Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Route, Routes, Link as RouteLink, useLocation } from 'react-router-dom';
import Writings from './pages/writings';
import Projects from './pages/projects';
import Home from './pages/home';

function App() {
  const location = useLocation();
  return (<ThemeProvider theme={theme}>
    <Container>
      <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="title" sx={{ flexGrow: 1 }}>
          Mahendra's Portfolio - Testing
        </Typography>
        <Tabs value={location.pathname} textColor="inherit" indicatorColor="primary">
          <Tab label="Home" component={RouteLink} to="/" value="/" />
          <Tab label="Writings" component={RouteLink} to="/writings" value="/writings" />
          <Tab label="Projects" component={RouteLink} to="/projects" value="/projects" />
        </Tabs>
      </Toolbar>
      <hr />
      <Box sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </Container>
  </ThemeProvider>);
}


export default App;