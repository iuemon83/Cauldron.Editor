import { CardSet } from "../types/CardSet";
import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from "recharts";

interface Props {
  cardset: CardSet;
}

const CardSetDataViewerForm: React.FC<Props> = (props: Props) => {
  const { cardset } = props;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const byCost: { [type: number]: { cost: number; numOfCards: number } } = {};
  const byCardType: { [type: string]: { type: string; numOfCards: number } } = {};

  cardset.cards.forEach((card) => {
    if (byCost[card.cost] === undefined) {
      byCost[card.cost] = { cost: card.cost, numOfCards: 0 };
    }
    byCost[card.cost].numOfCards++;

    if (byCardType[card.type] === undefined) {
      byCardType[card.type] = { type: card.type, numOfCards: 0 };
    }
    byCardType[card.type].numOfCards++;
  });

  const byCostData = Object.values(byCost);
  console.log(byCostData);

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
          {byCardTypeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </>
  );
};

export default CardSetDataViewerForm;
