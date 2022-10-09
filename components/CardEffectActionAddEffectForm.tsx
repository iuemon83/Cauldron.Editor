import { Button, FormGroup } from "@mui/material";
import { CardEffectActionAddEffect } from "../types/CardEffectActionAddEffect";
import { CardEffect, cardEffectEmpty } from "../types/CardEffect";
import CardEffectForm from "./CardEffectForm";
import ChoiceForm from "./ChoiceForm";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormSet from "./input/FormSet";
import InputTextOption from "./input/InputTextOption";

interface Props {
  model: CardEffectActionAddEffect;
  onChanged: (newValue: Partial<CardEffectActionAddEffect>) => void;
}

const CardEffectActionAddEffectForm: React.FC<Props> = ({ model, onChanged }) => {
  const clearCardEffect = () => {
    onChanged({ effectToAdd: [] });
  };

  const addCardEffect = () => {
    const newValue: CardEffect = cardEffectEmpty();
    onChanged({
      effectToAdd: [...model.effectToAdd, newValue],
    });
  };

  const removeCardEffect = (index: number) => {
    const newlist = [...model.effectToAdd];
    newlist.splice(index, 1);

    onChanged({
      effectToAdd: newlist,
    });
  };

  const onCardEffectChanged = (x: CardEffect, index: number) => {
    const newlist = [...model.effectToAdd];
    newlist.splice(index, 1, x);
    onChanged({ effectToAdd: newlist });
  };

  return (
    <>
      <InputTextOption label="アクション名" model={model} keyName="name" onChanged={onChanged} />
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
        {model.effectToAdd.map((e, index) => (
          <FormGroup key={index}>
            <span>
              <Button variant="contained" color="secondary" onClick={() => removeCardEffect(index)} startIcon={<DeleteIcon />} />
            </span>
            <CardEffectForm model={e} onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}></CardEffectForm>
          </FormGroup>
        ))}
        <FormSet label="効果を追加するカードの選択条件">
          <ChoiceForm
            model={model.cardsChoice}
            onChanged={(x) =>
              onChanged({
                cardsChoice: { ...model.cardsChoice, ...x },
              })
            }
          ></ChoiceForm>
        </FormSet>
      </FormSet>
    </>
  );
};

export default CardEffectActionAddEffectForm;
