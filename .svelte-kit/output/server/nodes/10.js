

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.5c79fc6a.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/UIcon.32c9a790.js","_app/immutable/chunks/Card.ef7a7b7a.js","_app/immutable/chunks/TabTitle.8b064dfa.js","_app/immutable/chunks/params.e08454bf.js","_app/immutable/chunks/paths.2ca19f41.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/chunks/SearchPage.512b7e80.js","_app/immutable/chunks/CommonPage.0a41690e.js","_app/immutable/chunks/MainTitle.b47c05e7.js"];
export const stylesheets = ["_app/immutable/assets/Card.7a6abfc5.css","_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];
