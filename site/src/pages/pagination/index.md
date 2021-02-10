# Pagination 分页

数据量过多时每次只加载一定量的数据

## 基本用法

只需要提供分页总数和`onChange`回掉函数即可，每页的数据和数据总量分页无需关心。

:::demo 使用`<Pagination />`标签声明组件，通过`onChange`属性设置回掉，接收签名为当前页码，通过`defaultCurrent`设置当前页码

```jsx
const App = () => {
  return (
    <div>
      <div>
        <Pagination pageCount={1} onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
      <div>
        <Pagination
          defaultCurrent={3}
          pageCount={50}
          onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
    </div>
  )
}
```

:::

## 三种大小

提供了三种尺寸

:::demo 使用`<Pagination />`标签声明组件，通过`size`属性设置大小，默认值是`normal`

```jsx
const App = () => {
  return (
    <div>
      <div>
        <Pagination
          size="small"
          pageCount={6}
          onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
      <div>
        <Pagination pageCount={6} onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
      <div>
        <Pagination
          size="large"
          pageCount={6}
          onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
    </div>
  )
}
```

:::

## 快速跳转与禁用

提供表单用来直接定位页码

:::demo 使用`<Pagination />`标签声明组件，通过`showQuickJumper`属性设置显示快速跳转组件；通过`disabled`属性设置禁用态

```jsx
const App = () => {
  return (
    <div>
      <div>
        <Pagination
          pageCount={50}
          showQuickJumper={true}
          onChange={pageNumber => console.log(pageNumber)}></Pagination>
      </div>
      <div>
        <Pagination
          pageCount={50}
          disabled={true}
          onChange={pageNumber => console.log(pageNumber)}
          showQuickJumper={true}></Pagination>
      </div>
    </div>
  )
}
```

:::

## Attributes

| 参数             | 说明                                  | 类型               | 可选值                 | 默认值 |
| ---------------- | ------------------------------------- | ------------------ | ---------------------- | ------ |
| className        | 容器 className                        | string             | -                      | -      |
| style            | 指定样式                              | object             | -                      | -      |
| size             | 尺寸                                  | string             | normal， small， large | normal |
| defaultCurrent   | 默认页码                              | number             | -                      | 1      |
| pagerCount       | 组件显示页码范围，当前是 5 个页码按钮 | number             | -                      | 5      |
| pageCount        | 总页数                                | number             | -                      | 1      |
| disabled         | 禁用                                  | boolean            | -                      | false  |
| hideOnSinglePage | 总页数小于等于 1 是否隐藏             | boolean            | -                      | false  |
| showQuickJumper  | 显示快速跳转组件                      | boolean            | -                      | false  |
| onChange         | 点击页码的回调函数                    | (pageNumber)=>void | -                      | -      |
