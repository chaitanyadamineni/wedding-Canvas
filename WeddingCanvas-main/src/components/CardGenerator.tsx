import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { toPng } from 'html-to-image';
import { templates } from '../data/templates';

interface CardData {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  message: string;
}

const CardGenerator: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const { t, i18n } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardData, setCardData] = useState<CardData>({
    brideFirstName: '',
    brideLastName: '',
    groomFirstName: '',
    groomLastName: '',
    weddingDate: '',
    weddingTime: '',
    venue: '',
    message: '',
  });

  const template = templates.find((t) => t.id === templateId);

  const handleInputChange = (field: keyof CardData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardData({ ...cardData, [field]: event.target.value });
  };

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const downloadCard = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current, { quality: 1.0 });
      const link = document.createElement('a');
      link.download = 'wedding-card.png';
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('customizeCard')}
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>{t('selectLanguage')}</InputLabel>
              <Select value={i18n.language} onChange={handleLanguageChange}>
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

            <TextField
              fullWidth
              label={t('brideFirstName')}
              value={cardData.brideFirstName}
              onChange={handleInputChange('brideFirstName')}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('brideLastName')}
              value={cardData.brideLastName}
              onChange={handleInputChange('brideLastName')}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('groomFirstName')}
              value={cardData.groomFirstName}
              onChange={handleInputChange('groomFirstName')}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('groomLastName')}
              value={cardData.groomLastName}
              onChange={handleInputChange('groomLastName')}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="date"
              label={t('weddingDate')}
              value={cardData.weddingDate}
              onChange={handleInputChange('weddingDate')}
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              type="time"
              label={t('weddingTime')}
              value={cardData.weddingTime}
              onChange={handleInputChange('weddingTime')}
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              label={t('venue')}
              value={cardData.venue}
              onChange={handleInputChange('venue')}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label={t('message')}
              value={cardData.message}
              onChange={handleInputChange('message')}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={downloadCard}
            >
              {t('downloadCard')}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper
            ref={cardRef}
            sx={{
              p: 4,
              minHeight: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {template && (
              <Box sx={{ width: '100%', height: '100%' }}>
                {/* Template will be rendered here */}
                <template.component data={cardData} />
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardGenerator; 




