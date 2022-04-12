import axios from "axios";
import { CardMetaData } from "../types/CardMetaData";
import { CardSet } from "../types/CardSet";

export async function getCardMetaData(): Promise<CardMetaData> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_BASE}/CardMetaData`;

  const response = await axios.get(url,{ timeout : 10000 });
  return response.data;
}

export const globalCache: { metadata: CardMetaData | null } = {
  metadata: null,
};

export async function getSampleCardSet(id: number): Promise<CardSet> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_BASE}/SampleCardSet/${id}`;

  const response = await axios.get(url,{ timeout : 10000 });
  return response.data;
}
