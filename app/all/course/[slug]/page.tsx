import { Course } from "@/app/lib/sanityinterface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `*[_type == "course" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Course;

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
      {new Date(data._createdAt).toISOString().split("T")[0]}
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
      {data.type && (
        <p className="text-sm font-semibold text-primary dark:text-primary uppercase bg-primary/20 dark:bg-primary/20 inline-block px-3 py-1 rounded-full">
          {data.type}
        </p>
      )}
      {typeof data.worth === "number" && (
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Worth: ${data.worth.toFixed(2)}
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
        <div className="prose max-w-none pb-10 pt-10 dark:prose-invert prose-lg">
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </div>

        {data.actionLink?.url && (
          <div className="pt-12 mb-12 text-center">
            <a
              href={data.actionLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/80 transition"
            >
              {data.actionLink.label || "Learn More"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
