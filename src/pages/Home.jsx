import Hero from "../components/Hero";
import CategoryCard from "../components/common/CategoryCard";
import { Link } from "react-router-dom";
import CATEGORIES from "../data/category";
import { getImageUrl } from "../utils/getImage";
import BrandSection from "../components/common/BrandSection";

export default function Home() {
  return (
    <>
      <Hero
        label="New product"
        productTitle="XX99 Mark II Headphones"
        productDescription="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        productSlug="xx99-mark-two-headphones"
      />

      <main className="max-w-360 mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 my-32 max-md:gap-y-24">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.name}
              category={cat.name}
              image={cat.image}
            />
          ))}
        </div>
        <section className="px-8">
          <section className="bg-orange overflow-hidden rounded-xl md:rounded-md px-6 py-14 lg:py-0 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-size-[550px] bg-position-[center_-120px] md:bg-size-[850px] md:bg-position-[center_-260px] lg:bg-size-[944px] lg:bg-position-[-150px_-35px]">
            <div className="flex justify-center items-end lg:w-1/2 lg:pt-24">
              <img
                src={getImageUrl("home/desktop/image-speaker-zx9.png")}
                alt="ZX9 Speaker"
                className="w-44 md:w-48 lg:w-95 lg:-mb-3"
              />
            </div>

            <div className="text-center lg:text-left space-y-6 lg:w-1/2 lg:max-w-sm">
              <h2 className="tracking-wide text-4xl md:text-6xl font-bold uppercase text-white">
                ZX9 <span className="block">speaker</span>
              </h2>
              <p className="text-white/75 text-base leading-relaxed">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <div className="pt-2">
                <Link
                  to="/product/zx9-speaker"
                  className="inline-block text-xs uppercase tracking-wider font-bold bg-Dark text-white py-4 px-8 hover:bg-[#4C4C4C] transition-colors"
                >
                  See product
                </Link>
              </div>
            </div>
          </section>
        </section>

        <section className="px-8 my-16">
          <section className="bg-light-gray md:h-75 rounded-xl md:rounded-md flex justify-between items-center overflow-hidden">
            <div className="p-6 sm:p-10 md:px-24 space-y-6 w-1/2">
              <h2 className="tracking-wide text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-Dark">
                ZX7 speaker
              </h2>
              <Link
                to="/product/zx7-speaker"
                className="max-w-48 text-xs uppercase border-2 font-bold bg-transparent text-Dark py-3 px-4 sm:py-5 sm:px-6 md:border md:py-3 md:px-7 inline-block hover:bg-Dark hover:text-white transition-colors"
              >
                See product
              </Link>
            </div>
            <div className="w-1/2 h-full">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="./assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="./assets/product-zx7-speaker/tablet/image-gallery-3.jpg"
                />
                <img
                  src="./assets/product-zx7-speaker/mobile/image-gallery-3.jpg"
                  alt="zx7 speaker"
                  className="w-full h-full object-cover min-h-62.5 sm:min-h-75"
                />
              </picture>
            </div>
          </section>
        </section>

        <section className="my-16">
          <section className="px-8 rounded-xl md:rounded-md flex flex-col gap-y-6 md:flex-row md:gap-x-5">
            <div className="w-full">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="./assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="./assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
                />
                <img
                  src="./assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
                  alt="yx1 earphones"
                  className="w-full h-full object-cover rounded-xl md:rounded-md"
                />
              </picture>
            </div>

            <div className="bg-light-gray rounded-xl flex flex-col justify-center md:rounded-md p-6 sm:p-10 md:px-22 space-y-7 w-full">
              <h2 className="tracking-wide text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-Dark">
                YX1 earphones
              </h2>
              <Link
                to="/product/yx1-earphones"
                className="max-w-48 text-xs uppercase border-2 font-bold bg-transparent text-Dark py-3 px-4 sm:py-5 sm:px-6 md:border md:py-3 md:px-7 inline-block hover:bg-Dark hover:text-white transition-colors"
              >
                See product
              </Link>
            </div>
          </section>
        </section>

        <BrandSection />
      </main>
    </>
  );
}
