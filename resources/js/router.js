import VueRouter from 'vue-router'
// Pages
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Dashboard from './components/pages/user/Dashboard'
import AdminDashboard from './components/pages/admin/Dashboard'
import PeopleCustomersIndex from './components/pages/admin/people/customers/index'
import PeopleEmployeesIndex from './components/pages/admin/people/employees/index'
import PeopleContactsIndex from './components/pages/admin/people/contacts/index'
import itsNotFound from './components/landing/404'
// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Login,
    meta: {
      auth: undefined
    }
  },
  {
    path : '/404',
    name : 'not.found',
    component : itsNotFound
  },
  {
    path : '*',
    redirect : '/404'
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: AdminDashboard,
    meta: {
      auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }
  },
  {
    path: '/people/customers',
    name: 'people.customer',
    component: PeopleCustomersIndex,
    meta: {
      auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }
  },
  {
    path: '/people/employees',
    name: 'people.employees',
    component: PeopleEmployeesIndex,
    meta: {
      auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }
  },
  {
    path: '/people/contacts',
    name: 'people.contacts',
    component: PeopleContactsIndex,
    meta: {
      auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }
  },
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  linkActiveClass: 'active',
  routes,
})
export default router
router.beforeEach((to, from, next) => {
  window.app.reloader_pane = true;
  next();
});