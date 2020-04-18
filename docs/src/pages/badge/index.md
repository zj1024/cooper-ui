# Badge 徽标

在元素边缘位置显示一个小徽章。

## 基本用法

:::demo 使用`<Badge />`标签声明组件，通过`badgeContent`属性设置内容，`type`设置主题类型

```jsx
const App = () => {
  return (
    <div>
      <Badge badgeContent={9} style={styles.item}>
        <Button>回复</Button>
      </Badge>

      <Badge badgeContent={9} type="success" style={styles.item}>
        <Button>评论</Button>
      </Badge>

      <Badge badgeContent={9} type="warning" style={styles.item}>
        <Button>消息</Button>
      </Badge>

      <Badge badgeContent={9} type="danger" style={styles.item}>
        <Button>通知</Button>
      </Badge>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '20px',
  },
}
```

:::

## 设置位置

:::demo 使用`<Badge />`标签声明组件，通过`placement`属性设置徽标的位置

```jsx
const App = () => {
  return (
    <div>
      <Badge placement="left-top" badgeContent={9} style={styles.item}>
        <Button>Badge</Button>
      </Badge>

      <Badge placement="left-bottom" badgeContent={9} type="success" style={styles.item}>
        <Button>Badge</Button>
      </Badge>

      <Badge placement="right-top" badgeContent={9} type="warning" style={styles.item}>
        <Button>Badge</Button>
      </Badge>

      <Badge placement="right-bottom" badgeContent={9} type="danger" style={styles.item}>
        <Button>Badge</Button>
      </Badge>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '20px',
  },
}
```

:::

## 自定义颜色

:::demo 使用`<Badge />`标签声明组件，通过`bgColor`属性设置徽标的背景颜色，`color`设置徽标的内容颜色

```jsx
const App = () => {
  return (
    <div>
      <Badge bgColor="#188eee" color="#fff" badgeContent={9} style={styles.item}>
        <Button>Badge</Button>
      </Badge>

      <Badge
        bgColor="linear-gradient(to right, #ff668c, blue)"
        color="#fff"
        badgeContent={9}
        style={styles.item}>
        <Button>Badge</Button>
      </Badge>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '20px',
  },
}
```

:::

## 状态点

:::demo 使用`<Badge />`标签声明组件，通过`dot`属性设置为状态点

```jsx
const App = () => {
  return (
    <div>
      <Badge dot={true} badgeContent={9} style={styles.item}>
        <Button>动态</Button>
      </Badge>

      <Badge dot={true} type="danger" badgeContent={9} style={styles.item}>
        <Button>新闻</Button>
      </Badge>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '20px',
  },
}
```

:::

## Attributes

| 参数         | 说明           | 类型            | 可选值                                         | 默认值    |
| ------------ | -------------- | --------------- | ---------------------------------------------- | --------- |
| className    | 容器 className | string          | -                                              | -         |
| style        | 指定样式       | object          | -                                              | -         |
| type         | 图标名称       | string          | default，success，warning，danger              | default   |
| placement    | 位置           | string          | left-top，left-bottom，right-top，right-bottom | right-top |
| badgeContent | 徽标内容       | React.ReactNode | -                                              | -         |
| bgColor      | 背景颜色       | string          | -                                              | -         |
| color        | 内容颜色       | string          | -                                              | -         |
| dot          | 状态点         | boolean         | -                                              | -         |
