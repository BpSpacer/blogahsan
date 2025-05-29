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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        All Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <Link
            key={course.currentSlug}
            href={`/course/${course.currentSlug}`}
            className="block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <div className="flex flex-col items-end">
                  {course.type && (
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase">
                      {course.type}
                    </p>
                  )}
                  {typeof course.worth === "number" && (
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Worth: ${course.worth.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>


              {course.titleImage && (
                <img
                  src={course.titleImage}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">
                {course.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic line-clamp-1">
                {course.content?.[0]?.children?.[0]?.text?.slice(0, 100) || "Read more..."}
              </p>

              {course.publishedAt && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published: {new Date(course.publishedAt).toISOString().split("T")[0]}
                </p>
              )}

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
