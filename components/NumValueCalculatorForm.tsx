import { NumValueCalculator } from "../types/NumValueCalculator";
import NumValueCalculatorRandomForm from "./NumValueCalculatorRandomForm";
import NumValueCalculatorForPlayerForm from "./NumValueCalculatorForPlayerForm";
import NumValueCalculatorForCardForm from "./NumValueCalculatorForCardForm";
import NumValueCalculatorForCounterForm from "./NumValueCalculatorForCounterForm";
import InputOption from "./input/InputOption";
import { numValueCalculatorRandomEmpty } from "../types/NumValueCalculatorRandom";
import { numValueCalculatorForPlayerEmpty } from "../types/NumValueCalculatorForPlayer";
import { numValueCalculatorForCounterEmpty } from "../types/NumValueCalculatorForCounter";
import { numValueCalculatorForCardEmpty } from "../types/NumValueCalculatorForCard";
import { globalCache } from "./CauldronApi";
import InputSelect from "./input/InputSelect";

interface Props {
  model: NumValueCalculator;
  onChanged: (newValue: Partial<NumValueCalculator>) => void;
}

const NumValueCalculatorForm: React.FC<Props> = ({ model, onChanged }) => {
  const eventContextsLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorEventContexts.map((v) => [v.code, v.displayText])
  );
  const eventContexts = Object.keys(eventContextsLabelsByValue);

  return (
    <>
      <InputSelect
        label="種類"
        values={eventContexts}
        model={model}
        keyName={"eventContext"}
        getLabel={(v) => eventContextsLabelsByValue[v]}
        onChanged={onChanged}
      />
      <div>
        <InputOption
          label="ランダム"
          model={model}
          keyName="random"
          empty={numValueCalculatorRandomEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <NumValueCalculatorRandomForm model={d!} onChanged={h}></NumValueCalculatorRandomForm>}
        />
      </div>
      <div>
        <InputOption
          label="プレイヤー"
          model={model}
          keyName="forPlayer"
          empty={numValueCalculatorForPlayerEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <NumValueCalculatorForPlayerForm model={d!} onChanged={h}></NumValueCalculatorForPlayerForm>}
        />
      </div>
      <div>
        <InputOption
          label="カード"
          model={model}
          keyName="forCard"
          empty={numValueCalculatorForCardEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <NumValueCalculatorForCardForm model={d!} onChanged={h}></NumValueCalculatorForCardForm>}
        />
      </div>
      <div>
        <InputOption
          label="カウンター"
          model={model}
          keyName="forCounter"
          empty={numValueCalculatorForCounterEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <NumValueCalculatorForCounterForm model={d!} onChanged={h}></NumValueCalculatorForCounterForm>}
        />
      </div>
    </>
  );
};
export default NumValueCalculatorForm;
