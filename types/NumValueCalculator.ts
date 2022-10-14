import { NumValueCalculatorRandom } from "./NumValueCalculatorRandom";
import { NumValueCalculatorForCard } from "./NumValueCalculatorForCard";
import { NumValueCalculatorForPlayer } from "./NumValueCalculatorForPlayer";
import { NumValueCalculatorForCounter } from "./NumValueCalculatorForCounter";
import { NumValueCalculatorEventContext } from "./CardMetaData";
import { globalCache } from "../components/CauldronApi";

export type NumValueCalculator = {
  eventContext: NumValueCalculatorEventContext["code"];
  random: NumValueCalculatorRandom | undefined;
  forCard: NumValueCalculatorForCard | undefined;
  forPlayer: NumValueCalculatorForPlayer | undefined;
  forCounter: NumValueCalculatorForCounter | undefined;
};

export const numValueCalculatorEmpty = (): NumValueCalculator => {
  return {
    eventContext: globalCache.metadata!.numValueCalculatorEventContexts[0].code,
    random: undefined,
    forCard: undefined,
    forPlayer: undefined,
    forCounter: undefined,
  };
};
