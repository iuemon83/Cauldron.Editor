import { CardEffectActionModifyPlayer } from "../types/CardEffectActionModifyPlayer";
import ChoiceForm from "./ChoiceForm";
import FormSet from "./input/FormSet";
import PlayerModifierForm from "./PlayerModifierForm";

interface Props {
  model: CardEffectActionModifyPlayer;
  onChanged: (newValue: Partial<CardEffectActionModifyPlayer>) => void;
}

const CardEffectActionModifyPlayerForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <FormSet label="修整方法">
        <PlayerModifierForm
          model={model.playerModifier}
          onChanged={(x) =>
            onChanged({
              playerModifier: { ...model.playerModifier, ...x },
            })
          }
        ></PlayerModifierForm>
      </FormSet>
      <FormSet label="対象の選択条件">
        <ChoiceForm
          model={model.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...model.choice, ...x },
            })
          }
        ></ChoiceForm>
      </FormSet>
    </>
  );
};

export default CardEffectActionModifyPlayerForm;
