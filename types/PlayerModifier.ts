import { NumValueModifier } from "./NumValueModifier";

export type PlayerModifier = {
  maxHp: NumValueModifier | undefined;
  hp: NumValueModifier | undefined;
  maxMp: NumValueModifier | undefined;
  mp: NumValueModifier | undefined;
};

export const playerModifierEmpty = (): PlayerModifier => {
  return {
    maxHp: undefined,
    hp: undefined,
    maxMp: undefined,
    mp: undefined,
  };
};
