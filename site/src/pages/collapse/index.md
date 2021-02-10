# Collapse 折叠面板

可展开或折叠的面板

## 基本用法

同时打开多个面板，面板之间互不影响

:::demo 使用`<Collapse />`标签声明组件，`<Collapse.Item />` 标签声明每个面板内容。

```jsx
const App = () => {
  const content1 =
    '孤立的个人很清楚，在孤身一人时，他不能焚烧宫殿或洗劫商店，即使受到这样做的诱惑，他也很容易抵制这种诱惑。但是在成为群体的一员时，他就会意识到人数赋予他的力量，这足以让他生出杀人劫掠的念头，并且会立刻屈从于这种诱惑。出乎预料的障碍会被狂暴地摧毁。人类的机体的确能够产生大量狂热的激情，因此可以说，愿望受阻的群体所形成的正常状态，也就是这种激愤状态。 --古斯塔夫·勒庞《乌合之众》'
  const content2 =
    '从长远看，不断重复的说法会进入我们无意识的自我的深层区域，而我们的行为动机正是在这里形成的。到了一定的时候，我们会忘记谁是那个不断被重复的主张的作者，我们最终会对它深信不移。 --古斯塔夫·勒庞《乌合之众》'
  const content3 =
    '倘若没有传统，就不可能有民族的气质，也不可能有文明的存在。因此，自从人类存在以来，他们所关心的两件事就是：一、建立传统；二、当它所带来的好处用尽时，就努力摧毁之。没有传统，就没有文明；没有对传统的缓慢淘汰，就没有进步。 --古斯塔夫·勒庞《乌合之众》'

  return (
    <Collapse>
      <Collapse.Item title="孤立的个人很清楚">
        <div style={styles.item}>{content1}</div>
      </Collapse.Item>
      <Collapse.Item title="从长远看，不断重复的说法">
        <div style={styles.item}>{content2}</div>
      </Collapse.Item>
      <Collapse.Item title="倘若没有传统，就不可能有民族的气质">
        <div style={styles.item}>{content3}</div>
      </Collapse.Item>
      <Collapse.Item title="乌合之众">
        <div style={styles.item}>
          {content1}
          {content2}
          {content3}
        </div>
      </Collapse.Item>
    </Collapse>
  )
}

const styles = {
  item: {
    padding: '20px',
  },
}
```

:::

## 手风琴模式

只显示一个面板

:::demo 使用`<Icon />`标签声明组件，通过`name`属性设置对应的 icon

```jsx
const App = () => {
  const content1 =
    '孤立的个人很清楚，在孤身一人时，他不能焚烧宫殿或洗劫商店，即使受到这样做的诱惑，他也很容易抵制这种诱惑。但是在成为群体的一员时，他就会意识到人数赋予他的力量，这足以让他生出杀人劫掠的念头，并且会立刻屈从于这种诱惑。出乎预料的障碍会被狂暴地摧毁。人类的机体的确能够产生大量狂热的激情，因此可以说，愿望受阻的群体所形成的正常状态，也就是这种激愤状态。 --古斯塔夫·勒庞《乌合之众》'
  const content2 =
    '从长远看，不断重复的说法会进入我们无意识的自我的深层区域，而我们的行为动机正是在这里形成的。到了一定的时候，我们会忘记谁是那个不断被重复的主张的作者，我们最终会对它深信不移。 --古斯塔夫·勒庞《乌合之众》'
  const content3 =
    '倘若没有传统，就不可能有民族的气质，也不可能有文明的存在。因此，自从人类存在以来，他们所关心的两件事就是：一、建立传统；二、当它所带来的好处用尽时，就努力摧毁之。没有传统，就没有文明；没有对传统的缓慢淘汰，就没有进步。 --古斯塔夫·勒庞《乌合之众》'

  return (
    <Collapse accordion={true}>
      <Collapse.Item title="孤立的个人很清楚">
        <div style={styles.item}>{content1}</div>
      </Collapse.Item>
      <Collapse.Item title="从长远看，不断重复的说法">
        <div style={styles.item}>{content2}</div>
      </Collapse.Item>
      <Collapse.Item title="倘若没有传统，就不可能有民族的气质">
        <div style={styles.item}>{content3}</div>
      </Collapse.Item>
      <Collapse.Item title="乌合之众">
        <div style={styles.item}>
          {content1}
          {content2}
          {content3}
        </div>
      </Collapse.Item>
    </Collapse>
  )
}

const styles = {
  item: {
    padding: '20px',
  },
}
```

