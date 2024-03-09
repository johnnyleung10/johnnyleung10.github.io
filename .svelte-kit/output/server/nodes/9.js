

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.d93f9039.js","_app/immutable/chunks/scheduler.b3c879a1.js","_app/immutable/chunks/index.50170cf9.js","_app/immutable/chunks/UIcon.32c9a790.js","_app/immutable/chunks/paths.441e52bc.js","_app/immutable/chunks/params.3eaa8d8c.js","_app/immutable/chunks/SearchPage.a516d5b0.js","_app/immutable/chunks/CommonPage.3f896244.js","_app/immutable/chunks/MainTitle.b47c05e7.js","_app/immutable/chunks/TabTitle.9801bb31.js","_app/immutable/chunks/Chip.416590d0.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];
