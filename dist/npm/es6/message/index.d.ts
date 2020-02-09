import './style.scss'
interface MessageFC {
  $success(props?: any): any
  $info(props?: any): any
  $error(props?: any): any
  $warning(props?: any): any
  [key: string]: any
}
declare const Message: MessageFC
declare const $success: (props?: any) => any
declare const $info: (props?: any) => any
declare const $error: (props?: any) => any
declare const $warning: (props?: any) => any
export { $success, $info, $error, $warning }
export default Message
