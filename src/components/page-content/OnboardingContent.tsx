import { Box } from '@mui/material';
import OnboardingStepper from '../OnboardingStepper/OnboardingStepper';

export default function OnboardingContent() {
  return (
    <Box className="flex flex-col items-center justify-center">
      <OnboardingStepper />
    </Box>
  );
}
