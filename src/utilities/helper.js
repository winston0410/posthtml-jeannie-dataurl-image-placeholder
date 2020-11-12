import imagemin from 'imagemin'
import DatauriParser from 'datauri/parser'
const sharp = require('sharp')
const parser = new DatauriParser()

const resizeImage = async ({ imagePath, resizeRatio, metadata }) => {
  const resizeWidth = Math.round(metadata.width * resizeRatio)

  return await sharp(imagePath)
    .resize({ width: resizeWidth })
    .toBuffer()
}

const getDataURI = ({ format, buffer }) =>
  parser.format(`.${format}`, buffer).content

const compressImage = async ({ buffer, plugins }) => {
  return await imagemin.buffer(buffer, {
    plugins: plugins
  })
}

const getMetadata = async ({ imagePath }) =>
  await sharp(imagePath).metadata()

module.exports = {
  resizeImage, getDataURI, compressImage, getMetadata
}
