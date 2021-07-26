import { CardEffectActionModifyDamageDetail } from "../types/CardEffectActionModifyDamageDetail";
import { choiceEmpty } from "../types/ChoiceDetail";
import Choice from "./Choice";
import FormSet from "./input/FormSet";
import InputOption from "./input/InputOption";
import NumValueModifier from "./NumValueModifier";

interface Props {
  detail: CardEffectActionModifyDamageDetail;
  onChanged: (newValue: Partial<CardEffectActionModifyDamageDetail>) => void;
}

const CardEffectActionModifyDamage: React.FC<Props> = ({
  detail,
  onChanged,
}) => {
  return (
    <>
      <FormSet label="修整方法">
        <NumValueModifier
          detail={detail.value}
          onChanged={(x) =>
            onChanged({
              value: { ...detail.value, ...x },
            })
          }
        ></NumValueModifier>
      </FormSet>
      <InputOption
        label="対象の選択条件"
        detail={detail}
        keyName="choice"
        empty={choiceEmpty}
        onChanged={onChanged}
        jtx={(d, h) => <Choice detail={d!} onChanged={h}></Choice>}
      />
    </>
  );
};

export default CardEffectActionModifyDamage;
