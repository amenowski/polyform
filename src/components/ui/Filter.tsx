import { useSearchParams } from "react-router-dom";

import { FilterT } from "../../lib/types";
import Select from "./Select";

function Filter({ options }: FilterT) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("isOnSale") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("isOnSale", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-sm uppercase text-gray-500">Filter by: </span>
      <Select options={options} value={filter} onChange={handleChange} />
    </div>
  );
}

export default Filter;
