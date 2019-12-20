import { lazy } from 'react'
export default [
  {
    path: '/',
    title: 'Icon',
    component: lazy(() => import('../pages/icon')),
    exact: true,
  },
  {
    path: '/layout',
    title: 'Layout',
    component: lazy(() => import('../pages/layout')),
    exact: true,
  },
  {
    path: '/button',
    title: 'Button',
    component: lazy(() => import('../pages/button')),
    exact: true,
  },
  {
    path: '/dialog',
    title: 'Dialog',
    component: lazy(() => import('../pages/dialog')),
    exact: true,
  },
  {
    path: '/popover',
    title: 'Popover',
    component: lazy(() => import('../pages/popover')),
    exact: true,
  },
  {
    path: '/tooltip',
    title: 'Tooltip',
    component: lazy(() => import('../pages/tooltip')),
    exact: true,
  },
  {
    path: '/input',
    title: 'Input',
    component: lazy(() => import('../pages/input')),
    exact: true,
  },
  {
    path: '/foldcard',
    title: 'Foldcard',
    component: lazy(() => import('../pages/foldcard')),
    exact: true,
  },
  {
    path: '/radio',
    title: 'Radio',
    component: lazy(() => import('../pages/radio')),
    exact: true,
  },
  {
    path: '/checkbox',
    title: 'Checkbox',
    component: lazy(() => import('../pages/checkbox')),
    exact: true,
  },
  {
    path: '/progress',
    title: 'Progress',
    component: lazy(() => import('../pages/progress')),
  },
  {
    path: '/message',
    title: 'Message',
    component: lazy(() => import('../pages/message')),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: lazy(() => import('../pages/loading')),
  },
  {
    path: '/drawer',
    title: 'Drawer',
    component: lazy(() => import('../pages/drawer')),
  },
  {
    path: '/badges',
    title: 'Badges',
    component: lazy(() => import('../pages/badges')),
  },
  {
    path: '/skeleton',
    title: 'Skeleton',
    component: lazy(() => import('../pages/skeleton')),
  },
  {
    path: '/card',
    title: 'Card',
    component: lazy(() => import('../pages/card')),
  },
  {
    path: '/menu',
    title: 'Menu',
    component: lazy(() => import('../pages/menu')),
  },
  {
    path: '/collapse',
    title: 'Collapse',
    component: lazy(() => import('../pages/collapse')),
  },
  {
    path: '/demo',
    title: 'Demo',
    component: lazy(() => import('../pages/demo')),
  },
  {
    path: '/divider',
    title: 'Divider',
    component: lazy(() => import('../pages/divider')),
  },
  {
    path: '/text-link',
    title: 'TextLink',
    component: lazy(() => import('../pages/text-link')),
  },
]
