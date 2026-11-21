import { Link } from "react-router-dom";

export default function CategoryCard({ category, image }) {
  return (
    <div className="bg-light-gray rounded-xl p-8 relative flex flex-col items-center text-center pt-16">
      <img
        src={image}
        alt={category}
        className="w-42 h-42 absolute -top-16 bg-transparent"
      />
      <h2 className="font-bold uppercase text-lg tracking-wider mt-10 text-black">
        {category}
      </h2>
      <Link
        to={`/${category}`}
        className="text-xs uppercase font-bold text-gray-500 hover:text-orange tracking-widest mt-4 flex items-center gap-2 transition-colors"
      >
        <span>SHOP</span>
        <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
      </Link>
    </div>
  );
}
