import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  // icon是Material icons
  sidebarLinks: [
    {
      name: '影视',
      icon: 'live_tv',
      path: '/admin/show'
    },
    {
      name: '游戏',
      icon: 'sports_esports',
      path: '/admin/game'
    },
    {
      name: '视觉资源',
      icon: 'visibility',
      path: '/admin/see'
    },
    {
      name: 'ACGN',
      icon: 'face_4',
      path: '/admin/ACGN'
    },
    {
      name: '工具箱',
      icon: 'home_repair_service',
      path: '/admin/toolBox'
    },
    {
      name: '认知拓展',
      icon: 'collections_bookmark',
      path: '/admin/kown'
    },
    {
      name: '人工智能',
      icon: 'charging_station',
      path: '/admin/ai'
    },
    {
      name: '玛利亚之墙',
      icon: 'texture',
      path: '/admin/wall'
    },
    {
      name: '乳飞专区',
      icon: 'airplane_ticket',
      path: '/admin/badfly'
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
