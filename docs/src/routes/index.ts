import components, { IComponent } from './components'

export interface IRoutes {
  [key: string]: IRoutesItem
}

export interface IRoutesItem {
  title: string
  components: IComponent[]
}

const basicComponents = [components.Icon, components.Layout, components.Button, components.TextLink]
const formComponents = [components.Input, components.Radio, components.Select, components.Switch]
const dataComponents = [
  components.Badge,
  components.Card,
  components.Carousel,
  components.Collapse,
  components.Dropdown,
  components.Progress,
  components.Pagination,
  components.Popover,
  components.Tooltip,
]
const noticeComponents = [components.Message, components.Loading]
const feedbackComponents = [
  components.Result,
  components.Skeleton,
  components.Dialog,
  components.Drawer,
]
const othersComponents = [components.BackTop, components.Divider]

const routes: IRoutes = {
  basic: {
    title: 'Basic',
    components: basicComponents,
  },
  form: {
    title: 'Form',
    components: formComponents,
  },
  data: {
    title: 'Data',
    components: dataComponents,
  },
  notice: {
    title: 'Notice',
    components: noticeComponents,
  },
  feedback: {
    title: 'Feedback',
    components: feedbackComponents,
  },
  others: {
    title: 'Others',
    components: othersComponents,
  },
}

export default routes
