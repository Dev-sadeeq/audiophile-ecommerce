import { Link } from "react-router-dom";
export default function Hero({
  label,
  productTitle,
  productDescription,
  productSlug
}) {
  return (
    <>
      <section className="bg-Dark md:bg-image-desktop text-center relative overflow-hidden md:h-175 md:-mt-10 md:flex md:items-center md:justify-between md:px-24 lg:px-32">
        <div className="hidden md:block absolute inset-0 bg-linear-to-t from-Dark via-black/40 to-Dark opacity-70 pointer-events-none z-0"></div>

        <div className="max-sm:bg-image-header-mobile max-md:bg-image-tablet bg-cover bg-no-repeat bg-center space-y-5 py-4 h-187.5 md:h-auto md:w-1/2 md:text-left px-6 md:px-0 flex flex-col items-center md:items-start justify-center relative z-10">
          <div className="absolute inset-0 bg-linear-to-t from-Dark via-black/40 to-Dark opacity-70 pointer-events-none z-0"></div>

          <div className="relative z-10 space-y-10 max-w-sm mx-auto md:mx-0">
            <p className="text-sm tracking-[10px] text-gray-300 uppercase">
              {label}
            </p>
            <h1 className="text-4xl leading-9 md:leading-normal md:text-5xl text-white font-bold">
              {productTitle}
            </h1>
            <p className="text-gray-300 leading-9 md:leading-normal">{productDescription}</p>
            <Link to={`/product/${productSlug}`} className="bg-orange hover:bg-hover-color text-white px-8 py-4 uppercase font-bold transition-colors">
              See product
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center items-center relative z-10"></div>
      </section>
    </>
  );
}
