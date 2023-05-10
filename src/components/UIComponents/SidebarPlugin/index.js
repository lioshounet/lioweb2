import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '影视',
      icon: 'dashboard',
      path: '/admin/dashboard'
    },
    {
      name: '游戏',
      icon: 'person',
      path: '/admin/stats'
    },
    {
      name: 'ACGN',
      icon: 'location_on',
      path: '/admin/maps'
    },
    {
      name: '工具箱',
      icon: 'notifications',
      path: '/admin/notifications'
    },
    {
      name: '认知拓展',
      icon: 'bubble_chart',
      path: '/admin/icons'
    },
    {
      name: '玛利亚之墙',
      icon: 'library_books',
      path: '/admin/typography'
    },
    {
      name: '乳飞专区',
      icon: 'content_paste',
      path: '/admin/table-list'
    },
  ],
  displaySidebar(value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get() {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
