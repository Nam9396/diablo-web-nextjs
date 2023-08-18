import articleMetaArray from "@/data/article-array";
import Link from "next/link";
import Image from "next/image";

  
const HomeBlog = () => {
  
  return (
    <div className="bg-zinc-700/[0.15] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl">Tìm hiểu về thế giới Diablo.</h2>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {articleMetaArray.map((post, index) => (
            <article key={index} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <Image
                    src={post.imageUrl}
                    alt=""
                    fill
                    className="absolute rounded-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-100 group-hover:text-yellow-500">
                    <Link href={`/articles/post/${post.slug}`}><span className="absolute inset-0" />{post.title}</Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-zinc-400">{post.description}</p>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-zinc-100">
                        <span className="absolute inset-0" />Nguyen Duy Anh Khoa
                      </p>
                      <p className="text-zinc-100">Co-Founder / Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            ))}
          </div>

        </div>
      </div>
    </div>
)
}

export default HomeBlog; 