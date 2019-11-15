// import * as React from 'react'
import Dialog from './dialog'

interface DialogFuncProps {}

Dialog.alert = (props: DialogFuncProps) => {
  console.log(props)
}

Dialog.alert()

export default Dialog
