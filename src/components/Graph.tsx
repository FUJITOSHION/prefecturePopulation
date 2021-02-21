import { useEffect, useState } from "react";
// import type { UnitData } from "./types";
import endpoints from "../api";

type GraphProps = {
  prefCodes: number[];
};

export const Graph: React.FC<GraphProps> = ({ prefCodes }: GraphProps) => {
  useEffect(() => {
    Promise.all(prefCodes.map((code) => endpoints.getPopulation(code)))
      .then((responses) => {
        const response = responses[0];
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {prefCodes.map((code) => (
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );
};
