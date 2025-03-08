import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            City Bank
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ width: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="sm">{props.children}</Container>
      </Box>
    </Box>
  );
}
