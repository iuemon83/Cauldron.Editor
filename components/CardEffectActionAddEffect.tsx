import { Button, FormGroup } from "@mui/material";
import { CardEffectActionAddEffectDetail } from "../types/CardEffectActionAddEffectDetail";
import { CardEffectDetail, cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import Choice from "./Choice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormSet from "./input/FormSet";

interface Props {
  detail: CardEffectActionAddEffectDetail;
  onChanged: (newValue: Partial<CardEffectActionAddEffectDetail>) => void;
}

const CardEffectActionAddEffect: React.FC<Props> = ({ detail, onChanged }) => {
  const clearCardEffect = () => {
    onChanged({ effectToAdd: [] });
  };

  const addCardEffect = () => {
    const newValue: CardEffectDetail = cardEffectEmpty();
    onChanged({
      effectToAdd: [...detail.effectToAdd, newValue],
    });
  };

  const removeCardEffect = (index: number) => {
    const newlist = [...detail.effectToAdd];
    newlist.splice(index, 1);

    onChanged({
      effectToAdd: newlist,
    });
  };

  const onCardEffectChanged = (x: CardEffectDetail, index: number) => {
    const newlist = [...detail.effectToAdd];
    newlist.splice(index, 1, x);
    onChanged({ effectToAdd: newlist });
  };

  return (
    <>
      <FormSet
        label={
          <>
            <Button variant="contained" onClick={() => addCardEffect()} color="primary" startIcon={<AddIcon />} />
            <Button variant="contained" onClick={() => clearCardEffect()} color="secondary">
              Clear
            </Button>
          </>
        }
      >
        {detail.effectToAdd.map((e, index) => (
          <FormGroup key={index}>
            <span>
              <Button variant="contained" color="secondary" onClick={() => removeCardEffect(index)} startIcon={<DeleteIcon />} />
            </span>
            <CardEffect detail={e} onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}></CardEffect>
          </FormGroup>
        ))}
        <FormSet label="効果を追加するカードの選択条件">
          <Choice
            detail={detail.cardsChoice}
            onChanged={(x) =>
              onChanged({
                cardsChoice: { ...detail.cardsChoice, ...x },
              })
            }
          ></Choice>
        </FormSet>
      </FormSet>
    </>
  );
};

export default CardEffectActionAddEffect;
