import Head from 'next/head'
import FAQ from '@/components/FAQ'
import RequestForm from '@/components/RequestForm'


const CustomiseRequest = () =>  {
  
  return (
    <>
    <Head>
      <title>Customised request</title>
      <meta
        name="description"
        content="Cá nhân hóa yêu cầu của khách hàng."
      />
    </Head>
      
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* sologan section */}
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100  sm:text-5xl">
            Gửi yêu cầu - <span className='text-yellow-500'>Theo ý muốn</span>
          </h1>
          <p className="mt-10 text-lg font-medium text-gray-300">
            Và chúng tôi sẽ liên hệ bạn trong vòng 30 phút đến 1 giờ.
          </p>
        </header>
      </div>
    </div>
    
    <RequestForm />
    
    <FAQ />
    </>
  )
}

export default CustomiseRequest