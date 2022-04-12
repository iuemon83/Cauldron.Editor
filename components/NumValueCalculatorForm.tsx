import { NumValueCalculator } from "../types/NumValueCalculator";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import InputSelect from "./input/InputSelect";

interface Props {
  model: NumValueCalculator;
  onChanged: (newValue: Partial<NumValueCalculator>) => void;
}

const NumValueCalculatorForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorValueTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <InputSelect
        label="演算子"
        values={valueTypes}
        model={model}
        keyName={"type"}
        getLabel={(v) => valueTypesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <ChoiceForm
        model={model.cardsChoice}
        onChanged={(x) => onChanged({ cardsChoice: { ...model.cardsChoice, ...x } })}
      ></ChoiceForm>
    </>
  );
};
export default NumValueCalculatorForm;
