// CreateLoopPage.js
import React, { useState } from 'react';
import {
  Button,
  Typography,
  TextField,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Import the Email icon
import AddIcon from '@mui/icons-material/Add'; // Import the Add icon
import { useNavigate } from 'react-router-dom';

const CreateLoopPage = () => {
  const [loopData, setLoopData] = useState({
    name: '',
    members: [''],
    selectedQuestions: [], // To store the selected personal questions
    customQuestions: '',
    frequency: '', // Updated to use dropdown value
  });

  const navigate = useNavigate(); // Add useNavigate hook

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canAddMore = () => {
    const lastEmail = loopData.members[loopData.members.length - 1];
    return validateEmail(lastEmail);
  };

  const handleAddMore = () => {
    const lastEmail = loopData.members[loopData.members.length - 1];
    if (validateEmail(lastEmail)) {
      setLoopData((prevData) => ({
        ...prevData,
        members: [...prevData.members, ''],
      }));
    }
  };

  const handleMemberChange = (index, value) => {
    setLoopData((prevData) => ({
      ...prevData,
      members: prevData.members.map((member, i) => (i === index ? value : member)),
    }));
  };

  const handleChange = (field, value) => {
    setLoopData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleQuestionToggle = (question) => {
    const { selectedQuestions } = loopData;
    const updatedQuestions = selectedQuestions.includes(question)
      ? selectedQuestions.filter((q) => q !== question)
      : [...selectedQuestions, question];

    setLoopData((prevData) => ({
      ...prevData,
      selectedQuestions: updatedQuestions,
    }));
  };

  const addCustomQuestion = () => {
    const { customQuestions, selectedQuestions } = loopData;
  
    if (customQuestions.trim() !== '') {
      const updatedQuestions = [...selectedQuestions, customQuestions];
  
      setLoopData((prevData) => ({
        ...prevData,
        selectedQuestions: updatedQuestions,
        customQuestions: '', // Clear the customQuestions field after adding
      }));
    }
  };

  const personalQuestions = [
    'What is your favorite book?',
    'Where was your last vacation?',
    'What is your dream job?',
    'Who is your favorite historical figure?',
    'What is your go-to comfort food?',
  ];

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Form submitted!');
    console.log('Loop Data:', loopData);

    // Redirect to success page
    navigate('/success');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px dotted #800080', // Purple dotted border
          padding: '20px', // Add padding
          borderRadius: '10px', // Optional: add border-radius for rounded corners
          maxWidth: '400px', // Set a max width for the container
          width: '100%', // Take up the full width within the parent container
        }}
      >
        <Typography variant="h4" gutterBottom>
          Create Loop
        </Typography>
        {/* Loop creation form */}
        <TextField
          label="Name of the loop"
          margin="normal"
          fullWidth
          required
          value={loopData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        {loopData.members.map((email, index) => (
          <TextField
            key={index}
            label={`Add member ${index + 1}`}
            margin="normal"
            fullWidth
            type="email"
            required
            value={email}
            onChange={(e) => handleMemberChange(index, e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {index === loopData.members.length - 1 && (
                    <IconButton
                      color="primary"
                      onClick={handleAddMore}
                      disabled={!canAddMore()}
                    >
                      <AddIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        ))}
        <FormGroup>
          <Typography variant="subtitle1" gutterBottom>
            Select Questions:
          </Typography>
          {personalQuestions.map((question, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={loopData.selectedQuestions.includes(question)}
                  onChange={() => handleQuestionToggle(question)}
                />
              }
              label={question}
            />
          ))}
          {loopData.selectedQuestions.map((question, index) => (
            <FormControlLabel
              key={index + personalQuestions.length}
              control={<Checkbox checked />}
              label={question}
            />
          ))}
        </FormGroup>
        <TextField
          label="Custom Questions"
          margin="normal"
          fullWidth
          value={loopData.customQuestions}
          onChange={(e) => handleChange('customQuestions', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={addCustomQuestion}>
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* Dropdown for frequency */}
        <Select
          label="Frequency of the loop"
          margin="normal"
          fullWidth
          required
          value={loopData.frequency}
          onChange={(e) => handleChange('frequency', e.target.value)}
        >
          <MenuItem value="1 Week">1 Week</MenuItem>
          <MenuItem value="2 Weeks">2 Weeks</MenuItem>
          <MenuItem value="1 Month">1 Month</MenuItem>
          <MenuItem value="1 Quarter">1 Quarter</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!canAddMore()}
          style={{ marginTop: '10px' }}
        >
          Create a Loop
        </Button>
      </Container>
    </div>
  );
};

export default CreateLoopPage;
