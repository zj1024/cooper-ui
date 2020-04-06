import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Result, Button, ButtonGroup } from '../../../../libs'

export default () => {
  const history = useHistory()

  const navigator = (path: string) => {
    history.push(path)
  }

  return (
    <Result
      status="404"
      title="没有找到你要找的内容"
      content={
        <ButtonGroup vertical={false}>
          <Button type="primary" onClick={() => navigator('/')}>
            回到首页
          </Button>
          <Button type="warning" onClick={() => navigator('/components')}>
            回到组件
          </Button>
        </ButtonGroup>
      }
    />
  )
}
