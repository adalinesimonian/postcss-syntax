function resolvePackage(packageName) {
	switch (packageName) {
		case "@stylelint/postcss-css-in-js":
			return require("@stylelint/postcss-css-in-js");
        case "@stylelint/postcss-css-in-js/extract":
            return require("@stylelint/postcss-css-in-js/extract");
        case "@stylelint/postcss-css-in-js/template-stringify":
            return require("@stylelint/postcss-css-in-js/template-stringify");
		case "@stylelint/postcss-markdown":
			return require("@stylelint/postcss-markdown");
        case "@stylelint/postcss-markdown/extract":
            return require("@stylelint/postcss-markdown/extract");
		case "postcss-html":
			return require("postcss-html");
        case "postcss-html/extract":
            return require("postcss-html/extract");
		case "postcss-js":
			return require("postcss-js");
		case "postcss-less":
			return require("postcss-less");
		case "postcss-safe-parser":
			return require("postcss-safe-parser");
		case "postcss-sass":
			return require("postcss-sass");
		case "postcss-scss":
			return require("postcss-scss");
		case "sugarss":
			return require("sugarss");
		default:
			return require(packageName);
	}
}

module.exports = { resolvePackage };
