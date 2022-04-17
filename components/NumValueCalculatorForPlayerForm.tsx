import { NumValueCalculatorForPlayer } from "../types/NumValueCalculatorForPlayer";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import InputSelect from "./input/InputSelect";

interface Props {
  model: NumValueCalculatorForPlayer;
  onChanged: (newValue: Partial<NumValueCalculatorForPlayer>) => void;
}

const NumValueCalculatorForPlayerForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorForPlayerTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <InputSelect
        label="種類"
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
export default NumValueCalculatorForPlayerForm;
