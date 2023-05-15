import PermitApplication from './views/PermitApplication';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Settings from './views/Settings';
import Emails from './views/Emails';

const AppRoutes = [
  {
    index: true,
    path: '/application',
    name: 'Work Permit Application',
    Element: PermitApplication,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    Element: Dashboard,
  },
  {
    path: '/profile',
    name: 'Profile',
    Element: Profile,
  },
  {
    path: '/emails',
    name: 'Emails',
    Element: Emails,
  },
  {
    path: '/settings',
    name: 'Account Settings',
    Element: Settings,
  },
  {
    path: '/settings',
    name: 'Account Settings',
    Element: Settings,
  },
];

export default AppRoutes;
