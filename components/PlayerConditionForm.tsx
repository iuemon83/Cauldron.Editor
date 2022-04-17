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
    </>
  );
};

export default PlayerConditionForm;
