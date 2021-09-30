"use strict";
const getSyntax = require("./get-syntax");
const { resolvePackage } = require("./resolve-package");
const cache = new Map();

function loadSyntax (opts, idOrSyntax) {
	const cssSyntax = getSyntax("css", opts);

	if (idOrSyntax && typeof idOrSyntax !== "string") {
		const cached = cache.get(idOrSyntax);

		if (cached) {
			return cached;
		}

		const syntax = {
			parse: idOrSyntax.parse,
			stringify: idOrSyntax.stringify || cssSyntax.stringify,
		};

		cache.set(idOrSyntax, syntax);

		return syntax;
	}

	const modulePath = idOrSyntax + "/template-" + (cssSyntax.parse.name === "safeParse" ? "safe-" : "") + "parse";
	const cached = cache.get(modulePath);

	if (cached) {
		return cached;
	}

	const syntax = {
		parse: resolvePackage(modulePath),
	};

	try {
		syntax.stringify = resolvePackage(idOrSyntax + "/template-stringify");
	} catch {
		syntax.stringify = cssSyntax.stringify;
	}

	cache.set(modulePath, syntax);

	return syntax;
}

module.exports = loadSyntax;
