'use client';
import { Box, Typography } from '@mui/material';
import QuestionModal from '../../modals/QuestionModal/QuestionModal';

import Image from 'next/image';
import CongratsScreen from '../../CongratsScreen/CongratsScreen';
import { analyzeQuestions } from '@/src/constants/questions';
import CustomCircularProgress from '../../CustomCircularProgress/CustomCircularProgress';
import useAnalyzePageContent from './useAnalyzePageContent';

export default function AnalyzePageContent() {
  const {
    openModal,
    answers,
    progress,
    handleClose,
    handleModalAction,
    handleRestart,
  } = useAnalyzePageContent();

  return (
    <Box className="flex flex-col items-center justify-center h-[100vh] w-[100vw] py-[1.6rem] px-[1.6rem]">
      <Box className="w-[7.4rem] h-[3rem] absolute top-[1.6rem]">
        <Image
          src="/kismia_logo.svg"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box className="flex flex-col items-center justify-center">
        {answers.find((value) => value.progress === 75) && progress === 100 ? (
          <CongratsScreen handleRestart={handleRestart} />
        ) : (
          <>
            <CustomCircularProgress progress={progress} />
            <Typography
              variant="body1"
              sx={{ marginBottom: '1.6rem', marginTop: '3rem' }}
            >
              Analyzing your answers...
            </Typography>
          </>
        )}
      </Box>

      {analyzeQuestions.map((value, index) => (
        <QuestionModal
          key={index}
          open={openModal === value.progress}
          content={value.content}
          progress={value.progress}
          handleAction={handleModalAction}
          handleClose={handleClose}
        />
      ))}
    </Box>
  );
}
