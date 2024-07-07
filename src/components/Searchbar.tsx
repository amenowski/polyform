import { CiSearch } from "react-icons/ci";

import Input from "./ui/Input";

type SearchbarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Searchbar({ onChange }: SearchbarProps) {
  return (
    <div className="relative flex w-full items-center">
      <CiSearch size={20} className="absolute top-3.5 ml-3 text-black" />
      <Input
        onChange={onChange}
        className="w-full pl-10 text-black"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}
