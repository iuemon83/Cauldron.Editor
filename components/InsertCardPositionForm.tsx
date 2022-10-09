import React from "react";
import { InsertCardPosition } from "../types/InsertCardPosition";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  model: InsertCardPosition;
  onChanged: (newValue: Partial<InsertCardPosition>) => void;
}

const InsertCardPositionForm: React.FC<Props> = ({ model, onChanged }) => {
  const positionTypeValuesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.positionTypeValues.map((v) => [v.code, v.displayText])
  );
  const cardTypes = Object.keys(positionTypeValuesLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="種類"
          values={cardTypes}
          model={model}
          keyName={"positionType"}
          getLabel={(v) => positionTypeValuesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber label="位置" model={model} keyName="positionIndex" onChanged={onChanged} />
      </div>
    </>
  );
};

export default InsertCardPositionForm;
