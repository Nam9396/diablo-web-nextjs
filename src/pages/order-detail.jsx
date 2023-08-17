import Head from 'next/head'
import OrderDetail from '@/components/orderDetail'

export default function Order() {
  return (
    <>
      <Head>
        <title>Quản lý yêu cầu</title>
        <meta
          name="description"
          content="Toàn bộ thông tin về yêu cầu của khách hàng được cập nhật ở đây."
        />
      </Head>
      
      <OrderDetail />
    </>
  )
}
