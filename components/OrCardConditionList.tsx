import {
  CardConditionDetail,
  cardConditionEmpty,
} from "../types/CardConditionDetail";
import { ChoiceSourceDetail } from "../types/ChoiceSourceDetail";
import CardCondition from "./CardCondition";

import { Button, FormGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import FormSet from "./input/FormSet";

interface Props {
  detail: ChoiceSourceDetail;
  onChanged: (detail: Partial<ChoiceSourceDetail>) => void;
}

const OrCardConditionList: React.FC<Props> = ({ detail, onChanged }) => {
  const clear = () => {
    onChanged({ orCardConditions: [] });
  };

  const add = () => {
    const newValue: CardConditionDetail = cardConditionEmpty();
    onChanged({
      orCardConditions: [...detail.orCardConditions, newValue],
    });
  };

  const remove = (index: number) => {
    const newlist = [...detail.orCardConditions];
    newlist.splice(index, 1);

    onChanged({
      orCardConditions: newlist,
    });
  };

  const onOrCardConditionsChanged = (x: CardConditionDetail, index: number) => {
    const newlist = [...detail.orCardConditions];
    newlist.splice(index, 1, x);
    onChanged({ orCardConditions: newlist });
  };

  return (
    <FormSet
      label={
        <>
          カードの選択条件
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
      {detail.orCardConditions.map((e, index) => (
        <FormGroup key={index}>
          <span>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => remove(index)}
              startIcon={<DeleteIcon />}
            />
          </span>
          <CardCondition
            detail={e}
            onChanged={(x) => onOrCardConditionsChanged({ ...e, ...x }, index)}
          ></CardCondition>
        </FormGroup>
      ))}
    </FormSet>
  );
};

export default OrCardConditionList;
