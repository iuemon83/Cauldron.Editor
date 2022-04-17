import { NumValueCalculatorRandom } from "../types/NumValueCalculatorRandom";
import InputNumber from "./input/InputNumber";

interface Props {
  model: NumValueCalculatorRandom;
  onChanged: (newValue: Partial<NumValueCalculatorRandom>) => void;
}

const NumValueCalculatorRandomForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <div>
        <InputNumber label="最小" keyName="min" model={model} onChanged={onChanged} />
      </div>
      <div>
        <InputNumber label="最大" keyName="max" model={model} onChanged={onChanged} />
      </div>
    </>
  );
};
export default NumValueCalculatorRandomForm;
