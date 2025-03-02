import { useRouter } from 'next/navigation';
import { steps, Steps } from './constants';
import { useState } from 'react';

const useOnboardingStepper = () => {
  const [activeStep, setActiveStep] = useState<Steps>(Steps.InitiativeQuestion);
  const router = useRouter();

  const handleNext = () => {
    if (activeStep === Object.keys(steps).length - 1) {
      router.push('/analyze');
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      router.push('/');
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return {
    handleNext,
    handleBack,
    activeStep,
  };
};

export default useOnboardingStepper;
