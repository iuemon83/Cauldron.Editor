export type NumValueVariableCalculator = {
  name: string;
};

export const numValueVariableCalculatorEmpty = (): NumValueVariableCalculator => {
  return {
    name: "",
  };
};
