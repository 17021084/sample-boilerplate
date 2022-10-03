const Constants = {
  navigators: [
    { key: '1', icon: 'feather-bar-chart-2', label: 'Tổng quan' },
    { key: '2', icon: 'feather-user', label: 'Quản lý khách hàng' },
    { key: '3', icon: 'feather-calendar', label: 'Quản lý lịch hẹn' },
    { key: '4', icon: 'feather-shopping-bag', label: 'Quản lý đơn hàng' },
    {
      key: '5',
      icon: 'feather-film',
      label: 'Quản lý bài viết',
      child: [
        { key: '6', icon: '', label: 'Tin tức' },
        { key: '7', icon: '', label: 'Video' }
      ]
    },
    {
      key: '8',
      icon: 'feather-settings',
      label: 'Cài đặt',
      child: [
        { key: '9', icon: '', label: 'Phiên đấu giá' },
        { key: '10', icon: '', label: 'Danh mục máy' }
      ]
    }
  ],
  auctionsStatus: [
    { id: 'all', code: 'all', content: 'Tất cả' },
    { id: 0, code: 'pending', content: 'Chờ xác nhận' },
    { id: 1, code: 'confirmed', content: 'Đã hoàn thành' },
    { id: 2, code: 'success', content: 'Thành công' },
    { id: 3, code: 'canceled', content: 'Đã hủy' },
    { id: 4, code: 'failed', content: 'Thất bại' }
  ],
  contentPage: [
    {},
    { title: 'Tổng quan', link: '/home' },
    { title: 'Quản lý khách hàng', link: '/schedule' },
    { title: 'Quản lý lịch hẹn', link: '/customer' },
    { title: 'Quản lý đơn hàng', link: '/order' },
    {
      title: 'Quản lý bài viết',
      link: '/post',
      child: [
        { title: 'Tin tức', link: '/post/news' },
        { title: 'Video', link: '/post/video' }
      ]
    },
    {
      title: 'Cài đặt',
      link: '/setting',
      child: [
        { title: 'Phiên đấu giá', link: '/setting/auction' },
        { title: 'Danh mục máy', link: '/setting/category' }
      ]
    }
  ],
  dropdownStatus: {
    pending: 'Chờ xác nhận',
    confirmed: 'Đã hoàn thành',
    success: 'Thành công',
    canceled: 'Đã hủy',
    failed: 'Thất bại'
  }
}

export default Constants
