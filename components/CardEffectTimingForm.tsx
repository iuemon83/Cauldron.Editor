import { cardEffectTimingDamageBeforeEventEmpty } from "../types/CardEffectTimingDamageBeforeEvent";
import { cardEffectTimingHealBeforeEventEmpty } from "../types/CardEffectTimingHealBeforeEvent";
import { cardEffectTimingDestroyEventEmpty } from "../types/CardEffectTimingDestroyEvent";
import { CardEffectTiming } from "../types/CardEffectTiming";
import { cardEffectTimingEndTurnEventEmpty } from "../types/CardEffectTimingEndTurnEvent";
import { cardEffectTimingMoveCardEventEmpty } from "../types/CardEffectTimingMoveCardEvent";
import { cardEffectTimingPlayEventEmpty } from "../types/CardEffectTimingPlayEvent";
import { cardEffectTimingStartTurnEventEmpty } from "../types/CardEffectTimingStartTurnEvent";
import CardEffectTimingDamageBeforeForm from "./CardEffectTimingDamageBeforeForm";
import CardEffectTimingHealBeforeForm from "./CardEffectTimingHealBeforeForm";
import CardEffectTimingDestroyForm from "./CardEffectTimingDestroyForm";
import CardEffectTimingEndTurnForm from "./CardEffectTimingEndTurnForm";
import CardEffectTimingMoveCardForm from "./CardEffectTimingMoveCardForm";
import CardEffectTimingPlayForm from "./CardEffectTimingPlayForm";
import CardEffectTimingStartTurnForm from "./CardEffectTimingStartTurnForm";
import CardEffectTimingAttackBeforeForm from "./CardEffectTimingAttackBeforeForm";
import CardEffectTimingExcludeCardForm from "./CardEffectTimingExcludeCardForm";
import CardEffectTimingModifyCounterOnCardForm from "./CardEffectTimingModifyCounterOnCardForm";
import InputOption from "./input/InputOption";
import { cardEffectTimingAttackBeforeEventEmpty } from "../types/CardEffectTimingAttackBeforeEvent";
import { cardEffectTimingExcludeCardEventEmpty } from "../types/CardEffectTimingExcludeCardEvent";
import { cardEffectTimingModifyCounterOnCardEventEmpty } from "../types/CardEffectTimingModifyCounterOnCardEvent";

interface Props {
  model: CardEffectTiming;
  onChanged: (newValue: Partial<CardEffectTiming>) => void;
}

const CardEffectTimingForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="??????????????????"
        model={model}
        keyName="startTurn"
        empty={cardEffectTimingStartTurnEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingStartTurnForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="??????????????????"
        model={model}
        keyName="endTurn"
        empty={cardEffectTimingEndTurnEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingEndTurnForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="????????????????????????"
        model={model}
        keyName="play"
        empty={cardEffectTimingPlayEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingPlayForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????????????????"
        model={model}
        keyName="destroy"
        empty={cardEffectTimingDestroyEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingDestroyForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????"
        model={model}
        keyName="attackBefore"
        empty={cardEffectTimingAttackBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingAttackBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????"
        model={model}
        keyName="attackAfter"
        empty={cardEffectTimingAttackBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingAttackBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="???????????????"
        model={model}
        keyName="damageBefore"
        empty={cardEffectTimingDamageBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingDamageBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="???????????????"
        model={model}
        keyName="damageAfter"
        empty={cardEffectTimingDamageBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingDamageBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????"
        model={model}
        keyName="healBefore"
        empty={cardEffectTimingHealBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingHealBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????"
        model={model}
        keyName="healAfter"
        empty={cardEffectTimingHealBeforeEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingHealBeforeForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????????????????"
        model={model}
        keyName="moveCard"
        empty={cardEffectTimingMoveCardEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingMoveCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="?????????????????????"
        model={model}
        keyName="excludeCard"
        empty={cardEffectTimingExcludeCardEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingExcludeCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="???????????????????????????"
        model={model}
        keyName="modifyCounter"
        empty={cardEffectTimingModifyCounterOnCardEventEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectTimingModifyCounterOnCardForm model={d!} onChanged={h} />}
      />
    </>
  );
};

export default CardEffectTimingForm;
