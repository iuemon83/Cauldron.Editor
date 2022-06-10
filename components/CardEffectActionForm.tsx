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
import CardEffectActionReserveEffectForm from "./CardEffectActionReserveEffectForm";
import CardEffectActionExcludeCardForm from "./CardEffectActionExcludeCardForm";
import CardEffectActionModifyCounterForm from "./CardEffectActionModifyCounterForm";
import { cardEffectActionReserveEffectEmpty } from "../types/CardEffectActionReserveEffect";
import { cardEffectActionExcludeCardEmpty } from "../types/CardEffectActionExcludeCard";
import { cardEffectActionModifyCounterEmpty } from "../types/CardEffectActionModifyCounter";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import InputOption from "./input/InputOption";
import CardEffectIfForm from "./CardEffectIfForm";
import { CardEffectIfEmpty } from "../types/CardEffectIf";

type Props = {
  model: CardEffectAction;
  onChanged: (model: Partial<CardEffectAction>) => void;
};

type ActionNameKey = keyof Omit<CardEffectAction, "if">;
type ActionKeyMap = { [key in ActionNameKey]: string };

const actionNames: ActionKeyMap = {
  damage: "ダメージ",
  addCard: "カードの生成",
  excludeCard: "カードの除外",
  modifyCard: "カードの修整",
  destroyCard: "カードの破壊",
  moveCard: "カードの移動",
  modifyDamage: "ダメージの修整",
  modifyPlayer: "プレイヤーの修整",
  drawCard: "ドロー",
  addEffect: "効果の追加",
  setVariable: "値のセット",
  modifyCounter: "カウンターの修整",
  win: "勝利",
  reserveEffect: "効果の予約",
} as const;

const actionNameKeys = Object.keys(actionNames) as ActionNameKey[];

function isActionNameKey(x: string): x is ActionNameKey {
  return (actionNameKeys as readonly string[]).indexOf(x) >= 0;
}

