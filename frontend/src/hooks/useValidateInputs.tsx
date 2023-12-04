import React, { useState } from 'react';

type Props = {
  type: "url";
};

type ValidationResult = {
  isCorrect: boolean;
};

type UseValidateInputsReturnType = {
  validationResult: ValidationResult;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const useValidateInputs = ({ type }: Props): UseValidateInputsReturnType => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<ValidationResult>({ isCorrect: false });

  if (type === "url") {
    try {
      new URL(value);
      setResult((prev) => ({ ...prev, isCorrect: true }));
    } catch (error) {
      setResult((prev) => ({ ...prev, isCorrect: false }));
    }
  }

  return { validationResult: result, setInputValue: setValue };
};

export default useValidateInputs;