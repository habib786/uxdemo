// next.config.js
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//     cssLoaderOptions: {
//         url: false
//     }
// })



// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssLoaderOptions: {
        url: false
    }
})