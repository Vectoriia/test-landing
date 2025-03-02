import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SelectGenderForm from '../forms/SelectGenderForm/SelectGenderForm';

export default function HomePageContent() {
  return (
    <Box className="flex flex-col items-center justify-center py-[1.6rem] px-[1.6rem] gap-[17.717rem]">
      <Box className="flex flex-col items-center justify-center gap-[2.283rem]">
        <Box className="w-[7.4rem] h-[3rem]">
          <Image
            src="/kismia_logo.svg"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        <Typography variant="h1" component="h1" className="text-center">
          The biggest database of dating profiles
        </Typography>
      </Box>
      <SelectGenderForm />
    </Box>
  );
}
