import { lazy } from 'react'

export interface IComponent {
  path: string
  title: string
  component: React.LazyExoticComponent<() => JSX.Element>
  desc: string
  exact: boolean
}

export interface IComponents {
  [key: string]: IComponent
}

const components: IComponents = {
  Icon: {
    path: '/components/icon',
    title: 'Icon',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/icon')),
    desc: '图标',
    exact: true,
  },
  Layout: {
    path: '/components/layout',
    title: 'Layout',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/layout')),
    desc: '布局',
    exact: true,
  },
  Button: {
    path: '/components/button',
    title: 'Button',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/button')),
    desc: '按钮',
    exact: true,
  },
  Dialog: {
    path: '/components/dialog',
    title: 'Dialog',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/dialog')),
    desc: '对话框',
    exact: true,
  },
  Popover: {
    path: '/components/popover',
    title: 'Popover',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/popover')),
    desc: '弹出框',
    exact: true,
  },
  Tooltip: {
    path: '/components/tooltip',
    title: 'Tooltip',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/tooltip')),
    desc: '文字提示',
    exact: true,
  },
  Input: {
    path: '/components/input',
    title: 'Input',
    desc: '输入框',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/input/index')),
    exact: true,
  },
  Radio: {
    path: '/components/radio',
    title: 'Radio',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/radio')),
    desc: '单选框',
    exact: true,
  },
  Progress: {
    path: '/components/progress',
    title: 'Progress',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/progress')),
    desc: '进度条',
    exact: true,
  },
  Message: {
    path: '/components/message',
    title: 'Message',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/message')),
    desc: '消息提示',
    exact: true,
  },
  Loading: {
    path: '/components/loading',
    title: 'Loading',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/loading')),
    desc: '加载',
    exact: true,
  },
  Drawer: {
    path: '/components/drawer',
    title: 'Drawer',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/drawer')),
    desc: '抽屉',
    exact: true,
  },
  Badge: {
    path: '/components/badge',
    title: 'Badge',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/badge')),
    desc: '徽标',
    exact: true,
  },
  Skeleton: {
    path: '/components/skeleton',
    title: 'Skeleton',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/skeleton')),
    desc: '骨架屏',
    exact: true,
  },
  Card: {
    path: '/components/card',
    title: 'Card',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/card')),
    desc: '卡片',
    exact: true,
  },
  Collapse: {
    path: '/components/collapse',
    title: 'Collapse',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/collapse')),
    desc: '折叠面板',
    exact: true,
  },
  Divider: {
    path: '/components/divider',
    title: 'Divider',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/divider')),
    desc: '分割线',
    exact: true,
  },
  TextLink: {
    path: '/components/text-link',
    title: 'TextLink',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/text-link')),
    desc: '文字链接',
    exact: true,
  },
  Pagination: {
    path: '/components/pagination',
    title: 'Pagination',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/pagination')),
    desc: '分页',
    exact: true,
  },
  BackTop: {
    path: '/components/back-top',
    title: 'BackTop',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/back-top')),
    desc: '回到顶部',
    exact: true,
  },
  Switch: {
    path: '/components/switch',
    title: 'Switch',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/switch')),
    desc: '开关',
    exact: true,
  },
  Result: {
    path: '/components/result',
    title: 'Result',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/result')),
    desc: '结果',
    exact: true,
  },
  Carousel: {
    path: '/components/carousel',
    title: 'Carousel',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/carousel')),
    desc: '走马灯',
    exact: true,
  },
  Dropdown: {
    path: '/components/dropdown',
    title: 'Dropdown',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/dropdown')),
    desc: '下拉菜单',
    exact: true,
  },
  Select: {
    path: '/components/select',
    title: 'Select',
    component: lazy(() => import(/* webpackMode: "lazy" */ 'src/pages/select')),
    desc: '选择框',
    exact: true,
  },
}

export default components
