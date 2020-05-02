const os = require('os')

const externalsArr = [
  {
    module: 'react',
    entry: '//cdn.bootcss.com/react/16.10.2/umd/react.production.min.js',
    global: 'React',
  },
  {
    module: 'react-dom',
    entry: '//cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.production.min.js',
    global: 'ReactDOM',
  },
  {
    module: 'react-router-dom',
    entry: '//cdn.bootcdn.net/ajax/libs/react-router-dom/5.1.2/react-router-dom.min.js',
    global: 'ReactRouterDOM',
  },
  {
    module: 'babel-standalone',
    entry: '//cdn.bootcdn.net/ajax/libs/babel-standalone/6.26.0/babel.min.js',
    global: 'Babel',
  },
]

function getExternals() {
  let externals = {}
  externalsArr.forEach(item => {
    externals[item.module] = item.global
  })
  return externals
}

/**
 * webpack externals config
 */
function getPluginExternals() {
  return externalsArr
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
  externals: getExternals(),
  getPluginExternals,
  getIPv4AddressList,
}
