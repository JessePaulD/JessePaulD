module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("**/*.jpg");
	eleventyConfig.addPassthroughCopy("**/*.css");
	eleventyConfig.addPassthroughCopy("**/*.woff");
	eleventyConfig.addPassthroughCopy("**/*.woff2");
	eleventyConfig.addPassthroughCopy("**/*.otf");


};