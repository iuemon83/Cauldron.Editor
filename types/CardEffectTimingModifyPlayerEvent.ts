import { PlayerCondition } from "./PlayerCondition";

export type CardEffectTimingModifyPlayerEvent = {
  orPlayerConditions: PlayerCondition[];
  modifyMaxHp: boolean;
  modifyHp: boolean;
  modifyMaxMp: boolean;
  modifyMp: boolean;
};

export const CardEffectTimingDamageBeforeEventEmpty =
  (): CardEffectTimingModifyPlayerEvent => {
    return {
      orPlayerConditions:[],
      modifyMaxHp: false,
      modifyHp: false,
      modifyMaxMp: false,
      modifyMp: false,
    };
  };
