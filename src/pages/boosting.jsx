import Head from 'next/head'
import Image from 'next/image'
import { GiDiabloSkull } from 'react-icons/gi'


import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import FAQ from '@/components/FAQ'
import { projects } from '../data/frontend_data'


const Boosting = () =>  {
  return (
    <>
      <Head>
        <title>Dịch vụ Boosting</title>
        <meta
          name="description"
          content="Các dịch vụ boosting."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-white  sm:text-5xl">
            Standing on the <span className='text-yellow-500'>shoulders of giants.</span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Tận dụng kỹ năng của đội ngũ am hiểu thế giới Diablo. Dịch vụ chúng tôi cung cấp cực kỳ dễ hiểu, nhanh chóng và minh bạch.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex items-center justify-center shadow-md shadow-zinc-800/5">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-auto w-full rounded-md"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-yellow-500 text-zinc-600 dark:text-zinc-400">
                  {/* <LinkIcon className="h-6 w-6 flex-none" /> */}
                  <GiDiabloSkull className="h-6 w-6 flex-none"/>
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </div>

        <FAQ />
      </Container>
    </>
  )
}


export default Boosting;