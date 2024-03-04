

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.f5522a9f.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/UIcon.32c9a790.js","_app/immutable/chunks/paths.2ca19f41.js","_app/immutable/chunks/params.e08454bf.js","_app/immutable/chunks/SearchPage.512b7e80.js","_app/immutable/chunks/CommonPage.0a41690e.js","_app/immutable/chunks/MainTitle.b47c05e7.js","_app/immutable/chunks/TabTitle.8b064dfa.js","_app/immutable/chunks/Chip.057f19a7.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];
