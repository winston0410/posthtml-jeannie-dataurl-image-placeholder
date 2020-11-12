const generatePlaceholder = require('./generatePlaceholder.js')

module.exports = (rootDir) => async (tree) => {
  // To fix: async issue
  tree.match({ tag: 'img' }, (node) => {
    const imagePath = node.attrs.src
    const dataUrl = generatePlaceholder({
      imagePath: imagePath,
      sharp: {
        resizeRatio: 0.01
      },
      rootDir: rootDir
    })

    const modifiedNode = {
      ...node,
      attrs: {
        ...node.attrs,
        src: dataUrl,
        'data-src': imagePath
      }
    }

    console.log(modifiedNode)

    return modifiedNode
  })
}
