'use client';
import { Box, Button, Typography } from '@mui/material';
import useInitiativeForm from './useInitiativeForm';
import { OnboardingStepProps } from '../../OnboardingStepper/types';
import StackedImages from './components/StackedImages';

const manImages = [
  '/users_photo/man1.png',
  '/users_photo/man2.png',
  '/users_photo/man3.png',
];

const womanImages = [
  '/users_photo/woman1.jpg',
  '/users_photo/woman2.jpg',
  '/users_photo/woman3.jpg',
];

export default function InitiativeForm(props: OnboardingStepProps) {
  const { params, handleAction } = useInitiativeForm(props);
  const { slug: gender } = params;

  return (
    <Box className="flex flex-col items-center justify-between pt-[10.1rem] pb-[3.2rem] h-full">
      <StackedImages images={gender === 'man' ? manImages : womanImages} />

      <Box className="flex flex-col items-center justify-center h-full mt-[10.1rem]">
        <Typography
          variant="body1"
          component="h6"
          sx={{
            marginBottom: '1.6rem',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {gender === 'man'
            ? 'Do you agree that man should take the initiative to meet a woman?'
            : 'Do you agree to always answer women who take the initiative and contact you?'}
        </Typography>

        <Box className="flex items-center justify-center gap-[1.2rem]">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAction}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '1.2rem',
              width: '16.55rem',
              height: '9.1rem',
            }}
          >
            ❌<Typography variant="body1">No</Typography>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAction}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '1.2rem',
              width: '16.55rem',
              height: '9.1rem',
            }}
          >
            ✅<Typography variant="body1">Yes</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
