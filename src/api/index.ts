import axios, { AxiosResponse } from "axios";
import type { ResponseGetPrefectures, ResponseGetPopulation } from "./types";

export const apiClient = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
});

apiClient.defaults.headers.common["X-API-KEY"] =
  process.env.REACT_APP_RESAS_API_KEI;

async function getPrefectures(): Promise<
  AxiosResponse<ResponseGetPrefectures>
> {
  return apiClient.get("/api/v1/prefectures");
}

async function getPopulation(
  prefCode: number
): Promise<AxiosResponse<ResponseGetPopulation>> {
  const url = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
  return apiClient.get(url);
}

export default {
  getPrefectures: getPrefectures,
  getPopulation: getPopulation,
};
