import { CardEffectConditionAsReserve } from "../types/CardEffectConditionAsReserve";
import { CardEffectIfEmpty } from "../types/CardEffectIf";
import { CardEffectWhenEmpty } from "../types/CardEffectWhen";
import { CardEffectWhileEmpty } from "../types/CardEffectWhile";
import CardEffectIfForm from "./CardEffectIfForm";
import CardEffectWhenForm from "./CardEffectWhenForm";
import CardEffectWhileForm from "./CardEffectWhileForm";
import InputOption from "./input/InputOption";

interface Props {
  model: CardEffectConditionAsReserve;
  onChanged: (newValue: Partial<CardEffectConditionAsReserve>) => void;
}

const CardEffectConditionAsReserveForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
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

export default CardEffectConditionAsReserveForm;
