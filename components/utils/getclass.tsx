export default (prefix: string) => {
  return (className?: string) => {
    return `${prefix}${className ? '-' + className : ''}`
  }
}
