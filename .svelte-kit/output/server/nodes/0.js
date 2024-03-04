import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5c8f23fc.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/UIcon.32c9a790.js","_app/immutable/chunks/stores.72055fd5.js","_app/immutable/chunks/singletons.8a3cc980.js","_app/immutable/chunks/paths.2ca19f41.js","_app/immutable/chunks/params.e08454bf.js"];
export const stylesheets = ["_app/immutable/assets/0.bd9c507b.css"];
export const fonts = [];
