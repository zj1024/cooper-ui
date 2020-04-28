import { lazy } from 'react'

export default [
  {
    path: '/components/icon',
    title: 'Icon',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/icon')),
    desc: '图标',
    exact: true,
  },
  {
    path: '/components/layout',
    title: 'Layout',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/layout')),
    desc: '布局',
    exact: true,
  },
  {
    path: '/components/button',
    title: 'Button',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/button')),
    desc: '按钮',
    exact: true,
  },
  {
    path: '/components/dialog',
    title: 'Dialog',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/dialog')),
    desc: '对话框',
    exact: true,
  },
  {
    path: '/components/popover',
    title: 'Popover',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/popover')),
    desc: '弹出框',
    exact: true,
  },
  {
    path: '/components/tooltip',
    title: 'Tooltip',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/tooltip')),
    desc: '文字提示',
    exact: true,
  },
  {
    path: '/components/input',
    title: 'Input',
    desc: '输入框',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/input/index')),
    exact: true,
  },
  // {
  //   path: '/components/foldcard',
  //   title: 'Foldcard',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/foldcard')),
  //   desc: '折叠卡片',
  //   exact: true,
  // },
  {
    path: '/components/radio',
    title: 'Radio',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/radio')),
    desc: '单选框',
    exact: true,
  },
  // {
  //   path: '/components/checkbox',
  //   title: 'Checkbox',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/checkbox')),
  //   desc: '多选框',
  //   exact: true,
  // },
  {
    path: '/components/progress',
    title: 'Progress',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/progress')),
    desc: '进度条',
    exact: true,
  },
  {
    path: '/components/message',
    title: 'Message',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/message')),
    desc: '消息提示',
    exact: true,
  },
  {
    path: '/components/loading',
    title: 'Loading',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/loading')),
    desc: '加载',
    exact: true,
  },
  {
    path: '/components/drawer',
    title: 'Drawer',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/drawer')),
    desc: '抽屉',
    exact: true,
  },
  {
    path: '/components/badge',
    title: 'Badge',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/badge')),
    desc: '徽标',
    exact: true,
  },
  {
    path: '/components/skeleton',
    title: 'Skeleton',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/skeleton')),
    desc: '骨架屏',
    exact: true,
  },
  {
    path: '/components/card',
    title: 'Card',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/card')),
    desc: '卡片',
    exact: true,
  },
  // {
  //   path: '/components/menu',
  //   title: 'Menu',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/menu')),
  //   desc: '菜单',
  //   exact: true,
  // },
  {
    path: '/components/collapse',
    title: 'Collapse',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/collapse')),
    desc: '折叠面板',
    exact: true,
  },
  {
    path: '/components/divider',
    title: 'Divider',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/divider')),
    desc: '分割线',
    exact: true,
  },
  {
    path: '/components/text-link',
    title: 'TextLink',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/text-link')),
    desc: '文字链接',
    exact: true,
  },
  {
    path: '/components/pagination',
    title: 'Pagination',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/pagination')),
    desc: '分页',
    exact: true,
  },
  // {
  //   path: '/components/tabs',
  //   title: 'Tabs',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/tabs')),
  //   desc: '标签页',
  //   exact: true,
  // },
  {
    path: '/components/back-top',
    title: 'BackTop',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/back-top')),
    desc: '回到顶部',
    exact: true,
  },
  // {
  //   path: '/components/image',
  //   title: 'Image',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/image')),
  //   desc: '图片',
  //   exact: true,
  // },
  {
    path: '/components/switch',
    title: 'Switch',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/switch')),
    desc: '开关',
    exact: true,
  },
  {
    path: '/components/result',
    title: 'Result',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/result')),
    desc: '结果',
    exact: true,
  },
  // {
  //   path: '/components/date-picker',
  //   title: 'DatePicker',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/date-picker')),
  //   desc: '时间选择器',
  //   exact: true,
  // },
  {
    path: '/components/carousel',
    title: 'Carousel',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/carousel')),
    desc: '走马灯',
    exact: true,
  },
  {
    path: '/components/dropdown',
    title: 'Dropdown',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/dropdown')),
    desc: '下拉菜单',
    exact: true,
  },
  {
    path: '/components/select',
    title: 'Select',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/select')),
    desc: '选择框',
    exact: true,
  },
  // {
  //   path: '/components/test',
  //   title: 'Test',
  //   component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/test')),
  //   desc: '测试页',
  //   exact: true,
  // },
]