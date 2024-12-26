import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaUser, FaClock, FaCalendarAlt } from "react-icons/fa";
import InteractiveSection from "../../components/InteractiveSection";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const dataQuery = `
    *[_type == "post" && slug.current == $slug][0]{
      image,
      title,
      paragraph,
      publishDate,
      readTime,
      author,
      slug
    }
  `;

  const relatedPostsQuery = `
    *[_type == "post" && slug.current != $slug][3...6]{
      title,
      slug,
      image,
      publishDate,
      author
    }
  `;

  const blog = await client.fetch(dataQuery, { slug: params.slug });
  const relatedPosts = await client.fetch(relatedPostsQuery, {
    slug: params.slug,
  });

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-semibold text-gray-600">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <Image
            src={urlFor(blog.image).url()}
            alt={blog.title}
            width={500}
            height={300}
            className="rounded-xl shadow-lg object-cover w-full"
          />
          <div className="mt-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              {blog.title}
            </h1>
            <div className="flex items-center mt-4 text-gray-600 space-x-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <p className="text-sm sm:text-base">{blog.author}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-green-500" />
                <p className="text-sm sm:text-base">{blog.publishDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-red-500" />
                <p className="text-sm sm:text-base">{blog.readTime} min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <article className="prose prose-lg prose-gray">
            <p>{blog.paragraph}</p>
          </article>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <InteractiveSection slug={blog.slug.current} />
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post: any, index: number) => (
              <Link
                key={index}
                href={`/blog/${post.slug.current}`}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-md mb-4 object-cover w-full"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2 gap-2">
                  <FaUser className="text-blue-500" />
                  <p>{post.author}</p>
                </div>
                <div className="flex items-center text-gray-500 text-sm gap-2">
                  <FaCalendarAlt className="text-green-500" />
                  <p>{post.publishDate}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            Enjoyed the read?
          </h2>
          <p className="text-gray-500 mt-4">
            Share this blog with your friends or leave a comment to let us know
            your thoughts!
          </p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
}
