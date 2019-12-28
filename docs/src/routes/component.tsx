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
  },
  {
    path: '/message',
    title: 'Message',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/message'),
    ),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/loading'),
    ),
  },
  {
    path: '/drawer',
    title: 'Drawer',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/drawer'),
    ),
  },
  {
    path: '/badges',
    title: 'Badges',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/badges'),
    ),
  },
  {
    path: '/skeleton',
    title: 'Skeleton',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/skeleton'),
    ),
  },
  {
    path: '/card',
    title: 'Card',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/card'),
    ),
  },
  {
    path: '/menu',
    title: 'Menu',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/menu'),
    ),
  },
  {
    path: '/collapse',
    title: 'Collapse',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/collapse'),
    ),
  },
  {
    path: '/divider',
    title: 'Divider',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/divider'),
    ),
  },
  {
    path: '/text-link',
    title: 'TextLink',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/text-link'),
    ),
  },
  {
    path: '/pagination',
    title: 'Pagination',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/pagination'),
    ),
  },
  {
    path: '/tabs',
    title: 'Tabs',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/tabs'),
    ),
  },
  {
    path: '/back-top',
    title: 'BackTop',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/back-top'),
    ),
  },
  {
    path: '/image',
    title: 'Image',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/image'),
    ),
  },
  {
    path: '/switch',
    title: 'Switch',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/switch'),
    ),
  },
  {
    path: '/demo',
    title: 'Demo',
    component: lazy(() =>
      import(/* webpackChunkName: "route-chunk" */ /* webpackMode: "lazy" */ '../pages/demo'),
    ),
  },
]
