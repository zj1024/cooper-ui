const { NODE_ENV = 'production' } = process.env
const os = require('os')

/**
 * webpack externals config
 */
function getExternals() {
  let externals = {}
  if (NODE_ENV === 'production') {
    externals = {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
    }
  }

  return externals
}

/**
 * 获取本地ip地址
 * @return {string[]} [ 'localhost', '192.168.199.103' ]
 */
function getIPv4AddressList() {
  const networkInterfaces = os.networkInterfaces()
  let result = []

  Object.keys(networkInterfaces).forEach(key => {
    const ips = (networkInterfaces[key] || [])
      .filter(details => details.family === 'IPv4')
      .map(detail => detail.address.replace('127.0.0.1', 'localhost'))

    result = result.concat(ips)
  })

  return result
}

module.exports = {
  getExternals,
  getIPv4AddressList,
}
