import { Movie } from "@/app/lib/sanityinterface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `*[_type == "movie" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Movie;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <img
          src={urlForImage(value).url()}
          alt={value.alt || "Image"}
          className="rounded-lg my-6"
          width={800}
          height={500}
        />
      ),
    },
  };


  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 px-4 sm:px-6 lg:px-8">
      <header className="pt-6 xl:pb-6 text-center">
        <div className="space-y-2">
          <p className="text-base font-medium leading-6 text-primary">
            {data.publishedAt ? new Date(data.publishedAt).toISOString().split("T")[0] : ""}
          </p>

          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {data.title}
          </h1>

          {data.description && (
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {data.description}
            </p>
          )}

          <div className="mt-4 text-center space-y-1">
            {typeof data.rating === "number" && (
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                IMDb Rating: {data.rating}/10
              </p>
            )}
            {data.duration && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Duration: {data.duration}
              </p>
            )}
            {data.quality && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Quality: {data.quality}
              </p>
            )}
            {data.releaseYear && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Released: {data.releaseYear}
              </p>
            )}
            {Array.isArray(data.genre) && data.genre.length > 0 && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Genre: {data.genre.join(", ")}
              </p>
            )}
            {Array.isArray(data.audioLanguages) && data.audioLanguages.length > 0 && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Languages: {data.audioLanguages.join(", ")}
              </p>
            )}
          </div>

          {data.titleImage && (
            <div className="mt-6 flex justify-center">
              <img
                src={urlForImage(data.titleImage).url()}
                alt={data.titleImage.alt || "Title Image"}
                width={600}
                height={300}
                className="rounded-xl shadow-md object-cover"
              />
            </div>
          )}
        </div>
      </header>

      <div className="divide-y divide-gray-200 dark:divide-gray-700 pb-8 xl:pb-0">
        <div className="w-full flex justify-center">
          <div className="max-w-3xl w-full px-4">
            <div className="prose dark:prose-invert prose-lg pt-10 pb-10">
              <PortableText value={data.content} components={PortableTextComponent} />
            </div>

            {data.trailerUrl && (
              <div className="mb-10 text-center">
                <iframe
                  width="100%"
                  height="400"
                  src={data.trailerUrl}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-md"
                />
              </div>
            )}

            {data.actionLink?.url && (
              <div className="pt-12 mb-12 text-center">
                <a
                  href={data.actionLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/80 transition"
                >
                  {data.actionLink.label || "Download Now"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
