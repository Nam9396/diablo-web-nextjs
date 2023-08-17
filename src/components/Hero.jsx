import Image from 'next/image'
import clsx from 'clsx'
import image1 from '../../public/images/photos/diablo-1.jpg'
import image2 from '../../public/images/photos/diablo-2.jpg'
import image3 from '../../public/images/photos/diablo-3.jpg'
import image4 from '../../public/images/photos/diablo-4.jpg'
import image5 from '../../public/images/photos/diablo-5.jpg'

import { Container } from './Container'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <Container>
        <div className="pb-16 pt-10 text-center lg:pt-32 lg:px-[100px]">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl text-zinc-100">
           Make your Diablo journey{' '}
            <span className="relative whitespace-nowrap text-yellow-500">more exciting</span>{' '}
            together.
          </h1>
          <p className="mt-10 text-lg font-medium text-zinc-400">
            Chúng tôi mang đến cho bạn một trải nghiệm chuyên nghiệp, đáng tin cậy và hiệu quả trong hành trình chinh phục thế giới Diablo.
          </p>
        </div>
      </Container>

      <Photos />
    </>
  )
}

export default Hero;