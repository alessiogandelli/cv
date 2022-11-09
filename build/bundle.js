var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function l(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,r;function a(e,t){return o||(o=document.createElement("a")),o.href=t,e===o.href}function c(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function v(){return p(" ")}function w(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e){r=e}const y=[],C=[],k=[],L=[],M=Promise.resolve();let A=!1;function S(e){k.push(e)}const B=new Set;let T=0;function I(){const e=r;do{for(;T<y.length;){const e=y[T];T++,x(e),H(e.$$)}for(x(null),y.length=0,T=0;C.length;)C.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];B.has(t)||(B.add(t),t())}k.length=0}while(y.length);for(;L.length;)L.pop()();A=!1,B.clear(),x(e)}function H(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const z=new Set;let q;function E(){q={r:0,c:[],p:q}}function D(){q.r||i(q.c),q=q.p}function V(e,t){e&&e.i&&(z.delete(e),e.i(t))}function _(e,t,n,i){if(e&&e.o){if(z.has(e))return;z.add(e),q.c.push((()=>{z.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}function j(e){e&&e.c()}function P(e,n,s,o){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=e.$$;r&&r.m(n,s),o||S((()=>{const n=a.map(t).filter(l);c?c.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(S)}function N(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(y.push(e),A||(A=!0,M.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,l,s,o,a,c,u,h=[-1]){const m=r;x(t);const g=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(m?m.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:l.target||m.$$.root};u&&u(g.root);let f=!1;if(g.ctx=s?s(t,l.props||{},((e,n,...i)=>{const l=i.length?i[0]:n;return g.ctx&&a(g.ctx[e],g.ctx[e]=l)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](l),f&&G(t,e)),n})):[],g.update(),f=!0,i(g.before_update),g.fragment=!!o&&o(g.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);g.fragment&&g.fragment.l(e),e.forEach(d)}else g.fragment&&g.fragment.c();l.intro&&V(t.$$.fragment),P(t,l.target,l.anchor,l.customElement),I()}x(m)}class U{$destroy(){N(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function F(t){let n,i,l,s,o,r,a,c;return{c(){n=g("div"),i=g("div"),l=g("p"),s=p(t[0]),o=v(),r=g("h1"),r.textContent="I'm Alessio Gandelli",a=v(),c=g("p"),c.textContent="Developer & MSc Data Science Student",$(l,"class","welcome svelte-18yifqw"),$(r,"class","svelte-18yifqw"),$(c,"class","svelte-18yifqw"),$(i,"class","title svelte-18yifqw"),$(n,"class","header svelte-18yifqw")},m(e,t){h(e,n,t),u(n,i),u(i,l),u(l,s),u(i,o),u(i,r),u(i,a),u(i,c)},p(e,[t]){1&t&&b(s,e[0])},i:e,o:e,d(e){e&&d(n)}}}function R(e,t,n){const i=["Welcome!","Benvenuto!","Willkommen!","Bienvenue!","¡Bienvenidas!"];let l=0,s=i[l];function o(){let e=l;for(;e===l;)e=Math.floor(Math.random()*i.length);l=e,n(0,s=i[l])}return setTimeout((()=>{o(),setInterval((()=>{o()}),1e4)}),8750),[s]}class J extends U{constructor(e){super(),O(this,e,R,F,s,{})}}function Z(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function W(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class K extends U{constructor(e){super(),O(this,e,W,Z,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Q(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function Y(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class X extends U{constructor(e){super(),O(this,e,Y,Q,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function ee(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function te(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class ne extends U{constructor(e){super(),O(this,e,te,ee,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function ie(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function le(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class se extends U{constructor(e){super(),O(this,e,le,ie,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function oe(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function re(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class ae extends U{constructor(e){super(),O(this,e,re,oe,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function ce(t){let n,i,l,s,o,r,a,c,m,f,w,b,x,y,C,k,L,M,A,S,B,T,I,H,z,q,E,D,G,O,U,F,R,J,Z,W,Q,Y,ee,te,ie,le,oe;return D=new K({props:{size:"48"}}),U=new X({props:{size:"48"}}),J=new ne({props:{size:"48"}}),Q=new se({props:{size:"48"}}),le=new ae({props:{size:"32"}}),{c(){n=g("h2"),n.textContent="ABOUT ME",i=v(),l=g("div"),s=g("p"),s.innerHTML='<span class="info-name svelte-1cim6c3">Name:</span>Alessio Gandelli',o=v(),r=g("p"),r.innerHTML='<span class="info-name svelte-1cim6c3">From:</span>Italy',a=v(),c=g("p"),m=g("span"),m.textContent="Age:",f=p(t[0]),w=v(),b=g("p"),b.innerHTML='<span class="info-name svelte-1cim6c3">Now in:</span>Trento (it)',x=v(),y=g("div"),C=g("div"),k=v(),L=g("p"),M=p("I'm a "),A=p(t[0]),S=p(" years old Italian student, currently attending a multidisciplinary MSc in Data Science with domain expertise in Social Sciences and Human behavior. "),B=g("br"),T=p("\n        I am a self-motivated, determined hard worker who learns quickly and thrives on taking on new challenges. \n        Continuous growth, both personally and professionally, is very important to me. "),I=g("br"),H=p("\n        I mostly learn with a project-oriented style but I also enjoy reading non-fictional books. (My favorite  authors right now are Y. N. Harari and J. Diamond.)"),z=v(),q=g("div"),E=g("a"),j(D.$$.fragment),G=v(),O=g("a"),j(U.$$.fragment),F=v(),R=g("a"),j(J.$$.fragment),Z=v(),W=g("a"),j(Q.$$.fragment),Y=v(),ee=g("div"),te=g("a"),ie=g("p"),ie.textContent="Download resume as PDF",j(le.$$.fragment),$(s,"class","svelte-1cim6c3"),$(r,"class","svelte-1cim6c3"),$(m,"class","info-name svelte-1cim6c3"),$(c,"class","svelte-1cim6c3"),$(b,"class","svelte-1cim6c3"),$(l,"class","my-info svelte-1cim6c3"),$(C,"class","picture svelte-1cim6c3"),$(L,"class","svelte-1cim6c3"),$(y,"class","about svelte-1cim6c3"),$(E,"href","https://www.github.com/alessiogandelli/"),$(E,"aria-label","GitHub"),$(E,"class","themed-icon svelte-1cim6c3"),$(E,"target","_blank"),$(O,"href","https://www.linkedin.com/in/alessio-gandelli-36289a181/"),$(O,"aria-label","LinkedIn"),$(O,"class","themed-icon svelte-1cim6c3"),$(O,"target","_blank"),$(R,"href","mailto:me@gandelli.dev"),$(R,"aria-label","Email"),$(R,"class","themed-icon svelte-1cim6c3"),$(R,"target","_blank"),$(W,"href","https://www.t.me/d8eea/"),$(W,"aria-label","Telegram"),$(W,"class","themed-icon svelte-1cim6c3"),$(W,"target","_blank"),$(q,"class","urls svelte-1cim6c3"),$(ie,"class","svelte-1cim6c3"),$(te,"href","./files/alessiogandelli_cv.pdf"),$(te,"target","_blank"),$(te,"class","svelte-1cim6c3"),$(ee,"class","download-as-pdf svelte-1cim6c3")},m(e,t){h(e,n,t),h(e,i,t),h(e,l,t),u(l,s),u(l,o),u(l,r),u(l,a),u(l,c),u(c,m),u(c,f),u(l,w),u(l,b),h(e,x,t),h(e,y,t),u(y,C),u(y,k),u(y,L),u(L,M),u(L,A),u(L,S),u(L,B),u(L,T),u(L,I),u(L,H),h(e,z,t),h(e,q,t),u(q,E),P(D,E,null),u(q,G),u(q,O),P(U,O,null),u(q,F),u(q,R),P(J,R,null),u(q,Z),u(q,W),P(Q,W,null),h(e,Y,t),h(e,ee,t),u(ee,te),u(te,ie),P(le,te,null),oe=!0},p:e,i(e){oe||(V(D.$$.fragment,e),V(U.$$.fragment,e),V(J.$$.fragment,e),V(Q.$$.fragment,e),V(le.$$.fragment,e),oe=!0)},o(e){_(D.$$.fragment,e),_(U.$$.fragment,e),_(J.$$.fragment,e),_(Q.$$.fragment,e),_(le.$$.fragment,e),oe=!1},d(e){e&&d(n),e&&d(i),e&&d(l),e&&d(x),e&&d(y),e&&d(z),e&&d(q),N(D),N(U),N(J),N(Q),e&&d(Y),e&&d(ee),N(le)}}}function ue(e){return[Math.floor(((new Date).getTime()-new Date(1999,9,13).getTime())/315576e5)]}class he extends U{constructor(e){super(),O(this,e,ue,ce,s,{})}}function de(e,t,n){const i=e.slice();return i[7]=t[n],i[8]=t,i[9]=n,i}function me(e,t,n){const i=e.slice();return i[10]=t[n],i}function ge(e){let t,n;return{c(){t=g("img"),$(t,"loading","lazy"),a(t.src,n=e[7].img)||$(t,"src",n),$(t,"alt",""),$(t,"class","svelte-ckqlq5")},m(e,n){h(e,t,n)},p(e,i){2&i&&!a(t.src,n=e[7].img)&&$(t,"src",n)},d(e){e&&d(t)}}}function fe(e){let t,n=e[7].subtitles,i=[];for(let t=0;t<n.length;t+=1)i[t]=$e(me(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=p("")},m(e,n){for(let t=0;t<i.length;t+=1)i[t].m(e,n);h(e,t,n)},p(e,l){if(2&l){let s;for(n=e[7].subtitles,s=0;s<n.length;s+=1){const o=me(e,n,s);i[s]?i[s].p(o,l):(i[s]=$e(o),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(e){m(i,e),e&&d(t)}}}function pe(e){let t,n;return{c(){t=g("img"),$(t,"loading","lazy"),a(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")||$(t,"src",n),$(t,"alt","flag"),$(t,"class","flag svelte-ckqlq5"),$(t,"width","640"),$(t,"height","480")},m(e,n){h(e,t,n)},p(e,i){2&i&&!a(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")&&$(t,"src",n)},d(e){e&&d(t)}}}function ve(e){let t,n=e[10].name+"";return{c(){t=p(n)},m(e,n){h(e,t,n)},p(e,i){2&i&&n!==(n=e[10].name+"")&&b(t,n)},d(e){e&&d(t)}}}function we(e){let t,n,i,l=e[10].name+"";return{c(){t=g("a"),n=p(l),$(t,"class","box-url svelte-ckqlq5"),$(t,"target","_blank"),$(t,"href",i=e[10].url)},m(e,i){h(e,t,i),u(t,n)},p(e,s){2&s&&l!==(l=e[10].name+"")&&b(n,l),2&s&&i!==(i=e[10].url)&&$(t,"href",i)},d(e){e&&d(t)}}}function $e(e){let t,n,i,l,s,o=e[10].text+"",r=e[10].flag&&pe(e);function a(e,t){return e[10].url?we:ve}let c=a(e),m=c(e);return{c(){t=g("div"),r&&r.c(),n=v(),i=g("h4"),m.c(),l=p(o),s=v(),$(i,"class","svelte-ckqlq5"),$(t,"class","subtitle svelte-ckqlq5")},m(e,o){h(e,t,o),r&&r.m(t,null),u(t,n),u(t,i),m.m(i,null),u(i,l),h(e,s,o)},p(e,s){e[10].flag?r?r.p(e,s):(r=pe(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),c===(c=a(e))&&m?m.p(e,s):(m.d(1),m=c(e),m&&(m.c(),m.m(i,l))),2&s&&o!==(o=e[10].text+"")&&b(l,o)},d(e){e&&d(t),r&&r.d(),m.d(),e&&d(s)}}}function be(e){let t,n,i,l,s,o=e[7].showMore?"Show less":"Show more",r=e[7].showMore&&xe(e);function a(){return e[3](e[7],e[8],e[9])}return{c(){r&&r.c(),t=v(),n=g("p"),i=p(o),$(n,"class","show-more")},m(e,o){r&&r.m(e,o),h(e,t,o),h(e,n,o),u(n,i),l||(s=w(n,"click",a),l=!0)},p(n,l){(e=n)[7].showMore?r?r.p(e,l):(r=xe(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),2&l&&o!==(o=e[7].showMore?"Show less":"Show more")&&b(i,o)},d(e){r&&r.d(e),e&&d(t),e&&d(n),l=!1,s()}}}function xe(e){let t,n=e[7].more+"";return{c(){t=g("p"),$(t,"class","more")},m(e,i){h(e,t,i),t.innerHTML=n},p(e,i){2&i&&n!==(n=e[7].more+"")&&(t.innerHTML=n)},d(e){e&&d(t)}}}function ye(e){let t,n,i,l,s,o,r,a,m,f,w,x,y,C,k,L,M,A=e[7].title+"",S=e[7].description+"",B=e[7].img&&ge(e),T=e[7].subtitles&&fe(e),I=e[7].more&&be(e);return{c(){t=g("div"),n=g("div"),B&&B.c(),i=v(),l=g("div"),s=g("h3"),o=p(A),r=v(),T&&T.c(),a=v(),m=g("div"),f=g("p"),w=v(),I&&I.c(),x=v(),y=g("span"),C=v(),k=g("span"),L=v(),$(n,"class","box-img svelte-ckqlq5"),$(s,"class","svelte-ckqlq5"),$(l,"class","box-title"),$(y,"class","fi fi-gr"),$(k,"class","fi fi-gr fis"),$(m,"class","box-description"),$(t,"class",M=c(e[7].flipped?"box flipped":"box")+" svelte-ckqlq5")},m(e,c){h(e,t,c),u(t,n),B&&B.m(n,null),u(t,i),u(t,l),u(l,s),u(s,o),u(l,r),T&&T.m(l,null),u(t,a),u(t,m),u(m,f),f.innerHTML=S,u(m,w),I&&I.m(m,null),u(m,x),u(m,y),u(m,C),u(m,k),u(t,L)},p(e,i){e[7].img?B?B.p(e,i):(B=ge(e),B.c(),B.m(n,null)):B&&(B.d(1),B=null),2&i&&A!==(A=e[7].title+"")&&b(o,A),e[7].subtitles?T?T.p(e,i):(T=fe(e),T.c(),T.m(l,null)):T&&(T.d(1),T=null),2&i&&S!==(S=e[7].description+"")&&(f.innerHTML=S),e[7].more?I?I.p(e,i):(I=be(e),I.c(),I.m(m,x)):I&&(I.d(1),I=null),2&i&&M!==(M=c(e[7].flipped?"box flipped":"box")+" svelte-ckqlq5")&&$(t,"class",M)},d(e){e&&d(t),B&&B.d(),T&&T.d(),I&&I.d()}}}function Ce(t){let n,i,l,s,o=t[2][t[0]]+"",r=t[1],a=[];for(let e=0;e<r.length;e+=1)a[e]=ye(de(t,r,e));return{c(){n=g("h2"),i=p(o),l=v(),s=g("div");for(let e=0;e<a.length;e+=1)a[e].c();$(s,"class","boxes")},m(e,t){h(e,n,t),u(n,i),h(e,l,t),h(e,s,t);for(let e=0;e<a.length;e+=1)a[e].m(s,null)},p(e,[t]){if(1&t&&o!==(o=e[2][e[0]]+"")&&b(i,o),2&t){let n;for(r=e[1],n=0;n<r.length;n+=1){const i=de(e,r,n);a[n]?a[n].p(i,t):(a[n]=ye(i),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:e,o:e,d(e){e&&d(n),e&&d(l),e&&d(s),m(a,e)}}}function ke(e,t,n){var i;let{type:l}=t;const s={Education:[{img:"./images/unitn.png",title:"Attending Master's in Data Science",subtitles:[{flag:"It",name:"University of Trento",text:", Trento, Italy | September 2021 - current",url:"https://www.unitn.it/"}],description:"                I am currently attending a multidisciplinar Master's degree in Trento in Data Science, with a minor in Sociology.                 ",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Big Data Technologies</li>                <li>Data Mining</li>                <li>Data visualization</li>                <li>Foundations of Social and Psychological Science</li>                <li>Information, Knowledge and Service Management</li>                <li>introduction to Machine Learning</li>                <li>Law and Data</li>                <li>Professional English for Data Science</li>                <li>Statistical Learning</li>                <li>Statistical Methods</li>                </ul>                <br />                Courses I am currently attending:                <ul>                <li>Advanced social network analysisy</li>                <li>Digital social data</li>                <li>Geospatial analysis and representation for data science</li>                <li>Innovation and Entrepreneurship Basic</li>                <li>Social Dynamics Lab</li>                </ul>                "},{img:"./images/unitn.png",title:"Bachelor's in Computer Science",subtitles:[{flag:"It",name:"University of Trento",text:", Trento, Italy | September 2018 - July 2022",url:"https://www.unitn.it/"}],description:"                I have taken courses in Software Engineering, Data Structures, Algorithms, Programming and Mathematics.                I graduated in July 2022.",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Algorithms and Data Structures</li>                <li>Computer Programming 1</li>                <li>Programming Languages</li>                <li>Software Engineering 1 & 2</li>                <li>Formal Languages and Compilers</li>                <li>Geometry and Linear Algebra</li>                <li>Calculus 1</li>                <li>Probability and Statistics</li>                <li>Mathematical Foundations of Computer Science</li>                <li>Physics</li>                <li>Operating Systems</li>                <li>Logic</li>                <li>Databases</li>                <li>Networks</li>                <li>Computer Architectures</li>                <li>Human-Computer Interaction</li>                <li>Introduction to Computer and Network Security</li>                <li>Introduction to Web Programming</li>                <li>Social psychology</li>                <li>Introduction to Machine Learning</li>                </ul>                "}],Experience:[{flipped:!0,img:"./images/wiki.webp",title:"Data Science Internship",subtitles:[{flag:"Es",name:"Eurecat",text:", Barcelona, Spain | January - June 2021",url:"https://www.eurecat.org/"}],description:"Analysis of Reverts and edit wars on wikipedia."},{flipped:!0,img:"./images/unitn.png",title:"Linguistic Center Division Test Center and Online Teaching",subtitles:[{flag:"It",name:"UniTn",text:", Trento, Italy | July 2020 - july 2021"}],description:"Helped professors to handle online degrees on Zoom."},{flipped:!0,img:"./images/saf.jpg",title:"Computer assistant",subtitles:[{flag:"It",name:"SAF-GEST srl",text:", Rodengo Saiano, Italy | June 2020 - current"}],description:"I developed a system that allows companies to automatically generate electronic invoices for the revenue agency (Agenzia Delle Entrate). I also give general help regarding all computer activities of the company. Though, This is not a full time job."}],Projects:[{img:"./images/soi.jpg",title:"School of Innovation",subtitles:[{flag:"It",name:"SOI",text:", Trento, Italy | July 2022",url:"https://www.soi.unitn.it"}],description:'Extracurricular program at Università di Trento focused on innovation and entrepreneurship, I\'m following the courses: Empathy and innovation, From Idea to business idea. I also attend a challenge called "Design your future" in collaboration with Muse a Museum in Trento where the goal is design a game to let children engage with Synthetic biology.'}]},o=null!==(i=null==s?void 0:s[l])&&void 0!==i?i:[];return e.$$set=e=>{"type"in e&&n(0,l=e.type)},[l,o,{Education:"Education",Experience:"Work Experiences",Projects:"Other Experiences"},(e,t,i)=>{n(1,t[i].showMore=!e.showMore,o)}]}class Le extends U{constructor(e){super(),O(this,e,ke,Ce,s,{type:0})}}function Me(t){let n,i,l;return{c(){n=g("h2"),n.textContent="Skills",i=v(),l=g("div"),l.innerHTML='<h3 class="spacer svelte-18ifcb">SOFT SKILLS:</h3> \n    <p class="spacer svelte-18ifcb">Critical thinking, Problem solving, Team work, Adaptability</p> \n\n    <h3 class="svelte-18ifcb">PROGRAMMING LANGUAGES:</h3> \n    <p class="svelte-18ifcb">Python, R, Typescript, Javascript, Bash</p> \n\n    <h3 class="svelte-18ifcb">DATA SCIENCE:</h3> \n    <p class="svelte-18ifcb">Pandas, Spark, Kafka, Geopandas, Matplotlib</p> \n\n    <h3 class="svelte-18ifcb">DATABASES:</h3> \n    <p class="svelte-18ifcb">Postgtres, MongoDB, SQLite</p> \n\n    <h3 class="svelte-18ifcb">IT SOFTWARES:</h3> \n    <p class="svelte-18ifcb">Linux, Git, Docker</p> \n\n    <h3 class="svelte-18ifcb">CLOUD INFRASTRUCTURE:</h3> \n    <p class="svelte-18ifcb">Google Cloud</p>',$(l,"class","skills svelte-18ifcb")},m(e,t){h(e,n,t),h(e,i,t),h(e,l,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(i),e&&d(l)}}}class Ae extends U{constructor(e){super(),O(this,e,null,Me,s,{})}}function Se(t){let n,i,l;return{c(){n=g("h2"),n.textContent="and more",i=v(),l=g("div"),l.innerHTML='<div class="something svelte-1bbalib"><h3 class="svelte-1bbalib">Hackathon and Competitive Coding challenge</h3> \n        <div><ul class="svelte-1bbalib"><li class="svelte-1bbalib">“NOI Hackathon” in Bolzano (2019) - Alexa voice recognition skill - 1st position</li></ul></div></div>',$(l,"class","somethings")},m(e,t){h(e,n,t),h(e,i,t),h(e,l,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(i),e&&d(l)}}}class Be extends U{constructor(e){super(),O(this,e,null,Se,s,{})}}function Te(e,t,n){const i=e.slice();return i[1]=t[n],i}function Ie(e,t,n){const i=e.slice();return i[4]=t[n],i}function He(t){let n,i,l,s,o,r,a,c,m=t[4].name+"",f=t[4].description+"";return{c(){n=g("a"),i=g("p"),l=p(m),s=v(),o=g("p"),r=p(f),a=v(),$(i,"class","name svelte-rfo546"),$(o,"class","description svelte-rfo546"),$(n,"href",c=t[4].link),$(n,"target","”_blank”"),$(n,"class","svelte-rfo546")},m(e,t){h(e,n,t),u(n,i),u(i,l),u(n,s),u(n,o),u(o,r),u(n,a)},p:e,d(e){e&&d(n)}}}function ze(e){let t,n,i,l,s,o,r=e[1].name+"",a=e[1].projects,c=[];for(let t=0;t<a.length;t+=1)c[t]=He(Ie(e,a,t));return{c(){t=g("div"),n=g("h3"),i=p(r),l=v(),s=g("div");for(let e=0;e<c.length;e+=1)c[e].c();o=v(),$(n,"class","svelte-rfo546"),$(s,"class","list"),$(t,"class","something svelte-rfo546")},m(e,r){h(e,t,r),u(t,n),u(n,i),u(t,l),u(t,s);for(let e=0;e<c.length;e+=1)c[e].m(s,null);u(t,o)},p(e,t){if(1&t){let n;for(a=e[1].projects,n=0;n<a.length;n+=1){const i=Ie(e,a,n);c[n]?c[n].p(i,t):(c[n]=He(i),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=a.length}},d(e){e&&d(t),m(c,e)}}}function qe(e){let t,n,i,l,s,o,r,a,c,f=e[0],p=[];for(let t=0;t<f.length;t+=1)p[t]=ze(Te(e,f,t));return a=new K({props:{size:"32"}}),{c(){t=g("h2"),t.textContent="Personal Projects",n=v(),i=g("div");for(let e=0;e<p.length;e+=1)p[e].c();l=v(),s=g("div"),o=g("a"),r=g("p"),r.textContent="And many more on my Github",j(a.$$.fragment),$(i,"class","somethings"),$(r,"class","svelte-rfo546"),$(o,"href","https://github.com/alessiogandelli"),$(o,"target","_blank"),$(o,"class","svelte-rfo546"),$(s,"class","more-github svelte-rfo546")},m(e,d){h(e,t,d),h(e,n,d),h(e,i,d);for(let e=0;e<p.length;e+=1)p[e].m(i,null);h(e,l,d),h(e,s,d),u(s,o),u(o,r),P(a,o,null),c=!0},p(e,[t]){if(1&t){let n;for(f=e[0],n=0;n<f.length;n+=1){const l=Te(e,f,n);p[n]?p[n].p(l,t):(p[n]=ze(l),p[n].c(),p[n].m(i,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=f.length}},i(e){c||(V(a.$$.fragment,e),c=!0)},o(e){_(a.$$.fragment,e),c=!1},d(e){e&&d(t),e&&d(n),e&&d(i),m(p,e),e&&d(l),e&&d(s),N(a)}}}function Ee(e){return[[{name:"Data Science",projects:[{name:"Covid dashboard",link:"https://github.com/alessiogandelli/covid-dashboard-unitn",description:"University project of big data technologies, implemented using Kafka, Postgres, Kafka and MongoDB"},{name:"Computer Vision: image retrieval",link:"https://github.com/alessiogandelli/machine-learning-unitn",description:"I implemented a siamese network to find the most similar image from a gallery"},{name:"Spotify network analysis",link:"https://github.com/alessiogandelli/feat-network",description:"Network analysis of spotify singers (in progress)"},{name:"Wikipedia Revert analysis",link:"https://github.com/WikiCommunityHealth/wikimedia-revert",description:"Analysis of wikipedia revert"},{name:"Geospatial ",link:"",description:"In progress"},{name:"Attention analysis",link:"",description:"University project: se phone sensors data to study the attetion that students give to their phone (in progress)"},{name:"Twitter analysis",link:"",description:"University project: Analyse twitter data (in progress)"}]},{name:"Telegram Bots",projects:[{name:"Chess, pgn to url",link:"https://github.com/alessiogandelli/import-chess-game-bot",description:"A Telegram bot that given a game in pgn format returns a url where you can visualise the game "},{name:"Bottana translator",link:"https://github.com/alessiogandelli/bottana",description:"A Telegram bot that uses Deepl api to translate messages in a group chat or sent directly to the bot "}]},{name:"node module",projects:[{name:"create-xml",link:"https://github.com/alessiogandelli/create-xml-module",description:"Node module that collect data from ninox and generate a xml according to the format provided by the Italian financial ministry"}]}]]}class De extends U{constructor(e){super(),O(this,e,Ee,qe,s,{})}}function Ve(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function _e(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class je extends U{constructor(e){super(),O(this,e,_e,Ve,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Pe(t){let n,i;return{c(){n=f("svg"),i=f("path"),$(i,"d","M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"),$(i,"fill",t[2]),$(n,"width",t[0]),$(n,"height",t[1]),$(n,"viewBox",t[3])},m(e,t){h(e,n,t),u(n,i)},p(e,[t]){4&t&&$(i,"fill",e[2]),1&t&&$(n,"width",e[0]),2&t&&$(n,"height",e[1]),8&t&&$(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function Ne(e,t,n){let{size:i="1em"}=t,{width:l=i}=t,{height:s=i}=t,{color:o="currentColor"}=t,{viewBox:r="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,l=e.width),"height"in e&&n(1,s=e.height),"color"in e&&n(2,o=e.color),"viewBox"in e&&n(3,r=e.viewBox)},[l,s,o,r,i]}class Ge extends U{constructor(e){super(),O(this,e,Ne,Pe,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Oe(e){let t,n;return t=new Ge({props:{color:"#ffad6b",size:"32"}}),{c(){j(t.$$.fragment)},m(e,i){P(t,e,i),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Ue(e){let t,n;return t=new je({props:{color:"#ffad6b",size:"32"}}),{c(){j(t.$$.fragment)},m(e,i){P(t,e,i),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Fe(e){let t,n,i,l,s,o,r,a,m,f,p,b,x,y,C,k,L,M,A,S,B,T,I,H,z,q,G,O,U,F,R,Z;n=new J({});let W=e[0]&&Oe(),K=!e[0]&&Ue();return a=new he({}),p=new Le({props:{type:"Education"}}),y=new Le({props:{type:"Experience"}}),L=new Ae({}),S=new Le({props:{type:"Projects"}}),I=new De({}),q=new Be({}),{c(){t=g("div"),j(n.$$.fragment),i=v(),l=g("div"),W&&W.c(),s=v(),K&&K.c(),o=v(),r=g("div"),j(a.$$.fragment),m=v(),f=g("div"),j(p.$$.fragment),b=v(),x=g("div"),j(y.$$.fragment),C=v(),k=g("div"),j(L.$$.fragment),M=v(),A=g("div"),j(S.$$.fragment),B=v(),T=g("div"),j(I.$$.fragment),H=v(),z=g("div"),j(q.$$.fragment),G=v(),O=g("footer"),O.innerHTML='<p class="svelte-1564b4q">Last updated November 2022</p>',$(l,"class","theme-switch themed-icon svelte-1564b4q"),$(r,"id","about-me"),$(r,"class","section svelte-1564b4q"),$(f,"id","education"),$(f,"class","section svelte-1564b4q"),$(x,"id","experiences"),$(x,"class","section svelte-1564b4q"),$(k,"id","skills"),$(k,"class","section svelte-1564b4q"),$(A,"id","other-experiences"),$(A,"class","section svelte-1564b4q"),$(T,"id","projects"),$(T,"class","section svelte-1564b4q"),$(z,"id","else"),$(z,"class","section svelte-1564b4q"),$(O,"class","svelte-1564b4q"),$(t,"class",U=c(e[0]?"main dark":"main light")+" svelte-1564b4q")},m(c,d){h(c,t,d),P(n,t,null),u(t,i),u(t,l),W&&W.m(l,null),u(l,s),K&&K.m(l,null),u(t,o),u(t,r),P(a,r,null),u(t,m),u(t,f),P(p,f,null),u(t,b),u(t,x),P(y,x,null),u(t,C),u(t,k),P(L,k,null),u(t,M),u(t,A),P(S,A,null),u(t,B),u(t,T),P(I,T,null),u(t,H),u(t,z),P(q,z,null),u(t,G),u(t,O),F=!0,R||(Z=w(l,"click",e[1]),R=!0)},p(e,[n]){e[0]?W?1&n&&V(W,1):(W=Oe(),W.c(),V(W,1),W.m(l,s)):W&&(E(),_(W,1,1,(()=>{W=null})),D()),e[0]?K&&(E(),_(K,1,1,(()=>{K=null})),D()):K?1&n&&V(K,1):(K=Ue(),K.c(),V(K,1),K.m(l,null)),(!F||1&n&&U!==(U=c(e[0]?"main dark":"main light")+" svelte-1564b4q"))&&$(t,"class",U)},i(e){F||(V(n.$$.fragment,e),V(W),V(K),V(a.$$.fragment,e),V(p.$$.fragment,e),V(y.$$.fragment,e),V(L.$$.fragment,e),V(S.$$.fragment,e),V(I.$$.fragment,e),V(q.$$.fragment,e),F=!0)},o(e){_(n.$$.fragment,e),_(W),_(K),_(a.$$.fragment,e),_(p.$$.fragment,e),_(y.$$.fragment,e),_(L.$$.fragment,e),_(S.$$.fragment,e),_(I.$$.fragment,e),_(q.$$.fragment,e),F=!1},d(e){e&&d(t),N(n),W&&W.d(),K&&K.d(),N(a),N(p),N(y),N(L),N(S),N(I),N(q),R=!1,Z()}}}function Re(e,t,n){let i=!("false"===localStorage.getItem("darkTheme"));return[i,function(){n(0,i=!i),localStorage.setItem("darkTheme",i?"true":"false")}]}return new class extends U{constructor(e){super(),O(this,e,Re,Fe,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
