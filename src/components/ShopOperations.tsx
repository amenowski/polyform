import Categories from "./ui/Categories";
import Filter from "./ui/Filter";
import SortBy from "./ui/SortBy";

function ShopOperations() {
  return (
    <div className="flex flex-col gap-4">
      <Filter
        options={[
          { value: "all", label: "All" },
          {
            value: "yes",
            label: "On sale",
          },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          {
            value: "price-asc",
            label: "Sort by price (low first)",
          },
          {
            value: "price-desc",
            label: "Sort by price (high first)",
          },
        ]}
      />
      <Categories />
    </div>
  );
}

export default ShopOperations;
