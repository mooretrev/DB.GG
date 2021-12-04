import React from 'react';
import { ThemeProvider, CssBaseline, Paper } from '@mui/material'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import theme from './styles/Theme';
import Home from './components/Home';
import TopBar from './TopBar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0} sx={{
        padding: '4rem 4rem'
      }}>
        <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}
