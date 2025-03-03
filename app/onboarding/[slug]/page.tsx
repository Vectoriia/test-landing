import OnboardingContent from '@/src/components/page-content/OnboardingContent';
import { redirect } from 'next/navigation';

export interface OnBoardingProps {
  params: Promise<{ slug: string }>;
}

export default async function OnBoarding({ params }: OnBoardingProps) {
  const { slug } = await params;
  const validSlugs = ['man', 'woman'];

  if (!validSlugs.includes(slug)) {
    redirect('/');
  }

  return <OnboardingContent />;
}
