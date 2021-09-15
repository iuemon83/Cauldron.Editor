import { ChoiceSourceDetail } from "../types/ChoiceSourceDetail";
import { globalCache } from "./CauldronApi";
import InputNumber from "./input/InputNumber";
import InputSelect from "./input/InputSelect";

import OrPlayerConditionList from "./OrPlayerConditionList";
import OrCardConditionList from "./OrCardConditionList";

interface Props {
  detail: ChoiceSourceDetail;
  onChanged: (detail: Partial<ChoiceSourceDetail>) => void;
}

const ChoiceSource: React.FC<Props> = ({ detail, onChanged }) => {
  const howListLabelsByValue = Object.fromEntries(
    globalCache.metadata!.choiceHowList.map((v) => [v.code, v.displayText])
  );
  const howList = Object.keys(howListLabelsByValue);

  return (
    <>
      <div>
        <InputSelect
          label="選択方式"
          values={howList}
          detail={detail}
          keyName={"how"}
          getLabel={(v) => howListLabelsByValue[v]}
          onChanged={onChanged}
        />
      </div>
      <div>
        <InputNumber
          label="対象の数"
          keyName="numPicks"
          detail={detail}
          onChanged={onChanged}
        />
      </div>
      <OrPlayerConditionList detail={detail} onChanged={onChanged} />
      <OrCardConditionList detail={detail} onChanged={onChanged} />
    </>
  );
};

export default ChoiceSource;
