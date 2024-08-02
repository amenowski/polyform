import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { CATEGORIESARR, CATEGORY } from "../../utils/constants";
import Accordion from "./Accordion";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<Set<CATEGORY>>(new Set());

  useEffect(() => {
    const categoriesParam = searchParams.get("categories");
    if (categoriesParam) {
      setCategories(new Set(categoriesParam.split("-") as CATEGORY[]));
    }
  }, [searchParams]);

  const handleChange = useCallback(
    (category: CATEGORY) => {
      setCategories((prevCategories) => {
        const newCategories = new Set(prevCategories);
        if (newCategories.has(category)) {
          newCategories.delete(category);
        } else {
          newCategories.add(category);
        }

        const categoriesParam = Array.from(newCategories).join("-");
        if (categoriesParam) {
          searchParams.set("categories", categoriesParam);
        } else {
          searchParams.delete("categories");
        }
        setSearchParams(searchParams);

        return newCategories;
      });
    },
    [searchParams, setSearchParams],
  );

  return (
    <Accordion title="Categories">
      <div className="flex flex-col gap-2">
        {CATEGORIESARR.map((category) => (
          <CategoryCheckbox
            key={category}
            category={category}
            isChecked={categories.has(category)}
            onChange={handleChange}
          />
        ))}
      </div>
    </Accordion>
  );
}

type CategoryCheckboxProps = {
  category: CATEGORY;
  isChecked: boolean;
  onChange: (category: CATEGORY) => void;
};

function CategoryCheckbox({
  category,
  isChecked,
  onChange,
}: CategoryCheckboxProps) {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        onChange={() => onChange(category)}
        checked={isChecked}
      />
      <span>{category}</span>
    </div>
  );
}

export default Categories;
