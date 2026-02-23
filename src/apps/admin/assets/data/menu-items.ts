import { MenuItemType } from '@/shared/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'menu',
    label: 'MENU...',
    isTitle: true,
  },
  {
    key: 'dashboards',
    label: 'dashboard',
    icon: 'mingcute:home-3-line',
    url: '/admin/dashboards',
  },
  {
    key: 'auth',
    label: 'Authentication',
    icon: 'mingcute:user-3-line',
    children: [
      {
        key: 'sign-in',
        label: 'Sign In',
        url: '/admin/auth/sign-in',
        parentKey: 'auth',
      },
      {
        key: 'sign-up',
        label: 'Sign Up',
        url: '/admin/auth/sign-up',
        parentKey: 'auth',
      },
      {
        key: 'reset-password',
        label: 'Reset Password',
        url: '/admin/auth/reset-password',
        parentKey: 'auth',
      },
      {
        key: 'lock-screen',
        label: 'Lock Screen',
        url: '/admin/auth/lock-screen',
        parentKey: 'auth',
      },
    ],
  },
]
