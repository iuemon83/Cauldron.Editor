import React from "react";
import { CardDetail } from "../types/CardDetail";
import { CardEffectDetail, cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputNumberOption from "./input/InputNumberOption";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";
import {
  FormControlLabel,
  Checkbox,
  Switch,
  TextField,
  Button,
  FormGroup,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import FormSet from "./input/FormSet";

const useStyles = makeStyles((theme) => ({
  costInputField: {
    width: "8ch",
  },
  powerInputField: {
    width: "8ch",
    textAlign: "right",
  },
  toughnessInputField: {
    width: "10ch",
  },
  flavorTextInputField: {
    width: "40ch",
  },
}));

interface Props {
  detail: CardDetail;
  onChanged: (newValue: Partial<CardDetail>) => void;
}

const Card: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardTypes.map((v) => [v.code, v.displayText])
  );
  const cardTypes = Object.keys(cardTypesLabelsByValue);
  const cardAbilitiesLabelsByValue = Object.fromEntries(
    globalCache.metadata!.cardAbilities.map((v) => [v.code, v.displayText])
  );
  const cardAbilities = Object.keys(cardAbilitiesLabelsByValue);

  console.log(cardAbilitiesLabelsByValue);

  const clearCardEffect = () => {
    onChanged({ effects: [] });
  };

  const addCardEffect = () => {
    const newValue: CardEffectDetail = cardEffectEmpty();
    onChanged({
      effects: [...detail.effects, newValue],
    });
  };

  const removeCardEffect = (index: number) => {
    const newlist = [...detail.effects];
    newlist.splice(index, 1);

    onChanged({
      effects: newlist,
    });
  };

  const onCardEffectChanged = (x: CardEffectDetail, index: number) => {
    const newlist = [...detail.effects];
    newlist.splice(index, 1, x);
    onChanged({ effects: newlist });
  };

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...detail.abilities, cardAbilities[index]];

      onChanged({ abilities: newlist });
    } else {
      const newlist = detail.abilities.filter(
        (x) => x !== cardAbilities[index]
      );

      onChanged({ abilities: newlist });
    }
  };

  const classes = useStyles();

  return (
    <>
      <div>
        <InputText
          label="名前"
          detail={detail}
          keyName="name"
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="コスト"
          detail={detail}
          keyName="cost"
          onChanged={onChanged}
          className={classes.costInputField}
        />
      </div>
      <div>
        <TextField
          label="フレーバーテキスト"
          multiline
          value={detail.flavorText}
          onChange={(e) => onChanged({ flavorText: e.target.value })}
          className={classes.flavorTextInputField}
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={detail.isToken}
              onChange={(e) => onChanged({ isToken: e.target.checked })}
            />
          }
          label="トークン"
        />
      </div>
      <div>
        <InputSelect
          label="種類"
          values={cardTypes}
          detail={detail}
          keyName={"type"}
          getLabel={(v) => cardTypesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="パワー"
          detail={detail}
          keyName="power"
          onChanged={onChanged}
          className={classes.powerInputField}
        />
        /
        <InputNumber
          label="タフネス"
          detail={detail}
          keyName="toughness"
          onChanged={onChanged}
          className={classes.toughnessInputField}
        />
      </div>
      <div>
        <FormSet label="アビリティ">
          <FormGroup row>
            {cardAbilities.map((e, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    value={index}
                    checked={detail.abilities.indexOf(e) !== -1}
                    onChange={handleAbilityChange}
                  />
                }
                label={cardAbilitiesLabelsByValue[e]}
              />
            ))}
          </FormGroup>
        </FormSet>
      </div>
      <div>
        <InputNumberOption
          label="攻撃可能となるまでのターン数"
          detail={detail}
          keyName="numTurnsToCanAttack"
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumberOption
          label="1ターン中に攻撃可能な回数"
          detail={detail}
          keyName="numAttacksLimitInTurn"
          onChanged={onChanged}
        />
      </div>
      <FormSet
        label={
          <>
            効果
            <Button
              variant="contained"
              onClick={() => addCardEffect()}
              color="primary"
              startIcon={<AddIcon />}
            />
            <Button
              variant="contained"
              onClick={() => clearCardEffect()}
              color="secondary"
            >
              Clear
            </Button>
          </>
        }
      >
        {detail.effects.map((e, index) => (
          <FormGroup key={index}>
            <span>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeCardEffect(index)}
                startIcon={<DeleteIcon />}
              />
            </span>
            <CardEffect
              detail={e}
              onChanged={(x) => onCardEffectChanged({ ...e, ...x }, index)}
            ></CardEffect>
          </FormGroup>
        ))}
      </FormSet>
    </>
  );
};

export default Card;
