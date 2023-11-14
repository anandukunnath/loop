// SuccessPage.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const SuccessPage = () => {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Success!
      </Typography>
      <Typography variant="body1">
        Your loop has been created, and the newsletter will be shortly on your inbox.
      </Typography>
    </Container>
  );
};

export default SuccessPage;
