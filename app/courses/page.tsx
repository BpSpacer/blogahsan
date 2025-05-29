import Link from "next/link";
import { simpleCourseCard } from "../lib/sanityinterface";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == "course"]{
    title,
    "currentSlug": slug.current,
    description,
    content,
    "titleImage": titleImage.asset->url,
    publishedAt,
    type,
    worth
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function PostsPage() {
  const data = (await getData()) as simpleCourseCard[];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fullscreen Background SVG */}
      <div className="fixed inset-0 -z-10">
                    <svg
              className="absolute -mt-24 blur-3xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path
                    d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                    fill="#03FFE0"
                  ></path>
                  <path
                    d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                    fill="#7C87F8"
                  ></path>
                  <path
                    d="M320 400H400V78.75L106.2 134.75L320 400Z"
                    fill="#4C65E4"
                  ></path>
                  <path
                    d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                    fill="#043AFF"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>

        {/* Optional: darken slightly if too bright */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          All Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((course) => (
            <Link
              key={course.currentSlug}
              href={`/course/${course.currentSlug}`}
              className="block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur"
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {course.title}
                  </h3>
                  {course.type && (
                    <p className="text-sm font-semibold text-primary dark:text-primary uppercase">
                      {course.type}
                    </p>
                  )}
                </div>

                {course.titleImage && (
                  <div className="relative mb-4">
                    <img
                      src={course.titleImage}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    {typeof course.worth === "number" && (
                      <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 text-primary text-sm font-semibold px-3 py-1 rounded-md shadow">
                        ${course.worth.toFixed(2)}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">
                  {course.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm italic line-clamp-1">
                  {course.content?.[0]?.children?.[0]?.text?.slice(0, 100) || "Read more..."}
                </p>

                {course.publishedAt && (
                  <div className="mt-4 flex justify-center">
                    <p className="text-sm text-primary dark:text-primary">
                      Published: {new Date(course.publishedAt).toISOString().split("T")[0]}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
