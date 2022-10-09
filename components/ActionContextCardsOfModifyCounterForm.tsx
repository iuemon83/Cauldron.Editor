import { ActionContextCardsOfModifyCounter } from "../types/ActionContextCardsOfModifyCounter";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";

interface Props {
  model: ActionContextCardsOfModifyCounter;
  onChanged: (newValue: Partial<ActionContextCardsOfModifyCounter>) => void;
}

const ActionContextCardsOfModifyCounterForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.actionContextCardsOfModifyCounterTypes.map((v) => [v.code, v.displayText])
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
export default ActionContextCardsOfModifyCounterForm;
