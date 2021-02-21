type PrefectureInfo = {
  prefCode: number;
  prefName: string;
};

export type ResponseGetPrefectures = {
  message: string | null;
  result: PrefectureInfo[];
};

export type ResponseGetPopulation = {
  message: string | null;
  result: { boundaryYear: number; data: PopulationData[] };
};

type PopulationData = {
  label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
  data: { year: number; value: number }[];
};
