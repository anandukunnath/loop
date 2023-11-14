// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import {  Button, Toolbar, Typography,Container,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '85vh', alignItems: 'center', justifyContent: 'center' }}>
      <Container
        style={{
            display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px dotted #800080', // Purple dotted border
          padding: '20px',
          borderRadius: '10px', // Optional: add border-radius for rounded corners
          maxWidth: '400px', // Set a max width for the container
          width: '100%', // Take up the full width within the parent container
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.palette.primary.main, // Use the primary color from the theme on hover
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Loop
        </Typography>
        <Link to="/create-loop">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<EmailIcon style={{ color: '#800080' }} />} // Set the color of the icon to purple
        >
          Create a Loop
        </Button>
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;
