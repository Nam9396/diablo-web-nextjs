import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition hover:text-teal-500 text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {

  return (
    <>
      <Head>
        <title>Giới thiệu</title>
        <meta
          name="description"
          content="Chào mừng bạn đến với shadowgg.com! Chúng tôi chuyên cung cấp các dịch vụ về game, đáng tin cậy, nhanh chóng và hiệu quả."
        />
      </Head>
      <div className="fixed inset-0 -z-10 flex justify-center bg-zinc-900"></div>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="relative max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={'/images/khoa-avatar.jpg'}
                alt=""
                width={512}
                height={320}
                // sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Chào mừng bạn đến với shadowgg.com! Chúng tôi chuyên cung cấp các dịch vụ về game, đáng tin cậy, nhanh chóng và hiệu quả.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-400">
              <p>
              Chào mừng các bạn đến với Website của tôi. Tôi là một game thủ chuyên nghiệp với kinh nghiệm lâu năm trong việc chơi các tựa game RPG. Tôi sống tại Việt Nam và đang làm nghề cày game để kiếm sống. Tôi luôn đặt uy tín, tính nghiêm túc và chuyên nghiệp lên hàng đầu trong công việc của mình.
              </p>
              <p>
              Tôi đã gây dựng được một đội ngũ các game thủ chuyên nghiệp và đáng tin cậy như tôi. Chúng tôi có kinh nghiệm trong việc đáp ứng nhu cầu của các game thủ và hiểu rõ cách mang lại sự thoả mãn cho người chơi. Với 15 năm kinh nghiệm trong việc chơi các tựa game RPG, tôi đã có thể tích lũy được những kiến thức và kỹ năng cần thiết để giúp các game thủ khác đạt được thành công. Tôi hiểu rõ các yếu tố quan trọng trong việc chơi game như kỹ năng, chiến thuật và sự kiên trì. Tôi cũng luôn cập nhật và học hỏi những điều mới nhất về các tựa game để giúp đội ngũ của tôi và các game thủ khác luôn cải thiện kỹ năng và đạt được thành công trong thế giới game. Tôi tin rằng sự nghiêm túc, tính chuyên nghiệp và uy tín của tôi sẽ làm hài lòng những game thủ khó tính nhất. Tôi luôn sẵn sàng hỗ trợ và giúp đỡ các game thủ khác trong việc đạt được mục tiêu của họ trong thế giới game.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-700/40"
              >
                ndakhoa.work@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
