import { CardEffectActionDrawCard } from "../types/CardEffectActionDrawCard";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";
import NumValueForm from "./NumValueForm";
import PlayerConditionForm from "./PlayerConditionForm";

interface Props {
  model: CardEffectActionDrawCard;
  onChanged: (newValue: Partial<CardEffectActionDrawCard>) => void;
}

const CardEffectActionDrawCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <FormSet label="枚数">
        <NumValueForm
          model={model.numCards}
          onChanged={(x) => onChanged({ numCards: { ...model.numCards, ...x } })}
        ></NumValueForm>
      </FormSet>
      <FormSet label="対象のプレイヤー">
        <PlayerConditionForm
          model={model.playerCondition}
          onChanged={(x) =>
            onChanged({
              playerCondition: { ...model.playerCondition, ...x },
            })
          }
        ></PlayerConditionForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionDrawCardForm;
