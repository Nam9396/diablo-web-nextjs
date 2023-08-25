import Head from 'next/head'
import BlogGrid from '@/components/BlogGrid'
import BackgroundImage from '@/components/BackgroundImage'


export default function Speaking() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Các bài viết chia sẽ kinh nghiệm chơi game, từ những chuyên gia hàng đầu."
        />
      </Head>

      <div className="fixed inset-0 -z-10 flex justify-center bg-zinc-900"></div>
      
      <BlogGrid />
    </>
  )
}
