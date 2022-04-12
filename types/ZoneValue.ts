import { Choice } from "./Choice";

export type ZoneValue = {
  pureValue: string[];
  choice: Choice | undefined;
};

export const zoneValueEmpty = (): ZoneValue => {
  return {
    pureValue: [],
    choice: undefined,
  };
};
