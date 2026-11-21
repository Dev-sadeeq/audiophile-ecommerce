import data from "../data/data";
import CategoryPage from "../components/common/CategoryPage";

export default function Earphones() {

  const earphones = data
  .filter((product) => product.category === "earphones")
  .sort((a, b) => Number(b.new) - Number(a.new));

  return <CategoryPage title="earphones" products={earphones} />
}
