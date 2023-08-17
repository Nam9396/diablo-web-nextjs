
import { 
  PiNumberCircleOneFill, 
  PiNumberCircleTwoFill, 
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill, 
  PiNumberCircleFiveFill, 
  PiNumberCircleSixFill
} from 'react-icons/pi';


const features = [
  {
    name: 'Chọn dịch vụ.',
    description: 'Mỗi dịch vụ đều bao gồm thông tin chi tiết và thiết kế phù hợp với người dùng.',
    icon: PiNumberCircleOneFill,
  },
  {
    name: 'Gửi tin nhắn đến chúng tôi.',
    description: 'Khi bạn chọn dịch vụ, mọi thông tin được tự động gửi đến website và chúng tôi sẽ liên hệ theo địa chỉ bạn cung cấp.',
    icon: PiNumberCircleTwoFill,
  },
  {
    name: 'Cùng thảo luận.',
    description: 'Chúng ta sẽ cùng thảo luận cụ thể trước khi triển khai.',
    icon: PiNumberCircleThreeFill,
  },
  {
    name: 'Thanh toán đơn giản.',
    description: 'Bạn chỉ thanh toán sau khi đã hiểu rõ và tin tưởng, tất cả dịch vụ đều không yêu cầu thanh toán trước.',
    icon: PiNumberCircleFourFill,
  },
  {
    name: 'Triển khai yêu cầu của bạn.',
    description: 'Đội ngũ của chúng tôi sẽ thực hiện yêu cầu đúng như đã thảo luận.',
    icon: PiNumberCircleFiveFill,
  },
  {
    name: 'Chủ động theo dõi.',
    description: 'Tiến độ thực thi sẽ được cập nhật thường xuyên tại mục quản lý đơn yêu cầu (phần tin nhắn của admin).',
    icon: PiNumberCircleSixFill,
  },
]
  
const FeatureSteps = () => {
  return (
    <div className="bg-zinc-700/[0.15] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">Quá nhiều bước</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Khiến bạn khó hiểu.</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Mọi dịch vụ chúng tôi cung cấp đều bao gồm 6 bước đơn giản và bạn toàn quyền kiểm soát.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-6 w-6 text-yellow-400" aria-hidden="true" />
                {feature.name}
            </dt>{' '}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
        </dl>
      </div>
    </div>
  )
}

export default FeatureSteps;