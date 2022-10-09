import { OutZoneCondition } from "../types/OutZoneCondition";
import { Checkbox, FormControlLabel, FormGroup, Switch } from "@mui/material";
import FormSet from "./input/FormSet";
import { globalCache } from "./CauldronApi";

interface Props {
  model: OutZoneCondition;
  onChanged: (model: Partial<OutZoneCondition>) => void;
}

const OutZoneConditionForm: React.FC<Props> = ({ model, onChanged }) => {
  const outZoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.outZoneNames.map((v) => [v.code, v.displayText]));
  const outZoneNames = Object.keys(outZoneNamesLabelsByValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.value);

    if (e.currentTarget.checked) {
      const newlist = [...model.value, outZoneNames[index]];

      onChanged({ value: newlist });
    } else {
      const newlist = model.value.filter((x) => x !== outZoneNames[index]);

      onChanged({ value: newlist });
    }
  };

  return (
    <>
      <div>
        <FormControlLabel
          control={<Switch checked={model.not} onChange={(e) => onChanged({ not: e.target.checked })} />}
          label="not?"
        />
      </div>
      <FormSet label="値">
        <FormGroup row>
          {outZoneNames.map((e, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox value={index} checked={model.value.indexOf(e) !== -1} onChange={handleValueChange} />}
              label={outZoneNamesLabelsByValue[e]}
            />
          ))}
        </FormGroup>
      </FormSet>
    </>
  );
};

export default OutZoneConditionForm;
