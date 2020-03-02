# Carousel 走马灯

在指定的区域，承载更多的内容，分屏输出更多的内容。

## 优势

- 提供了指示器控制，左右箭头按钮显示控制，自动轮播控制，轮播时间控制。
- 使用`CSS Transition`动画开启 GPU 来获得更高的流畅度。
- 最后一页翻到第一页与第一页回退到最后一页的平滑滚动。
- 简单 API，仅使用`<Carousel>你的内容...</Carousel>`就可以创建一个走马灯。

## 基本用法

简单示例，不需要传任何参数，默认就展示了指示器，鼠标移上去显示的箭头控制和每隔五秒钟的自动播放。

:::demo 使用`<Carousel />`标签声明组件，直接在`children`中放内容即可

```jsx
const App = () => {
  return (
    <Carousel>
      <div style={styles.item}>
        <span style={styles.white}>1</span>
      </div>
      <div style={styles.item}>
        <span style={styles.pink}>2</span>
      </div>
      <div style={styles.item}>
        <span style={styles.yellow}>3</span>
      </div>
    </Carousel>
  )
}

const styles = {
  // 这个样式仅声明内容的样式，并不需要用在组件上
  item: {
    width: '100%',
    height: '200px',
    background: '#64a5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: '500',
  },
  white: {
    color: '#fff',
  },
  pink: {
    color: 'pink',
  },
  yellow: {
    color: 'yellow',
  },
}
```

:::

## 默认显示第二个轮播内容

:::demo 使用`<Carousel />`标签声明组件，通过`defaultActive`属性控制显示哪个轮播内容。

```jsx
const App = () => {
  return (
    <Carousel defaultActive={1}>
      <div style={styles.item}>
        <span style={styles.white}>1</span>
      </div>
      <div style={styles.item}>
        <span style={styles.pink}>2</span>
      </div>
      <div style={styles.item}>
        <span style={styles.yellow}>3</span>
      </div>
    </Carousel>
  )
}

const styles = {
  // 这个样式仅声明内容的样式，并不需要用在组件上
  item: {
    width: '100%',
    height: '200px',
    background: '#64a5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: '500',
  },
  white: {
    color: '#fff',
  },
  pink: {
    color: 'pink',
  },
  yellow: {
    color: 'yellow',
  },
}
```

:::

## 控制自动播放与间隔

默认开启了自动播放且间隔为 5s。

:::demo 使用`<Carousel />`标签声明组件，通过`autoplay`属性控制自动播放，`duration`属性控制自动播放间隔。

```jsx
const App = () => {
  return (
    <div>
      <Carousel autoplay={false}>
        <div style={styles.item}>
          <span style={styles.white}>1</span>
        </div>
        <div style={styles.item}>
          <span style={styles.pink}>2</span>
        </div>
        <div style={styles.item}>
          <span style={styles.yellow}>3</span>
        </div>
      </Carousel>

      <Carousel style={{ marginTop: '30px' }} duration={3000}>
        <div style={styles.item}>
          <span style={styles.white}>1</span>
        </div>
        <div style={styles.item}>
          <span style={styles.pink}>2</span>
        </div>
        <div style={styles.item}>
          <span style={styles.yellow}>3</span>
        </div>
      </Carousel>
    </div>
  )
}

const styles = {
  // 这个样式仅声明内容的样式，并不需要用在组件上
  item: {
    width: '100%',
    height: '200px',
    background: '#64a5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: '500',
  },
  white: {
    color: '#fff',
  },
  pink: {
    color: 'pink',
  },
  yellow: {
    color: 'yellow',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值               | 默认值 |
| --------- | -------------- | ------- | -------------------- | ------ |
| className | 容器 className | string  | —                    | —      |
| style     | 指定样式       | object  | —                    | —      |
| dots      | 指示器         | boolean | -                    | true   |
| arrow     | 控制箭头       | string  | always, hover, never | hover  |
| autoplay  | 自动播放       | boolean | -                    | hover  |
| duration  | 间隔           | number  | -                    | 5000   |
