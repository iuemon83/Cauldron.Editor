import { numValueCalculatorEmpty } from "../types/NumValueCalculator";
import { numValueVariableCalculatorEmpty } from "../types/NumValueVariableCalculator";
import { numValueModifierEmpty } from "../types/NumValueModifier";
import { NumValue } from "../types/NumValue";
import InputNumberOption from "./input/InputNumberOption";
import InputOption from "./input/InputOption";
import NumValueCalculatorForm from "./NumValueCalculatorForm";
import NumValueModifierForm from "./NumValueModifierForm";
import NumValueVariableCalculatorForm from "./NumValueVariableCalculatorForm";

interface Props {
  model: NumValue;
  onChanged: (model: Partial<NumValue>) => void;
}

const NumValueForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputNumberOption label="定数" keyName="pureValue" model={model} onChanged={onChanged} />
      <InputOption
        label="算出"
        model={model}
        keyName="numValueCalculator"
        empty={numValueCalculatorEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueCalculatorForm model={d!} onChanged={h}></NumValueCalculatorForm>}
      />
      <InputOption
        label="変数"
        model={model}
        keyName="numValueVariableCalculator"
        empty={numValueVariableCalculatorEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueVariableCalculatorForm model={d!} onChanged={h}></NumValueVariableCalculatorForm>}
      />
      <InputOption
        label="演算"
        model={model}
        keyName="numValueModifier"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
    </>
  );
};

export default NumValueForm;
