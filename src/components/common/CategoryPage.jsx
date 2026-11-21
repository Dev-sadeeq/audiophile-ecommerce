import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/getImage";
import CATEGORIES from "../../data/category";
import CategoryCard from "./CategoryCard";
import BrandSection from "../../components/common/BrandSection";

export default function CategoryPage({ title, products }) {
  return (
    <>
      <header className="bg-black py-10 h-58">
        <h1 className="text-2xl tracking-wide sm:text-3xl md:text-4xl uppercase font-bold text-center text-white">
          {title}
        </h1>
      </header>
      <main className="max-w-360 mx-auto px-6 sm:px-8 lg:px-24 space-y-14">
        {products.map((product, index) => (
          <section
            key={product.id}
            className={`my-42 flex flex-col items-center gap-y-6 md:gap-x-5 lg:gap-x-32 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-[50%]">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={getImageUrl(product.categoryImage.desktop)}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={getImageUrl(product.categoryImage.desktop)}
                />
                <img
                  src={getImageUrl(product.categoryImage.mobile)}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </picture>
            </div>

            <div className="flex flex-col text-center space-y-7 sm:p-10 md:px-0 md:text-left md:items-start w-full md:w-[50%]">
              {product.new && (
                <p className="text-orange uppercase tracking-[10px] text-sm mb-4">
                  new product
                </p>
              )}
              <h2 className="text-2xl tracking-wide sm:text-3xl md:text-4xl uppercase font-bold text-Dark md:leading-normal">
                {product.name}
              </h2>
              <p className="text-gray-500 leading-9 md:leading-normal md:pr-10">
                {product.description}
              </p>

              <div className="mt-10">
                <Link
                  to={`/product/${product.slug}`}
                  className="text-xs uppercase font-bold bg-orange text-white py-4 px-5 shrink-0 sm:px-7 inline-block hover:bg-Dark hover:text-white transition-colors"
                >
                  see product
                </Link>
              </div>
            </div>
          </section>
        ))}

        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 my-32 max-md:gap-y-24">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.name}
                category={cat.name}
                image={cat.image}
              />
            ))}
          </div>
        </section>

        <section className="my-16">
          <BrandSection />
        </section>
      </main>
    </>
  );
}
