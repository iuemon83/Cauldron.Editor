import { ActionContextCards } from "../types/ActionContextCards";
import { actionContextPlayersOfChoiceEmpty } from "../types/ActionContextPlayersOfChoice";
import ActionContextPlayersOfChoiceForm from "./ActionContextPlayersOfChoiceForm";
import InputOption from "./input/InputOption";
import React from "react";

interface Props {
  model: ActionContextCards;
  onChanged: (newValue: Partial<ActionContextCards>) => void;
}

const ActionContextPlayersForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="選択の結果"
        model={model}
        keyName="moveCard"
        empty={actionContextPlayersOfChoiceEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextPlayersOfChoiceForm model={d!} onChanged={h} />}
      />
    </>
  );
};
export default ActionContextPlayersForm;
