export type NumValueCalculatorRandom = {
  min: number;
  max: number;
};

export const numValueCalculatorRandomEmpty = (): NumValueCalculatorRandom => {
  return {
    min: 0,
    max: 0,
  };
};
