

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.679e64ac.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/stores.72055fd5.js","_app/immutable/chunks/singletons.8a3cc980.js","_app/immutable/chunks/paths.2ca19f41.js"];
export const stylesheets = [];
export const fonts = [];
