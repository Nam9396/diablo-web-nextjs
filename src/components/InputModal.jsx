import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const InputModal = ({ header, detail, value1, fn1, fn2, inputModalDisplay, setInputModalDisplay }) => {
//   const [open, setOpen] = useState(true)
  const router = useRouter();
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={inputModalDisplay} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setInputModalDisplay}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-zinc-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-zinc-100">
                      {header}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-zinc-400">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='my-4 mx-auto w-[80%]'>
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="#User0849 (Discord)"
                      value={value1 || ''}
                      onChange={e => fn1(e.target.value)}
                    />
                  </div>
                </div>

                
                <button 
                  onClick={() => {
                    fn2();
                  }} 
                  className='flex mt-5 sm:mt-6 mx-auto rounded-md bg-indigo-600 px-8 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >Gửi yêu cầu</button>
                
              
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default InputModal;