import { CardEffectTimingEndTurnEvent } from "../types/CardEffectTimingEndTurnEvent";
import OrPlayerConditionListForm from "./OrPlayerConditionListForm";

interface Props {
  model: CardEffectTimingEndTurnEvent;
  onChanged: (newValue: Partial<CardEffectTimingEndTurnEvent>) => void;
}

const CardEffectTimingEndTurnForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <OrPlayerConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default CardEffectTimingEndTurnForm;
