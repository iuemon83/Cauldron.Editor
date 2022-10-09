import { ActionContextCards } from "../types/ActionContextCards";
import { actionContextCardsOfAddCardEmpty } from "../types/ActionContextCardsOfAddCard";
import { actionContextCardsOfAddEffectEmpty } from "../types/ActionContextCardsOfAddEffect";
import { actionContextCardsOfDamageEmpty } from "../types/ActionContextCardsOfDamage";
import { actionContextCardsOfDestroyCardEmpty } from "../types/ActionContextCardsOfDestroyCard";
import { actionContextCardsOfDrawCardEmpty } from "../types/ActionContextCardsOfDrawCard";
import { actionContextCardsOfExcludeCardEmpty } from "../types/ActionContextCardsOfExcludeCard";
import { actionContextCardsOfModifyCardEmpty } from "../types/ActionContextCardsOfModifyCard";
import { actionContextCardsOfModifyCounterEmpty } from "../types/ActionContextCardsOfModifyCounter";
import { actionContextCardsOfMoveCardEmpty } from "../types/ActionContextCardsOfMoveCard";
import ActionContextCardsOfAddCardForm from "./ActionContextCardsOfAddCardForm";
import ActionContextCardsOfAddEffectForm from "./ActionContextCardsOfAddEffectForm";
import ActionContextCardsOfDamageForm from "./ActionContextCardsOfDamageForm";
import ActionContextCardsOfDestroyCardForm from "./ActionContextCardsOfDestroyCardForm";
import ActionContextCardsOfDrawCardForm from "./ActionContextCardsOfDrawCardForm";
import ActionContextCardsOfExcludeCardForm from "./ActionContextCardsOfExcludeCardForm";
import ActionContextCardsOfModifyCardForm from "./ActionContextCardsOfModifyCardForm";
import ActionContextCardsOfModifyCounterForm from "./ActionContextCardsOfModifyCounterForm";
import ActionContextCardsOfMoveCardForm from "./ActionContextCardsOfMoveCardForm";
import { globalCache } from "./CauldronApi";
import InputOption from "./input/InputOption";

interface Props {
  model: ActionContextCards;
  onChanged: (newValue: Partial<ActionContextCards>) => void;
}

const ActionContextCardsForm: React.FC<Props> = ({ model, onChanged }) => {
  const valueTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.numValueCalculatorForPlayerTypes.map((v) => [v.code, v.displayText])
  );
  const valueTypes = Object.keys(valueTypesLabelsByValue);

  return (
    <>
      <InputOption
        label="カード追加の結果"
        model={model}
        keyName="addCard"
        empty={actionContextCardsOfAddCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfAddCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="効果追加の結果"
        model={model}
        keyName="addEffect"
        empty={actionContextCardsOfAddEffectEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfAddEffectForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="ダメージの結果"
        model={model}
        keyName="damage"
        empty={actionContextCardsOfDamageEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfDamageForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="破壊の結果"
        model={model}
        keyName="destroyCard"
        empty={actionContextCardsOfDestroyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfDestroyCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="ドローの結果"
        model={model}
        keyName="drawCard"
        empty={actionContextCardsOfDrawCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfDrawCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="除外の結果"
        model={model}
        keyName="excludeCard"
        empty={actionContextCardsOfExcludeCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfExcludeCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="修整の結果"
        model={model}
        keyName="modifyCard"
        empty={actionContextCardsOfModifyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfModifyCardForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="カウンター増減の結果"
        model={model}
        keyName="modifyCounter"
        empty={actionContextCardsOfModifyCounterEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfModifyCounterForm model={d!} onChanged={h} />}
      />
      <InputOption
        label="移動の結果"
        model={model}
        keyName="moveCard"
        empty={actionContextCardsOfMoveCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <ActionContextCardsOfMoveCardForm model={d!} onChanged={h} />}
      />
    </>
  );
};
export default ActionContextCardsForm;
