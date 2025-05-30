// app/search/page.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { simpleCourseCard } from "../lib/sanityinterface"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [allCourses, setAllCourses] = useState<simpleCourseCard[]>([])
  const [filteredCourses, setFilteredCourses] = useState<simpleCourseCard[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses")
      const data = await res.json()
      setAllCourses(data)
      setFilteredCourses(data)
    }
    fetchCourses()
  }, [])

  useEffect(() => {
    const filtered = allCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description?.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredCourses(filtered)
  }, [query, allCourses])

  return (
    <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Courses</h1>

      <input
        type="text"
        placeholder="Search by title or description..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-8"
      />

      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.currentSlug}
              href={`/course/${course.currentSlug}`}
              className="block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
