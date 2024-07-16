import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

import Input from "../ui/Input";

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    searchParams.set("query", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="relative flex w-full items-center">
      <CiSearch size={20} className="absolute top-3.5 ml-3 text-black" />
      <Input
        value={query}
        onChange={onChange}
        className="w-full pl-10 text-black"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}
