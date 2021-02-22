import { useEffect, useState } from "react";
// import type { UnitData } from "./types";
import endpoints from "../api";
import type { Prefecture } from "../types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type GraphProps = {
  prefectures: Prefecture[];
};

type ChartData = {
  year: number;
  [id: string]: number;
};

function convertChartData(data: ActiveData[]): ChartData[] {
  if (data.length === 0) return [];

  const initPref = data[0].prefecture;
  const initData = data[0].data.map((unitData) => ({
    year: unitData.year,
    [initPref.name]: unitData.value,
  }));

  return data.reduce((s: ChartData[], t) => {
    return s.map((unitData, index) => ({
      ...unitData,
      [t.prefecture.name]: t.data[index].value,
    }));
  }, initData);
}

type ActiveData = {
  prefecture: Prefecture;
  data: { year: number; value: number }[];
};

export const Graph: React.FC<GraphProps> = ({ prefectures }: GraphProps) => {
  const [activeData, setActiveData] = useState<ActiveData[]>([]);
  useEffect(() => {
    Promise.all(
      prefectures.map((prefecture) => endpoints.getPopulation(prefecture.code))
    )
      .then((responses) => {
        setActiveData(
          responses.map((res, index) => ({
            prefecture: prefectures[index],
            data:
              res.data.result.data.find((x) => x.label === "総人口")?.data ||
              [],
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prefectures]);

  const graphData = convertChartData(activeData);

  return (
    <div className="graph-style">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {activeData.map((unitData) => (
            <Line
              key={unitData.prefecture.code}
              type="linear"
              dataKey={unitData.prefecture.name}
              stroke="#82ca9d"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
