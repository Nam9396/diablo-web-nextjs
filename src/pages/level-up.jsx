import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Steps from '@/components/Steps'
import image3 from '../../public/images/photos/diablo-3.jpg'
import FAQ from '@/components/FAQ'
import { tiers, classNames } from '../data/frontend_data'
import { toast } from 'react-toastify'
import { sendMessage } from '../../swr/discordSWRFn.js'
import { createOrder } from '../../swr/orderSWRFn.js'
import InputModal from '@/components/InputModal'
import { SpinnerBottom } from '@/components/Spinner'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'



const LevelUp = () => {
  const { localStorageValue } = useSelector(state => state.auth);
  const router = useRouter();
  const [ address, setAddress ] = useState('');
  const [ mainFeature, setMainFeature ] = useState('');
  const [ nameService, setNameService ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ modalDisplay, setModalDisplay ] = useState(false);
  const [ inputModalDisplay, setInputModalDisplay ] = useState(false);

  const { trigger: sendMessageTrigger, isMutating: mutateSendMess, error: senMessageError } = sendMessage();
  const { trigger: createOrderTrigger, isMutating: mutateCreateOrder, error: createOrderError  } = createOrder();

  const setupRequest = (tier) => {
    const combinedString = tier.features.map(str => '\n' + str).join('');
    setNameService(tier.name);
    setMainFeature(combinedString);
    setPrice(tier.price);
  };

  const submitHandler = async (e) => {
    const message = `Client: ${address} \nPackage: ${nameService} \nPrice: ${price} \nMain features: ${mainFeature}`
    
    try {
      const mes = await sendMessageTrigger({ message: message })
      const order = await createOrderTrigger({ nameService, mainFeature, address, price, image: '/images/photos/diablo-2.jpg' });
      if (mes && order) { 
        setModalDisplay(true)
      }
      toast.success('Đã gửi tin nhắn đến Admin')
      setAddress('');
    } catch (err) { 
      toast.error(err?.info || err.error)
      console.log(err)
    }
  }

  const onClickHandler = (tier) => { 
    if (localStorageValue()) { 
      setupRequest(tier);
      setInputModalDisplay(true);
    } else { 
      toast.error('Bạn cần đăng ký/đăng nhập trước khi đặt đơn')
    }
  }
  
  return (
    <>
    <Head>
      <title>Level Up</title>
      <meta
        name="description"
        content="Chọn gói dịch vụ boosting được thiết kế sẵn."
      />
    </Head>
      
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* sologan section */}
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100  sm:text-5xl">
            Chọn gói dịch vụ <span className='text-yellow-500'>được tinh chỉnh</span> phù hợp với bạn
          </h1>
          <p className="mt-6 text-base text-gray-300">
            Tham khảo các gói sẵn có, gửi yêu cầu và bắt đầu cuộc chiến ngay!
          </p>
        </header>
          
        {/* steps section   */}
        
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:items-center my-[80px] w-full'>
          <Steps />
          <div className="relative w-80 h-80 overflow-hidden my-5">
            <Image
              src={image3}
              alt=""
              priority
              fill
              className="object-cover rounded-lg"
            />
          </div>     
        </div>
        
        
        {/* tier section */}
        <div className="isolate mx-auto mt-32 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                'rounded-3xl p-8 xl:p-10',
                'hover:ring-2 hover:ring-gray-400 hover:bg-zinc-800',
                'bg-zinc-950 ring-0',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    'text-yellow-500',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
              </div>
              {/* <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p> */}
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-zinc-100">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-zinc-100">/Gói</span>
              </p>
              <button
                aria-describedby={tier.id}
                className={classNames(
                  'text-yellow-400 bg-transparent ring-1 ring-inset ring-y3ellow-400',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
                onClick={() => onClickHandler(tier)}
              >
                Buy plan
              </button>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-zinc-400">
                    <CheckIcon className="h-6 w-5 flex-none text-yellow-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {modalDisplay &&
      <Modal  
        header={'Cảm ơn sự tin tưởng của bạn!'}
        detail={'Chúng tôi sẽ liên hệ trong vòng 30 phút - 1 giờ. Chúng ta sẽ thảo luận thêm sau đó và bạn sẽ chỉ thanh toàn khi cảm thấy hài lòng.'}
        name1={'Xem chi tiết yêu cầu'}
        name2={'Home'}
        fn1={() => router.push('/order-detail')}
        fn2={() => router.push('/')}
        variant={'success'}
      />}
      
      {inputModalDisplay &&
      <InputModal  
        header={'Cảm ơn sự tin tưởng của bạn!'}
        detail={'Vui lòng cung cấp phương thức liên lạc để chúng tôi liên hệ bạn sớm nhất có thể (email, số zalo hoặc username Discord).'}
        value1={address}
        fn1={setAddress}
        fn2={submitHandler}
        inputModalDisplay={inputModalDisplay}
        setInputModalDisplay={setInputModalDisplay}
      />}

      {(senMessageError || createOrderError) && <Modal variant={'error'}/>}

      {(mutateSendMess || mutateCreateOrder) && <SpinnerBottom />}

    </div>

    <FAQ />
    </>
  )
}


export default LevelUp