import { ReactElement } from 'react';
import { OnboardingStepProps } from './types';
import InitiativeForm from '../forms/InitiativeForm/InitiativeForm';
import EnterEmailForm from '../forms/EnterEmailForm/EnterEmailForm';

export enum Steps {
  InitiativeQuestion = 0,
  EmailForm = 1,
}

export const steps: Record<
  Steps,
  (props: OnboardingStepProps) => ReactElement
> = {
  [Steps.InitiativeQuestion]: InitiativeForm,
  [Steps.EmailForm]: EnterEmailForm,
};
