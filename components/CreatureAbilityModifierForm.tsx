import { CreatureAbilityModifier } from "../types/CreatureAbilityModifier";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CreatureAbilityModifier;
  onChanged: (model: Partial<CreatureAbilityModifier>) => void;
}

const CreatureAbilityModifierForm: React.FC<Props> = ({ model, onChanged }) => {
  const operatorsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.creatureAbilityModifierOperators.map((v) => [v.code, v.displayText])
  );
  const operators = Object.keys(operatorsLabelsByValue);

  const cardAbilitiesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardAbilities.map((v) => [v.code, v.displayText]));
  const cardAbilities = Object.keys(cardAbilitiesLabelsByValue);

  return (
    <>
      <InputSelect
        label="演算子"
        values={operators}
        model={model}
        keyName={"operator"}
        getLabel={(v) => operatorsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputSelect
        label="アビリティ"
        values={cardAbilities}
        model={model}
        keyName={"value"}
        getLabel={(v) => cardAbilitiesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};
export default CreatureAbilityModifierForm;
