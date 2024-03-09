import{s as ie,f as y,a as D,l as Q,g as x,h as k,c as M,m as F,d as $,j as v,i as R,I as _,J as he,K as pe,L as G,n as ve,M as $e,N as ne,O as ge,P as be,Q as ye,o as xe}from"../chunks/scheduler.b3c879a1.js";import{S as ue,i as fe,b as z,d as B,m as H,a as w,g as re,c as se,t as E,e as O}from"../chunks/index.50170cf9.js";import{U,e as ae}from"../chunks/UIcon.32c9a790.js";import{p as ke}from"../chunks/stores.bc08c4bc.js";import{t as me,H as le,N as K,a as we,o as Ee}from"../chunks/params.c6a8c848.js";import{b as _e}from"../chunks/paths.7135cd80.js";function oe(a,e,n){const t=a.slice();return t[5]=e[n],t}function ce(a){let e,n,t,s,d=a[5].title+"",o,m,i;return n=new U({props:{icon:a[5].icon,classes:"text-1.3em"}}),{c(){e=y("a"),z(n.$$.fragment),t=D(),s=y("span"),o=Q(d),m=D(),this.h()},l(r){e=x(r,"A",{href:!0,class:!0,target:!0});var u=k(e);B(n.$$.fragment,u),t=M(u),s=x(u,"SPAN",{class:!0});var N=k(s);o=F(N,d),N.forEach($),m=M(u),u.forEach($),this.h()},h(){v(s,"class","nav-menu-item-label svelte-z8k68j"),v(e,"href",`${_e}${a[5].to}`),v(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j"),v(e,"target",a[5].newTab?"_blank":"_self")},m(r,u){R(r,e,u),H(n,e,null),_(e,t),_(e,s),_(s,o),_(e,m),i=!0},p:ve,i(r){i||(w(n.$$.fragment,r),i=!0)},o(r){E(n.$$.fragment,r),i=!1},d(r){r&&$(e),O(n)}}}function Ne(a){let e,n;return e=new U({props:{icon:"i-carbon-sun"}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function je(a){let e,n;return e=new U({props:{icon:"i-carbon-moon"}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ie(a){let e,n,t,s,d,o,m=le.name+"",i,r,u=le.lastName+"",N,L,I,q,S,j,g,b,P,C,W;s=new U({props:{icon:"i-carbon-code",classes:"text-2em"}});let T=ae(a[1]),c=[];for(let l=0;l<T.length;l+=1)c[l]=ce(oe(a,T,l));const de=l=>E(c[l],1,1,()=>{c[l]=null}),X=[je,Ne],V=[];function Y(l,h){return l[0]?0:1}return g=Y(a),b=V[g]=X[g](a),{c(){e=y("div"),n=y("nav"),t=y("a"),z(s.$$.fragment),d=D(),o=y("span"),i=Q(m),r=D(),N=Q(u),L=D(),I=y("div");for(let l=0;l<c.length;l+=1)c[l].c();q=D(),S=y("div"),j=y("button"),b.c(),this.h()},l(l){e=x(l,"DIV",{class:!0});var h=k(e);n=x(h,"NAV",{class:!0});var p=k(n);t=x(p,"A",{href:!0,class:!0});var f=k(t);B(s.$$.fragment,f),d=M(f),o=x(f,"SPAN",{class:!0});var A=k(o);i=F(A,m),r=M(A),N=F(A,u),A.forEach($),f.forEach($),L=M(p),I=x(p,"DIV",{class:!0});var Z=k(I);for(let J=0;J<c.length;J+=1)c[J].l(Z);Z.forEach($),q=M(p),S=x(p,"DIV",{class:!0});var ee=k(S);j=x(ee,"BUTTON",{class:!0});var te=k(j);b.l(te),te.forEach($),ee.forEach($),p.forEach($),h.forEach($),this.h()},h(){v(o,"class","ml-2 text-md font-bold hidden md:inline"),v(t,"href",`${_e}/`),v(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),v(I,"class","flex flex-row flex-1 self-center justify-center"),v(j,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),v(S,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),v(n,"class","container !justify-between flex flex-row items-center text-sm"),v(e,"class","nav-menu svelte-z8k68j")},m(l,h){R(l,e,h),_(e,n),_(n,t),H(s,t,null),_(t,d),_(t,o),_(o,i),_(o,r),_(o,N),_(n,L),_(n,I);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(I,null);_(n,q),_(n,S),_(S,j),V[g].m(j,null),P=!0,C||(W=he(j,"click",a[3]),C=!0)},p(l,[h]){if(h&2){T=ae(l[1]);let f;for(f=0;f<T.length;f+=1){const A=oe(l,T,f);c[f]?(c[f].p(A,h),w(c[f],1)):(c[f]=ce(A),c[f].c(),w(c[f],1),c[f].m(I,null))}for(re(),f=T.length;f<c.length;f+=1)de(f);se()}let p=g;g=Y(l),g!==p&&(re(),E(V[p],1,1,()=>{V[p]=null}),se(),b=V[g],b||(b=V[g]=X[g](l),b.c()),w(b,1),b.m(j,null))},i(l){if(!P){w(s.$$.fragment,l);for(let h=0;h<T.length;h+=1)w(c[h]);w(b),P=!0}},o(l){E(s.$$.fragment,l),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)E(c[h]);E(b),P=!1},d(l){l&&$(e),O(s),pe(c,l),V[g].d(),C=!1,W()}}}function Te(a,e,n){let t,s;G(a,ke,m=>n(2,t=m)),G(a,me,m=>n(0,s=m));const d=[{title:K.personal,to:"/projects",icon:"i-carbon-cube",newTab:!1},{title:K.career,to:"/experience",icon:"i-carbon-development",newTab:!1},{title:K.resume,to:"/resume.pdf",icon:"i-carbon-result",newTab:!0}],o=()=>we();return a.$$.update=()=>{a.$$.dirty&4&&t&&t.url.pathname},[s,d,t,o]}class Ve extends ue{constructor(e){super(),fe(this,e,Te,Ie,ie,{})}}function Ae(a){let e,n,t,s,d,o;n=new Ve({});const m=a[3].default,i=$e(m,a,a[2],null);return{c(){e=y("div"),z(n.$$.fragment),t=D(),s=y("div"),i&&i.c(),this.h()},l(r){e=x(r,"DIV",{class:!0});var u=k(e);B(n.$$.fragment,u),t=M(u),s=x(u,"DIV",{class:!0});var N=k(s);i&&i.l(N),N.forEach($),u.forEach($),this.h()},h(){v(s,"class","content container svelte-mb6t29"),v(e,"class",d=ne(`body contents ${a[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(r,u){R(r,e,u),H(n,e,null),_(e,t),_(e,s),i&&i.m(s,null),o=!0},p(r,[u]){i&&i.p&&(!o||u&4)&&ge(i,m,r,r[2],o?ye(m,r[2],u,null):be(r[2]),null),(!o||u&1&&d!==(d=ne(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&v(e,"class",d)},i(r){o||(w(n.$$.fragment,r),w(i,r),o=!0)},o(r){E(n.$$.fragment,r),E(i,r),o=!1},d(r){r&&$(e),O(n),i&&i.d(r)}}}function De(a,e,n){let t;G(a,me,m=>n(0,t=m));let{$$slots:s={},$$scope:d}=e;const o=!0;return xe(()=>Ee()),a.$$set=m=>{"$$scope"in m&&n(2,d=m.$$scope)},[t,o,d,s]}class Pe extends ue{constructor(e){super(),fe(this,e,De,Ae,ie,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Pe as component};
