import{n as u,s as _}from"./scheduler.b3c879a1.js";const e=[];function q(i,l=u){let n;const o=new Set;function b(t){if(_(i,t)&&(i=t,n)){const r=!e.length;for(const s of o)s[1](),e.push(s,i);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){b(t(i))}function h(t,r=u){const s=[t,r];return o.add(s),o.size===1&&(n=l(b,c)||u),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:b,update:c,subscribe:h}}var f;const g=((f=globalThis.__sveltekit_1bshuqi)==null?void 0:f.base)??"/johnnyleung10.github.io";var a;const d=((a=globalThis.__sveltekit_1bshuqi)==null?void 0:a.assets)??g;export{d as a,g as b,q as w};
