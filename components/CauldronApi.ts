import axios from "axios";
import { CardMetaData } from "../types/CardMetaData";
import { CardSetDetail } from "../types/CardSetDetail";

export async function getCardMetaData(): Promise<CardMetaData> {
  // const url = "http://localhost:5000/CardMetaData";
  const url = "https://localhost:44330/CardMetaData";

  const response = await axios.get(url);
  return response.data;
}

export const globalCache: { metadata: CardMetaData | null } = {
  metadata: null,
};

export async function getSampleCardSet(): Promise<CardSetDetail> {
  // const url = "http://localhost:5000/SampleCardSet";
  const url = "https://localhost:44330/SampleCardSet";

  const response = await axios.get(url);
  return response.data;
}
