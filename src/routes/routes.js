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

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '影视',
        component: Dashboard
      },
      {
        path: 'stats',
        name: '游戏',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: '工具箱',
        component: Notifications
      },
      {
        path: 'icons',
        name: '认知拓展',
        component: Icons
      },
      {
        path: 'maps',
        name: 'ACGN',
        component: Maps
      },
      {
        path: 'typography',
        name: '玛利亚之墙',
        component: Typography
      },
      {
        path: 'table-list',
        name: '乳飞专区',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
