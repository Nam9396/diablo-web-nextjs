import diablo6 from '../../public/images/photos/diablo-6.jpg'
import Image from 'next/image'

const features = [
  {
    name: 'Không scam, không lừa đảo.',
    description: 'Toàn bộ chương trình là thật và bạn có thể kiểm chứng qua đối thoại trực tiếp, theo cách bạn muốn.',
  },
  {
    name: 'Thao tác nhanh chóng.',
    description: 'Các bước chọn chương trình boosting cực kỳ dễ hiểu. Xem các chương trình, để lại lời nhắn và chúng tôi sẽ liên hệ bạn.',
  },
  {
    name: 'Quản lý cam kết minh bạch.',
    description: 'Cập nhật tiến độ chương trình theo thời gian thực, toàn bộ thông tin bạn cần đều có ở mục quản lý tài khoản.',
  },
]

const Features = () => {
  return (
    <div className="overflow-hidden bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 md:pl-10 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">Đáp ứng ngay nhu cầu.</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Bạn sẽ không mất thời gian để chọn lựa và cân nhắc, chúng tôi tư vấn ngay khi bạn yêu cầu.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-yellow-500">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={diablo6}
            alt="Product screenshot"
            className="w-[48rem] max-w-none overflow-clip rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Features;
