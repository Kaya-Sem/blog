module.exports = function(eleventyConfig) {
  // Copy the entire css directory to _site/css/
  eleventyConfig.addPassthroughCopy("src/css");

  // Optionally, if you have a specific CSS file to copy
  // eleventyConfig.addPassthroughCopy("src/css/main.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
