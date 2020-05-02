module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      'prismjs',
      {
        languages: ['jsx', 'css', 'html'],
        plugins: ['line-numbers', 'show-language'],
        theme: 'okaidia',
        css: true,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
