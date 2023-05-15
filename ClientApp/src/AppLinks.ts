import { DashboardIcon } from './assets/icons/DashboardIcon';
import { ProfileIcon } from './assets/icons/ProfileIcon';
import { WorkApplicationIcon } from './assets/icons/WorkApplicationIcon';
import { EmailIcon } from './assets/icons/EmailIcon';
import { SettingsIcon } from './assets/icons/SettingsIcon';
import { LogoutIcon } from './assets/icons/LogoutIcon';

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
    path: 'application',
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
    path: '',
    name: 'Logout',
    icon: LogoutIcon,
  },
];

export default AppLinks;
