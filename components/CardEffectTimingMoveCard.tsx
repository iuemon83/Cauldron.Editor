import {
  CardEffectTimingMoveCardEventDetail,
  eventSources,
} from "../types/CardEffectTimingMoveCardEventDetail";
import { zoneNames } from "../types/ZoneValueDetail";

interface Props {
  detail: CardEffectTimingMoveCardEventDetail;
  onChanged: (newValue: Partial<CardEffectTimingMoveCardEventDetail>) => void;
}

const CardEffectTimingMoveCard: React.FC<Props> = ({ detail, onChanged }) => {
  return (
    <>
      <div>
        <label>
          source:
          <select
            value={eventSources.indexOf(detail.source)}
            onChange={(e) =>
              onChanged({ source: eventSources[Number(e.target.value)] })
            }
          >
            {eventSources.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          from:
          <select
            value={zoneNames.indexOf(detail.from)}
            onChange={(e) =>
              onChanged({ from: zoneNames[Number(e.target.value)] })
            }
          >
            {zoneNames.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          to:
          <select
            value={zoneNames.indexOf(detail.to)}
            onChange={(e) =>
              onChanged({ to: zoneNames[Number(e.target.value)] })
            }
          >
            {zoneNames.map((e, index) => (
              <option key={index} value={index}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default CardEffectTimingMoveCard;
