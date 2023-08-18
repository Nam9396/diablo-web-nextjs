import Head from 'next/head'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FeatureSteps from '@/components/FeatureSteps'
import { sendMessage } from '../../swr/discordSWRFn.js'
import { toast } from 'react-toastify'
import { useState } from 'react'
import HomeBlog from '@/components/HomeBlog.jsx'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100/10 stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-500"
      />
    </svg>
  )
}

function Newsletter() {
  const [ address, setAddress ] = useState('');
  const { trigger: sendMessageTrigger, error: senMessageError } = sendMessage();

  const submitHandler = async (e) => {
    e.preventDefault();
    const message = `Client: ${address} muốn chúng ta chủ động liên hệ`
    try {
      await sendMessageTrigger({ message: message })
      toast.success('Đã gửi tin nhắn đến Admin')
      setAddress('');
    } catch (err) { 
      toast.error(err?.info || err.error)
      console.log(err)
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      className="md:w-[70%] mx-auto my-20 rounded-2xl border p-6 border-zinc-700/40"
    >
      <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-500">Để lại thông tin và chúng tôi sẽ liên hệ bạn.</p>
      <p className="mt-2 text-sm text-zinc-100">
        Ví dụ: Discord username: #user08497 hoặc user@gmail.com
      </p>
      <div className="mt-6 flex">
        <input
          type="text"
          placeholder="Ưu tiên tài khoản Discord."
          aria-label="Contact address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-700/40 px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 focus:border-teal-500 focus:outline-none focus:ring-4 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:ring-teal-400/10 sm:text-sm"
          value={address || ''}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit" className="ml-4 flex-none">
          <MailIcon className="h-6 w-6 flex-none" />
        </Button>
      </div>
    </form>
  )
}


export default function Home() {
  return (
    <>
      <Head>
        <title>
          ShadowGG - Game boosting servive
        </title>
        <meta
          name="description"
          content="Khoa gaming cung cấp dịch vụ game boosting và nhiều hỗ trợ khác. Dịch vụ của chúng tôi đáng tin cậy, dễ sử dụng và đáp ứng nhu cầu khách hàng nhanh chóng."
        />
      </Head>
      
      <Hero />

      <Features />

      <FeatureSteps />
    
      <Container>
        <Newsletter />
      </Container>

      <HomeBlog />
    </>
  )
}

