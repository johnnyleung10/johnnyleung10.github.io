import{n as c,s as h}from"./scheduler.b3c879a1.js";const e=[];function d(o,a=c){let n;const i=new Set;function r(t){if(h(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r,u)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_lo1uts)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_lo1uts)==null?void 0:l.assets)??p;export{q as a,p as b,d as w};
