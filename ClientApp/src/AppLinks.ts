import { EmailIcon } from './assets/icons/EmailIcon';
import { LogoutIcon } from './assets/icons/LogoutIcon';
import { ProfileIcon } from './assets/icons/ProfileIcon';
import { SettingsIcon } from './assets/icons/SettingsIcon';
import { DashboardIcon } from './assets/icons/DashboardIcon';
import { WorkApplicationIcon } from './assets/icons/WorkApplicationIcon';

const AppLinks = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    path: 'profile',
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    path: '',
    name: 'Work Permit Application',
    icon: WorkApplicationIcon,
  },
  {
    path: 'emails',
    name: 'Emails',
    icon: EmailIcon,
  },
  {
    path: 'settings',
    name: 'Account Settings',
    icon: SettingsIcon,
  },
  {
    path: 'logout',
    name: 'Logout',
    icon: LogoutIcon,
  },
];

export default AppLinks;
