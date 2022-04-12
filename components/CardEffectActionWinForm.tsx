import React from "react";
import { CardEffectActionWin } from "../types/CardEffectActionWin";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";

interface Props {
  model: CardEffectActionWin;
  onChanged: (newValue: Partial<CardEffectActionWin>) => void;
}

const CardEffectActionWinForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <FormSet label="対象のプレイヤー">
        <ChoiceForm
          model={model.choicePlayers}
          onChanged={(x) =>
            onChanged({
              choicePlayers: { ...model.choicePlayers, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionWinForm;
