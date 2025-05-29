import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { templates } from '../data/templates';

const TemplateGallery: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTemplateSelect = (templateId: string) => {
    navigate(`/generator/${templateId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('digitalWeddingCards')}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {t('chooseTemplate')}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {templates.map((template) => (
          <Grid item key={template.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={template.thumbnail}
                alt={template.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {template.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {template.description}
                </Typography>
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleTemplateSelect(template.id)}
                sx={{ mt: 'auto' }}
              >
                {t('useTemplate')}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TemplateGallery; 