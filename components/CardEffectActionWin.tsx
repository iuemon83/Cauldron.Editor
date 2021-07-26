import React from "react";
import { CardEffectActionWinDetail } from "../types/CardEffectActionWinDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";

interface Props {
  detail: CardEffectActionWinDetail;
  onChanged: (newValue: Partial<CardEffectActionWinDetail>) => void;
}

const CardEffectActionWin: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <FormSet label="対象のプレイヤー">
        <Choice
          detail={detail.choicePlayers}
          onChanged={(x) =>
            onChanged({
              choicePlayers: { ...detail.choicePlayers, ...x },
            })
          }
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionWin;
