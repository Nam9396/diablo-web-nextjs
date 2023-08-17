import articleMetaArray from "@/data/article-array";
import Link from "next/link";
import Image from "next/image";

const BlogGrid = () => {
    return (
      <div className="bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"> Cùng chia sẽ kinh nghiệm với chúng tôi.</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {articleMetaArray.map((post, index) => (
              <article
                key={index}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 sm:pt-50"
              >
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <Image
                    src={post.imageUrl} alt="" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="flex gap-x-2.5">
                      Nguyen Duy Anh Khoa
                    </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={`/articles/post/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default BlogGrid;