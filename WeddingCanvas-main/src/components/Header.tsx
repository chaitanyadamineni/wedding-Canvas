import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <FavoriteIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {t('weddingCardGenerator')}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">हिंदी</MenuItem>
                <MenuItem value="bn">বাংলা</MenuItem>
                <MenuItem value="ta">தமிழ்</MenuItem>
                <MenuItem value="te">తెలుగు</MenuItem>
                <MenuItem value="kn">ಕನ್ನಡ</MenuItem>
                <MenuItem value="ml">മലയാളം</MenuItem>
                <MenuItem value="mr">मराठी</MenuItem>
                <MenuItem value="gu">ગુજરાતી</MenuItem>
                <MenuItem value="pa">ਪੰਜਾਬੀ</MenuItem>
                <MenuItem value="or">ଓଡ଼ିଆ</MenuItem>
              </Select>
            </FormControl>

            <Button
              component={RouterLink}
              to="/"
              color="inherit"
            >
              {t('templates')}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 