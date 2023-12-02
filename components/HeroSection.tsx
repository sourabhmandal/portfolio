import VideoList from "./hero/VideoList";
export function HeroSection() {
  return (
    <div className="">
      <section className="bg-gray-100">
        <div className="flex justify-center z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:mx-auto lg:py-20 xl:py-28">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-3xl lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Building in Public{" "}
                <span className="inline">
                  <img
                    className="inline w-auto h-8 sm:h-10 lg:h-12"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                    alt="shape-1"
                  />
                </span>{" "}
                <p className="text-2xl font-bold leading-7 text-gray-900">
                  Embark on my business ventures
                  <span className="inline">
                    <img
                      className="inline w-4 h-auto mx-4 sm:h-10 lg:h-11"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                      alt="shape-2"
                    />
                  </span>
                </p>
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                Currently My focus is to create a delghful platform for youtube
                creators to build and monetize their audience without hassle
              </p>

              <VideoList />

              <p className="mt-8 text-base font-bold text-gray-900">
                Join to get early access to product
              </p>
              <form action="#" method="post" className="relative mt-4">
                <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
