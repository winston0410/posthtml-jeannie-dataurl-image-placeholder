const generatePlaceholder = require('./generatePlaceholder.js')

// module.exports = (rootDir) => async (tree) => {
//   // To fix: async issue/
//   tree.match({ tag: 'img' }, (node) => {
//     const imagePath = node.attrs.src
//     return generatePlaceholder({
//       imagePath: imagePath,
//       sharp: {
//         resizeRatio: 0.01
//       },
//       rootDir: rootDir
//     }).then(
//       (dataUrl) => {
//         // console.log('getting result', res)
//         // const modifiedNode = {
//         //   ...node,
//         //   attrs: {
//         //     ...node.attrs,
//         //     src: dataUrl,
//         //     'data-src': imagePath
//         //   }
//         // }
//
//         // console.log(modifiedNode)
//
//         return {
//           ...node,
//           attrs: {
//             ...node.attrs,
//             src: dataUrl,
//             'data-src': imagePath
//           }
//         }
//       }
//     )
//   })
// }

// Original
// module.exports = (rootDir) => async (tree) => {
//   // To fix: async issue/
//   tree.match({ tag: 'img' }, async (node) => {
//     const imagePath = node.attrs.src
//     const dataUrl = await generatePlaceholder({
//       imagePath: imagePath,
//       sharp: {
//         resizeRatio: 0.001
//       },
//       rootDir: rootDir
//     })
//
//     const modifiedNode = {
//       ...node,
//       attrs: {
//         ...node.attrs,
//         src: dataUrl,
//         'data-src': imagePath
//       }
//     }
//
//     console.log(modifiedNode)
//
//     return await modifiedNode
//   })
// }
//
//

// Testing with promise
// module.exports = (rootDir) => (tree) => {
//   return new Promise((resolve) => {
//     tree.match({ tag: 'img' }, (node) => {
//       const imagePath = node.attrs.src
//       return generatePlaceholder({
//         imagePath: imagePath,
//         sharp: {
//           resizeRatio: 0.001
//         },
//         rootDir: rootDir
//       }).then(
//         (res) => node
//       )
//     })
//
//     resolve(tree)
//   })
// }
