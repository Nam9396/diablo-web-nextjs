import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Website cung cấp những dịch vụ nào?",
    answer:
      "Chúng tôi cung cấp dịch vụ Boosting (hỗ trợ khách hàng chơi game). Có 3 hình thức, khách hàng chọn gói với các thông số đã được thiết kế sẵn (Power leveling), hoặc khách hàng gửi yêu cầu chi tiết cho chúng tôi (Customised request) và cuối cùng là hỗ trợ thực hiện nhiệm vụ trong Altars Of Lilith. ",
  },
  {
    question: "Khách hàng thanh toán bằng cách nào? ",
    answer:
      "Khách hàng sẽ không thanh toán yêu cầu cho đến khi đã hiểu, trao đổi và thống nhất với Admin của website. Sau khi thống nhất giữa hai bên, khách hàng tiến hành thanh toán theo phương thức đã thỏa thuận, có thể là chuyển khoản ngân hàng, chuyển tiền trong game hoặc bằng bất kỳ hình thức nào mà khách hàng và website cảm thấy thuận lợi.",
  },
  {
    question: "Khách hàng sẽ trao đổi với chúng tôi bằng cách nào? ",
    answer:
      "Khi chọn gói dịch vụ, khách hàng được yêu cầu cung cấp địa chỉ liên lạc; có thể là email, số Zalo hoặc tài khoản Discord (chúng tôi khuyến khích bạn sử dụng Discord). Một tin nhắn được tạo tự động sẽ bao gồm toàn bộ thông tin đơn hàng, gửi đến website. Và chúng tôi sẽ liên hệ bạn sớm nhất có thể.",
  },
  {
    question: "Tại sao bạn có thể tin tưởng chúng tôi? ",
    answer:
      "Có 3 lý do chính. Một là khách hàng có thể trao đổi trực tiếp với Admin của website. Hai là bạn chỉ trả tiền sau khi đã hiểu và trao đổi với Admin, không có bất kỳ yêu cầu thanh toán trước nào. Và cuối cùng, tất cả thông tin về đội ngũ vận hành website được công bố minh bạch.",
  },
  {
    question: "Tôi có thể chọn giờ cho dịch vụ Boosting không? ",
    answer:
      "Hoàn toàn có thể! Tất cả những gì bạn cần làm là để lại yêu cầu về thời gian trong mục ‘Lời nhắn khác’.  Chúng tôi sẽ sắp xếp nhân sự để thực hiện yêu cầu của bạn. Với một số nhiệm vụ yêu cầu sự tham gia của nhiều người cùng một lúc, việc lên kế hoạch theo thời gian định trước có thể gặp khó khăn; chúng tôi sẽ cung cấp cho bạn một thời gian biểu cố định để bạn chọn lựa.",
  },
  {
    question: "Ai sẽ là người thực hiện yêu cầu của tôi?",
    answer:
      "Chúng tôi có đội ngũ Gamer am hiểu về thế giới Diablo. Chỉ những cá nhân tài năng, nghiêm túc với việc tạo thu nhập từ dịch vụ gaming mới được chọn để thực hiện yêu cầu của bạn. Chúng tôi cam kết không dùng bất kỳ phần mềm máy tính nào để thực hiện yêu cầu của bạn. ",
  },
  {
    question: "Tôi theo dõi tiến độ thực hiện yêu cầu của mình như thế nào? ",
    answer:
      "Bạn có thể theo dõi tiến độ thực hiện yêu cầu của mình ở mục ‘Quản lý yêu cầu’ tại tài khoản cá nhân. Ở đây có tất cả thông tin về thanh toán, trao đổi, thực thi. Ngoài ra, Admin sẽ thông tin đến bạn chi tiết hơn ở phần ‘Lời nhắn từ Admin.",
  },
  
]

const FAQ = () => {
  return (
    <div className="mt-[80px] rounded-lg bg-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-zinc-400">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white ">Bạn có câu hỏi?</h2>
          <dl className="mt-10 space-y-6 divide-y divide-zinc-400">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7 text-zinc-100">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6 text-zinc-400" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6 text-zinc-400" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-zinc-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ;