import diablo2 from '../../public/images/photos/diablo-2.jpg'
import diablo3 from '../../public/images/photos/diablo-3.jpg'
import diablo4 from '../../public/images/photos/diablo-4.jpg'

// form data
export const gameModeData = [
  { id: 1, name: 'Eternal Realm - Softcore' },
  { id: 2, name: 'Eternal Realm - Hardcore' },
  { id: 3, name: 'Sesonal Realm - Softcore' },
  { id: 4, name: 'Sesonal Realm - Hardcore' },
]

export const gamePlatformData = [
  { id: 1, name: 'PC' },
  { id: 2, name: 'Playstation 5' },
]

export const playModeData = [
  { id: 1, name: 'Self-play (bạn tự chơi và tham gia cùng chúng tôi trong Dungeon)' },
  { id: 2, name: 'Pilot (bạn giao tài khoản và chúng tôi chơi cho bạn)' },
]

export const altarAreaData = [
  { id: 1, name: 'Một vùng cụ thể khác, hãy điền tên vùng này vào mục yêu cầu khác' }, 
  { id: 2, name: 'Dry Steppes' }, 
  { id: 3, name: 'Fractured Peaks' },
  { id: 4, name: 'Hawezar' }, 
  { id: 5, name: 'Kehjistan' }, 
  { id: 6, name: 'Scosglen' }, 
]

//class function 
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//level boosting tiers
export const tiers = [
  {
    name: 'Silver',
    id: '1',
    price: '20.000 vnd',
    description: 'Gói trải nghiệm cho người mới dùng.',
    features: ['Số lượng Run: 5', 'Lượng kinh nghiệm/1 map: 1.300.000', 'Thời gian hoàn thành Dungeon (phút): 20', 'Tiết kiệm: 1%'],
  },
  {
    name: 'Gold',
    id: '2',
    price: '39.200 vnd',
    description: 'Phuf ho.',
    features: ['Số lượng Run: 10', 'Lượng kinh nghiệm/1 map: 1.300.000', 'Thời gian hoàn thành Dungeon (phút): 40', 'Tiết kiệm: 0.98%'],
  },
  {
    name: 'Platinum',
    id: '3',
    price: '190.000 vnd',
    description: 'orem ipsum..',
    features: ['Số lượng Run: 50', 'Lượng kinh nghiệm/1 map: 1.300.000', 'Thời gian hoàn thành Dungeon (phút): 200', 'Tiết kiệm: 0.95%'],
  },
  {
    name: 'Diamond',
    id: '4',
    price: '360.000 vnd',
    description: 'orem ipsum..',
    features: ['Số lượng Run: 100', 'Lượng kinh nghiệm/1 map: 1.300.000', 'Thời gian hoàn thành Dungeon (phút): 400', 'Tiết kiệm: 0.9%'], 
  },
]

//projets for homepage
export const projects = [
  {
    name: 'Power leveling',
    description:
    'Hỗ trợ tăng level trong thế giới Diablo. Khách hàng chọn các gói dịch vụ sẵn có, trao đổi trực tiếp, xác minh rõ ràng.',
    link: { href: '/level-up', label: 'Đăng ký ngay' },
    logo: diablo2,
  },
  {
    name: 'Altars of Lilith',
    description:
    'Chúng tôi thay bạn thực hiện nhiệm vụ, thu thập vật phẩm và chia sẽ kinh nghiệm chinh phục Thế giới của chúa quỷ Lilith.',
    link: { href: 'altars-of-lilith', label: 'Đăng ký ngay' },
    logo: diablo4,
  },
  {
    name: 'Cá nhân hóa yêu cầu',
    description:
    'Bạn biết rõ bản thân muốn gì, bạn có yêu cầu đặc biệt trong thời gian cụ thể và cần người thực thi. Cùng trao đổi và lên kế hoạch với chúng tôi',
    link: { href: '/customise-request', label: 'Đăng ký ngay' },
    logo: diablo3,
  },
]