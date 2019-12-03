import loadable from '@loadable/component'
export default [
  {
    path: '/',
    title: 'Icon',
    component: loadable(() => import('../pages/icon')),
    exact: true,
  },
  {
    path: '/layout',
    title: 'Layout',
    component: loadable(() => import('../pages/layout')),
    exact: true,
  },
  {
    path: '/button',
    title: 'Button',
    component: loadable(() => import('../pages/button')),
    exact: true,
  },
  {
    path: '/dialog',
    title: 'Dialog',
    component: loadable(() => import('../pages/dialog')),
    exact: true,
  },
  {
    path: '/popover',
    title: 'Popover',
    component: loadable(() => import('../pages/popover')),
    exact: true,
  },
  {
    path: '/tooltip',
    title: 'Tooltip',
    component: loadable(() => import('../pages/tooltip')),
    exact: true,
  },
  {
    path: '/input',
    title: 'Input',
    component: loadable(() => import('../pages/input')),
    exact: true,
  },
  {
    path: '/foldcard',
    title: 'Foldcard',
    component: loadable(() => import('../pages/foldcard')),
    exact: true,
  },
  {
    path: '/radio',
    title: 'Radio',
    component: loadable(() => import('../pages/radio')),
    exact: true,
  },
  {
    path: '/checkbox',
    title: 'Checkbox',
    component: loadable(() => import('../pages/checkbox')),
    exact: true,
  },
  {
    path: '/progress',
    title: 'Progress',
    component: loadable(() => import('../pages/progress')),
  },
  {
    path: '/message',
    title: 'Message',
    component: loadable(() => import('../pages/message')),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: loadable(() => import('../pages/loading')),
  },
  {
    path: '/drawer',
    title: 'Drawer',
    component: loadable(() => import('../pages/drawer')),
  },
  {
    path: '/badges',
    title: 'Badges',
    component: loadable(() => import('../pages/badges')),
  },
]
