import { NumValueCalculatorRandom } from "./NumValueCalculatorRandom";
import { NumValueCalculatorForCard } from "./NumValueCalculatorForCard";
import { NumValueCalculatorForPlayer } from "./NumValueCalculatorForPlayer";
import { NumValueCalculatorForCounter } from "./NumValueCalculatorForCounter";

export type NumValueCalculator = {
  eventContext: undefined;
  random: NumValueCalculatorRandom | undefined;
  forCard: NumValueCalculatorForCard | undefined;
  forPlayer: NumValueCalculatorForPlayer | undefined;
  forCounter: NumValueCalculatorForCounter | undefined;
};

export const numValueCalculatorEmpty = (): NumValueCalculator => {
  return {
    eventContext: undefined,
    random: undefined,
    forCard: undefined,
    forPlayer: undefined,
    forCounter: undefined,
  };
};
