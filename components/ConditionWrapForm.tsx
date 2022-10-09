import { conditionAndEmpty } from "../types/ConditionAnd";
import { ConditionWrap } from "../types/ConditionWrap";
import InputOption from "./input/InputOption";
import NumConditionForm from "./NumConditionForm";
import ConditionAndForm from "./ConditionAndForm";
import ConditionOrForm from "./ConditionOrForm";
import ConditionNotForm from "./ConditionNotForm";
import { conditionOrEmpty } from "../types/ConditionOr";
import { conditionNotEmpty } from "../types/ConditionNot";
import { numConditionEmpty } from "../types/NumCondition";
import TextConditionForm from "./TextConditionForm";
import { playerConditionEmpty } from "../types/PlayerCondition";
import { textConditionEmpty } from "../types/TextCondition";
import PlayerConditionForm from "./PlayerConditionForm";

interface Props {
  model: ConditionWrap;
  onChanged: (newValue: Partial<ConditionWrap>) => void;
}

const ConditionWrapForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="and"
        model={model}
        keyName="conditionAnd"
        empty={conditionAndEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ConditionAndForm model={d!} onChanged={h} />}
      />

      <InputOption
        label="or"
        model={model}
        keyName="conditionOr"
        empty={conditionOrEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ConditionOrForm model={d!} onChanged={h} />}
      />

      <InputOption
        label="not"
        model={model}
        keyName="conditionNot"
        empty={conditionNotEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ConditionNotForm model={d!} onChanged={h} />}
      />

      <InputOption
        label="数値の条件"
        model={model}
        keyName="numCondition"
        empty={numConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumConditionForm model={d!} onChanged={h} />}
      />

      <InputOption
        label="テキストの条件"
        model={model}
        keyName="textCondition"
        empty={textConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <TextConditionForm model={d!} onChanged={h} />}
      />

      <InputOption
        label="プレイヤーの存在条件"
        model={model}
        keyName="playerExistsCondition"
        empty={playerConditionEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <PlayerConditionForm model={d!} onChanged={h} />}
      />
    </>
  );
};

export default ConditionWrapForm;
