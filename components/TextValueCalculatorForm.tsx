import { TextValueCalculator } from "../types/TextValueCalculator";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import InputSelect from "./input/InputSelect";
import React from "react";

interface Props {
  model: TextValueCalculator;
  onChanged: (newValue: Partial<TextValueCalculator>) => void;
}

const TextValueCalculatorForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.textValueCalculatorValueTypes.map((v) => [v.code, v.displayText])
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

export default TextValueCalculatorForm;
