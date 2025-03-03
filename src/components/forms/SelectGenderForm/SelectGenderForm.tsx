'use client';
import { Box, Button, Typography } from '@mui/material';
import useSelectGenderForm from './useSelectGenderForm';
import SelectButton from '../../buttons/SelectButton/SelectButton';

export default function SelectGenderForm() {
  const {
    gender,
    desiredGender,
    handleChangeGender,
    handleChangeDesiredGender,
    handleSubmitButton,
  } = useSelectGenderForm();
  return (
    <Box className="flex flex-col items-center justify-center sm:mt-[17.717rem] mt-0">
      <Typography
        variant="body1"
        component="h6"
        sx={{ marginBottom: '0.8rem' }}
      >
        I am...
      </Typography>

      <Box className="flex items-center justify-center gap-[1.2rem] mb-[1.6rem]">
        <SelectButton
          isSelected={gender === 'man'}
          onClick={handleChangeGender('man')}
        >
          👨 A man
        </SelectButton>
        <SelectButton
          isSelected={gender === 'woman'}
          onClick={handleChangeGender('woman')}
        >
          👩 A woman
        </SelectButton>
      </Box>

      <Typography
        variant="body1"
        component="h6"
        sx={{ marginBottom: '0.8rem' }}
      >
        I am looking for...
      </Typography>

      <Box className="flex items-center justify-center gap-[1.2rem] mb-[1.6rem]">
        <SelectButton
          isSelected={desiredGender === 'man'}
          onClick={handleChangeDesiredGender('man')}
        >
          👨 A man
        </SelectButton>
        <SelectButton
          isSelected={desiredGender === 'woman'}
          onClick={handleChangeDesiredGender('woman')}
        >
          👩 A woman
        </SelectButton>
      </Box>

      <Typography variant="body2" component="p" sx={{ marginBottom: '3.2rem' }}>
        You can always change who you want to meet
      </Typography>

      <Button
        variant="contained"
        disabled={!(gender && desiredGender)}
        onClick={handleSubmitButton}
      >
        Start
      </Button>
    </Box>
  );
}
