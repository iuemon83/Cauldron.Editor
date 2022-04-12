import { CardEffectActionAddCardEmpty } from "../types/CardEffectActionAddCard";
import { cardEffectActionAddEffectEmpty } from "../types/CardEffectActionAddEffect";
import { CardEffectActionDamageEmpty } from "../types/CardEffectActionDamage";
import { CardEffectActionDestroyCardEmpty } from "../types/CardEffectActionDestroyCard";
import { CardEffectAction } from "../types/CardEffectAction";
import { CardEffectActionDrawCardEmpty } from "../types/CardEffectActionDrawCard";
import { CardEffectActionModifyCardEmpty } from "../types/CardEffectActionModifyCard";
import { CardEffectActionModifyDamageEmpty } from "../types/CardEffectActionModifyDamage";
import { cardEffectActionModifyPlayerEmpty } from "../types/CardEffectActionModifyPlayer";
import { cardEffectActionMoveCardEmpty } from "../types/CardEffectActionMoveCard";
import { CardEffectActionSetVariableEmpty } from "../types/CardEffectActionSetVariable";
import { CardEffectActionWinEmpty } from "../types/CardEffectActionWin";
import CardEffectActionAddCardForm from "./CardEffectActionAddCardForm";
import CardEffectActionAddEffectForm from "./CardEffectActionAddEffectForm";
import CardEffectActionDamageForm from "./CardEffectActionDamageForm";
import CardEffectActionDestroyCardForm from "./CardEffectActionDestroyCardForm";
import CardEffectActionDrawCardForm from "./CardEffectActionDrawCardForm";
import CardEffectActionModifyCardForm from "./CardEffectActionModifyCardForm";
import CardEffectActionModifyDamageForm from "./CardEffectActionModifyDamageForm";
import CardEffectActionModifyPlayerForm from "./CardEffectActionModifyPlayerForm";
import CardEffectActionMoveCardForm from "./CardEffectActionMoveCardForm";
import CardEffectActionSetVariableForm from "./CardEffectActionSetVariableForm";
import CardEffectActionWinForm from "./CardEffectActionWinForm";
import InputOption from "./input/InputOption";

interface Props {
  model: CardEffectAction;
  onChanged: (model: Partial<CardEffectAction>) => void;
}

const CardEffectActionForm: React.FC<Props> = ({ model, onChanged }) => {
  return (
    <>
      <InputOption
        label="ダメージ"
        model={model}
        keyName="damage"
        empty={CardEffectActionDamageEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionDamageForm model={d!} onChanged={h}></CardEffectActionDamageForm>}
      />
      <InputOption
        label="カードの生成"
        model={model}
        keyName="addCard"
        empty={CardEffectActionAddCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionAddCardForm model={d!} onChanged={h}></CardEffectActionAddCardForm>}
      />
      <InputOption
        label="カードの修整"
        model={model}
        keyName="modifyCard"
        empty={CardEffectActionModifyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionModifyCardForm model={d!} onChanged={h}></CardEffectActionModifyCardForm>}
      />
      <InputOption
        label="カードの破壊"
        model={model}
        keyName="destroyCard"
        empty={CardEffectActionDestroyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionDestroyCardForm model={d!} onChanged={h}></CardEffectActionDestroyCardForm>}
      />
      <InputOption
        label="カードの移動"
        model={model}
        keyName="moveCard"
        empty={cardEffectActionMoveCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionMoveCardForm model={d!} onChanged={h}></CardEffectActionMoveCardForm>}
      />
      <InputOption
        label="ダメージの修整"
        model={model}
        keyName="modifyDamage"
        empty={CardEffectActionModifyDamageEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionModifyDamageForm model={d!} onChanged={h}></CardEffectActionModifyDamageForm>}
      />
      <InputOption
        label="プレイヤーの修整"
        model={model}
        keyName="modifyPlayer"
        empty={cardEffectActionModifyPlayerEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionModifyPlayerForm model={d!} onChanged={h}></CardEffectActionModifyPlayerForm>}
      />
      <InputOption
        label="ドロー"
        model={model}
        keyName="drawCard"
        empty={CardEffectActionDrawCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionDrawCardForm model={d!} onChanged={h}></CardEffectActionDrawCardForm>}
      />
      <InputOption
        label="効果の追加"
        model={model}
        keyName="addEffect"
        empty={cardEffectActionAddEffectEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionAddEffectForm model={d!} onChanged={h}></CardEffectActionAddEffectForm>}
      />
      <InputOption
        label="値のセット"
        model={model}
        keyName="setVariable"
        empty={CardEffectActionSetVariableEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionSetVariableForm model={d!} onChanged={h}></CardEffectActionSetVariableForm>}
      />
      <InputOption
        label="勝利"
        model={model}
        keyName="win"
        empty={CardEffectActionWinEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectActionWinForm model={d!} onChanged={h}></CardEffectActionWinForm>}
      />
    </>
  );
};

export default CardEffectActionForm;
