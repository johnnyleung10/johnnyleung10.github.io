

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.27c60a4a.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/stores.a8c20740.js","_app/immutable/chunks/singletons.f8c545f4.js","_app/immutable/chunks/paths.441e52bc.js"];
export const stylesheets = [];
export const fonts = [];
