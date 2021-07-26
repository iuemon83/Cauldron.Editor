import { CardEffectActionAddCardEmpty } from "../types/CardEffectActionAddCardDetail";
import { cardEffectActionAddEffectEmpty } from "../types/CardEffectActionAddEffectDetail";
import { CardEffectActionDamageEmpty } from "../types/CardEffectActionDamageDetail";
import { CardEffectActionDestroyCardEmpty } from "../types/CardEffectActionDestroyCardDetail";
import { CardEffectActionDetail } from "../types/CardEffectActionDetail";
import { CardEffectActionDrawCardEmpty } from "../types/CardEffectActionDrawCardDetail";
import { CardEffectActionModifyCardEmpty } from "../types/CardEffectActionModifyCardDetail";
import { CardEffectActionModifyDamageEmpty } from "../types/CardEffectActionModifyDamageDetail";
import { cardEffectActionModifyPlayerEmpty } from "../types/CardEffectActionModifyPlayerDetail";
import { cardEffectActionMoveCardEmpty } from "../types/CardEffectActionMoveCardDetail";
import { CardEffectActionSetVariableEmpty } from "../types/CardEffectActionSetVariableDetail";
import { CardEffectActionWinEmpty } from "../types/CardEffectActionWinDetail";
import CardEffectActionAddCard from "./CardEffectActionAddCard";
import CardEffectActionAddEffect from "./CardEffectActionAddEffect";
import CardEffectActionDamage from "./CardEffectActionDamage";
import CardEffectActionDestroyCard from "./CardEffectActionDestroyCard";
import CardEffectActionDrawCard from "./CardEffectActionDrawCard";
import CardEffectActionModifyCard from "./CardEffectActionModifyCard";
import CardEffectActionModifyDamage from "./CardEffectActionModifyDamage";
import CardEffectActionModifyPlayer from "./CardEffectActionModifyPlayer";
import CardEffectActionMoveCard from "./CardEffectActionMoveCard";
import CardEffectActionSetVariable from "./CardEffectActionSetVariable";
import CardEffectActionWin from "./CardEffectActionWin";
import InputOption from "./input/InputOption";

interface Props {
  detail: CardEffectActionDetail;
  onChanged: (detail: Partial<CardEffectActionDetail>) => void;
}

const CardEffectAction: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <InputOption
        label="ダメージ"
        detail={detail}
        keyName="damage"
        empty={CardEffectActionDamageEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionDamage
            detail={d!}
            onChanged={h}
          ></CardEffectActionDamage>
        )}
      />
      <InputOption
        label="カードの生成"
        detail={detail}
        keyName="addCard"
        empty={CardEffectActionAddCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionAddCard
            detail={d!}
            onChanged={h}
          ></CardEffectActionAddCard>
        )}
      />
      <InputOption
        label="カードの修整"
        detail={detail}
        keyName="modifyCard"
        empty={CardEffectActionModifyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionModifyCard
            detail={d!}
            onChanged={h}
          ></CardEffectActionModifyCard>
        )}
      />
      <InputOption
        label="カードの破壊"
        detail={detail}
        keyName="destroyCard"
        empty={CardEffectActionDestroyCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionDestroyCard
            detail={d!}
            onChanged={h}
          ></CardEffectActionDestroyCard>
        )}
      />
      <InputOption
        label="カードの移動"
        detail={detail}
        keyName="moveCard"
        empty={cardEffectActionMoveCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionMoveCard
            detail={d!}
            onChanged={h}
          ></CardEffectActionMoveCard>
        )}
      />
      <InputOption
        label="ダメージの修整"
        detail={detail}
        keyName="modifyDamage"
        empty={CardEffectActionModifyDamageEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionModifyDamage
            detail={d!}
            onChanged={h}
          ></CardEffectActionModifyDamage>
        )}
      />
      <InputOption
        label="プレイヤーの修整"
        detail={detail}
        keyName="modifyPlayer"
        empty={cardEffectActionModifyPlayerEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionModifyPlayer
            detail={d!}
            onChanged={h}
          ></CardEffectActionModifyPlayer>
        )}
      />
      <InputOption
        label="ドロー"
        detail={detail}
        keyName="drawCard"
        empty={CardEffectActionDrawCardEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionDrawCard
            detail={d!}
            onChanged={h}
          ></CardEffectActionDrawCard>
        )}
      />
      <InputOption
        label="効果の追加"
        detail={detail}
        keyName="addEffect"
        empty={cardEffectActionAddEffectEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionAddEffect
            detail={d!}
            onChanged={h}
          ></CardEffectActionAddEffect>
        )}
      />
      <InputOption
        label="値のセット"
        detail={detail}
        keyName="setVariable"
        empty={CardEffectActionSetVariableEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionSetVariable
            detail={d!}
            onChanged={h}
          ></CardEffectActionSetVariable>
        )}
      />
      <InputOption
        label="勝利"
        detail={detail}
        keyName="win"
        empty={CardEffectActionWinEmpty}
        onChanged={onChanged}
        jtx={(d, h) => (
          <CardEffectActionWin detail={d!} onChanged={h}></CardEffectActionWin>
        )}
      />
    </>
  );
};

export default CardEffectAction;
