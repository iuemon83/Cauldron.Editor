import { Switch } from "@mui/material";
import { numCompareEmpty } from "../types/NumCompare";
import { PlayerCondition } from "../types/PlayerCondition";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";
import NumCompareForm from "./NumCompareForm";

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
      <InputOption
        label="アクティブ?"
        model={model}
        keyName="isActive"
        empty={() => false}
        onChanged={onChanged}
        jtx={(d, h) => <Switch checked={model.isActive} onChange={(e) => onChanged({ isActive: e.target.checked })} />}
      />
      <InputOption
        label="最大HPの条件"
        model={model}
        keyName="maxHpCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="HPの条件"
        model={model}
        keyName="currentHpCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="最大MPの条件"
        model={model}
        keyName="maxMpCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="MPの条件"
        model={model}
        keyName="currentMpCondition"
        empty={numCompareEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumCompareForm model={d!} onChanged={h} />}
      />
    </>
  );
};

export default PlayerConditionForm;