:::

## 自定义折叠面板

:::demo `<Collapse.Item />`组件，通过`title`属性设置标题，`iconPlacement` 属性设置 icon 位置。`<Collapse />`组件，通过`value`设置默认打开的面板

```jsx
const App = () => {
  const content1 =
    '孤立的个人很清楚，在孤身一人时，他不能焚烧宫殿或洗劫商店，即使受到这样做的诱惑，他也很容易抵制这种诱惑。但是在成为群体的一员时，他就会意识到人数赋予他的力量，这足以让他生出杀人劫掠的念头，并且会立刻屈从于这种诱惑。出乎预料的障碍会被狂暴地摧毁。人类的机体的确能够产生大量狂热的激情，因此可以说，愿望受阻的群体所形成的正常状态，也就是这种激愤状态。 --古斯塔夫·勒庞《乌合之众》'
  const content2 =
    '从长远看，不断重复的说法会进入我们无意识的自我的深层区域，而我们的行为动机正是在这里形成的。到了一定的时候，我们会忘记谁是那个不断被重复的主张的作者，我们最终会对它深信不移。 --古斯塔夫·勒庞《乌合之众》'
  const content3 =
    '倘若没有传统，就不可能有民族的气质，也不可能有文明的存在。因此，自从人类存在以来，他们所关心的两件事就是：一、建立传统；二、当它所带来的好处用尽时，就努力摧毁之。没有传统，就没有文明；没有对传统的缓慢淘汰，就没有进步。 --古斯塔夫·勒庞《乌合之众》'
  return (
    <Collapse accordion={true} value={2}>
      <Collapse.Item
        iconPlacement="right"
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            孤立的个人很清楚 <Icon name="message" />
          </div>
        }>
        <div style={styles.item}>{content1}</div>
      </Collapse.Item>
      <Collapse.Item title="从长远看，不断重复的说法">
        <div style={styles.item}>{content2}</div>
      </Collapse.Item>
      <Collapse.Item title="倘若没有传统，就不可能有民族的气质">
        <div style={styles.item}>{content3}</div>
      </Collapse.Item>
      <Collapse.Item title="乌合之众">
        <div style={styles.item}>
          {content1}
          {content2}
          {content3}
        </div>
      </Collapse.Item>
    </Collapse>
  )
}

const styles = {
  item: {
    padding: '20px',
  },
}
```

:::

## Attributes

### Collapse

| 参数      | 说明                                                        | 类型            | 可选值 | 默认值 |
| --------- | ----------------------------------------------------------- | --------------- | ------ | ------ |
| className | 容器 className                                              | string          | -      | -      |
| style     | 指定样式                                                    | object          | -      | -      |
| accordion | 手风琴模式                                                  | boolean         | -      | -      |
| value     | 默认打开指定面板,非手风琴模式传入数组，手风琴模式传入数值。 | number,number[] | -      | -      |

### Collapse.Item

| 参数          | 说明           | 类型   | 可选值      | 默认值 |
| ------------- | -------------- | ------ | ----------- | ------ |
| className     | 容器 className | string | -           | -      |
| style         | 指定样式       | object | -           | -      |
| iconPlacement | icon 位置      | string | left, right | left   |
| title         | 面板标题       | string | -           | -      |
| children      | 面板内容       | string | -           | -      |
