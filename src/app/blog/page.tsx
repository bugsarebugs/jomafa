import Link from "next/link";
import { getAllBlogData } from "./_lib/getAllBlogData";
import Image from "next/image";

export default async function Blogs() {
  const blogs = await getAllBlogData();
  return (
    <div className="prose prose-xl dark:prose-invert container mx-auto flex w-max flex-col justify-center self-center px-4 text-center align-middle">
      <h1 className="text-9xl my-4 text-center font-bold text-white">
        Blog
      </h1>
      <p>News, Howto and updates from JOMAFA</p>
      <ul className="flex flex-1/2 flex-wrap px-5 gap-10 justify-center sm:flex-col lg:flex-row md:flex-col flex-col">
        {blogs.map(({ slug, metadata: { title, cover, description } }) => (
          <li key={slug} className="bg-white rounded-xs w-100">
            <Link prefetch={false} href={`/blog/${slug}`}>
              <div className="overflow-hidden">
              <Image
                src={cover}
                width={400}
                height={400}
                alt="Cover Image"
                className="hover:scale-110"
              />
              </div>
            </Link>
            <div className="text-black font-bold">
              <h1 className="bg-blue-950 flex ">{title}</h1>
              <p className="text-left text-wrap">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
