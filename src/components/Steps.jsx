import { CheckIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import { FaGamepad } from 'react-icons/fa'

const timeline = [
  {
    id: 1,
    content: 'Chọn gói boosting phù hợp',
    icon: CheckIcon,
    iconBackground: 'bg-teal-500',
  },
  {
    id: 2,
    content: 'Gửi yêu cầu',
    icon: UserIcon,
    iconBackground: 'bg-teal-500',
  },
  {
    id: 3,
    content: 'Trao đổi với admin ',
    icon: ChatBubbleLeftRightIcon,
    iconBackground: 'bg-teal-500',
  },
  {
    id: 4,
    content: 'Thanh toán và chiến thôi!',
    icon: FaGamepad,
    iconBackground: 'bg-teal-500',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Steps = () => {
  return (
    <div className="flow-root w-ful sm:w-[30%]">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-yellow-700" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center bg-yellow-700'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-zinc-100">
                      {event.content}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Steps;