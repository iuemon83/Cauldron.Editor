import React from "react";
import { Card } from "../types/Card";
import { cardEffectEmpty } from "../types/CardEffect";
import CardEffectForm from "./CardEffectForm";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputNumberOption from "./input/InputNumberOption";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";
import { FormControlLabel, Checkbox, Switch, TextField, FormGroup } from "@mui/material";
import FormSet from "./input/FormSet";
import InputList from "./input/InputList";

interface Props {
  model: Card;
  onChanged: (newValue: Partial<Card>) => void;
}

const CardForm: React.FC<Props> = ({ model, onChanged }) => {
  const cardTypesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardTypes.map((v) => [v.code, v.displayText]));
  const cardTypes = Object.keys(cardTypesLabelsByValue);
  const cardAbilitiesLabelsByValue = Object.fromEntries(globalCache.metadata!.cardAbilities.map((v) => [v.code, v.displayText]));
  const cardAbilities = Object.keys(cardAbilitiesLabelsByValue);

  const handleAbilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);

    if (e.target.checked) {
      const newlist = [...model.abilities, cardAbilities[index]];

      onChanged({ abilities: newlist });
    } else {
      const newlist = model.abilities.filter((x) => x !== cardAbilities[index]);

      onChanged({ abilities: newlist });
    }
  };

  return (
    <>
      <div>
        <InputText label="名前" model={model} keyName="name" onChanged={onChanged} />
      </div>
      <div>
        <InputNumber label="コスト" model={model} keyName="cost" onChanged={onChanged} sx={{ width: "8ch" }} />
      </div>
      <div>
        <TextField
          label="フレーバーテキスト"
          multiline
          value={model.flavorText}
          onChange={(e) => onChanged({ flavorText: e.target.value })}
          sx={{ width: "40ch" }}
        />
      </div>
      <InputList
        label="タグ"
        model={model}
        keyName="annotations"
        newItem={() => ""}
        onChanged={onChanged}
        jtx={(item, onItemChanged, index) => (
          <TextField
            value={model.annotations[index]}
            onChange={(e) => {
              const newlist = [...model.annotations];
              newlist[index] = e.target.value;
              onChanged({ annotations: newlist });
            }}
          />
        )}
      />
      <div>
        <FormControlLabel
          control={<Switch checked={model.isToken} onChange={(e) => onChanged({ isToken: e.target.checked })} />}
          label="トークン?"
        />
      </div>
      <div>
        <InputSelect
          label="種類"
          values={cardTypes}
          model={model}
          keyName={"type"}
          getLabel={(v) => cardTypesLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      {model.type === "creature" && (
        <>
          <div>
            <InputNumber
              label="パワー"
              model={model}
              keyName="power"
              onChanged={onChanged}
              sx={{
                width: "8ch",
                textAlign: "right",
              }}
            />
            /
            <InputNumber label="タフネス" model={model} keyName="toughness" onChanged={onChanged} sx={{ width: "10ch" }} />
          </div>
          <div>
            <FormSet label="アビリティ">
              <FormGroup row>
                {cardAbilities.map((e, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox value={index} checked={model.abilities.indexOf(e) !== -1} onChange={handleAbilityChange} />
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
              model={model}
              keyName="numTurnsToCanAttack"
              onChanged={onChanged}
            />
          </div>
          <div>
            <InputNumberOption
              label="1ターン中に攻撃可能な回数"
              model={model}
              keyName="numAttacksLimitInTurn"
              onChanged={onChanged}
            />
          </div>
          <div>
            <InputNumberOption label="デッキに含められる枚数" model={model} keyName="limitNumCardsInDeck" onChanged={onChanged} />
          </div>
        </>
      )}
      <InputList
        label="効果"
        model={model}
        keyName="effects"
        newItem={cardEffectEmpty}
        onChanged={onChanged}
        jtx={(item, onItemChanged) => <CardEffectForm model={item} onChanged={onItemChanged} />}
      />
    </>
  );
};

export default CardForm;
