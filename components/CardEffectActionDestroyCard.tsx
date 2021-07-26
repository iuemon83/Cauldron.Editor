import { CardEffectActionDestroyCardDetail } from "../types/CardEffectActionDestroyCardDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";

interface Props {
  detail: CardEffectActionDestroyCardDetail;
  onChanged: (newValue: Partial<CardEffectActionDestroyCardDetail>) => void;
}

const CardEffectActionDestroyCard: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <FormSet label="破壊するカードの選択条件">
        <Choice
          detail={detail.choice}
          onChanged={(x) =>
            onChanged({
              choice: { ...detail.choice, ...x },
            })
          }
        ></Choice>
      </FormSet>
    </>
  );
};

export default CardEffectActionDestroyCard;
