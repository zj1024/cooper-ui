/* eslint-disable no-console */
/* eslint-disable no-undef */
const path = require('path')
const fs = require('fs')

const files = fs.readdirSync(path.resolve(__dirname, '../libs'))
// 读取所有目录
// const files = fs.readdirSync(path.resolve(__dirname, '../cooper-theme'))

files.forEach(d => {
  if (d !== 'assets') {
    const dPath = path.resolve(__dirname, `../libs/${d}`)
    fs.readdir(dPath, (err, item) => {
      if (item && item.length) {
        item.forEach(itemFile => {
          if (itemFile.includes('.scss')) {
            const fullPath = `${dPath}/${itemFile}`
            fs.unlinkSync(fullPath)
            console.log('删除成功')
            // const destPath = path.resolve(__dirname, `../cooper-theme/${d}`)
            console.log(fullPath)
            // const scssFile = fs.readFileSync(fullPath, 'utf8')
            // try {
            //   fs.readdirSync(destPath)
            // } catch (e) {
            //   fs.mkdirSync(destPath)
            // }
            // try {
            //   fs.writeFileSync(`${destPath}/${itemFile}`, scssFile)
            //   console.log(`写入${dPath}/${itemFile} done`)
            // } catch (e) {
            //   console.log('写入出错', e)
            // }
          }
        })
      }
    })
  }
})
