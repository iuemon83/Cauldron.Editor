import { NumValueModifier } from "../types/NumValueModifier";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import NumValueForm from "./NumValueForm";

interface Props {
  model: NumValueModifier;
  onChanged: (model: Partial<NumValueModifier>) => void;
}

const NumValueModifierForm: React.FC<Props> = ({ model, onChanged }) => {
  const operatorsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueModifierOperators.map((v) => [v.code, v.displayText])
  );
  const operators = Object.keys(operatorsLabelsByValue);

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
      <NumValueForm model={model.value} onChanged={(x) => onChanged({ value: { ...model.value, ...x } })}></NumValueForm>
    </>
  );
};
export default NumValueModifierForm;
