import { numValueModifierEmpty } from "../types/NumValueModifier";
import { PlayerModifier } from "../types/PlayerModifier";
import InputOption from "./input/InputOption";
import NumValueModifierForm from "./NumValueModifierForm";

interface Props {
  model: PlayerModifier;
  onChanged: (model: Partial<PlayerModifier>) => void;
}

const PlayerModifierForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="Max HP"
        model={model}
        keyName="maxHp"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="HP"
        model={model}
        keyName="hp"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="Max MP"
        model={model}
        keyName="maxMp"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
      <InputOption
        label="MP"
        model={model}
        keyName="mp"
        empty={numValueModifierEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <NumValueModifierForm model={d!} onChanged={h}></NumValueModifierForm>}
      />
    </>
  );
};
export default PlayerModifierForm;
