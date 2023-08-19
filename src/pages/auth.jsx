import { GiDiabloSkull } from 'react-icons/gi'
import { BiLogoGmail } from 'react-icons/bi'
import { BsDiscord } from 'react-icons/bs'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { authUser, oauthUser } from '../../swr/userSWRFn.js'
import { toast } from 'react-toastify'
import { setExecuteStatus } from 'redux/authSlice'
import { SpinnerBottom } from '@/components/Spinner.jsx'
import Modal from '@/components/Modal.jsx'

const Auth = () =>  {
  const router = useRouter();
  const dispatch = useDispatch();
  const { canExecuted } = useSelector(state => state.auth);
  const { data: session } = useSession();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // traditional auth section
  const { trigger, isMutating: mutateAuth, error: errorAuth } = authUser();
  const submitHandler = async(e) => {
    try { 
      e.preventDefault(); 
      const user = await trigger({ email, password });
      toast.success('User login!');
      localStorage.setItem('diabloUser', JSON.stringify(user.email));
      setEmail(''); setPassword('');
      router.push('/boosting');
    } catch(err) { 
      setEmail(''); setPassword('');
      toast.error(err?.info || err?.error)
    }
  }

  // oauth section
  const { trigger: oauthUserTrigger, isMutating: mutateOauth, error: errorOauth } = oauthUser();
  useEffect(() => {
    const oauthUserHanlder = async() => { 
      try { 
        const user = await oauthUserTrigger({ email: session.user.email, oauthProvider: session.provider, accessToken: session.accessToken });
        toast.success('User login!');
        localStorage.setItem('diabloUser', JSON.stringify(user.email));
        router.push('/boosting');
      } catch(err) { 
        toast.error(err?.info || err.error);
      }
    }
    if (session && canExecuted) { 
      oauthUserHanlder();
      dispatch(setExecuteStatus())
    }
  }, [session, dispatch, oauthUserTrigger, router, canExecuted])
  
 
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        {/* header section */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <GiDiabloSkull className='text-yellow-500 mx-auto h-20 w-20' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
            Đăng nhập vào tài khoản
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            {/* email section */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-100">
                Email
              </label>
              <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
            </div>
            {/* password section */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-100">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {/* btn section */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-100 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Đăng nhập
              </button>
            </div>
          </form>


          {/* Oauth2 section  */}
          <div>
            <div className="relative mt-10">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-400" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="px-4 text-zinc-400 bg-zinc-900">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                onClick={() => signIn('google')}
              >
                <BiLogoGmail/>
                <span className="text-sm font-semibold leading-6">Gmail</span>
              </button>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                onClick={() => signIn('discord')}
              >
                <BsDiscord />
                <span className="text-sm font-semibold leading-6">Discord</span>
              </button>
            </div>
          </div>


          <p className="mt-10 text-center text-sm text-gray-400">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
              Đăng ký cực đơn giản
            </Link>
          </p>
        </div>

        {(mutateAuth || mutateOauth) && <SpinnerBottom />}

        {(errorAuth || errorOauth) && <Modal variant={'error'} />}

      </div>
    </>
  )
}

export default Auth