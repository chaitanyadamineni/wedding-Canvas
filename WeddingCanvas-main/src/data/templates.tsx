import React from 'react';
import { Box, Typography } from '@mui/material';

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

// Sample template components
const TraditionalTemplate: React.FC<{ data: CardData }> = ({ data }) => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      p: 4,
      borderRadius: 2,
      textAlign: 'center',
      color: '#800000',
    }}
  >
    <Typography variant="h3" gutterBottom>
      {data.brideFirstName} & {data.groomFirstName}
    </Typography>
    <Typography variant="h5" gutterBottom>
      {data.weddingDate} at {data.weddingTime}
    </Typography>
    <Typography variant="body1">{data.venue}</Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      {data.message}
    </Typography>
  </Box>
);

const ModernTemplate: React.FC<{ data: CardData }> = ({ data }) => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 100%)',
      p: 4,
      borderRadius: 2,
      textAlign: 'center',
      color: '#1A237E',
    }}
  >
    <Typography variant="h2" gutterBottom>
      {data.brideFirstName}
      <br />
      &
      <br />
      {data.groomFirstName}
    </Typography>
    <Typography variant="h5" gutterBottom>
      {data.weddingDate} | {data.weddingTime}
    </Typography>
    <Typography variant="body1">{data.venue}</Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      {data.message}
    </Typography>
  </Box>
);

// Export templates array
export const templates = [
  {
    id: 'traditional-1',
    name: 'Traditional Elegance',
    description: 'A classic design with traditional Indian elements',
    thumbnail: '/templates/traditional-1.jpg',
    component: TraditionalTemplate,
  },
  {
    id: 'modern-1',
    name: 'Modern Minimalist',
    description: 'Clean and contemporary design for modern couples',
    thumbnail: '/templates/modern-1.jpg',
    component: ModernTemplate,
  },
  // Add more templates here...
]; 