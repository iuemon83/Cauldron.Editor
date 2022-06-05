import { numValueCalculatorEmpty } from "../types/NumValueCalculator";
import { numValueVariableCalculatorEmpty } from "../types/NumValueVariableCalculator";
import { numValueModifierEmpty } from "../types/NumValueModifier";
import { NumValue } from "../types/NumValue";
import InputOption from "./input/InputOption";
import NumValueCalculatorForm from "./NumValueCalculatorForm";
import NumValueModifierForm from "./NumValueModifierForm";
import NumValueVariableCalculatorForm from "./NumValueVariableCalculatorForm";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import InputNumber from "./input/InputNumber";

interface Props {
  model: NumValue;
  onChanged: (model: Partial<NumValue>) => void;
}

type ActionNameKey = "pureValue" | "numValueCalculator" | "numVariable";
type ActionKeyMap = { [key in ActionNameKey]: string };

const actionNames: ActionKeyMap = {
  pureValue: "定数",
  numValueCalculator: "算出",
  numVariable: "変数",
} as const;

const actionNameKeys = Object.keys(actionNames) as ActionNameKey[];

function isActionNameKey(x: string): x is ActionNameKey {
  return (actionNameKeys as readonly string[]).indexOf(x) >= 0;
}

const NumValueForm: React.FC<Props> = ({ model, onChanged }) => {
  console.log(model);

  const selectedAction = (() => {
    for (const key of actionNameKeys) {
      if (model[key] !== undefined) {
        console.log(key);
        return key;
      }
    }

    return "";
  })();

  const handleActionNameChanged = (e: SelectChangeEvent<string>) => {
    const newSelectedActionName = e.target.value;

    if (!isActionNameKey(newSelectedActionName)) {
      return;
    }

    actionNameKeys.forEach((x) => {
      if (x !== newSelectedActionName) {
        model[x] = undefined;
      }
    });

    switch (newSelectedActionName) {
      case "pureValue":
        model.pureValue = 0;
        break;
      case "numValueCalculator":
        model.numValueCalculator = numValueCalculatorEmpty();
        break;
      case "numVariable":
        model.numVariable = numValueVariableCalculatorEmpty();
        break;
    }

    onChanged(model);
  };

  return (
    <>
      <FormControl>
        <InputLabel>数値の種類</InputLabel>
        <Select value={selectedAction} onChange={handleActionNameChanged}>
          {actionNameKeys.map((key, index) => (
            <MenuItem key={index} value={key}>
              {actionNames[key as keyof typeof actionNames]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedAction === "pureValue" && model.pureValue !== undefined && (
        <InputNumber label="" model={model} keyName="pureValue" onChanged={onChanged} />
      )}
      {selectedAction === "numValueCalculator" && model.numValueCalculator !== undefined && (
        <NumValueCalculatorForm
          model={model.numValueCalculator}
          onChanged={(x) =>
            model.numValueCalculator !== undefined && onChanged({ numValueCalculator: { ...model.numValueCalculator, ...x } })
          }
        />
      )}
      {selectedAction === "numVariable" && model.numVariable !== undefined && (
        <NumValueVariableCalculatorForm
          model={model.numVariable}
          onChanged={(x) => model.numVariable !== undefined && onChanged({ numVariable: { ...model.numVariable, ...x } })}
        />
      )}
      <div>
        <InputOption
          label="演算"
          model={model}
          keyName="numValueModifier"
          empty={numValueModifierEmpty}
          onChanged={onChanged}
          jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
        />
      </div>
    </>
  );
};

export default NumValueForm;
