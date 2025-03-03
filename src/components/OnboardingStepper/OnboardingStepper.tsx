'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { LinearProgress } from '@mui/material';
import { steps } from './constants';
import useOnboardingStepper from './useOnboardingStepper';

export default function OnboardingStepper() {
  const { handleNext, handleBack, activeStep } = useOnboardingStepper();
  const StepComponent = steps[activeStep];

  return (
    <Box className="flex flex-col items-center h-[100vh] sm:h-full py-[1.6rem] px-[1.6rem]">
      <Box className="flex items-center justify-center gap-[1.6rem]">
        <IconButton
          onClick={handleBack}
          sx={{ width: '4rem', height: '4rem', padding: '0' }}
        >
          <ArrowBackIosNewIcon
            sx={{ width: '1.42rem', height: '1.42rem', color: '#FF4931' }}
          />
        </IconButton>
        <LinearProgress
          variant="determinate"
          value={33 * (activeStep + 1)}
          sx={{ width: '23.1rem', height: '0.4rem' }}
        />
      </Box>

      <StepComponent handleNext={handleNext} />
    </Box>
  );
}