const CardEffectActionForm: React.FC<Props> = ({ model, onChanged }) => {
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
      case "addCard":
        model.addCard = CardEffectActionAddCardEmpty();
        break;
      case "addEffect":
        model.addEffect = cardEffectActionAddEffectEmpty();
        break;
      case "damage":
        model.damage = CardEffectActionDamageEmpty();
        break;
      case "destroyCard":
        model.destroyCard = CardEffectActionDestroyCardEmpty();
        break;
      case "drawCard":
        model.drawCard = CardEffectActionDrawCardEmpty();
        break;
      case "excludeCard":
        model.excludeCard = cardEffectActionExcludeCardEmpty();
        break;
      case "modifyCard":
        model.modifyCard = CardEffectActionModifyCardEmpty();
        break;
      case "modifyCounter":
        model.modifyCounter = cardEffectActionModifyCounterEmpty();
        break;
      case "modifyDamage":
        model.modifyDamage = CardEffectActionModifyDamageEmpty();
        break;
      case "modifyPlayer":
        model.modifyPlayer = cardEffectActionModifyPlayerEmpty();
        break;
      case "moveCard":
        model.moveCard = cardEffectActionMoveCardEmpty();
        break;
      case "reserveEffect":
        model.reserveEffect = cardEffectActionReserveEffectEmpty();
        break;
      case "setVariable":
        model.setVariable = CardEffectActionSetVariableEmpty();
        break;
      case "win":
        model.win = CardEffectActionWinEmpty();
        break;
    }

    onChanged(model);
  };

  return (
    <>
      <InputOption
        label="もし"
        model={model}
        keyName="if"
        empty={CardEffectIfEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <CardEffectIfForm model={d!} onChanged={h}></CardEffectIfForm>}
      />
      <FormControl>
        <InputLabel>アクション</InputLabel>
        <Select value={selectedAction} onChange={handleActionNameChanged}>
          {actionNameKeys.map((key, index) => (
            <MenuItem key={index} value={key}>
              {actionNames[key as keyof typeof actionNames]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedAction === "damage" && model.damage !== undefined && (
        <CardEffectActionDamageForm
          model={model.damage}
          onChanged={(x) => model.damage !== undefined && onChanged({ damage: { ...model.damage, ...x } })}
        />
      )}
      {selectedAction === "addCard" && model.addCard !== undefined && (
        <CardEffectActionAddCardForm
          model={model.addCard}
          onChanged={(x) => model.addCard !== undefined && onChanged({ addCard: { ...model.addCard, ...x } })}
        />
      )}
      {selectedAction === "excludeCard" && model.excludeCard !== undefined && (
        <CardEffectActionExcludeCardForm
          model={model.excludeCard}
          onChanged={(x) => model.excludeCard !== undefined && onChanged({ excludeCard: { ...model.excludeCard, ...x } })}
        />
      )}
      {selectedAction === "modifyCard" && model.modifyCard !== undefined && (
        <CardEffectActionModifyCardForm
          model={model.modifyCard}
          onChanged={(x) => model.modifyCard !== undefined && onChanged({ modifyCard: { ...model.modifyCard, ...x } })}
        />
      )}
      {selectedAction === "destroyCard" && model.destroyCard !== undefined && (
        <CardEffectActionDestroyCardForm
          model={model.destroyCard}
          onChanged={(x) => model.destroyCard !== undefined && onChanged({ destroyCard: { ...model.destroyCard, ...x } })}
        />
      )}
      {selectedAction === "moveCard" && model.moveCard !== undefined && (
        <CardEffectActionMoveCardForm
          model={model.moveCard}
          onChanged={(x) => model.moveCard !== undefined && onChanged({ moveCard: { ...model.moveCard, ...x } })}
        />
      )}
      {selectedAction === "modifyDamage" && model.modifyDamage !== undefined && (
        <CardEffectActionModifyDamageForm
          model={model.modifyDamage}
          onChanged={(x) => model.modifyDamage !== undefined && onChanged({ modifyDamage: { ...model.modifyDamage, ...x } })}
        />
      )}
      {selectedAction === "modifyPlayer" && model.modifyPlayer !== undefined && (
        <CardEffectActionModifyPlayerForm
          model={model.modifyPlayer}
          onChanged={(x) => model.modifyPlayer !== undefined && onChanged({ modifyPlayer: { ...model.modifyPlayer, ...x } })}
        />
      )}
      {selectedAction === "drawCard" && model.drawCard !== undefined && (
        <CardEffectActionDrawCardForm
          model={model.drawCard}
          onChanged={(x) => model.drawCard !== undefined && onChanged({ drawCard: { ...model.drawCard, ...x } })}
        />
      )}
      {selectedAction === "addEffect" && model.addEffect !== undefined && (
        <CardEffectActionAddEffectForm
          model={model.addEffect}
          onChanged={(x) => model.addEffect !== undefined && onChanged({ addEffect: { ...model.addEffect, ...x } })}
        />
      )}
      {selectedAction === "setVariable" && model.setVariable !== undefined && (
        <CardEffectActionSetVariableForm
          model={model.setVariable}
          onChanged={(x) => model.setVariable !== undefined && onChanged({ setVariable: { ...model.setVariable, ...x } })}
        />
      )}
      {selectedAction === "modifyCounter" && model.modifyCounter !== undefined && (
        <CardEffectActionModifyCounterForm
          model={model.modifyCounter}
          onChanged={(x) => model.modifyCounter !== undefined && onChanged({ modifyCounter: { ...model.modifyCounter, ...x } })}
        />
      )}
      {selectedAction === "win" && model.win !== undefined && (
        <CardEffectActionWinForm
          model={model.win}
          onChanged={(x) => model.win !== undefined && onChanged({ win: { ...model.win, ...x } })}
        />
      )}
      {selectedAction === "reserveEffect" && model.reserveEffect !== undefined && (
        <CardEffectActionReserveEffectForm
          model={model.reserveEffect}
          onChanged={(x) => model.reserveEffect !== undefined && onChanged({ reserveEffect: { ...model.reserveEffect, ...x } })}
        />
      )}
    </>
  );
};

export default CardEffectActionForm;
