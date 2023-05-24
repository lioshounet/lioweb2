import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/components/Dashboard/Views/Dashboard.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import See from 'src/components/Dashboard/Views/See.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/show'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'show',
        name: '影视',
        component: Dashboard
      },
      {
        path: 'game',
        name: '游戏',
        component: UserProfile
      },
      {
        path: 'see',
        name: '视觉资源',
        component: See
      },
      {
        path: 'toolBox',
        name: '工具箱',
        component: Notifications
      },
      {
        path: 'kown',
        name: '认知拓展',
        component: Icons
      },
      {
        path: 'ACGN',
        name: 'ACGN',
        component: Maps
      },
      {
        path: 'wall',
        name: '玛利亚之墙',
        component: Typography
      },
      {
        path: 'badfly',
        name: '乳飞专区',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
