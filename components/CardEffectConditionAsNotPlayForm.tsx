import { CardEffectConditionAsNotPlay } from "../types/CardEffectConditionAsNotPlay";
import { CardEffectIfEmpty } from "../types/CardEffectIf";
import { CardEffectWhenEmpty } from "../types/CardEffectWhen";
import { CardEffectWhileEmpty } from "../types/CardEffectWhile";
import CardEffectIfForm from "./CardEffectIfForm";
import CardEffectWhenForm from "./CardEffectWhenForm";
import CardEffectWhileForm from "./CardEffectWhileForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";
import InputSelect from "./input/InputSelect";

interface Props {
  model: CardEffectConditionAsNotPlay;
  onChanged: (newValue: Partial<CardEffectConditionAsNotPlay>) => void;
}

const CardEffectConditionAsNotPlayForm: React.FC<Props> = ({ model, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  return (
    <>
      <InputSelect
        label="このカードがここにあるとき"
        values={zoneNames}
        model={model}
        keyName={"zone"}
        getLabel={(v) => zoneNamesLabelsByValue[v]}
        onChanged={onChanged}
      />
      <InputOption
        label="いつ"
        model={model}
        keyName="when"
        empty={CardEffectWhenEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectWhenForm model={d!} onChanged={h}></CardEffectWhenForm>}
      />
      <InputOption
        label="期間"
        model={model}
        keyName="while"
        empty={CardEffectWhileEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectWhileForm model={d!} onChanged={h}></CardEffectWhileForm>}
      />
      <InputOption
        label="もし"
        model={model}
        keyName="if"
        empty={CardEffectIfEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectIfForm model={d!} onChanged={h}></CardEffectIfForm>}
      />
    </>
  );
};

export default CardEffectConditionAsNotPlayForm;
