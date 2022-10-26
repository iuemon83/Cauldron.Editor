import { ActionContextPlayersOfChoice } from "../types/ActionContextPlayersOfChoice";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";
import React from "react";

interface Props {
  model: ActionContextPlayersOfChoice;
  onChanged: (newValue: Partial<ActionContextPlayersOfChoice>) => void;
}

const ActionContextPlayersOfChoiceForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.actionContextPlayersOfChoiceTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <div>
        <InputText label="アクションの名前" model={model} keyName="actionName" onChanged={onChanged} />
      </div>
      <InputSelect
        label="種類"
        values={valueTypes}
        model={model}
        keyName={"type"}
        getLabel={(v) => valueTypesLabelsByValue[v]}
        onChanged={onChanged}
      />
    </>
  );
};
export default ActionContextPlayersOfChoiceForm;
