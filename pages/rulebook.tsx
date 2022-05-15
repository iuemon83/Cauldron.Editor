import { useState } from "react";
import { Button } from "@mui/material";
import InputNumber from "../components/input/InputNumber";
import FormSet from "../components/input/FormSet";
import { RuleBook, ruleBookEmpty } from "../types/RuleBook";
import GetAppIcon from "@mui/icons-material/GetApp";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import DeleteIcon from "@mui/icons-material/Delete";

const RuleBookEditor: React.VFC = () => {
  const [rulebook, setRulebook] = useState(ruleBookEmpty());

  const onChanged = (newValue: Partial<RuleBook>) => setRulebook((prev) => ({ ...prev, ...newValue }));

  const saveJson = (filename: string, jsonSource: {}) => {
    const json = JSON.stringify(jsonSource);

    const element = document.createElement("a");
    element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(json));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const SaveButton = () => {
    const handleSaveRuleBook = () => {
      saveJson("rulebook.json", rulebook);
    };
    return (
      <Button variant="contained" onClick={handleSaveRuleBook} color="success" startIcon={<GetAppIcon />}>
        Save
      </Button>
    );
  };

  const LoadButton = () => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const cardsetFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        const json = ev.target?.result;
        if (typeof json !== "string") {
          return;
        }

        console.log(json);

        const message = "編集中のルールブックは削除されます。よろしいですか？";
        if (!confirm(message)) {
          return;
        }

        const newValue = JSON.parse(json);
        setRulebook(newValue);

        // 同じファイルが連続で選択されても動くように
        e.target.value = "";
      };
      reader.readAsText(cardsetFile);
    };

    return (
      <label htmlFor="load-rulebook">
        <input style={{ display: "none" }} id="load-rulebook" onChange={handleChangeInput} type="file" />

        <Button variant="contained" color="primary" component="span" startIcon={<OpenInBrowserIcon />}>
          Open
        </Button>
      </label>
    );
  };

  const ClearButton = () => {
    const handleClearRuleBook = () => {
      if (!confirm("削除します。よろしいですか？")) {
        return;
      }

      setRulebook(ruleBookEmpty());
    };

    return (
      <Button variant="contained" onClick={handleClearRuleBook} color="error" startIcon={<DeleteIcon />}>
        Clear
      </Button>
    );
  };

  return (
    <>
      <SaveButton />
      <LoadButton />
      <ClearButton />

      <div>
        <FormSet label="MP">
          <InputNumber label="初期値" model={rulebook} keyName="initialMp" onChanged={onChanged} />
          <InputNumber label="上限値" model={rulebook} keyName="maxLimitMp" onChanged={onChanged} />
          <InputNumber label="下限値" model={rulebook} keyName="minMp" onChanged={onChanged} />
          <InputNumber label="ターンごとの増加値" model={rulebook} keyName="limitMpToIncrease" onChanged={onChanged} />
        </FormSet>
      </div>
      <div>
        <FormSet label="手札の枚数">
          <InputNumber label="初期値" model={rulebook} keyName="initialNumHands" onChanged={onChanged} />
          <InputNumber label="上限値" model={rulebook} keyName="maxNumHands" onChanged={onChanged} />
        </FormSet>
      </div>
      <div>
        <FormSet label="プレイヤーのHP">
          <InputNumber label="初期値" model={rulebook} keyName="initialPlayerHp" onChanged={onChanged} />
          <InputNumber label="上限値" model={rulebook} keyName="maxPlayerHp" onChanged={onChanged} />
          <InputNumber label="下限値" model={rulebook} keyName="minPlayerHp" onChanged={onChanged} />
        </FormSet>
      </div>
      <div>
        <FormSet label="デッキ枚数">
          <InputNumber label="上限値" model={rulebook} keyName="maxNumDeckCards" onChanged={onChanged} />
          <InputNumber label="下限値" model={rulebook} keyName="minNumDeckCards" onChanged={onChanged} />
        </FormSet>
      </div>
      <div>
        <FormSet label="場の枚数">
          <InputNumber label="上限値" model={rulebook} keyName="maxNumFieldCards" onChanged={onChanged} />
        </FormSet>
      </div>
      <div>
        <InputNumber
          label="1ターンの攻撃回数の初期値"
          model={rulebook}
          keyName="defaultNumTurnsToCanAttack"
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="攻撃可能となるまでのターン数の初期値"
          model={rulebook}
          keyName="defaultNumAttacksLimitInTurn"
          onChanged={onChanged}
        />
      </div>
    </>
  );
};

export default RuleBookEditor;
