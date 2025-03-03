import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Answers } from './types';

const useAnalyzePageContent = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [answers, setAnswers] = useState<Answers[]>([]);

  // start loader timer
  useEffect(() => {
    if (isPaused || openModal !== null) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, openModal]);

  useEffect(() => {
    if ([25, 50, 75].includes(progress)) {
      setOpenModal(progress);
      setIsPaused(true);
    }
  }, [progress]);

  const handleClose = () => {
    //make the answer required
  };

  const handleModalAction = (progress: number, answer: string) => () => {
    //can be some additional logic
    setAnswers((prev) => [...prev, { progress, value: answer }]);
    setOpenModal(null);
    setIsPaused(false);
  };

  const handleRestart = () => {
    router.push('/');
  };

  return {
    openModal,
    answers,
    progress,
    handleClose,
    handleModalAction,
    handleRestart,
  };
};

export default useAnalyzePageContent;
