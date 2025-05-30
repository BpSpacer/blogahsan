"use client";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { simpleCourseCard } from "@/app/lib/sanityinterface";

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

export default function PostsPageWrapper() {
  return <PostsPageClient />;
}

function PostsPageClient() {
  const [allCourses, setAllCourses] = useState<simpleCourseCard[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<simpleCourseCard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getData();
      setAllCourses(data);
      setFilteredCourses(data);
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = allCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchQuery, allCourses]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        {/* Your existing SVG background */}
        
        <div className="absolute inset-0 bg-white/10 dark:bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Foreground */}
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          All Courses
        </h1>

<div className="mb-6 flex justify-center sm:justify-end w-full">
  <div className="relative w-60 sm:w-64 max-w-full">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-2 pr-10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary"
    />
    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
      <Search className="w-4 h-4" />
    </span>
  </div>
</div>

        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No courses found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
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
        )}
      </div>
    </div>
  );
}
