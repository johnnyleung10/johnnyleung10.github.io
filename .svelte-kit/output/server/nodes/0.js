import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0f8be7df.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/UIcon.32c9a790.js","_app/immutable/chunks/stores.a8c20740.js","_app/immutable/chunks/singletons.f8c545f4.js","_app/immutable/chunks/paths.441e52bc.js","_app/immutable/chunks/params.3eaa8d8c.js"];
export const stylesheets = ["_app/immutable/assets/0.bd9c507b.css"];
export const fonts = [];
