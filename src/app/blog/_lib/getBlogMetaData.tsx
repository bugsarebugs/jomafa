import type { Metadata } from "next/types";
import { notFound } from "next/navigation";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
  cover: string;
};

export type CustomMetadata = {
  publishDate: string;
};

export type BlogPostData = {
  slug: string;
  metadata: PostMetadata;
  customMetadata: CustomMetadata;
};

export async function getBlogMetadata(slug: string): Promise<BlogPostData> {
  try {
    const file = await import("@/blog/" + slug + ".mdx");
    if (file?.metadata && file?.customMetadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata Fields in : ${slug}`);
      }
      if (!file.customMetadata.publishDate){
        throw new Error(`Missing required custom metadata field, publishDate, in : ${slug}`);
      }
    

      return {
        slug,
        metadata: file.metadata as PostMetadata,
        customMetadata: file.customMetadata,
      };
    } else {
      throw new Error(`Unable to Find Metadata for ${slug}.mdx`);
    }
  } catch (error) {
    console.error((error as Error)?.message);
    return notFound();
  }
}
