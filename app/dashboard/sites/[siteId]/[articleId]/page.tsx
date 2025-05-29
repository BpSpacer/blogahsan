import { EditArticleForm } from "@/app/components/dashboard/forms/EditArticleForm";
import { prisma } from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(postId: string) {
  const data = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    select: {
      image: true,
      title: true,
      smallDescription: true,
      slug: true,
      articleContent: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { articleId: string; siteId: string };
}) {
  const data = await getData(params.articleId);
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6 flex-wrap sm:flex-nowrap">
        <Button size="icon" variant="outline" asChild className="mr-3 mb-2 sm:mb-0">
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold truncate">Edit Article</h1>
      </div>

      <EditArticleForm data={data} siteId={params.siteId} />
    </div>
  );
}
