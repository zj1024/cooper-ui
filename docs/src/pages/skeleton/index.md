# Skeleton 骨架屏

组件需要的数据或许无法立即获取时显示的占位，使用骨架屏来提升用户观感上的表现。

## 基本用法

使用 Skeleton 来包裹你要加载的内容

:::demo 使用`<Skeleton />`标签声明组件，通过`loading`属性设置显示或隐藏

```jsx
const App = () => {
  return <Skeleton loading={true}>内容</Skeleton>
}
```

:::

## 自定义配置项

:::demo 使用`<Skeleton />`标签声明组件，通过`avatar`、`avatarShape`、`avatarSize`设置头像占位。通过`title`控制较高的占位。`row`控制显示占位行数。

```jsx
const App = () => {
  return (
    <div>
      <Skeleton
        loading={true}
        avatar={true}
        avatarShape="square"
        avatarSize="50px"
        title={true}
        row={1}>
        内容
      </Skeleton>

      <Skeleton
        loading={true}
        avatar={true}
        title={false}
        row={3}
        animat={false}
        style={{ marginTop: '50px' }}>
        内容
      </Skeleton>

      <Skeleton
        loading={true}
        avatar={true}
        avatarShape="square"
        avatarSize="50px"
        title={true}
        row={1}
        style={{ marginTop: '50px' }}>
        内容
      </Skeleton>
    </div>
  )
}
```

:::

## Attributes

| 参数        | 说明           | 类型    | 可选值       | 默认值 |
| ----------- | -------------- | ------- | ------------ | ------ |
| className   | 容器 className | string  | —            | —      |
| style       | 指定样式       | object  | —            | —      |
| loading     | 显示/隐藏      | boolean | -            | -      |
| row         | 占位行数       | number  | -            | 4      |
| avatar      | 头像占位       | boolean | -            | false  |
| avatarShape | 头像占位形状   | number  | round/square | round  |
| avatarSize  | 头像占位大小   | string  | -            | 32px   |
| title       | 标题占位       | boolean | -            | true   |
| animat      | 动画           | boolean | -            | true   |
