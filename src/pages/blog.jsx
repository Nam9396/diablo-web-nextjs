import Head from 'next/head'
import BlogGrid from '@/components/BlogGrid'


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
      
      <BlogGrid />
    </>
  )
}
