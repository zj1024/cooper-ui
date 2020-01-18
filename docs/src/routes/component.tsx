import { lazy } from 'react'
export default [
  {
    path: '/',
    title: 'Icon',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/icon'),
    ),
    exact: true,
  },
  {
    path: '/layout',
    title: 'Layout',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/layout'),
    ),
    exact: true,
  },
  {
    path: '/button',
    title: 'Button',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/button'),
    ),
    exact: true,
  },
  {
    path: '/dialog',
    title: 'Dialog',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/dialog'),
    ),
    exact: true,
  },
  {
    path: '/popover',
    title: 'Popover',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/popover'),
    ),
    exact: true,
  },
  {
    path: '/tooltip',
    title: 'Tooltip',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/tooltip'),
    ),
    exact: true,
  },
  // {
  //   path: '/input',
  //   title: 'Input',
  //   component: lazy(() => import(/* webpackChunkName: "route-chunk" *//* webpackMode: "lazy" */'../pages/input')),
  //   exact: true,
  // },
  {
    path: '/foldcard',
    title: 'Foldcard',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/foldcard'),
    ),
    exact: true,
  },
  {
    path: '/radio',
    title: 'Radio',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/radio'),
    ),
    exact: true,
  },
  {
    path: '/checkbox',
    title: 'Checkbox',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/checkbox'),
    ),
    exact: true,
  },
  {
    path: '/progress',
    title: 'Progress',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/progress'),
    ),
    exact: true,
  },
  {
    path: '/message',
    title: 'Message',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/message'),
    ),
    exact: true,
  },
  {
    path: '/loading',
    title: 'Loading',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/loading'),
    ),
    exact: true,
  },
  {
    path: '/drawer',
    title: 'Drawer',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/drawer'),
    ),
    exact: true,
  },
  {
    path: '/badges',
    title: 'Badges',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/badges'),
    ),
    exact: true,
  },
  {
    path: '/skeleton',
    title: 'Skeleton',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/skeleton'),
    ),
    exact: true,
  },
  {
    path: '/card',
    title: 'Card',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/card'),
    ),
    exact: true,
  },
  {
    path: '/menu',
    title: 'Menu',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/menu'),
    ),
    exact: true,
  },
  {
    path: '/collapse',
    title: 'Collapse',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/collapse'),
    ),
    exact: true,
  },
  {
    path: '/divider',
    title: 'Divider',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/divider'),
    ),
    exact: true,
  },
  {
    path: '/text-link',
    title: 'TextLink',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/text-link'),
    ),
    exact: true,
  },
  {
    path: '/pagination',
    title: 'Pagination',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/pagination'),
    ),
    exact: true,
  },
  {
    path: '/tabs',
    title: 'Tabs',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/tabs'),
    ),
    exact: true,
  },
  {
    path: '/back-top',
    title: 'BackTop',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/back-top'),
    ),
    exact: true,
  },
  {
    path: '/image',
    title: 'Image',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/image'),
    ),
    exact: true,
  },
  {
    path: '/switch',
    title: 'Switch',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/switch'),
    ),
    exact: true,
  },
  {
    path: '/result',
    title: 'Result',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/result'),
    ),
    exact: true,
  },
  {
    path: '/date-picker',
    title: 'DatePicker',
    component: lazy(() =>
      import(
        /* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/date-picker'
      ),
    ),
    exact: true,
  },
  {
    path: '/demo',
    title: 'Demo',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/demo'),
    ),
    exact: true,
  },
]
