import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser, FaRegClock } from "react-icons/fa";

interface PostType {
  image: string;
  title: string;
  paragraph: string;
  publishDate: number;
  author: string;
  slug: {
    current: string;
  };
  readTime: number;
}

async function BlogsPage() {
  const query = `*[_type == "post"]{
    image,
    title,
    paragraph,
    publishDate,
    author,
    slug,
    readTime,
  }`;

  const posts = await client.fetch(query);
  return (
    <div>
      <div
        className="relative min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/a1.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="text-center px-6 md:px-16">
            <h1 className="text-5xl md:text-7xl font-bold hero-text animate__animated animate__fadeIn animate__delay-1s mb-6">
              Discover Our Blog Collection
            </h1>
            <p className="text-xl md:text-2xl">
              Dive into insightful articles on technology, trends, and more!
            </p>
          </div>
        </div>
      </div>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-widest">
            All Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: PostType) => (
              <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
                <div className=" bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:opacity-90">
                  <div className="relative w-full h-56">
                    <Image
                      src={urlFor(post.image).url()}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
                      {post.title.length > 50
                        ? `${post.title.slice(0, 50)}...`
                        : post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.paragraph.slice(0, 120)}...
                    </p>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <div className="flex items-center">
                        <FaRegUser className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaRegClock className="mr-2" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <div className="mt-4 text-blue-600 hover:underline text-sm">
                      Read More
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogsPage;
