"use strict";
const getSyntax = require("./get-syntax");
const { resolvePackage } = require("./resolve-package");
const cache = {};

function loadSyntax (opts, id) {
	const cssSyntax = getSyntax("css", opts);
	const modulePath = id + "/template-" + (cssSyntax.parse.name === "safeParse" ? "safe-" : "") + "parse";
	let syntax = cache[modulePath];
	if (!syntax) {
		syntax = {
			parse: resolvePackage(modulePath),
		};
		try {
			syntax.stringify = resolvePackage(id + "/template-stringify");
		} catch (ex) {
			syntax.stringify = cssSyntax.stringify;
		}
		cache[modulePath] = syntax;
	}
	return syntax;
}

module.exports = loadSyntax;
