import { Link } from "react-router-dom";
import { useState } from "react";
import QuantityCounter from "../components/common/QuantityCounter";
import CategoryCard from "../components/common/CategoryCard";
import CATEGORIES from "../data/category";
import data from "../data/data";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../utils/getImage";
import { useCart } from "../context/CartContext";
import BrandSection from "../components/common/BrandSection";

export default function ProductDetails() {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  function handleSub() {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  const { slug } = useParams();
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8 my-24">
        <h2 className="text-3xl font-bold uppercase mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, we couldn't find the product you're looking for. It may have
          been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-orange text-white text-xs uppercase font-bold px-8 py-4 tracking-wider hover:bg-orange-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-360 mx-auto px-6 sm:px-8 md:px-12 lg:px-24 space-y-12">
        <div className="my-16">
          <Link to="/">Go back</Link>{" "}
        </div>

        <section className="my-16">
          <section className="px-8 flex flex-col gap-y-6 md:flex-row md:gap-x-16 lg:gap-x-32">
            <div className="w-full md:w-[50%]">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={getImageUrl(product.image.desktop)}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={getImageUrl(product.image.tablet)}
                />
                <img
                  src={getImageUrl(product.image.mobile)}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </picture>
            </div>

            <div className="flex flex-col space-y-7 sm:p-10 md:px-0 md:text-left md:items-start w-full md:w-[50%]">
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

              <span className="font-bold">$ {product.price}</span>

              <div className="flex gap-x-3">
                <div className="">
                  <QuantityCounter
                    count={count}
                    handleAdd={handleAdd}
                    handleSub={handleSub}
                  />
                </div>
                <button
                  onClick={() => addToCart({ ...product, quantity: count })}
                  className="text-xs uppercase font-bold bg-orange text-white py-2 px-3 shrink-0 sm:px-7 inline-block hover:bg-Dark hover:text-white transition-colors"
                >
                  add to cart
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className="px-8 my-24 flex flex-col gap-y-6 md:flex-row md:gap-x-16 lg:gap-x-32 md:justify-between md:items-start">
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl tracking-wide sm:text-3xl md:text-4xl uppercase font-bold text-Dark md:leading-normal mb-4">
              features
            </h2>
            <p className="leading-9 md:leading-normal whitespace-pre-line">
              {product.features}
            </p>
          </div>

          <div className="w-full md:w-[40%]">
            <h2 className="text-2xl tracking-wide sm:text-3xl md:text-4xl uppercase font-bold text-Dark md:leading-normal mb-4">
              in the box
            </h2>
            {product.includes.map((item) => (
              <div key={item.item} className="flex gap-x-5">
                <span className="text-orange font-semibold">
                  {item.quantity}x
                </span>
                <span>{item.item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(product.gallery).map((imgObj, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg ${
                index === 2 ? "md:row-span-2 md:col-start-2 md:row-start-1" : ""
              }`}
            >
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={getImageUrl(imgObj.desktop)}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={getImageUrl(imgObj.tablet)}
                />
                <img
                  src={getImageUrl(imgObj.mobile)}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </picture>
            </div>
          ))}
        </section>

        <section className="px-8 my-24">
          <h2 className="text-2xl font-bold text-center uppercase mb-12">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden mb-8">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImageUrl(item.image.desktop)}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={getImageUrl(item.image.tablet)}
                    />
                    <img
                      src={getImageUrl(item.image.mobile)}
                      alt={item.name}
                      className="w-full h-auto object-cover"
                    />
                  </picture>
                </div>

                <h3 className="text-xl font-bold uppercase mb-8">
                  {item.name}
                </h3>

                <Link
                  to={`/product/${item.slug}`}
                  className="text-xs uppercase font-bold bg-orange text-white py-4 px-8 tracking-wider hover:bg-orange-light transition-colors"
                >
                  See product
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8">
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

        <BrandSection />
      </main>
    </>
  );
}
