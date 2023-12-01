import { SectionTitle } from "./SectionTitle";
export function BlogSection() {
  return (
    <section className="bg-white mb-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionTitle title="Blog" />
        <div className="grid max-w-3xl grid-cols-1 mx-auto text-center sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              November 22, 2021
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              How To Optimize Progressive Web Apps: Going Beyond The Basics
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              November 16, 2021
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              How To Optimize Progressive Web Apps: Going Beyond The Basics
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
