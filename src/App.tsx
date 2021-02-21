import endpoints from "./api";
import "./App.css";
import type { Prefecture } from "./types";
import { useEffect, useState } from "react";
import { PrefectureCheck } from "./components/PrefectureCheck";
import { Graph } from "./components/Graph";

function App(): JSX.Element {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [activePrefectures, setActivePrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    endpoints
      .getPrefectures()
      .then((response) => {
        setPrefectures(
          response.data.result.map((p) => ({
            code: p.prefCode,
            name: p.prefName,
          }))
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // event handle
  const handleChange = (isActive: boolean, prefecture: Prefecture) => {
    if (isActive) {
      setActivePrefectures([...activePrefectures, prefecture]);
    } else {
      setActivePrefectures(
        activePrefectures.filter(
          (activePrefecture) => activePrefecture !== prefecture
        )
      );
    }
  };

  return (
    <div>
      <ul style={{ display: "flex" }}>
        {prefectures.map((pref) => (
          <li key={pref.code}>
            <PrefectureCheck prefecture={pref} onChange={handleChange} />
          </li>
        ))}
      </ul>

      <div>
        <Graph prefectures={activePrefectures} />
      </div>
    </div>
  );
}

export default App;
