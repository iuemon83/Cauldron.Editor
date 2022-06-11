import { Switch } from "@mui/material";
import { PlayerCondition } from "../types/PlayerCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  model: PlayerCondition;
  onChanged: (model: Partial<PlayerCondition>) => void;
}

const PlayerConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const playerConditionContextsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.playerConditionContexts.map((v) => [v.code, v.displayText])
  );
  const playerConditionContexts = Object.keys(playerConditionContextsLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="context"
          values={playerConditionContexts}
          model={model}
          keyName={"context"}
          getLabel={(v) => playerConditionContextsLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <InputOption
        label="先攻?"
        model={model}
        keyName="isFirst"
        empty={() => false}
        onChanged={onChanged}
        jtx={(d, h) => <Switch checked={model.isFirst} onChange={(e) => onChanged({ isFirst: e.target.checked })} />}
      />
    </>
  );
};

export default PlayerConditionForm;
