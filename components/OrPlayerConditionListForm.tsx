import { PlayerCondition, playerConditionEmpty } from "../types/PlayerCondition";

import PlayerConditionForm from "./PlayerConditionForm";

import { Button, FormGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormSet from "./input/FormSet";

interface Props {
  model: { orPlayerConditions: PlayerCondition[] };
  onChanged: (newValue: Partial<{ orPlayerConditions: PlayerCondition[] }>) => void;
}

const OrPlayerConditionListForm: React.FC<Props> = ({ model, onChanged }) => {
  const clear = () => {
    onChanged({ orPlayerConditions: [] });
  };

  const add = () => {
    const newValue: PlayerCondition = playerConditionEmpty();
    onChanged({
      orPlayerConditions: [...model.orPlayerConditions, newValue],
    });
  };

  const remove = (index: number) => {
    const newlist = [...model.orPlayerConditions];
    newlist.splice(index, 1);

    onChanged({
      orPlayerConditions: newlist,
    });
  };

  const onOrPlayerConditionsChanged = (x: PlayerCondition, index: number) => {
    const newlist = [...model.orPlayerConditions];
    newlist.splice(index, 1, x);
    onChanged({ orPlayerConditions: newlist });
  };

  return (
    <FormSet
      label={
        <>
          プレイヤーの選択条件
          <Button variant="contained" onClick={() => add()} color="primary" startIcon={<AddIcon />} />
          <Button variant="contained" onClick={() => clear()} color="secondary">
            Clear
          </Button>
        </>
      }
    >
      {model.orPlayerConditions.map((e, index) => (
        <FormGroup key={index}>
          <span>
            <Button variant="contained" color="secondary" onClick={() => remove(index)} startIcon={<DeleteIcon />} />
          </span>
          <PlayerConditionForm
            model={e}
            onChanged={(x) => onOrPlayerConditionsChanged({ ...e, ...x }, index)}
          ></PlayerConditionForm>
        </FormGroup>
      ))}
    </FormSet>
  );
};

export default OrPlayerConditionListForm;
