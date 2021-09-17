import { CardSetDetail } from "../types/CardSetDetail";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

interface Props {
  cardset: CardSetDetail;
}

const CardSetDataViewer: React.FC<Props> = (props: Props) => {
  const { cardset } = props;
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 200, pv: 2400, amt: 2400 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const byCost: number[] = [];
  const byCardType: { [type: string]: { type: string; numOfCards: number } } =
    {};

  cardset.cards.forEach((card) => {
    if (byCost[card.cost] === undefined) {
      byCost[card.cost] = 0;
    }
    byCost[card.cost]++;

    if (byCardType[card.type] === undefined) {
      byCardType[card.type] = { type: card.type, numOfCards: 0 };
    }
    byCardType[card.type].numOfCards++;
  });

  const byCostData = byCost.map((x, i) => {
    return { cost: i, numOfCards: x };
  });

  const byCardTypeData = Object.values(byCardType);
  console.log(byCardTypeData);

  return (
    <>
      <h1>コスト別</h1>
      <BarChart width={400} height={400} data={byCostData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="cost" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="枚数" dataKey="numOfCards" fill="#8884d8" />
      </BarChart>

      <h1>種類別</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={byCardTypeData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="numOfCards"
          label={(x) => {
            console.log(x);
            return `${x.type} ${(x.percent * 100).toFixed(0)}%`;
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </>
  );
};

export default CardSetDataViewer;
