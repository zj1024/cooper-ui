# Layout 布局

快速创建页面常用布局

## 基础布局

:::demo 上中下布局

```jsx
const App = () => {
  return (
    <Layout>
      <Layout.Header style={styles.header}>LOGO</Layout.Header>
      <Layout.Content style={styles.content}>内容</Layout.Content>
      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>
    </Layout>
  )
}

const styles = {
  header: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    background: '#108ee9',
    padding: '50px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
}
```

:::

:::demo 上 左右 下布局

```jsx
const App = () => {
  return (
    <Layout>
      <Layout.Header style={styles.header}>LOGO</Layout.Header>
      <Layout>
        <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>
        <Layout.Content style={styles.content}>内容</Layout.Content>
      </Layout>
      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>
    </Layout>
  )
}

const styles = {
  header: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    background: '#108ee9',
    padding: '50px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  aside: {
    background: '#3ba0e9',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
```

:::

:::demo 左 上中下 布局

```jsx
const App = () => {
  return (
    <Layout>
      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>
      <Layout>
        <Layout.Header style={styles.header}>LOGO</Layout.Header>
        <Layout.Content style={styles.content}>内容</Layout.Content>
        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>
      </Layout>
    </Layout>
  )
}

const styles = {
  header: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    background: '#108ee9',
    padding: '50px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  aside: {
    background: '#3ba0e9',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
```

:::

:::demo 左 上左右下 布局

```jsx
const App = () => {
  return (
    <Layout>
      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>
      <Layout>
        <Layout.Header style={styles.header}>LOGO</Layout.Header>
        <Layout>
          <Layout.Content style={styles.content}>内容</Layout.Content>
          <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>
        </Layout>
        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>
      </Layout>
    </Layout>
  )
}

const styles = {
  header: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    background: '#108ee9',
    padding: '50px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    background: '#7dbcea',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  aside: {
    background: '#3ba0e9',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
```

:::

## Attributes

### Layout 布局容器

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| --------- | -------------- | ------ | ------ | ------ |
| className | 容器 className | string | —      | —      |
| style     | 指定样式       | object | —      | —      |
