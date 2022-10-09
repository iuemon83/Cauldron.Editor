import { CardEffectTimingStartTurnEvent } from "../types/CardEffectTimingStartTurnEvent";
import OrPlayerConditionListForm from "./OrPlayerConditionListForm";

interface Props {
  model: CardEffectTimingStartTurnEvent;
  onChanged: (newValue: Partial<CardEffectTimingStartTurnEvent>) => void;
}

const CardEffectTimingStartTurnForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <OrPlayerConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default CardEffectTimingStartTurnForm;
