module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("divider", function() {
    return `<hr>`;
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    templateFormats: ["md", "liquid"],
  };
};