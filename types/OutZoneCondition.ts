import { OutZoneName } from "./CardMetaData";

export type OutZoneCondition = {
  value: OutZoneName["code"][];
  not: boolean;
};

export const outZoneConditionEmpty = (): OutZoneCondition => {
  return {
    value: [],
    not: false,
  };
};
