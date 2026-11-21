import data from "../data/data";
import CategoryPage from "../components/common/CategoryPage";

export default function Headphones() {

  const headphones = data
  .filter((product) => product.category === "headphones")
  .sort((a, b) => Number(b.new) - Number(a.new));

  return <CategoryPage title="headphones" products={headphones} />
}
