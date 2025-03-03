import { Box } from '@mui/material';
import Image from 'next/image';

export interface StackedImagesProps {
  images: string[];
}

export default function StackedImages({ images }: StackedImagesProps) {
  return (
    <Box className="relative flex justify-center items-center w-[32.649rem] h-[17.746rem]">
      <Box className="absolute left-0 bottom-0 transform -rotate-12 opacity-50 z-0 w-[11.314rem] h-[14.457rem]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${images[0]}`}
          alt="Left Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
          className="rounded-xl shadow-lg"
          fill={true}
          objectFit="cover"
        />
      </Box>

      <Box className="relative z-10 w-[13.41rem] h-[17.135rem]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${images[1]}`}
          alt="Center Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
          className="rounded-xl shadow-xl"
          fill={true}
          objectFit="cover"
        />
      </Box>

      <Box className="absolute right-0 bottom-0 transform rotate-12 opacity-50 z-0 w-[11.314rem] h-[14.457rem]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${images[2]}`}
          alt="Right Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
          className="rounded-xl shadow-lg"
          fill={true}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
