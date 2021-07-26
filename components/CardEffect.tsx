import React from "react";
import { cardEffectActionEmpty } from "../types/CardEffectActionDetail";
import { CardEffectConditionDetail } from "../types/CardEffectConditionDetail";
import { CardEffectDetail } from "../types/CardEffectDetail";
import CardEffectAction from "./CardEffectAction";
import CardEffectCondition from "./CardEffectCondition";
import FormSet from "./input/FormSet";
import InputList from "./input/InputList";

interface Props {
  detail: CardEffectDetail;
  onChanged: (detail: Partial<CardEffectDetail>) => void;
}

const CardEffect: React.FC<Props> = ({ detail, onChanged }) => {
  const handleChangeCardEffectCondition = (
    x: Partial<CardEffectConditionDetail>
  ) => {
    onChanged({
      ...detail,
      condition: { ...detail.condition, ...x },
    });
  };

  return (
    <>
      <FormSet label="条件">
        <CardEffectCondition
          detail={detail.condition}
          onChanged={handleChangeCardEffectCondition}
        ></CardEffectCondition>
      </FormSet>

      <InputList
        detail={detail}
        keyName="actions"
        label="アクション"
        newItem={() => cardEffectActionEmpty()}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => (
          <CardEffectAction
            detail={item}
            onChanged={onItemChanged}
          ></CardEffectAction>
        )}
      />
    </>
  );
};

export default CardEffect;
