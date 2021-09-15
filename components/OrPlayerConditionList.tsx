import { ChoiceSourceDetail } from "../types/ChoiceSourceDetail";
import {
  PlayerConditionDetail,
  playerConditionEmpty,
} from "../types/PlayerConditionDetail";

import PlayerCondition from "./PlayerCondition";

import { Button, FormGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import FormSet from "./input/FormSet";

interface Props {
  detail: ChoiceSourceDetail;
  onChanged: (detail: Partial<ChoiceSourceDetail>) => void;
}

const OrPlayerConditionList: React.FC<Props> = ({ detail, onChanged }) => {
  const clear = () => {
    onChanged({ orPlayerConditions: [] });
  };

  const add = () => {
    const newValue: PlayerConditionDetail = playerConditionEmpty();
    onChanged({
      orPlayerConditions: [...detail.orPlayerConditions, newValue],
    });
  };

  const remove = (index: number) => {
    const newlist = [...detail.orPlayerConditions];
    newlist.splice(index, 1);

    onChanged({
      orPlayerConditions: newlist,
    });
  };

  const onOrPlayerConditionsChanged = (
    x: PlayerConditionDetail,
    index: number
  ) => {
    const newlist = [...detail.orPlayerConditions];
    newlist.splice(index, 1, x);
    onChanged({ orPlayerConditions: newlist });
  };

  return (
    <FormSet
      label={
        <>
          プレイヤーの選択条件
          <Button
            variant="contained"
            onClick={() => add()}
            color="primary"
            startIcon={<AddIcon />}
          />
          <Button variant="contained" onClick={() => clear()} color="secondary">
            Clear
          </Button>
        </>
      }
    >
      {detail.orPlayerConditions.map((e, index) => (
        <FormGroup key={index}>
          <span>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => remove(index)}
              startIcon={<DeleteIcon />}
            />
          </span>
          <PlayerCondition
            detail={e}
            onChanged={(x) =>
              onOrPlayerConditionsChanged({ ...e, ...x }, index)
            }
          ></PlayerCondition>
        </FormGroup>
      ))}
    </FormSet>
  );
};

export default OrPlayerConditionList;
