import React from 'react';
import { Toolbar, Typography, Container, Box, Tabs, Tab, Button, AppBar, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Route, Routes, Link as RouteLink, useLocation } from 'react-router-dom';
import Writings from './pages/writings';
import Projects from './pages/projects';
import Home from './pages/home';

function App() {
  const location = useLocation();
  
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #eaeaea' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 80 }}>
            <Typography 
              variant="h6" 
              component={RouteLink} 
              to="/" 
              sx={{ 
                flexGrow: 1, 
                textDecoration: 'none', 
                color: '#000',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                fontSize: '1.25rem'
              }}
            >
              MAHENDRA CHOUHAN
            </Typography>
            
            <Stack direction="row" spacing={1}>
              <Button component={RouteLink} to="/" color="inherit">Home</Button>
              <Button component={RouteLink} to="/projects" color="inherit">Projects</Button>
              <Button component={RouteLink} to="/writings" color="inherit">Writings</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;