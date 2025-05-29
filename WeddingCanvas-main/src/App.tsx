import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

// Components
import Header from './components/Header';
import CardGenerator from './components/CardGenerator';
import TemplateGallery from './components/TemplateGallery';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<TemplateGallery />} />
              <Route path="/generator/:templateId" element={<CardGenerator />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App; 