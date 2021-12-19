
const remarkImages = require('remark-images');
const remarkExternalLinks = require('remark-external-links');
const remarkFootnote = require('remark-numbered-footnote-labels');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkMath = import('remark-math');
const rehypeKatex = import('rehype-katex');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkImages,
      remarkExternalLinks,
      remarkFootnote,
      remarkUnwrapImages,
      remarkMath,
      rehypeKatex,
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
});
