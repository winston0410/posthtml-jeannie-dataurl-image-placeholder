const {
  resizeImage, getDataURI, compressImage, getMetadata
} = require('./utilities/helper.js')
const path = require('path')

module.exports = async function generatePlaceholder ({ imagePath, sharp, imagemin, rootDir }) {
  const absolutePath = path.join(rootDir, imagePath)

  const metadata = await getMetadata({
    imagePath: absolutePath
  })

  // console.log(metadata)

  const resizedBuffer = await resizeImage({
    imagePath: absolutePath,
    resizeRatio: sharp.resizeRatio,
    metadata: metadata
  })

  // console.log(resizedBuffer)

  const compressedBuffer = await compressImage({
    buffer: resizedBuffer,
    plugins: []
  })

  // console.log(compressedBuffer)

  const dataURI = getDataURI({
    format: metadata.format,
    buffer: compressedBuffer
  })

  // console.log(dataURI)

  return dataURI
}
