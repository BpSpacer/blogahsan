import Head from "next/head";
import { prisma } from "@/app/utils/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import Logo from "@/public/logo-dark.png";
import { ThemeToggle } from "@/app/components/dashboard/ThemeToggle";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Defaultimage from "@/public/default.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Share from "@/app/components/dashboard/Share";

// Define Post and SiteWithPosts types
type Post = {
  id: string;
  title: string;
  smallDescription: string;
  image: string | null;
  createdAt: Date;
  slug: string;
};

type SiteWithPosts = {
  description: string;
  name: string;
  posts: Post[];
};

// Typed async function
async function getData(subDir: string): Promise<SiteWithPosts> {
  const data = await prisma.site.findUnique({
    where: {
      subdirectory: subDir,
    },
    select: {
      name: true,
      description: true,
      posts: {
        select: {
          smallDescription: true,
          title: true,
          image: true,
          createdAt: true,
          slug: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!data) {
    notFound(); // This throws, so return type is still valid
  }

  return data;
}

export default async function BlogIndexPage({
  params,
}: {
  params: { name: string };
}) {
  const data = await getData(params.name);

  return (
    <>
      <Head>
        <title>{data.name} Blog</title>
        <meta
          name="description"
          content={`Explore the latest posts and updates from ${data.name}.`}
        />
        <meta
          name="keywords"
          content="blog, posts, updates, articles, latest news"
        />
        <meta name="author" content={data.name} />
        <meta property="og:title" content={`${data.name} Blog`} />
        <meta
          property="og:description"
          content={`Explore the latest posts and updates from ${data.name}.`}
        />
        <meta property="og:image" content="/logo-dark.png" />
        <meta
          property="og:url"
          content={`https://adsbyahsan.com/blog/${params.name}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://adsbyahsan.com/blog/${params.name}`}
        />
      </Head>

      <nav className="my-10">
        <div className="flex flex-col items-center gap-2 sm:grid sm:grid-cols-3 sm:items-center">
          {/* Left empty on sm+ */}
          <div className="hidden sm:block" />

          {/* Center: logo + name + description stacked vertically */}
          <div className="flex flex-col items-center text-center">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <h1 className="text-xl sm:text-3xl font-semibold tracking-tight mt-1">
              {data.name}
            </h1>
            {/* Description below name - now visible on all screens */}
            <p className="mt-1 text-sm text-muted-foreground max-w-xs sm:max-w-md">
              {data.description}.
            </p>
          </div>

          {/* Right: ThemeToggle on sm+ only */}
          <div className="flex w-full justify-center sm:justify-end gap-2 mt-4 sm:mt-0">
            <ThemeToggle />
            <div className="-translate-y-1 transform">
              <Share />
            </div>

          </div>

        </div>
      </nav>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {data.posts.map((item: any) => (
          <Card key={item.id}>
            <Image
              src={item.image ?? Defaultimage}
              alt={item.title}
              className="rounded-t-lg object-cover w-full h-[200px]"
              width={400}
              height={200}
            />
            <CardHeader>
              <CardTitle className="truncate">{item.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {item.smallDescription}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/blog/${params.name}/${item.slug}`}>
                  Read more...
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
