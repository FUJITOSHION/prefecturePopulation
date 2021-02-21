import { useState } from "react";

import type { Prefecture } from "../types";

type PrefectureCheckProps = {
  prefecture: Prefecture;
  onChange: (isActive: boolean, code: number) => void;
};

export const PrefectureCheck: React.FC<PrefectureCheckProps> = ({
  prefecture,
  onChange,
}: PrefectureCheckProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = () => {
    const nextState = !isActive;

    setIsActive(nextState);
    onChange(nextState, prefecture.code);
  };

  return (
    <label>
      {prefecture.name}
      <input type="checkbox" checked={isActive} onChange={handleChange} />
    </label>
  );
};
