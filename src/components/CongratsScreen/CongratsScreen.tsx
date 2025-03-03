import { Button, Typography } from '@mui/material';

export interface CongratsScreenProps {
  handleRestart: () => void;
}

export default function CongratsScreen({ handleRestart }: CongratsScreenProps) {
  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: '1.6rem' }}>
        Congratulations! 🥳
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleRestart}>
        Restart
      </Button>
    </>
  );
}
