import React from "react";
import { CardDetail } from "../types/CardDetail";
import { cardEffectEmpty } from "../types/CardEffectDetail";
import CardEffect from "./CardEffect";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputNumberOption from "./input/InputNumberOption";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";
import { FormControlLabel, Checkbox, Switch, TextField, FormGroup } from "@mui/material";
import FormSet from "./input/FormSet";
import InputList from "./input/InputList";

interface Props {
  detail: CardDetail;
  onChanged: (newValue: Partial<CardDetail>) => void;
}

const Card: React.FC<Props> = ({ detail, onChanged }) => {
  const cardTypesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardTypes.map((v) => [v.code, v.displayText]));
  const cardTypes = Object.keys(cardTypesLabelsByValue);
  const cardAbilitiesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardAbilities.map((v) => [v.code, v.displayText]));
  const cardAbilities = Object.keys(cardAbilitiesLabelsByValue);

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...detail.abilities, cardAbilities[index]];

      onChanged({ abilities: newlist });
    } else {
      const newlist = detail.abilities.filter((x) => x !== cardAbilities[index]);

      onChanged({ abilities: newlist });
    }
  };

  return (
    <>
      <div>
        <InputText label="名前" detail={detail} keyName="name" onChanged={onChanged} />
      </div>
      <div>
        <InputNumber label="コスト" detail={detail} keyName="cost" onChanged={onChanged} sx={{ width: "8ch" }} />
      </div>
      <div>
        <TextField
          label="フレーバーテキスト"
          multiline
          value={detail.flavorText}
          onChange={(e) => onChanged({ flavorText: e.target.value })}
          sx={{ width: "40ch" }}
        />
      </div>
      <div>
        <FormControlLabel
          control={<Switch checked={detail.isToken} onChange={(e) => onChanged({ isToken: e.target.checked })} />}
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
          sx={{
            width: "8ch",
            textAlign: "right",
          }}
        />
        /
        <InputNumber label="タフネス" detail={detail} keyName="toughness" onChanged={onChanged} sx={{ width: "10ch" }} />
      </div>
      <div>
        <FormSet label="アビリティ">
          <FormGroup row>
            {cardAbilities.map((e, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox value={index} checked={detail.abilities.indexOf(e) !== -1} onChange={handleAbilityChange} />}
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
      <InputList
        label="効果"
        detail={detail}
        keyName="effects"
        newItem={cardEffectEmpty}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => <CardEffect detail={item} onChanged={onItemChanged}></CardEffect>}
      />
    </>
  );
};

export default Card;
