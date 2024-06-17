import React from 'react';
import { Toolbar, Typography, Link, Button, Container, Box, Grid, Avatar, Stack, Tabs, Tab } from '@mui/material';
import { Email, LinkedIn, RssFeed } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes, Link as RouteLink, useLocation } from 'react-router-dom';
import Writings from './pages/writings';
import Projects from './pages/projects';
import Home from './pages/home';
import Blog from './components/blog/Blog';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

function App() {
  const location = useLocation();
  return (<ThemeProvider theme={theme}>
    <Container>
      <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="title" sx={{ flexGrow: 1 }}>
          Mahendra's Portfolio
        </Typography>
        <Tabs value={location.pathname} textColor="inherit" indicatorColor="primary">
          <Tab label="Home" component={RouteLink} to="/" value="/" />
          <Tab label="Writings" component={RouteLink} to="/writings" value="/writings" />
          <Tab label="Projects" component={RouteLink} to="/projects" value="/projects" />
          <Tab label="Blogs" component={RouteLink} to="/blogs" value="/blogs" />
        </Tabs>
      </Toolbar>
      <hr />
      <Box sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </Box>
    </Container>
  </ThemeProvider>);
}


export default App;
