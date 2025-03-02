import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
      <CircularProgress sx={{ color: '#FF4931' }} />
    </Box>
  );
}
