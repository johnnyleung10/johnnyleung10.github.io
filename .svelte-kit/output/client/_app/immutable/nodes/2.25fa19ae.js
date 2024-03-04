import{s as K,f as y,a as B,g as T,h as I,d as g,c as S,j as d,i as $,I as w,J as U,K as G,u as he,o as me,l as q,m as N,R as X,p as de,S as A,q as fe,T as Q,U as W,n as R,V as _e}from"../chunks/scheduler.b3c879a1.js";import{S as Y,i as Z,b as C,d as F,m as H,a as V,t as j,e as O,c as ge,g as pe}from"../chunks/index.50170cf9.js";import{U as ee,e as L}from"../chunks/UIcon.32c9a790.js";import{g as te,I as P,u as le,M as ve,b as be,T as ne,H as ke}from"../chunks/params.e08454bf.js";import{M as we}from"../chunks/MainTitle.b47c05e7.js";import{i as xe}from"../chunks/index.97b3c5e0.js";function re(t,e,l){const r=t.slice();return r[16]=e[l],r}function se(t){let e,l,r,s,n,u,f=t[16].name+"",m,v;return{c(){e=y("div"),l=y("img"),n=B(),u=y("span"),m=q(f),v=B(),this.h()},l(k){e=T(k,"DIV",{class:!0});var p=I(e);l=T(p,"IMG",{class:!0,src:!0,alt:!0}),n=S(p),u=T(p,"SPAN",{class:!0});var x=I(u);m=N(x,f),x.forEach(g),v=S(p),p.forEach(g),this.h()},h(){d(l,"class","w-120px h-120px aspect-square"),X(l.src,r=te(t[16].logo))||d(l,"src",r),d(l,"alt",s=t[16].name),d(u,"class","text-center m-t-20px"),d(e,"class","box-content w-150px p-15px col-center")},m(k,p){$(k,e,p),w(e,l),w(e,n),w(e,u),w(u,m),w(e,v)},p(k,p){p&1&&!X(l.src,r=te(k[16].logo))&&d(l,"src",r),p&1&&s!==(s=k[16].name)&&d(l,"alt",s),p&1&&f!==(f=k[16].name+"")&&de(m,f)},d(k){k&&g(e)}}}function Ee(t){let e,l,r,s,n,u,f,m,v,k,p;r=new ee({props:{icon:"i-carbon-chevron-left"}});let x=L(t[0]),_=[];for(let c=0;c<x.length;c+=1)_[c]=se(re(t,x,c));return m=new ee({props:{icon:"i-carbon-chevron-right"}}),{c(){e=y("div"),l=y("button"),C(r.$$.fragment),s=B(),n=y("div");for(let c=0;c<_.length;c+=1)_[c].c();u=B(),f=y("button"),C(m.$$.fragment),this.h()},l(c){e=T(c,"DIV",{class:!0});var b=I(e);l=T(b,"BUTTON",{class:!0});var a=I(l);F(r.$$.fragment,a),a.forEach(g),s=S(b),n=T(b,"DIV",{class:!0});var z=I(n);for(let i=0;i<_.length;i+=1)_[i].l(z);z.forEach(g),u=S(b),f=T(b,"BUTTON",{class:!0});var o=I(f);F(m.$$.fragment,o),o.forEach(g),b.forEach(g),this.h()},h(){d(l,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),d(n,"class","row overflow-hidden box-content w-150px"),d(f,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),d(e,"class","carrousel flex-[0.5] row-center")},m(c,b){$(c,e,b),w(e,l),H(r,l,null),w(e,s),w(e,n);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(n,null);t[11](n),w(e,u),w(e,f),H(m,f,null),v=!0,k||(p=[U(l,"click",t[2]),U(l,"keyup",t[8]),U(l,"keydown",t[9]),U(l,"keypress",t[10]),U(f,"click",t[3]),U(f,"keyup",t[5]),U(f,"keydown",t[6]),U(f,"keypress",t[7])],k=!0)},p(c,[b]){if(b&1){x=L(c[0]);let a;for(a=0;a<x.length;a+=1){const z=re(c,x,a);_[a]?_[a].p(z,b):(_[a]=se(z),_[a].c(),_[a].m(n,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=x.length}},i(c){v||(V(r.$$.fragment,c),V(m.$$.fragment,c),v=!0)},o(c){j(r.$$.fragment,c),j(m.$$.fragment,c),v=!1},d(c){c&&g(e),O(r),G(_,c),t[11](null),O(m),k=!1,he(p)}}}const Ie=2e3;function ye(t,e,l){let{items:r=[]}=e,s,n,u=0,f=!0;const m=i=>{i?u<r.length-1?l(4,u=u+1):(l(4,u=u-1),f=!1):u>0?l(4,u=u-1):(l(4,u=u+1),f=!0)},v=i=>{clearTimeout(n),n=setTimeout(()=>{m(i),v(f)},Ie)},k=()=>{clearTimeout(n),f=!1,m(!1),v(f)},p=()=>{clearTimeout(n),f=!0,m(!0),v(f)};me(()=>{v(!0)});function x(i){A.call(this,t,i)}function _(i){A.call(this,t,i)}function c(i){A.call(this,t,i)}function b(i){A.call(this,t,i)}function a(i){A.call(this,t,i)}function z(i){A.call(this,t,i)}function o(i){fe[i?"unshift":"push"](()=>{s=i,l(1,s)})}return t.$$set=i=>{"items"in i&&l(0,r=i.items)},t.$$.update=()=>{t.$$.dirty&18&&s&&s.scroll({left:u*150,behavior:"smooth"})},[r,s,k,p,u,x,_,c,b,a,z,o]}class Te extends Y{constructor(e){super(),Z(this,e,ye,Ee,K,{items:0})}}const oe=t=>t===P.Youtube?"0 0 461.001 461.001":t===P.Facebook?"0 0 408.788 408.788":[P.GitHub,P.Search,P.Code].includes(t)?"0 0 16 16":"0 0 24 24";function $e(t){let e,l,r;return{c(){e=Q("svg"),l=Q("path"),this.h()},l(s){e=W(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=I(e);l=W(n,"path",{d:!0}),I(l).forEach(g),n.forEach(g),this.h()},h(){d(l,"d",t[2]),d(e,"class","inline-block"),d(e,"viewBox",r=oe(t[2])),d(e,"fill",t[1]),d(e,"height",t[0]),d(e,"width",t[0])},m(s,n){$(s,e,n),w(e,l),t[4](e)},p(s,[n]){n&4&&d(l,"d",s[2]),n&4&&r!==(r=oe(s[2]))&&d(e,"viewBox",r),n&2&&d(e,"fill",s[1]),n&1&&d(e,"height",s[0]),n&1&&d(e,"width",s[0])},i:R,o:R,d(s){s&&g(e),t[4](null)}}}function Be(t,e,l){let r,{size:s="30px"}=e,{color:n="var(--main-text)"}=e,{icon:u}=e;function f(m){fe[m?"unshift":"push"](()=>{r=m,l(3,r)})}return t.$$set=m=>{"size"in m&&l(0,s=m.size),"color"in m&&l(1,n=m.color),"icon"in m&&l(2,u=m.icon)},[s,n,u,r,f]}class Se extends Y{constructor(e){super(),Z(this,e,Be,$e,K,{size:0,color:1,icon:2})}}function ae(t,e,l){const r=t.slice();return r[7]=e[l],r}function ie(t,e,l){const r=t.slice();return r[10]=e[l],r}function ze(t){let e,l,r,s;return{c(){e=q(t[3]),l=B(),r=q(t[1]),s=q(",")},l(n){e=N(n,t[3]),l=S(n),r=N(n,t[1]),s=N(n,",")},m(n,u){$(n,e,u),$(n,l,u),$(n,r,u),$(n,s,u)},p:R,d(n){n&&(g(e),g(l),g(r),g(s))}}}function ce(t){let e,l=t[10]+"",r;return{c(){e=y("p"),r=q(l)},l(s){e=T(s,"P",{});var n=I(e);r=N(n,l),n.forEach(g)},m(s,n){$(s,e,n),w(e,r)},p:R,d(s){s&&g(e)}}}function ue(t){let e,l,r,s;return l=new Se({props:{icon:be(t[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){e=y("a"),C(l.$$.fragment),r=B(),this.h()},l(n){e=T(n,"A",{class:!0,href:!0,target:!0,rel:!0});var u=I(e);F(l.$$.fragment,u),r=S(u),u.forEach(g),this.h()},h(){d(e,"class","decoration-none"),d(e,"href",`${t[6](t[7].link)?"mailto:":""}${t[7].link}`),d(e,"target","_blank"),d(e,"rel","noreferrer")},m(n,u){$(n,e,u),H(l,e,null),w(e,r),s=!0},p:R,i(n){s||(V(l.$$.fragment,n),s=!0)},o(n){j(l.$$.fragment,n),s=!1},d(n){n&&g(e),O(l)}}}function Me(t){let e,l,r,s,n,u,f,m,v,k,p,x;document.title=e=le(t[4],ne),n=new we({props:{classes:"md:text-left ",$$slots:{default:[ze]},$$scope:{ctx:t}}});let _=L(t[0].split(`
`)),c=[];for(let o=0;o<_.length;o+=1)c[o]=ce(ie(t,_,o));let b=L(t[2]),a=[];for(let o=0;o<b.length;o+=1)a[o]=ue(ae(t,b,o));const z=o=>j(a[o],1,1,()=>{a[o]=null});return p=new Te({props:{items:t[5]??ve}}),{c(){l=B(),r=y("div"),s=y("div"),C(n.$$.fragment),u=B(),f=y("p");for(let o=0;o<c.length;o+=1)c[o].c();m=B(),v=y("div");for(let o=0;o<a.length;o+=1)a[o].c();k=B(),C(p.$$.fragment),this.h()},l(o){_e("svelte-gorrxo",document.head).forEach(g),l=S(o),r=T(o,"DIV",{class:!0});var E=I(r);s=T(E,"DIV",{class:!0});var h=I(s);F(n.$$.fragment,h),u=S(h),f=T(h,"P",{class:!0});var M=I(f);for(let D=0;D<c.length;D+=1)c[D].l(M);M.forEach(g),m=S(h),v=T(h,"DIV",{class:!0});var J=I(v);for(let D=0;D<a.length;D+=1)a[D].l(J);J.forEach(g),h.forEach(g),k=S(E),F(p.$$.fragment,E),E.forEach(g),this.h()},h(){d(f,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),d(v,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),d(s,"class","md:flex-1 gap-10px"),d(r,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(o,i){$(o,l,i),$(o,r,i),w(r,s),H(n,s,null),w(s,u),w(s,f);for(let E=0;E<c.length;E+=1)c[E]&&c[E].m(f,null);w(s,m),w(s,v);for(let E=0;E<a.length;E+=1)a[E]&&a[E].m(v,null);w(r,k),H(p,r,null),x=!0},p(o,[i]){(!x||i&16)&&e!==(e=le(o[4],ne))&&(document.title=e);const E={};if(i&8192&&(E.$$scope={dirty:i,ctx:o}),n.$set(E),i&1){_=L(o[0].split(`
`));let h;for(h=0;h<_.length;h+=1){const M=ie(o,_,h);c[h]?c[h].p(M,i):(c[h]=ce(M),c[h].c(),c[h].m(f,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=_.length}if(i&68){b=L(o[2]);let h;for(h=0;h<b.length;h+=1){const M=ae(o,b,h);a[h]?(a[h].p(M,i),V(a[h],1)):(a[h]=ue(M),a[h].c(),V(a[h],1),a[h].m(v,null))}for(pe(),h=b.length;h<a.length;h+=1)z(h);ge()}},i(o){if(!x){V(n.$$.fragment,o);for(let i=0;i<b.length;i+=1)V(a[i]);V(p.$$.fragment,o),x=!0}},o(o){j(n.$$.fragment,o),a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)j(a[i]);j(p.$$.fragment,o),x=!1},d(o){o&&(g(l),g(r)),O(n),G(c,o),G(a,o),O(p)}}}function Ue(t){const{description:e,lastName:l,links:r,name:s,title:n,skills:u}=ke;return[e,l,r,s,n,u,m=>{const v=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!xe(m)&&v.test(m)}]}class qe extends Y{constructor(e){super(),Z(this,e,Ue,Me,K,{})}}export{qe as component};
