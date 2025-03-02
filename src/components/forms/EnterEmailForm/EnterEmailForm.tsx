'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import useEnterEmailForm from './useEnterEmailForm';
import { OnboardingStepProps } from '../../OnboardingStepper/types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function EnterEmailForm(props: OnboardingStepProps) {
  const { email, handleChangeEmail, handleSubmitButton, isValid } =
    useEnterEmailForm(props);

  return (
    <Box className="flex flex-col items-center justify-center py-2">
      <Typography
        variant="h2"
        component="h2"
        sx={{ marginBottom: '0.8rem', marginTop: '3.2rem' }}
      >
        Enter your email
      </Typography>
      <Typography
        variant="subtitle1"
        component="h6"
        sx={{ marginBottom: '3.2rem' }}
      >
        To get access to the profiles
      </Typography>

      <TextField
        variant="outlined"
        placeholder="Enter your email"
        value={email}
        onChange={handleChangeEmail}
        sx={{ marginBottom: '1.6rem', width: '34.3rem' }}
        autoFocus
        error={!isValid && !!email}
      />

      <Box className="flex items-center justify-center gap-[1.2rem] mb-[2.9rem]">
        <InfoOutlinedIcon sx={{ width: '1.9rem', height: '1.9rem' }} />
        <Typography variant="body2" component="p">
          This information will be used for the registration process only and
          won
          {"'"}t be visible to other users.
        </Typography>
      </Box>

      <Button
        variant="contained"
        disabled={!isValid || !email}
        onClick={handleSubmitButton}
      >
        Continue
      </Button>
    </Box>
  );
}
