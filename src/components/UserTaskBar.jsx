import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { UserIcon } from '@heroicons/react/20/solid'
import { signOut } from 'next-auth/react'
import { toast } from 'react-toastify'
import { logOutUser } from '../../swr/userSWRFn.js'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserTaskbar = () => {
  const [ userName, setUserName ] = useState('');
  
  const { trigger, isMutating } = logOutUser();

  const logoutHandler = async() => {
    try { 
      await trigger();
      await signOut();
      localStorage.removeItem('diabloUser');
      toast.success('User logout')
    } catch(err) { 
      toast.error(err?.data || err?.error)
    }
  }

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem('diabloUser')))
  }, [])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <UserIcon className="h-6 w-6 text-zinc-100 hover:text-yellow-700" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-medium'
                  )}
                >
                  {userName}
                </span>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  href='/profile'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/order-detail'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Quản lý yêu cầu
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                )}
                onClick={logoutHandler} 
              >
                Đăng xuất
              </button>
            )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserTaskbar;