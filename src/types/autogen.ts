import { ComplexImageType, ImageType } from "@yext/sites-components";

export interface Locations {
  id: string;
  name: string;
  slug: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Blogs {
  id: string;
  name: string;
  datePosted: string;
  slug: string;
  blogStarter_coverPhoto: ComplexImage;
  blogStarter_body: any;
  blogStarter_description: string;
  blogStarter_metaDescription: string;
  blogStarter_keywords: string;
  blogStarter_blogAuthor: string;
  _site?: {
    logo?: ComplexImageType | ImageType;
  };
}

export interface FinPro {
  name: string;
  slug: string;
}

export interface BlogStarter_featuredBlogs {
  id?: string;
  name?: string;
  slug?: string;
  blogStarter_coverPhoto?: ComplexImage;
  blogStarter_description?: string;
  datePosted?: string;
  blogStarter_blogAuthor?: string;
}

export interface Home {
  name: string;
  slug: string;
  blogStarter_coverPhoto: ComplexImage;
  blogStarter_featuredBlogs: BlogStarter_featuredBlogs[];
  _site?: {
    logo?: ComplexImageType | ImageType;
  };
}
