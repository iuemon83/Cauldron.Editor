import { CardEffectTimingDestroyEvent } from "../types/CardEffectTimingDestroyEvent";
import OrCardConditionListForm from "./OrCardConditionListForm";

interface Props {
  model: CardEffectTimingDestroyEvent;
  onChanged: (newValue: Partial<CardEffectTimingDestroyEvent>) => void;
}

const CardEffectTimingDestroyForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <OrCardConditionListForm model={model} onChanged={onChanged} />
    </>
  );
};

export default CardEffectTimingDestroyForm;
