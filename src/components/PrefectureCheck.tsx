import { useState } from "react";

import type { Prefecture } from "../types";

type PrefectureCheckProps = {
  prefecture: Prefecture;
  onChange: (isActive: boolean, prefecture: Prefecture) => void;
};

export const PrefectureCheck: React.FC<PrefectureCheckProps> = ({
  prefecture,
  onChange,
}: PrefectureCheckProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = () => {
    const nextState = !isActive;

    setIsActive(nextState);
    onChange(nextState, prefecture);
  };

  return (
    <label>
      <input type="checkbox" checked={isActive} onChange={handleChange} />
      {prefecture.name}
    </label>
  );
};
