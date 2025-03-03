import { Box, Button, Modal, ModalProps, Typography } from '@mui/material';

export interface QuestionModalProps extends Omit<ModalProps, 'children'> {
  open: boolean;
  content: string;
  progress: number;
  handleAction: (progress: number, answer: string) => () => void;
  handleClose: () => void;
}
export default function QuestionModal({
  open,
  content,
  progress,
  handleAction,
  handleClose,
  ...props
}: QuestionModalProps) {
  return (
    <Modal open={open} onClose={handleClose} disableAutoFocus {...props}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: '1.6rem',
          borderRadius: 2,
          boxShadow: 24,
          textAlign: 'center',
          maxWidth: '34.3rem',
        }}
      >
        <Typography
          variant="body1"
          component="h6"
          sx={{
            marginBottom: '1.6rem',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {content}
        </Typography>

        <Box className="flex items-center justify-center gap-[1.2rem]">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAction(progress, 'No')}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '1.2rem',
              width: '14.95rem',
              height: '9.1rem',
            }}
          >
            ❌
            <Typography variant="body1" sx={{ marginTop: '0.8rem' }}>
              No
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAction(progress, 'Yes')}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '1.2rem',
              width: '14.95rem',
              height: '9.1rem',
            }}
          >
            ✅
            <Typography variant="body1" sx={{ marginTop: '0.8rem' }}>
              Yes
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
