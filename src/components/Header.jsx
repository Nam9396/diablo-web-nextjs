import { Fragment, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import UserTaskbar from './UserTaskBar.jsx'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router.js'
import Logo from './Logo.jsx'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-500/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-zinc-900 p-4 text-lg tracking-tight text-zinc-100 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/about">About</MobileNavLink>
            {/* <MobileNavLink href="/articles">Items</MobileNavLink> */}
            <MobileNavLink href="/boosting">Boosting</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            {/* <MobileNavLink href="/order-detail">Contact</MobileNavLink> */}
            <MobileNavLink href="/auth">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 mx-3 transition',
          isActive
            ? 'text-yellow-400'
            : 'hover:text-yellow-500'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0" />
        )}
      </Link> 
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className={clsx(
        "flex",
        "px-10 py-2 text-md font-medium text-white "
      )}>
        <NavItem href="/about">About</NavItem>
        {/* <NavItem href="/articles">Market</NavItem> */}
        <NavItem href="/boosting">Boosting</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        {/* <NavItem href="/order-detail">Contact</NavItem> */}
      </ul>
    </nav>
  )
}

// function clamp(number, a, b) {
//   let min = Math.min(a, b)
//   let max = Math.max(a, b)
//   return Math.min(Math.max(number, min), max)
// }

export default function Header () {
  const { localStorageValue } = useSelector(state => state.auth);
  // let isHomePage = useRouter().pathname === '/'
  // let headerRef = useRef()
  // let isInitial = useRef(true)

  // useEffect(() => {
  //   let downDelay = 0
  //   let upDelay = 64

  //   function setProperty(property, value) {
  //     document.documentElement.style.setProperty(property, value)
  //   }

  //   function removeProperty(property) {
  //     document.documentElement.style.removeProperty(property)
  //   }

  //   function updateHeaderStyles() {
  //     let { top, height } = headerRef.current.getBoundingClientRect()
  //     let scrollY = clamp(
  //       window.scrollY,
  //       0,
  //       document.body.scrollHeight - window.innerHeight
  //     )

  //     if (isInitial.current) {
  //       setProperty('--header-position', 'sticky')
  //     }

  //     setProperty('--content-offset', `${downDelay}px`)

  //     if (isInitial.current || scrollY < downDelay) {
  //       setProperty('--header-height', `${downDelay + height}px`)
  //       setProperty('--header-mb', `${-downDelay}px`)
  //     } else if (top + height < -upDelay) {
  //       let offset = Math.max(height, scrollY - upDelay)
  //       setProperty('--header-height', `${offset}px`)
  //       setProperty('--header-mb', `${height - offset}px`)
  //     } else if (top === 0) {
  //       setProperty('--header-height', `${scrollY + height}px`)
  //       setProperty('--header-mb', `${-scrollY}px`)
  //     }

  //     if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
  //       setProperty('--header-inner-position', 'fixed')
  //       removeProperty('--header-top')
  //       removeProperty('--avatar-top')
  //     } else {
  //       removeProperty('--header-inner-position')
  //       setProperty('--header-top', '0px')
  //       setProperty('--avatar-top', '0px')
  //     }
  //   }

  //   function updateStyles() {
  //     updateHeaderStyles()
  //     isInitial.current = false
  //   }

  //   updateStyles()
  //   window.addEventListener('scroll', updateStyles, { passive: true })
  //   window.addEventListener('resize', updateStyles)

  //   return () => {
  //     window.removeEventListener('scroll', updateStyles)
  //     window.removeEventListener('resize', updateStyles)
  //   }
  // }, [isHomePage])



  return (
    <header className="py-10">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Logo />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>

          {/* auth section */}
          {!localStorageValue() && 
            <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block text-white hover:text-yellow-400">
              <Link href={'/auth'}>Sign in</Link>
            </div>
            <Link
              href={'/register'}
              className="py-2 px-4 rounded-lg font-medium text-white bg-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            ><span>Register</span>
            </Link>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
            </div>
          }

          {/* user profile section */}
          {localStorageValue() &&
          <div className="flex flex-1 items-center justify-end">
            <div className="flex items-center lg:ml-8">
              <div className="flex space-x-8">

                <div className="flex">
                  <span className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">User taskbar</span>
                    <UserTaskbar />
                  </span>
                </div>
              </div>

              <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
          }
        </nav>
      </div>
    </header>
  )
}

