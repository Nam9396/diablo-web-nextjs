import Head from 'next/head'
import FAQ from '@/components/FAQ'
import AltarForm from '@/components/AltarsForm'



const AltarsOfLilith = () => {

  return (
    <>
    <Head>
    <title>Altars of Lilith</title>
    <meta
        name="description"
        content="Thay khách hàng thực hiện các nhiệm vụ trong Altars of Lilith."
    />
    </Head>
      
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* sologan section */}
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white  sm:text-5xl">
            Cùng đồng hành trong  <span className='text-yellow-500'>Altars of Lilith.</span>
          </h1>
          <p className="mt-10 text-lg font-medium text-zinc-400">
            Chúng tôi thay mặt bạn thu nhận vật phẩm, khám phá và thực hiện các yêu cầu của Altars.
          </p>
        </header>
      </div>
    </div>
    
    <AltarForm />
    
    <FAQ />
    </>
  )
}

export default AltarsOfLilith