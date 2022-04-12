import { CardCondition, cardConditionEmpty } from "../types/CardCondition";
import { ChoiceSource } from "../types/ChoiceSource";
import CardConditionForm from "./CardConditionForm";

import { Button, FormGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormSet from "./input/FormSet";

interface Props {
  model: ChoiceSource;
  onChanged: (newValue: Partial<ChoiceSource>) => void;
}

const OrCardConditionListForm: React.FC<Props> = ({ model, onChanged }) => {
  const clear = () => {
    onChanged({ orCardConditions: [] });
  };

  const add = () => {
    const newValue: CardCondition = cardConditionEmpty();
    onChanged({
      orCardConditions: [...model.orCardConditions, newValue],
    });
  };

  const remove = (index: number) => {
    const newlist = [...model.orCardConditions];
    newlist.splice(index, 1);

    onChanged({
      orCardConditions: newlist,
    });
  };

  const onOrCardConditionsChanged = (x: CardCondition, index: number) => {
    const newlist = [...model.orCardConditions];
    newlist.splice(index, 1, x);
    onChanged({ orCardConditions: newlist });
  };

  return (
    <FormSet
      label={
        <>
          カードの選択条件
          <Button variant="contained" onClick={() => add()} color="primary" startIcon={<AddIcon />} />
          <Button variant="contained" onClick={() => clear()} color="secondary">
            Clear
          </Button>
        </>
      }
    >
      {model.orCardConditions.map((e, index) => (
        <FormGroup key={index}>
          <span>
            <Button variant="contained" color="secondary" onClick={() => remove(index)} startIcon={<DeleteIcon />} />
          </span>
          <CardConditionForm model={e} onChanged={(x) => onOrCardConditionsChanged({ ...e, ...x }, index)}></CardConditionForm>
        </FormGroup>
      ))}
    </FormSet>
  );
};

export default OrCardConditionListForm;
