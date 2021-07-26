import React from "react";
import { InsertCardPositionDetail } from "../types/InsertCardPositionDetail";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

interface Props {
  detail: InsertCardPositionDetail;
  onChanged: (newValue: Partial<InsertCardPositionDetail>) => void;
}

const InsertCardPosition: React.FC<Props> = ({ detail, onChanged }) => {
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
          detail={detail}
          keyName={"positionType"}
          getLabel={(v) => positionTypeValuesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="位置"
          detail={detail}
          keyName="positionIndex"
          onChanged={onChanged}
        />
      </div>
    </>
  );
};

export default InsertCardPosition;
