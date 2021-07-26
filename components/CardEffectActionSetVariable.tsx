import React from "react";
import { CardEffectActionSetVariableDetail } from "../types/CardEffectActionSetVariableDetail";
import FormSet from "./input/FormSet";
import InputText from "./input/InputText";
import NumValue from "./NumValue";

interface Props {
  detail: CardEffectActionSetVariableDetail;
  onChanged: (newValue: Partial<CardEffectActionSetVariableDetail>) => void;
}

const CardEffectActionSetVariable: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <InputText
        label="名前"
        detail={detail}
        keyName="name"
        onChanged={onChanged}
      />
      <FormSet label="値">
        <NumValue
          detail={detail.numValue}
          onChanged={(x) =>
            onChanged({ numValue: { ...detail.numValue, ...x } })
          }
        />
      </FormSet>
    </>
  );
};

export default CardEffectActionSetVariable;
