import { Box, CircularProgress, Typography } from '@mui/material';

export interface CustomCircularProgressProps {
  progress: number;
}

export default function CustomCircularProgress({
  progress,
}: CustomCircularProgressProps) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={progress}
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
        size={'16.113rem'}
        thickness={4}
      />
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          position: 'absolute',
          zIndex: 1,
          right: 0,
          circle: { color: '#F1F1F1 ' },
        }}
        size={'16.113rem'}
        thickness={4}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '16.113rem',
          height: '16.113rem',
        }}
      >
        <Typography variant="h1" component="h1">{`${progress}%`}</Typography>
      </Box>
    </Box>
  );
}
