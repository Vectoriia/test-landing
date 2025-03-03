import { useCallback, useState } from 'react';
import { OnboardingStepProps } from '../../OnboardingStepper/types';
import { EMAIL_REGEX } from '@/src/constants/validation';
import throttle from 'lodash.throttle';

const useEnterEmailForm = ({ handleNext }: OnboardingStepProps) => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateEmail = useCallback(
    throttle((value: string) => {
      if (!EMAIL_REGEX.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }, 500),
    []
  );
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleSubmitButton = () => {
    if (!isValid) {
      return;
    }
    handleNext();
  };

  return {
    email,
    handleChangeEmail,
    handleSubmitButton,
    isValid,
  };
};
export default useEnterEmailForm;
