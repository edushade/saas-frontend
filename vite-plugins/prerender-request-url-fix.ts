import type { Plugin } from "vite";

const PRERENDER_BASE_URL =
	process.env.SITE_ORIGIN ||
	process.env.VITE_SITE_ORIGIN ||
	"http://localhost:3000";

/**
 * Required for prerender/preview with TanStack Start + Nitro when the app has
 * a larger server bundle (e.g. content-collections, many routes). Nitro can
 * invoke the handler with request.url undefined; this patches the server bundle.
 * @see https://github.com/TanStack/router/issues/5939
 */
export function prerenderRequestUrlFix(): Plugin {
	return {
		name: "prerender-request-url-fix",
		enforce: "post",
		apply: "build",
		generateBundle(_, bundle) {
			for (const output of Object.values(bundle)) {
				if (output.type !== "chunk" || !output.code?.includes("getNormalizedURL(request.url)"))
					continue;

				const search =
					/const\s*\{\s*url\s*,\s*handledProtocolRelativeURL\s*\}\s*=\s*getNormalizedURL\s*\(\s*request\.url\s*\)\s*;/;
				const replacement = `const __prerenderBase = ${JSON.stringify(PRERENDER_BASE_URL)};
      const __urlRaw = request && (typeof request === 'string' ? request : request.url);
      const __urlResolved = (__urlRaw && (__urlRaw.startsWith('http') ? __urlRaw : (__prerenderBase.endsWith('/') ? __prerenderBase.slice(0, -1) : __prerenderBase) + (__urlRaw.startsWith('/') ? __urlRaw : '/' + __urlRaw))) || __prerenderBase + '/';
      const __normalized = getNormalizedURL(__urlResolved);
      const url = __normalized.url ?? new URL(__urlResolved);
      const handledProtocolRelativeURL = __normalized.handledProtocolRelativeURL;`;

				if (search.test(output.code)) {
					output.code = output.code.replace(search, replacement);
				}
			}
		},
	};
}
