declare const _default: (
  method: (() => void) | undefined,
  wait: number,
  {
    leading,
    trailing,
  }?: {
    leading?: boolean | undefined
    trailing?: boolean | undefined
  },
) => (this: any, ...args: any) => Promise<unknown>
export default _default
