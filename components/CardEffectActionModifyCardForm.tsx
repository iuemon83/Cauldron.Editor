import { CardEffectActionModifyCard } from "../types/CardEffectActionModifyCard";
import { numValueModifierEmpty } from "../types/NumValueModifier";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import NumValueModifierForm from "./NumValueModifierForm";
import CreatureAbilityModifierForm from "./CreatureAbilityModifierForm";
import AnnotationsModifierForm from "./AnnotationsModifierForm";
import { creatureAbilityModifierEmpty } from "../types/CreatureAbilityModifier";
import InputTextOption from "./input/InputTextOption";
import { annotationsModifierEmpty } from "../types/AnnotationsModifier";

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
      <InputOption
        label="タグ"
        model={model}
        keyName="annotations"
        empty={annotationsModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <AnnotationsModifierForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="クリーチャーへ攻撃可能となるまでのターン数"
        model={model}
        keyName="numTurnsToCanAttackToCreature"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="プレイヤーへ攻撃可能となるまでのターン数"
        model={model}
        keyName="numTurnsToCanAttackToPlayer"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="攻撃回数"
        model={model}
        keyName="numAttacksLimitInTurn"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
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
