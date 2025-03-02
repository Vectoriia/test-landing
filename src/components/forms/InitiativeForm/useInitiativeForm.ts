import { useParams } from 'next/navigation';
import { OnboardingStepProps } from '../../OnboardingStepper/types';

const useInitiativeForm = ({ handleNext }: OnboardingStepProps) => {
  const params = useParams();

  const handleAction = () => {
    handleNext();
  };

  return {
    params,
    handleAction,
  };
};

export default useInitiativeForm;
