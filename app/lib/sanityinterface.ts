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

////////////

export interface simpleAppCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface App {
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

////////////

export interface simpleShopifyCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface Shopify {
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

////////

export interface simpleWordpressCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface Wordpress {
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

/////////

export interface simpleSoftwareCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface Software {
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

/////////

export interface simpleAccountCard {
  title: string;
  description: string;
  currentSlug: string;
  content: any;
  titleImage: string;
  publishedAt: string;
  type: "FREE" | "PAID";
  worth: number;
}

export interface Account {
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

///////////////

export interface simpleMovieCard {
  title: string;
  currentSlug: string;
  description: string;
  content: any[];
  titleImage: string;
  publishedAt?: string;
  rating?: number;
  audioLanguages?: string[];
  genre?: string[];
  quality?: string;
}


  export interface Movie {
    titleImage: any;
    description: any;
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt?: string;
    actionLink?: {
      label: string;
      url: string;
    };
    rating?: number;
    audioLanguages?: string[];
    genre?: string[];
    quality?: string;
    duration?: string;
    releaseYear?: number;
    trailerUrl?: string;
    publishedAt?: string;
  }