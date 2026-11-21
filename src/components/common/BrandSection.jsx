export default function BrandSection() {
  return (
    <section className="my-32">
      <section className="px-8 rounded-xl md:rounded-md flex flex-col gap-y-6 md:flex-row md:gap-x-16">
        <div className="md:order-2 w-full md:w-[50%]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
            />
            <img
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
              alt="Audiophile customer listening to headphones"
              className="w-full h-full object-cover rounded-xl md:rounded-md"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center text-center space-y-7 p-6 sm:p-10 md:px-0 md:text-left md:items-center w-full md:w-[50%] md:order-1">
          <h2 className="text-2xl tracking-wide sm:text-3xl md:text-4xl uppercase font-bold text-Dark md:leading-normal">
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </h2>
          <p className="text-gray-500 leading-9 md:leading-normal md:pr-10">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </section>
  );
}
