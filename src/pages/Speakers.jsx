import data from "../data/data";
import CategoryPage from "../components/common/CategoryPage";

export default function Speakers() {

  const speakers = data
  .filter((product) => product.category === "speakers")
  .sort((a, b) => Number(b.new) - Number(a.new));

  return <CategoryPage title="speakers" products={speakers} />
}
