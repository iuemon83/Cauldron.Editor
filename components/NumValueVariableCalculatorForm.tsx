import { NumValueVariableCalculator } from "../types/NumValueVariableCalculator";
import InputText from "./input/InputText";

interface Props {
  model: NumValueVariableCalculator;
  onChanged: (newValue: Partial<NumValueVariableCalculator>) => void;
}

const NumValueVariableCalculatorForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputText label="変数名" keyName="name" model={model} onChanged={onChanged} />
    </>
  );
};
export default NumValueVariableCalculatorForm;
