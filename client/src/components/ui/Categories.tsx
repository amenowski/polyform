import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Accordion from "./Accordion";

type CategoriesState = {
  sofas: boolean;
  beds: boolean;
  armchairs: boolean;
  poufs: boolean;
  livingroom: boolean;
  bedroom: boolean;
  diningroom: boolean;
  office: boolean;
  modern: boolean;
  traditional: boolean;
  vintage: boolean;
  scandinavian: boolean;
};

const categoriesArr: (keyof CategoriesState)[] = [
  "sofas",
  "beds",
  "armchairs",
  "poufs",
  "livingroom",
  "bedroom",
  "diningroom",
  "office",
  "modern",
  "traditional",
  "vintage",
  "scandinavian",
];

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<CategoriesState>({
    sofas: false,
    beds: false,
    armchairs: false,
    poufs: false,
    livingroom: false,
    bedroom: false,
    diningroom: false,
    office: false,
    modern: false,
    traditional: false,
    vintage: false,
    scandinavian: false,
  });

  useEffect(() => {
    const categoriesParam = searchParams.get("categories");

    if (categoriesParam) {
      const categoriesArray = categoriesParam.split("-");
      const updatedCategories = { ...categories };

      categoriesArray.forEach((category) => {
        if (Object.prototype.hasOwnProperty.call(updatedCategories, category)) {
          updatedCategories[category as keyof CategoriesState] = true;
        }
      });
      setCategories(updatedCategories);
    }
  }, [searchParams]);

  function handleChange(category: keyof CategoriesState) {
    setCategories((prevCategories) => {
      const updatedCategories = {
        ...prevCategories,
        [category]: !prevCategories[category],
      };

      const activeCategories = Object.keys(updatedCategories)
        .filter((cat) => updatedCategories[cat as keyof CategoriesState])
        .join("-");

      if (activeCategories.length > 0) {
        searchParams.set("categories", activeCategories);
      } else {
        searchParams.delete("categories");
      }
      setSearchParams(searchParams);

      return updatedCategories;
    });
  }

  return (
    <div>
      <Accordion title="Categories">
        <div className="flex flex-col gap-1">
          {categoriesArr.map((category) => (
            <div key={category} className="flex items-center gap-4">
              <input
                type="checkbox"
                onChange={() => handleChange(category)}
                checked={categories[category]}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

export default Categories;
