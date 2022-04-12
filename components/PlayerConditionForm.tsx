import { PlayerCondition } from "../types/PlayerCondition";
import { globalCache } from "./CauldronApi";
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

  const playerConditionTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.playerConditionTypes.map((v) => [v.code, v.displayText])
  );
  const playerConditionTypes = Object.keys(playerConditionTypesLabelsByValue);

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
      <div>
        <InputSelect
          label="type"
          values={playerConditionTypes}
          model={model}
          keyName={"type"}
          getLabel={(v) => playerConditionTypesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
    </>
  );
};

export default PlayerConditionForm;
