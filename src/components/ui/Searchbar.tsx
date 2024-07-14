import { CiSearch } from "react-icons/ci";

import Input from "../ui/Input";

export default function Searchbar({
  onChange,
  query,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
}) {
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
