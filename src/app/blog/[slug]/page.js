// src/app/diaries/[slug]/page.js

import dynamic from "next/dynamic";
import { getBlogMetadata } from "@/app/blog/_lib/getBlogMetaData";
import { getAllBlogData } from "@/app/blog/_lib/getAllBlogData";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { metadata } = await getBlogMetadata(params.slug);
  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${params.slug}`);
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }) {
  const { metadata } = await getBlogMetadata(params.slug);
  const cover = metadata.cover ?? "";

  const DiariesMarkdown = dynamic(() => import(`@/blog/${params.slug}.mdx`));

  return (
    <div
      className={`prose lg:prose-xl dark:prose-invert container  mx-auto p-20 flex flex-col ${markdownStyles.markdown}  items-center self-center justify-center `}
    >
      <Image src={cover} width={200} height={200} alt="cover image" className="p-2" />
      <DiariesMarkdown/>
    </div>
  );
}
