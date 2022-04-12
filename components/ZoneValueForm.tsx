import { choiceEmpty } from "../types/Choice";
import { ZoneValue } from "../types/ZoneValue";
import { globalCache } from "./CauldronApi";
import ChoiceForm from "./ChoiceForm";
import { FormControlLabel, Checkbox, Switch, FormGroup } from "@mui/material";
import FormSet from "./input/FormSet";

interface Props {
  model: ZoneValue;
  onChanged: (model: Partial<ZoneValue>) => void;
}

const ZoneValueForm: React.FC<Props> = ({ model, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.value);

    if (e.currentTarget.checked) {
      const newlist = [...model.pureValue, zoneNames[index]];

      onChanged({ pureValue: newlist });
    } else {
      const newlist = model.pureValue.filter((x) => x !== zoneNames[index]);

      onChanged({ pureValue: newlist });
    }
  };

  const pureValueInput = () => {
    return (
      <FormSet label="値">
        <FormGroup row>
          {zoneNames.map((e, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox value={index} checked={model.pureValue.indexOf(e) !== -1} onChange={handleValueChange} />}
              label={zoneNamesLabelsByValue[e]}
            />
          ))}
        </FormGroup>
      </FormSet>
    );
  };

  const handleIsDynamicValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? choiceEmpty() : undefined;

    onChanged({ choice: newValue });
  };

  const dynamicValueInput = () => {
    if (!model.choice) {
      return null;
    }

    return (
      <ChoiceForm
        model={model.choice}
        onChanged={(x) => {
          onChanged({
            choice: { ...(model.choice ?? choiceEmpty()), ...x },
          });
        }}
      ></ChoiceForm>
    );
  };

  const valueInput = () => {
    return model.choice ? dynamicValueInput() : pureValueInput();
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={model.choice !== undefined} onChange={handleIsDynamicValueChange} />}
        label="動的?"
      />
      <div>{valueInput()}</div>
    </>
  );
};

export default ZoneValueForm;
