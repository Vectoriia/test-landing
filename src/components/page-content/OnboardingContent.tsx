import { Box } from '@mui/material';
import OnboardingStepper from '../OnboardingStepper/OnboardingStepper';

export default function OnboardingContent() {
  return (
    <Box className="flex flex-col items-center justify-center py-[1.6rem] px-[1.6rem]">
      <OnboardingStepper />
    </Box>
  );
}
