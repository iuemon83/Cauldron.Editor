import axios from "axios";
import { CardMetaData } from "../types/CardMetaData";
import { CardSetDetail } from "../types/CardSetDetail";

export async function getCardMetaData(): Promise<CardMetaData> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_BASE}/CardMetaData`;

  const response = await axios.get(url,{ timeout : 10000 });
  return response.data;
}

export const globalCache: { metadata: CardMetaData | null } = {
  metadata: null,
};

export async function getSampleCardSet(): Promise<CardSetDetail> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_BASE}/SampleCardSet`;

  const response = await axios.get(url,{ timeout : 10000 });
  return response.data;
}
