import {ReactElement, useState} from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        setIsSubmited(true);

        return i;
      }

      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;

      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isSubmited,
    goTo,
    next,
    back,
  };
}
