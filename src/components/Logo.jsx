import { GiDiabloSkull } from 'react-icons/gi'
import Link from 'next/link';

const Logo = () => { 

  return (
    <Link href="/" aria-label="Home" className='flex flex-row justify-center items-center'>
      <GiDiabloSkull className='h-10 w-10 text-yellow-500 mr-4' />
      <div className='text-zinc-100 font-bold text-xl'>
        Shadow
        <span className='text-yellow-500 font-bold text-xl'>GG</span>
      </div>
    </Link>
  )
};

export default Logo;