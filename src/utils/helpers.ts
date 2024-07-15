export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pl", { style: "currency", currency: "EUR" }).format(
    value,
  );
export const formatNameForURL = (name: string) => {
  return name.replace(/\s+/g, "-");
};
export const revertFormattedName = (formattedName: string) => {
  return formattedName.replace(/-/g, " ");
};
export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
