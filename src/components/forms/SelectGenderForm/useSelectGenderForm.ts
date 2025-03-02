import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useSelectGenderForm = () => {
  const router = useRouter();

  const [gender, setGender] = useState<'man' | 'woman' | undefined>();
  const [desiredGender, setDesiredGender] = useState<
    'man' | 'woman' | undefined
  >();

  const handleChangeGender = (selectedGender: 'man' | 'woman') => () => {
    setGender(selectedGender);

    if (!desiredGender) {
      setDesiredGender(selectedGender === 'man' ? 'woman' : 'man');
    }
  };

  const handleChangeDesiredGender = (selectedGender: 'man' | 'woman') => () => {
    setDesiredGender(selectedGender);
  };

  const handleSubmitButton = () => {
    if (gender && desiredGender) {
      router.push(`/onboarding/${desiredGender}`);
    }
  };

  return {
    gender,
    desiredGender,
    handleChangeGender,
    handleChangeDesiredGender,
    handleSubmitButton,
  };
};
export default useSelectGenderForm;
