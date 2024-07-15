import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { SortByT } from "../../lib/types";
import Select from "./Select";

function SortBy({ options }: SortByT) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-sm uppercase text-gray-500">Sort By: </span>
      <Select options={options} value={sortBy} onChange={handleChange} />
    </div>
  );
}

export default SortBy;
