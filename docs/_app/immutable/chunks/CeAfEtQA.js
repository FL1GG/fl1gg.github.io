import{a4 as u,b as y,a5 as E,h as d,U as g,V as c,X as h,Y as _,i as r,T as l,a6 as w,a7 as N,N as m,e as b}from"./BY6_CkA-.js";let a;function M(){a=void 0}function R(t){let e=null,n=d;var f;if(d){for(e=r,a===void 0&&(a=l(document.head));a!==null&&(a.nodeType!==8||a.data!==g);)a=c(a);a===null?h(!1):a=_(c(a))}d||(f=document.head.appendChild(u()));try{y(()=>t(f),E)}finally{n&&(h(!0),a=r,_(e))}}function A(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function i(t,e){var n=m;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function D(t,e){var n=(e&w)!==0,f=(e&N)!==0,o,v=!t.startsWith("<!>");return()=>{if(d)return i(r,null),r;o===void 0&&(o=A(v?t:"<!>"+t),n||(o=l(o)));var s=f?document.importNode(o,!0):o.cloneNode(!0);if(n){var p=l(s),T=s.lastChild;i(p,T)}else i(s,s);return s}}function F(t=""){if(!d){var e=u(t+"");return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=u()),_(n)),i(n,n),n}function I(){if(d)return i(r,null),r;var t=document.createDocumentFragment(),e=document.createComment(""),n=u();return t.append(e,n),i(e,n),t}function L(t,e){if(d){m.nodes_end=r,b();return}t!==null&&t.before(e)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{L as a,i as b,I as c,F as d,A as e,R as h,M as r,D as t};
