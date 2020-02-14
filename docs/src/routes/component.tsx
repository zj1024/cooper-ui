import { lazy } from 'react'
export default [
  {
    path: '/',
    title: 'Icon',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/icon')),
    desc: '图标',
    exact: true,
  },
  {
    path: '/layout',
    title: 'Layout',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/layout')),
    desc: '布局',
    exact: true,
  },
  {
    path: '/button',
    title: 'Button',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/button')),
    desc: '按钮',
    exact: true,
  },
  {
    path: '/dialog',
    title: 'Dialog',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/dialog')),
    desc: '对话框',
    exact: true,
  },
  {
    path: '/popover',
    title: 'Popover',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/popover')),
    desc: '弹出框',
    exact: true,
  },
  {
    path: '/tooltip',
    title: 'Tooltip',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/tooltip')),
    desc: '文字提示',
    exact: true,
  },
  // {
  //   path: '/input',
  //   title: 'Input',
  //   component: lazy(() => import(* webpackMode: "lazy" */'../pages/input')),
  //   exact: true,
  // },
  {
    path: '/foldcard',
    title: 'Foldcard',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/foldcard')),
    desc: '折叠卡片',
    exact: true,
  },
  {
    path: '/radio',
    title: 'Radio',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/radio')),
    desc: '单选框',
    exact: true,
  },
  {
    path: '/checkbox',
    title: 'Checkbox',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/checkbox')),
    desc: '多选框',
    exact: true,
  },
  {
    path: '/progress',
    title: 'Progress',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/progress')),
    desc: '进度条',
    exact: true,
  },
  {
    path: '/message',
    title: 'Message',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/message')),
    desc: '消息提示',
    exact: true,
  },
  {
    path: '/loading',
    title: 'Loading',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/loading')),
    desc: '加载',
    exact: true,
  },
  {
    path: '/drawer',
    title: 'Drawer',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/drawer')),
    desc: '抽屉',
    exact: true,
  },
  {
    path: '/badges',
    title: 'Badges',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/badges')),
    desc: '徽标',
    exact: true,
  },
  {
    path: '/skeleton',
    title: 'Skeleton',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/skeleton')),
    desc: '骨架屏',
    exact: true,
  },
  {
    path: '/card',
    title: 'Card',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/card')),
    desc: '卡片',
    exact: true,
  },
  {
    path: '/menu',
    title: 'Menu',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/menu')),
    desc: '菜单',
    exact: true,
  },
  {
    path: '/collapse',
    title: 'Collapse',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/collapse')),
    desc: '折叠面板',
    exact: true,
  },
  {
    path: '/divider',
    title: 'Divider',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/divider')),
    desc: '分割线',
    exact: true,
  },
  {
    path: '/text-link',
    title: 'TextLink',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/text-link')),
    desc: '文字链接',
    exact: true,
  },
  {
    path: '/pagination',
    title: 'Pagination',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/pagination')),
    desc: '分页',
    exact: true,
  },
  {
    path: '/tabs',
    title: 'Tabs',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/tabs')),
    desc: '标签页',
    exact: true,
  },
  {
    path: '/back-top',
    title: 'BackTop',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/back-top')),
    desc: '回到顶部',
    exact: true,
  },
  {
    path: '/image',
    title: 'Image',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/image')),
    desc: '图片',
    exact: true,
  },
  {
    path: '/switch',
    title: 'Switch',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/switch')),
    desc: '开关',
    exact: true,
  },
  {
    path: '/result',
    title: 'Result',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/result')),
    desc: '结果页',
    exact: true,
  },
  {
    path: '/date-picker',
    title: 'DatePicker',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/date-picker')),
    desc: '时间选择器',
    exact: true,
  },
  {
    path: '/demo',
    title: 'Demo',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/demo')),
    desc: '测试',
    exact: true,
  },
  {
    path: '/markdown',
    title: 'Markdown',
    component: lazy(() => import(/* webpackMode: "lazy" */ '../pages/markdown')),
    desc: 'markdown',
    exact: true,
  },
]
