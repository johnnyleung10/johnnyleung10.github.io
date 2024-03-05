import{s as de,f as x,a as L,l as X,g as k,h as E,c as S,d as $,m as G,j as I,i as M,I as p,p as ee,K as oe,e as ae,W as xe,n as ke}from"../chunks/scheduler.b3c879a1.js";import{S as ge,i as $e,b as U,d as j,m as B,a as C,t as D,e as N,g as te,c as le}from"../chunks/index.50170cf9.js";import{e as K,u as be,U as _e,o as we}from"../chunks/UIcon.32c9a790.js";import{c as Ee,d as ie,g as J,e as Ie}from"../chunks/params.b66bf7ad.js";import{C as Ce}from"../chunks/Card.f4636452.js";import{C as De}from"../chunks/CardLogo.c1ccdcd2.js";import{C as Ve,a as ye}from"../chunks/ChipIcon.66a73e66.js";import{b as O}from"../chunks/paths.7a03318b.js";import{S as Le}from"../chunks/SearchPage.71fe19a2.js";import{i as Se}from"../chunks/index.97b3c5e0.js";function ce(a,t,l){const e=a.slice();return e[5]=t[l],e}function fe(a,t,l){const e=a.slice();return e[8]=t[l],e}function ue(a){let t,l=a[8]+"",e;return{c(){t=x("li"),e=X(l)},l(r){t=k(r,"LI",{});var s=E(t);e=G(s,l),s.forEach($)},m(r,s){M(r,t,s),p(t,e)},p(r,s){s&1&&l!==(l=r[8]+"")&&ee(e,l)},d(r){r&&$(t)}}}function me(a){let t,l;return t=new ye({props:{logo:J(a[5].logo),name:a[5].name,href:`${O}/skills/${a[5].slug}`}}),{c(){U(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,r){const s={};r&1&&(s.logo=J(e[5].logo)),r&1&&(s.name=e[5].name),r&1&&(s.href=`${O}/skills/${e[5].slug}`),t.$set(s)},i(e){l||(C(t.$$.fragment,e),l=!0)},o(e){D(t.$$.fragment,e),l=!1},d(e){N(t,e)}}}function Pe(a){let t,l,e,r,s,f,m,o,n=a[0].company+"",c,b,y=a[0].location+"",_,w,V,T,Q,Y,z,Z,q,A;l=new De({props:{src:J(a[0].logo),alt:a[0].company,size:75}}),f=new Ve({props:{title:a[0].name}});let H=K(a[0].description.split(`
`)),v=[];for(let i=0;i<H.length;i+=1)v[i]=ue(fe(a,H,i));let F=K(a[0].skills),h=[];for(let i=0;i<F.length;i+=1)h[i]=me(ce(a,F,i));const ve=i=>D(h[i],1,1,()=>{h[i]=null});return{c(){t=x("div"),U(l.$$.fragment),e=L(),r=x("div"),s=x("h3"),U(f.$$.fragment),m=L(),o=x("div"),c=X(n),b=X(" · "),_=X(y),w=L(),V=x("div"),T=X(a[1]),Q=L(),Y=x("div"),z=x("ul");for(let i=0;i<v.length;i+=1)v[i].c();Z=L(),q=x("div");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){t=k(i,"DIV",{class:!0});var d=E(t);j(l.$$.fragment,d),e=S(d),r=k(d,"DIV",{class:!0});var g=E(r);s=k(g,"H3",{class:!0});var W=E(s);j(f.$$.fragment,W),W.forEach($),m=S(g),o=k(g,"DIV",{class:!0});var u=E(o);c=G(u,n),b=G(u," · "),_=G(u,y),u.forEach($),w=S(g),V=k(g,"DIV",{class:!0});var P=E(V);T=G(P,a[1]),P.forEach($),Q=S(g),Y=k(g,"DIV",{class:!0});var re=E(Y);z=k(re,"UL",{});var ne=E(z);for(let R=0;R<v.length;R+=1)v[R].l(ne);ne.forEach($),re.forEach($),Z=S(g),q=k(g,"DIV",{class:!0});var se=E(q);for(let R=0;R<h.length;R+=1)h[R].l(se);se.forEach($),g.forEach($),d.forEach($),this.h()},h(){I(s,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),I(o,"class","text-[0.9em] font-700"),I(V,"class","text-[var(--accent-text)] text-[0.9em] font-200"),I(Y,"class","experience-description"),I(q,"class","flex flex-row flex-wrap mt-5"),I(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),I(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,d){M(i,t,d),B(l,t,null),p(t,e),p(t,r),p(r,s),B(f,s,null),p(r,m),p(r,o),p(o,c),p(o,b),p(o,_),p(r,w),p(r,V),p(V,T),p(r,Q),p(r,Y),p(Y,z);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(z,null);p(r,Z),p(r,q);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(q,null);A=!0},p(i,d){const g={};d&1&&(g.src=J(i[0].logo)),d&1&&(g.alt=i[0].company),l.$set(g);const W={};if(d&1&&(W.title=i[0].name),f.$set(W),(!A||d&1)&&n!==(n=i[0].company+"")&&ee(c,n),(!A||d&1)&&y!==(y=i[0].location+"")&&ee(_,y),d&1){H=K(i[0].description.split(`
`));let u;for(u=0;u<H.length;u+=1){const P=fe(i,H,u);v[u]?v[u].p(P,d):(v[u]=ue(P),v[u].c(),v[u].m(z,null))}for(;u<v.length;u+=1)v[u].d(1);v.length=H.length}if(d&1){F=K(i[0].skills);let u;for(u=0;u<F.length;u+=1){const P=ce(i,F,u);h[u]?(h[u].p(P,d),C(h[u],1)):(h[u]=me(P),h[u].c(),C(h[u],1),h[u].m(q,null))}for(te(),u=F.length;u<h.length;u+=1)ve(u);le()}},i(i){if(!A){C(l.$$.fragment,i),C(f.$$.fragment,i);for(let d=0;d<F.length;d+=1)C(h[d]);A=!0}},o(i){D(l.$$.fragment,i),D(f.$$.fragment,i),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)D(h[d]);A=!1},d(i){i&&$(t),N(l),N(f),oe(v,i),oe(h,i)}}}function Me(a){let t,l;return t=new Ce({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${O}/experience/${a[0].slug}`,$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){U(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,[r]){const s={};r&1&&(s.href=`${O}/experience/${e[0].slug}`),r&2049&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(C(t.$$.fragment,e),l=!0)},o(e){D(t.$$.fragment,e),l=!1},d(e){N(t,e)}}}function Ue(a,t,l){let{experience:e}=t;const r=Ee(e.period.from,e.period.to),s=`${ie(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,f=e.period.to?`${ie(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",m=`${s} - ${f} · ${r}`;return a.$$set=o=>{"experience"in o&&l(0,e=o.experience)},[e,m]}class je extends ge{constructor(t){super(),$e(this,t,Ue,Me,de,{experience:0})}}function pe(a,t,l){const e=a.slice();return e[4]=t[l],e[6]=l,e}function Be(a){let t,l,e=[],r=new Map,s,f,m=K(a[0]);const o=n=>n[4].slug;for(let n=0;n<m.length;n+=1){let c=pe(a,m,n),b=o(c);r.set(b,e[n]=he(b,c))}return{c(){t=x("div"),l=L();for(let n=0;n<e.length;n+=1)e[n].c();s=ae(),this.h()},l(n){t=k(n,"DIV",{class:!0}),E(t).forEach($),l=S(n);for(let c=0;c<e.length;c+=1)e[c].l(n);s=ae(),this.h()},h(){I(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,c){M(n,t,c),M(n,l,c);for(let b=0;b<e.length;b+=1)e[b]&&e[b].m(n,c);M(n,s,c),f=!0},p(n,c){c&1&&(m=K(n[0]),te(),e=be(e,c,o,1,n,m,r,s.parentNode,we,he,s,pe),le())},i(n){if(!f){for(let c=0;c<m.length;c+=1)C(e[c]);f=!0}},o(n){for(let c=0;c<e.length;c+=1)D(e[c]);f=!1},d(n){n&&($(t),$(l),$(s));for(let c=0;c<e.length;c+=1)e[c].d(n)}}}function Ne(a){let t,l,e,r,s="Could not find anything...",f;return l=new _e({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=x("div"),U(l.$$.fragment),e=L(),r=x("p"),r.textContent=s,this.h()},l(m){t=k(m,"DIV",{class:!0});var o=E(t);j(l.$$.fragment,o),e=S(o),r=k(o,"P",{class:!0,["data-svelte-h"]:!0}),xe(r)!=="svelte-1jyyf6v"&&(r.textContent=s),o.forEach($),this.h()},h(){I(r,"class","font-300"),I(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(m,o){M(m,t,o),B(l,t,null),p(t,e),p(t,r),f=!0},p:ke,i(m){f||(C(l.$$.fragment,m),f=!0)},o(m){D(l.$$.fragment,m),f=!1},d(m){m&&$(t),N(l)}}}function he(a,t){let l,e,r,s,f,m,o,n,c,b,y;return f=new _e({props:{icon:"i-carbon-condition-point",classes:""}}),n=new je({props:{experience:t[4]}}),{key:a,first:null,c(){l=x("div"),e=x("div"),r=L(),s=x("div"),U(f.$$.fragment),m=L(),o=x("div"),U(n.$$.fragment),c=L(),this.h()},l(_){l=k(_,"DIV",{class:!0});var w=E(l);e=k(w,"DIV",{class:!0}),E(e).forEach($),r=S(w),s=k(w,"DIV",{class:!0});var V=E(s);j(f.$$.fragment,V),V.forEach($),m=S(w),o=k(w,"DIV",{class:!0});var T=E(o);j(n.$$.fragment,T),T.forEach($),c=S(w),w.forEach($),this.h()},h(){I(e,"class","flex-1 hidden lg:flex"),I(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),I(o,"class","flex-1 col items-stretch"),I(l,"class",b=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=l},m(_,w){M(_,l,w),p(l,e),p(l,r),p(l,s),B(f,s,null),p(l,m),p(l,o),B(n,o,null),p(l,c),y=!0},p(_,w){t=_;const V={};w&1&&(V.experience=t[4]),n.$set(V),(!y||w&1&&b!==(b=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&I(l,"class",b)},i(_){y||(C(f.$$.fragment,_),C(n.$$.fragment,_),y=!0)},o(_){D(f.$$.fragment,_),D(n.$$.fragment,_),y=!1},d(_){_&&$(l),N(f),N(n)}}}function qe(a){let t,l,e,r;const s=[Ne,Be],f=[];function m(o,n){return o[0].length===0?0:1}return l=m(a),e=f[l]=s[l](a),{c(){t=x("div"),e.c(),this.h()},l(o){t=k(o,"DIV",{class:!0});var n=E(t);e.l(n),n.forEach($),this.h()},h(){I(t,"class","col items-center relative mt-10 flex-1")},m(o,n){M(o,t,n),f[l].m(t,null),r=!0},p(o,n){let c=l;l=m(o),l===c?f[l].p(o,n):(te(),D(f[c],1,1,()=>{f[c]=null}),le(),e=f[l],e?e.p(o,n):(e=f[l]=s[l](o),e.c()),C(e,1),e.m(t,null))},i(o){r||(C(e),r=!0)},o(o){D(e),r=!1},d(o){o&&$(t),f[l].d()}}}function Fe(a){let t,l;return t=new Le({props:{title:a[1],$$slots:{default:[qe]},$$scope:{ctx:a}}}),t.$on("search",a[2]),{c(){U(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,[r]){const s={};r&129&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(C(t.$$.fragment,e),l=!0)},o(e){D(t.$$.fragment,e),l=!1},d(e){N(t,e)}}}function Re(a,t,l){const{items:e,title:r}=Ie;let s=[...e];return[s,r,m=>{const o=m.detail.search;if(Se(o)){l(0,s=e);return}l(0,s=e.filter(n=>n.name.toLowerCase().includes(o)||n.company.toLowerCase().includes(o)||n.description.toLowerCase().includes(o)))}]}class Oe extends ge{constructor(t){super(),$e(this,t,Re,Fe,de,{})}}export{Oe as component};