import { CardEffectActionModifyCard } from "../types/CardEffectActionModifyCard";
import { numValueModifierEmpty } from "../types/NumValueModifier";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import NumValueModifierForm from "./NumValueModifierForm";
import CreatureAbilityModifierForm from "./CreatureAbilityModifierForm";
import { creatureAbilityModifierEmpty } from "../types/CreatureAbilityModifier";
import InputTextOption from "./input/InputTextOption";

interface Props {
  model: CardEffectActionModifyCard;
  onChanged: (newValue: Partial<CardEffectActionModifyCard>) => void;
}

const CardEffectActionModifyCardForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
      <InputOption
        label="コスト"
        model={model}
        keyName="cost"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="パワー"
        model={model}
        keyName="power"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="タフネス"
        model={model}
        keyName="toughness"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="アビリティ"
        model={model}
        keyName="ability"
        empty={creatureAbilityModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CreatureAbilityModifierForm model={d!} onChanged={h} />}
      />
      <FormSet label="対象の選択条件">
        <ChoiceForm
          model={model.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...model.choice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyCardForm;
