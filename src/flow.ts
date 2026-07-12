export type StepProps = {
  onNext: () => void;
  onBack: () => void;
  goTo: (index: number) => void;
};
