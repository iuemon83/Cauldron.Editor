import { choiceEmpty } from "../types/ChoiceDetail";
import { ZoneValueDetail } from "../types/ZoneValueDetail";
import { globalCache } from "./CauldronApi";
import Choice from "./Choice";
import { FormControlLabel, Checkbox, Switch, FormGroup } from "@mui/material";
import FormSet from "./input/FormSet";

interface Props {
  detail: ZoneValueDetail;
  onChanged: (detail: Partial<ZoneValueDetail>) => void;
}

const ZoneValue: React.FC<Props> = ({ detail, onChanged }) => {
  const zoneNamesLabelsByValue = Object.fromEntries(globalCache.metadata!.zoneNames.map((v) => [v.code, v.displayText]));
  const zoneNames = Object.keys(zoneNamesLabelsByValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.value);

    if (e.currentTarget.checked) {
      const newlist = [...detail.pureValue, zoneNames[index]];

      onChanged({ pureValue: newlist });
    } else {
      const newlist = detail.pureValue.filter((x) => x !== zoneNames[index]);

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
              control={<Checkbox value={index} checked={detail.pureValue.indexOf(e) !== -1} onChange={handleValueChange} />}
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
    if (!detail.choice) {
      return null;
    }

    return (
      <Choice
        detail={detail.choice}
        onChanged={(x) => {
          onChanged({
            choice: { ...(detail.choice ?? choiceEmpty()), ...x },
          });
        }}
      ></Choice>
    );
  };

  const valueInput = () => {
    return detail.choice ? dynamicValueInput() : pureValueInput();
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={detail.choice !== undefined} onChange={handleIsDynamicValueChange} />}
        label="動的?"
      />
      <div>{valueInput()}</div>
    </>
  );
};

export default ZoneValue;
