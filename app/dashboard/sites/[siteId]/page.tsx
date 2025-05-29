import { EmptyState } from "@/app/components/dashboard/EmptyState";
import { prisma } from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  MoreHorizontal,
  PlusCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
    select: {
      subdirectory: true,
      posts: {
        select: {
          image: true,
          title: true,
          createdAt: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return data;
}

export default async function SiteIdRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-end mb-6 px-2 sm:px-0">
        <Button asChild variant="secondary" className="whitespace-nowrap">
          <Link href={`/blog/${data?.subdirectory}`}>
            <Book className="h-5 w-5 mr-2" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant="secondary" className="whitespace-nowrap">
          <Link href={`/dashboard/sites/${params.siteId}/settings`}>
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Link>
        </Button>
        <Button asChild className="whitespace-nowrap">
          <Link href={`/dashboard/sites/${params.siteId}/create`}>
            <PlusCircle className="h-5 w-5 mr-2" />
            Create Article
          </Link>
        </Button>
      </div>

      {data?.posts === undefined || data.posts.length === 0 ? (
        <EmptyState
          title="You dont have any Articles created"
          description="You currently dont have any articles. please create some so that you can see them right here"
          buttonText="Create Article"
          href={`/dashboard/sites/${params.siteId}/create`}
        />
      ) : (
        <div className="overflow-x-auto px-2 sm:px-0">
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                Manage your Articles in a simple and intuitive interface
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.posts.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell className="p-2">
                        <div className="w-16 h-16 relative rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt="Article Cover Image"
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium max-w-xs truncate">
                        {item.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-500"
                        >
                          Published
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                        }).format(new Date(item.createdAt))}
                      </TableCell>

                      <TableCell className="text-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${params.siteId}/${item.id}`}
                              >
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${params.siteId}/${item.id}/delete`}
                              >
                                Delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
