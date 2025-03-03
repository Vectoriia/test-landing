import { Button, ButtonProps } from '@mui/material';

export interface SelectButtonProps extends ButtonProps {
  isSelected: boolean;
}
export default function SelectButton({
  isSelected,
  ...props
}: SelectButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      {...props}
      sx={{
        color: isSelected ? '#FF4931' : '#000',
        backgroundColor: isSelected ? '#FFEEEC' : '#F1F1F1',
        '&:hover': {
          backgroundColor: isSelected ? '#FFEEEC' : '#e8e8e8',
        },
      }}
    >
      {props.children}
    </Button>
  );
}
