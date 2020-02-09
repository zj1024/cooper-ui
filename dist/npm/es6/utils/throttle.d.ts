declare const _default: (
  method: () => void,
  wait: number,
  {
    leading,
    trailing,
  }?: {
    leading?: boolean
    trailing?: boolean
  },
) => (this: any, ...args: any) => Promise<unknown>
export default _default
