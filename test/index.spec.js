const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const posthtml = require('posthtml')
require('global-jsdom')()

let rootContainer, html

beforeEach(function () {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)

  html = `<html>
    <img src="/images/example.jpg">
  </html>`
})

afterEach(function () {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Image placeholder', function () {
  it('should generate data-uri of the original image as src', async function () {
    const transformedHtml = await posthtml([
      require('../src/index.js')(__dirname)
    ])
      .process(html)

    console.log(transformedHtml.html)
  })

  it('should move original path to data-src', function () {

  })
})
