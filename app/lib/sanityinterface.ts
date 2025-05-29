// interfaces.ts
export interface simpleCourseCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface Course {
  titleImage: any;
  description: any;
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  actionLink?: {
    label: string;
    url: string;
  };
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}
