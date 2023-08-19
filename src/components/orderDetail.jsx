import { Fragment, useState } from 'react'
import clsx from 'clsx'
import { getUserOrder, userDeleteOrder } from '../../swr/orderSWRFn.js'
import Image from 'next/image.js'
import { toast } from 'react-toastify'
import Modal from './Modal.jsx'
import { useRouter } from 'next/router.js'
import { SpinnerButton, SpinnerPage } from './Spinner.jsx'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const OrderDetail = () => {
  const router = useRouter()
  const { data: customerOrder, isLoading, error, mutate: refetchOrder } = getUserOrder();

  const { trigger, isMutating, error: errorDeleteOrder } = userDeleteOrder();

  const deleteHandler = async(orderId) => { 
    try { 
      const response = await trigger(orderId);
      refetchOrder();
      toast.success('Order deleted!');
    } catch(err) { 
      toast.error(err?.info || err?.error)
    }
  }

  return (
    <div className="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">

    {isLoading ? (
      <SpinnerPage />
    ) : error ? (
      <Modal  
        header={'Bạn chưa gửi yêu cầu nào'}
        detail={'Gửi yêu cầu cực kỳ đơn giản và chúng tôi sẽ liên hệ bạn ngay!'}
        name1={'Gửi yêu cầu'}
        name2={'Home'}
        fn1={() => router.push('/boosting')}
        fn2={() => router.push('/')}
        variant={'success'}
      />
    ) : customerOrder && customerOrder?.length > 0 ? customerOrder.map((order, index) => (
    <div className='mb-[80px]' key={index}>
      <div className="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
        <div className="flex sm:items-baseline sm:space-x-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">Yêu cầu #{order._id.slice(-5)}</h1>
        </div>
        <p className="text-sm text-zinc-100">
          Yêu cầu lúc{' '}
          <time dateTime="2021-03-22" className="font-medium text-zinc-100">
            {new Date(order.createdAt).toLocaleString()}
          </time>
        </p>
      </div>

      <section aria-labelledby="products-heading" className="mt-6">
        <h2 id="products-heading" className="sr-only">
          Order placed
        </h2>

        {/* order information */}
        <div className="space-y-8 bg-zinc-800 shadow-sm sm:rounded-lg">
          <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
            <div className="sm:flex lg:col-span-7">
              <div className="relative aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                <Image
                  src={order.image}
                  alt={order.nameService}
                  fill
                  className="object-cover object-center sm:h-full sm:w-full"
                />
              </div>

              <div className="mt-6 sm:ml-6 sm:mt-0">
                <h3 className="text-base font-medium text-zinc-100">{order.nameService}</h3>
                <p className="mt-2 text-sm font-medium text-zinc-100">Đơn giá: {order.price}</p>
                {order.mainFeature.split('\n').map((line, index) => (
                  <p className="mt-3 text-sm text-zinc-400" key={index}>{line}</p>
                ))}
                <p className="mt-3 text-sm text-zinc-400">{order.extraFeature}</p>
              </div>
            </div>

            <div className="mt-6 lg:col-span-5 lg:mt-0">
              <div className="font-medium text-base text-zinc-100">Lời nhắn từ Admin</div>
              <p className="mt-3 text-sm text-zinc-400">{order.adminMessage}</p>
            </div>
          </div>
        </div>
        
        {/* order perform timeline */}
        <div className="px-4 py-6 sm:px-6 lg:p-8 bg-zinc-800">
          <h4 className="sr-only">Status</h4>
          <div className='flex flex-row justify-between items-center'>
            <p className="text-sm font-medium text-zinc-100">
              Tiến trình giải quyết yêu cầu
            </p>
            {order.canDeleted &&
            <div className='flex flex-row justify-center items-center'>
              {isMutating && <SpinnerButton />}
              <button 
                type="button" 
                className='text-yellow-500 font-medium hover:text-yellow-300 m-3'
                onClick={() => deleteHandler(order._id)}
              >
                Hủy
              </button>
            </div>}
          </div>

          <div className="mt-6" aria-hidden="true">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div
                className={clsx(
                  "h-2 rounded-full bg-yellow-600 ",
                  order.isPerformed ? 'w-[100%]' : order.isPaid ? 'w-[75%]' : order.isDiscussed ? 'w-[50%]' : 'w-[25%]'
                )}
              />
            </div>
            <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-zinc-400 sm:grid">
              <div className="text-zinc-100">Nhận yêu cầu</div>
              <div className={classNames(order.isDiscussed ? 'text-zinc-100' : '', 'text-center')}>Thảo luận</div>
              <div className={classNames(order.isPaid ? 'text-zinc-100' : '', 'text-center')}>Thanh toán</div>
              <div className={classNames(order.isPerformed ? 'text-zinc-100' : '', 'text-right')}>Thực thi</div>
            </div>
          </div>
        </div>

      </section> 
    </div>
    )) : (
      <Modal  
        header={'Bạn chưa gửi yêu cầu nào'}
        detail={'Gửi yêu cầu cực kỳ đơn giản và chúng tôi sẽ liên hệ bạn ngay!'}
        name1={'Gửi yêu cầu'}
        name2={'Home'}
        fn1={() => router.push('/boosting')}
        fn2={() => router.push('/')}
        variant={'success'}
      />
    )}

    {errorDeleteOrder && <Modal variant={'error'}/>}

    </div>
  )
}

export default OrderDetail;