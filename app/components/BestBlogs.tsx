import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react'
import { FaRegUser, FaRegClock } from 'react-icons/fa';
import Image from 'next/image';
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
export default async function BestBlogs() {
     const query = `*[_type == "post"][0...6]{
            image,
            title,
            paragraph,
            publishDate,
            author,
            slug,
            authorimage,
            readTime,
          }`;
    
      const posts = await client.fetch(query);
  return (
    <div>
       <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Best of the Best
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post: PostType) => (
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
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
                      {post.title.length > 50
                        ? `${post.title.slice(0, 50)}...`
                        : post.title}
                    </h2>
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
  )
}
