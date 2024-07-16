type SelectProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
};

function Select({ value, onChange, options }: SelectProps) {
  return (
    <select
      title="select"
      className="border p-2 outline-none"
      value={value}
      onChange={onChange}
    >
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
