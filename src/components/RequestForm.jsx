import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { gameModeData, gamePlatformData, playModeData, classNames } from '../data/frontend_data.js'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Modal from './Modal.jsx'
import { sendMessage } from '../../swr/discordSWRFn.js'
import { createOrder } from '../../swr/orderSWRFn.js'
import Spinner from './Spinner.jsx'
import { useSelector } from 'react-redux'


const SelectMenu = ({ title, array, data, action }) => { 

  return (
  <Listbox value={data} onChange={action}>
    {({ open }) => (
      <>
        <Listbox.Label className="block text-sm font-medium leading-6 text-zinc-100">{title}</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-zinc-100 py-1.5 pl-3 pr-10 text-left text-zinc-700 font-medium shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 sm:text-sm sm:leading-6">
              <span className="block truncate">{data.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-zinc-700" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <Listbox.Options aria-required className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {array.map((mode) => (
                <Listbox.Option
                  key={mode.id}
                  className={({ active }) =>
                  classNames(
                    active ? 'bg-yellow-700 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9'
                  )
                  }
                  value={mode}
                >
                    {({ selected, active }) => (
                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {mode.name}
                        </span>

                        {selected ? (
                        <span
                            className={classNames(
                            active ? 'text-white' : 'text-yellow-700',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                        >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        ) : null}
                    </>
                    )}
                </Listbox.Option>
                ))}
            </Listbox.Options>
            </Transition>
          </div>
      </>
    )}
  </Listbox>
  )
}

const TextInput1 = ({ title, data, action, placeholder }) => { 
  return (
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
      <div className="sm:col-span-4">
        <label htmlFor="text-single-1" className="block text-sm font-medium leading-6 text-zinc-100">
          {title}
        </label>
        <div className="mt-2">
          <input
            id="text-single-1"
            name="text-single-1"
            type="text"
            required
            placeholder={placeholder}
            className="w-full bg-zinc-100 rounded-md border-0 py-1.5 pl-4 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
            value={data || ''}
            onChange={(e) => action(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

const TextInput2 = ({ title, data, action, placeholder }) => { 
  return (
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
      <div className="sm:col-span-4">
        <label htmlFor="text-single-2" className="block text-sm font-medium leading-6 text-zinc-100">
          {title}
        </label>
        <div className="mt-2">
          <input
            id="text-single-2"
            name="text-single-2"
            type="text"
            required
            placeholder={placeholder}
            className="w-full bg-zinc-100 rounded-md border-0 py-1.5 pl-4 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
            value={data || ''}
            onChange={(e) => action(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

const DoubleTextInput = ({ title1, title2, data1, data2, action1, action2 }) => { 
  return (
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
      <div className="col-span-4 sm:col-span-2">
        <label htmlFor="text-double-1" className="block text-sm font-medium leading-6 text-zinc-100">
          {title1}
        </label>
        <div className="mt-2">
          <input
            id="text-double-1"
            name="text-double-1"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-4 bg-zinc-100 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
            value={data1 || ''}
            onChange={(e) => action1(e.target.value)}
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-start-3 sm:col-span-2">
        <label htmlFor="text-double-2" className="block text-sm font-medium leading-6 text-zinc-100">
          {title2}
        </label>
        <div className="mt-2">
          <input
            id="text-double-2"
            name="text-double-2"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-4 bg-zinc-100 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
            value={data2 || ''}
            onChange={(e) => action2(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}; 


const RequestForm = () => {
  const { localStorageValue } = useSelector(state => state.auth);
  const router = useRouter();
  const [ gameMode, setGameMode ] = useState(gameModeData[0]);
  const [ gamePlatform, setGamePlatform ] = useState(gamePlatformData[0]);
  const [ playMode, setPlayMode ] = useState(playModeData[0]);
  const [ currentLevel, setCurrentLevel ] = useState();
  const [ desiredLevel, setDesireLevel ] = useState();
  const [ address, setAddress ] = useState();
  const [ extraRequest, setExtraRequest ] = useState();
  const [ nameService, setNameService ] = useState('Cá nhân hóa yêu cầu');
  const [ modalDisplay, setModalDisplay ] = useState(false);

  const { trigger: sendMessageTrigger } = sendMessage();
  const { trigger: createOrderTrigger, isMutating, error } = createOrder();
  
  // {gameMode, gamePlatform, playMode, currentLevel, desiredLevel, message}
  const submitHandler = async () => { 
    const message = `Client: ${address} \n${gameMode.name} - ${gamePlatform.name} - ${playMode.name} \nLevel hiện tại: ${currentLevel} - Level mong muốn: ${desiredLevel} \nYêu cầu khác: ${extraRequest}`
    const mainFeature = `${gameMode.name} \n${gamePlatform.name} \n${playMode.name} \nLevel hiện tại: ${currentLevel} - Level mong muốn: ${desiredLevel}`
    const extraFeature = extraRequest;
    try {
      const mes = await sendMessageTrigger({ message: message })
      const order = await createOrderTrigger({ nameService, mainFeature, extraFeature, address, price: 'Cùng thảo luận sau', image: '/images/photos/diablo-3.jpg' });
      if (mes && order) { 
        setModalDisplay(true)
      }
      toast.success('Đã gửi tin nhắn đến Admin')
      setAddress(''); setExtraRequest(''); setCurrentLevel(''); setDesireLevel('');
    } catch (err) { 
      toast.error(err?.data || err.error)
      console.log(err)
    }
  }

  const onClickHandler = (e) => { 
    e.preventDefault();
    if (localStorageValue()) { 
      submitHandler();
    } else { 
      toast.error('Bạn cần đăng ký/đăng nhập trước khi đặt đơn');
      setAddress(''); setExtraRequest(''); setCurrentLevel(''); setDesireLevel('');
    }
  };

  return (
    <form onSubmit={onClickHandler} className={clsx('w-[90%] sm:w-[50%] mx-auto p-4 sm:p-8 bg-neutral-200 dark:bg-zinc-800 rounded-lg')}>
      <div>
        <div className='mb-[20px]'><SelectMenu title={'Chọn chế độ game'} data={gameMode} action={setGameMode} array={gameModeData} /></div>
        <div className='mb-[20px]'><SelectMenu title={'Chọn nền tảng'} data={gamePlatform} action={setGamePlatform} array={gamePlatformData} /></div>
        <div className='mb-[20px]'><SelectMenu title={'Chọn chế độ chơi'} data={playMode} action={setPlayMode} array={playModeData} /></div>
        <div className='mb-[20px]'><DoubleTextInput title1={'Level hiện tại'} title2={'Level mong muốn'} data1={currentLevel} data2={desiredLevel} action1={setCurrentLevel} action2={setDesireLevel} /></div>
        <div className='mb-[20px]'><TextInput1 title={'Địa chỉ liên lạc'} data={address} action={setAddress} placeholder={'Username Discord, Email hoặc số Zalo'} /></div>
        <div className='mb-[20px]'><TextInput2 title={'Lời nhắn khác'} data={extraRequest} action={setExtraRequest} placeholder={'Nếu không có, xin ghi là "Không"'} /></div>
      </div>

      <button
        type="submit"
        className="rounded-md mt-[40px] bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Gửi yêu cầu
      </button>

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

      {isMutating && <Spinner />}

      {error && <Modal variant={'error'}/>}
     
    </form>

  )
}

export default RequestForm;