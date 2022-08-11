var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function l(t,e){return t!=t?e==e:t!==e}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function f(t,e,n){return t.set(n),e}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),$=d?t=>requestAnimationFrame(t):t;const m=new Set;function p(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&$(p)}function g(t,e){t.appendChild(e)}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=k("style");return function(t,e){g(t.head||t,e)}(b(t),e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function N(){return _(" ")}function S(){return _("")}function T(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function C(t,e,n){t.classList[n?"add":"remove"](e)}function z(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const M=new Map;let R,P=0;function q(t,e,n,o,r,i,s,c=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*i(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,d=b(t),{stylesheet:h,rules:$}=M.get(d)||function(t,e){const n={stylesheet:v(e),rules:{}};return M.set(t,n),n}(d,t);$[f]||($[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,P+=1,f}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),P-=r,P||$((()=>{P||(M.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),M.clear())})))}function W(t){R=t}function B(){if(!R)throw new Error("Function called outside component initialization");return R}function I(t){B().$$.on_mount.push(t)}function j(t){B().$$.on_destroy.push(t)}function U(){const t=B();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=z(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}function V(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const H=[],F=[],G=[],J=[],K=Promise.resolve();let Q=!1;function X(t){G.push(t)}function Y(t){J.push(t)}const Z=new Set;let tt,et=0;function nt(){const t=R;do{for(;et<H.length;){const t=H[et];et++,W(t),ot(t.$$)}for(W(null),H.length=0,et=0;F.length;)F.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Z.has(e)||(Z.add(e),e())}G.length=0}while(H.length);for(;J.length;)J.pop()();Q=!1,Z.clear(),W(t)}function ot(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function rt(t,e,n){t.dispatchEvent(z(`${e?"intro":"outro"}${n}`))}const it=new Set;let st;function ct(){st={r:0,c:[],p:st}}function lt(){st.r||r(st.c),st=st.p}function ut(t,e){t&&t.i&&(it.delete(t),t.i(e))}function at(t,e,n,o){if(t&&t.o){if(it.has(t))return;it.add(t),st.c.push((()=>{it.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const ft={duration:0};function dt(n,o,s,c){let l=o(n,s),u=c?0:1,a=null,f=null,d=null;function g(){d&&D(n,d)}function b(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:i=0,duration:s=300,easing:c=e,tick:v=t,css:w}=l||ft,y={start:h()+i,b:o};o||(y.group=st,st.r+=1),a||f?f=y:(w&&(g(),d=q(n,u,o,s,i,c,w)),o&&v(0,1),a=b(y,s),X((()=>rt(n,o,"start"))),function(t){let e;0===m.size&&$(p),new Promise((n=>{m.add(e={c:t,f:n})}))}((t=>{if(f&&t>f.start&&(a=b(f,s),f=null,rt(n,a.b,"start"),w&&(g(),d=q(n,u,a.b,a.duration,0,c,l.css))),a)if(t>=a.end)v(u=a.b,1-u),rt(n,a.b,"end"),f||(a.b?g():--a.group.r||r(a.group.c)),a=null;else if(t>=a.start){const e=t-a.start;u=a.a+a.d*c(e/a.duration),v(u,1-u)}return!(!a&&!f)})))}return{run(t){i(l)?(tt||(tt=Promise.resolve(),tt.then((()=>{tt=null}))),tt).then((()=>{l=l(),v(t)})):v(t)},end(){g(),a=f=null}}}function ht(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function $t(t){t&&t.c()}function mt(t,e,o,s){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,o),s||X((()=>{const e=l.map(n).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(X)}function pt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(H.push(t),Q||(Q=!0,K.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(e,n,i,s,c,l,u,a=[-1]){const f=R;W(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&gt(e,t)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&ut(e.$$.fragment),mt(e,n.target,n.anchor,n.customElement),nt()}W(f)}class vt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var wt,yt,xt,kt,Et;!function(t){t[t.closed=0]="closed",t[t.flag=1]="flag",t[t.question=2]="question",t[t.flat=3]="flat",t[t.open=4]="open",t[t.wrong_flag=5]="wrong_flag"}(wt||(wt={})),function(t){t[t.zero=0]="zero",t[t.one=1]="one",t[t.two=2]="two",t[t.three=3]="three",t[t.four=4]="four",t[t.five=5]="five",t[t.six=6]="six",t[t.seven=7]="seven",t[t.eight=8]="eight"}(yt||(yt={})),function(t){t[t.OPEN=0]="OPEN",t[t.FLAG=2]="FLAG"}(xt||(xt={})),function(t){t[t.WON=0]="WON",t[t.LOST=1]="LOST",t[t.ACTIVE=2]="ACTIVE",t[t.UNSTARTED=3]="UNSTARTED"}(kt||(kt={})),function(t){t[t.easy=0]="easy",t[t.normal=1]="normal",t[t.hard=2]="hard",t[t.expert=3]="expert",t[t.custom=4]="custom"}(Et||(Et={}));const _t=[{width:11,height:8,bombs:10},{width:20,height:14,bombs:39},{width:29,height:20,bombs:102},{width:38,height:26,bombs:230}],Nt={difficulty:Et.normal,board:_t[Et.normal],question:!1,primary_action:xt.OPEN};function St(t,e){t===Et.custom?Nt.board=e:Nt.board=_t[t]}const Tt=[];function At(e,n=t){let o;const r=new Set;function i(t){if(s(e,t)&&(e=t,o)){const t=!Tt.length;for(const t of r)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,c=t){const l=[s,c];return r.add(l),1===r.size&&(o=n(i)||t),s(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}const Ot=At(kt.UNSTARTED),Lt=At(0);function Ct(t){let e;function n(t,e){return t[1]?Pt:Rt}let o=n(t),r=o(t);return{c(){r.c(),e=S()},m(t,n){r.m(t,n),w(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&y(e)}}}function zt(e){let n;return{c(){n=_("?")},m(t,e){w(t,n,e)},p:t,d(t){t&&y(n)}}}function Mt(t){let e,n,o,r=t[0]===wt.wrong_flag&&qt();return{c(){e=E("svg"),n=E("path"),o=E("path"),r&&r.c(),A(n,"d","M2 10v-1h1v-1h2v-3h1v3h2v1h1v1z"),A(n,"fill","#000"),A(o,"d","M2 3.5l4-2.5v5z"),A(o,"fill","red"),A(e,"xmlns","http://www.w3.org/2000/svg"),A(e,"viewBox","0 0 11 11")},m(t,i){w(t,e,i),g(e,n),g(e,o),r&&r.m(e,null)},p(t,n){t[0]===wt.wrong_flag?r||(r=qt(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&y(e),r&&r.d()}}}function Rt(t){let e,n=(t[2]?t[2]:"")+"";return{c(){e=_(n)},m(t,n){w(t,e,n)},p(t,o){4&o&&n!==(n=(t[2]?t[2]:"")+"")&&O(e,n)},d(t){t&&y(e)}}}function Pt(e){let n,o;return{c(){var t,e;n=k("img"),A(n,"class","bomb svelte-1bpx7b"),t=n.src,e=o="./img/bomb.svg",c||(c=document.createElement("a")),c.href=e,t!==c.href&&A(n,"src","./img/bomb.svg"),A(n,"alt","bomb")},m(t,e){w(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(t){let e;return{c(){e=E("path"),A(e,"d","M0 0L11 11zM0 11L11 0"),A(e,"stroke","#000"),A(e,"stroke-width","0.5")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Dt(e){let n,o,i,s;function c(t,e){return t[0]===wt.flag||t[0]===wt.wrong_flag?Mt:t[0]===wt.question?zt:t[0]===wt.open?Ct:void 0}let l=c(e),u=l&&l(e);return{c(){n=k("span"),u&&u.c(),A(n,"class",o="tile "+(yt[e[2]]||"")+" "+wt[e[0]]+" svelte-1bpx7b"),C(n,"exploded",e[3])},m(t,o){var r;w(t,n,o),u&&u.m(n,null),i||(s=[T(n,"click",e[5]),T(n,"contextmenu",(r=e[6],function(t){return t.preventDefault(),r.call(this,t)})),T(n,"mousedown",e[4])],i=!0)},p(t,[e]){l===(l=c(t))&&u?u.p(t,e):(u&&u.d(1),u=l&&l(t),u&&(u.c(),u.m(n,null))),5&e&&o!==(o="tile "+(yt[t[2]]||"")+" "+wt[t[0]]+" svelte-1bpx7b")&&A(n,"class",o),13&e&&C(n,"exploded",t[3])},i:t,o:t,d(t){t&&y(n),u&&u.d(),i=!1,r(s)}}}function Wt(t,e,n){let o,r;u(t,Ot,(t=>n(14,o=t))),u(t,Lt,(t=>n(15,r=t)));let{row:i}=e,{col:s}=e,{neighbors:c=[]}=e,{state:l=wt.closed}=e,{bomb:a=!1}=e,d=null,h=!1;const $=U();function m(t=!0){if(l===wt.closed)a?(f(Ot,o=kt.LOST,o),n(3,h=!0)):($("clicked",{row:i,col:s,neighbors:c}),null===d&&n(2,d=c.reduce(((t,e)=>e.bomb?t+1:t),0)),0===d&&c.forEach((t=>t.calculateBombs()))),n(0,l=wt.open);else if(l===wt.open&&t){c.reduce(((t,e)=>e.state===wt.flag?t+1:t),0)>=d&&c.forEach((t=>t.open(!1)))}}function p(){switch(l){case wt.closed:r<Nt.board.bombs&&(n(0,l=wt.flag),f(Lt,r+=1,r));break;case wt.flag:n(0,l=wt.closed),f(Lt,r-=1,r);break;case wt.question:n(0,l=wt.closed)}}return j(Ot.subscribe((t=>{switch(t){case kt.LOST:l===wt.closed&&a?n(0,l=wt.open):l!==wt.flag||a||n(0,l=wt.wrong_flag);break;case kt.WON:a&&l!==wt.flag&&n(0,l=wt.flag)}}))),t.$$set=t=>{"row"in t&&n(7,i=t.row),"col"in t&&n(8,s=t.col),"neighbors"in t&&n(9,c=t.neighbors),"state"in t&&n(0,l=t.state),"bomb"in t&&n(1,a=t.bomb)},[l,a,d,h,function(t){0===t.button&&l===wt.open&&d&&($("flatten",{row:i,col:s}),c.forEach((t=>t.flatten())))},function(){o===kt.ACTIVE?Nt.primary_action===xt.OPEN?m():p():o===kt.UNSTARTED&&m()},function(){o===kt.ACTIVE?Nt.primary_action===xt.OPEN?p():m():o===kt.UNSTARTED&&m()},i,s,c,function(){null===d&&(n(2,d=c.reduce(((t,e)=>e.bomb?t+1:t),0)),a||m())},function(){l===wt.closed?n(0,l=wt.flat):l===wt.flat&&n(0,l=wt.closed)},m,function(t){0===t.button&&c.forEach((t=>t.flatten()))}]}class Bt extends vt{constructor(t){super(),bt(this,t,Wt,Dt,l,{row:7,col:8,neighbors:9,state:0,bomb:1,calculateBombs:10,flatten:11,open:12,unflattenNeighbors:13})}get row(){return this.$$.ctx[7]}set row(t){this.$$set({row:t}),nt()}get col(){return this.$$.ctx[8]}set col(t){this.$$set({col:t}),nt()}get neighbors(){return this.$$.ctx[9]}set neighbors(t){this.$$set({neighbors:t}),nt()}get state(){return this.$$.ctx[0]}set state(t){this.$$set({state:t}),nt()}get bomb(){return this.$$.ctx[1]}set bomb(t){this.$$set({bomb:t}),nt()}get calculateBombs(){return this.$$.ctx[10]}get flatten(){return this.$$.ctx[11]}get open(){return this.$$.ctx[12]}get unflattenNeighbors(){return this.$$.ctx[13]}}function It(t){return Math.floor(Math.random()*t)}function jt(t,e,n){const o=t.slice();return o[7]=e[n],o[8]=e,o[9]=n,o}function Ut(t,e,n){const o=t.slice();return o[7]=e[n],o[10]=e,o[11]=n,o}function Vt(t){let e,n,o=t[9],r=t[11];const i=()=>t[3](e,o,r),s=()=>t[3](null,o,r);let c={row:t[9],col:t[11]};return e=new Bt({props:c}),i(),e.$on("clicked",t[2]),e.$on("flatten",t[4]),{c(){$t(e.$$.fragment)},m(t,o){mt(e,t,o),n=!0},p(t,n){o===t[9]&&r===t[11]||(s(),o=t[9],r=t[11],i());e.$set({})},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){at(e.$$.fragment,t),n=!1},d(t){s(),pt(e,t)}}}function Ht(t){let e,n,o=Array(Nt.board.width),r=[];for(let e=0;e<o.length;e+=1)r[e]=Vt(Ut(t,o,e));const i=t=>at(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);w(t,e,o),n=!0},p(t,n){if(5&n){let s;for(o=Array(Nt.board.width),s=0;s<o.length;s+=1){const i=Ut(t,o,s);r[s]?(r[s].p(i,n),ut(r[s],1)):(r[s]=Vt(i),r[s].c(),ut(r[s],1),r[s].m(e.parentNode,e))}for(ct(),s=o.length;s<r.length;s+=1)i(s);lt()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)ut(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)at(r[t]);n=!1},d(t){x(r,t),t&&y(e)}}}function Ft(t){let e,n,o=Array(Nt.board.height),r=[];for(let e=0;e<o.length;e+=1)r[e]=Ht(jt(t,o,e));const i=t=>at(r[t],1,1,(()=>{r[t]=null}));return{c(){e=k("div");for(let t=0;t<r.length;t+=1)r[t].c();A(e,"class","board svelte-1r5nu20"),L(e,"grid-template","repeat("+Nt.board.height+", 1fr) / repeat("+Nt.board.width+", 1fr)"),C(e,"disabled",t[1]===kt.WON||t[1]===kt.LOST)},m(t,o){w(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(5&n){let s;for(o=Array(Nt.board.height),s=0;s<o.length;s+=1){const i=jt(t,o,s);r[s]?(r[s].p(i,n),ut(r[s],1)):(r[s]=Ht(i),r[s].c(),ut(r[s],1),r[s].m(e,null))}for(ct(),s=o.length;s<r.length;s+=1)i(s);lt()}2&n&&C(e,"disabled",t[1]===kt.WON||t[1]===kt.LOST)},i(t){if(!n){for(let t=0;t<o.length;t+=1)ut(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)at(r[t]);n=!1},d(t){t&&y(e),x(r,t)}}}function Gt(t,e,n){let o;u(t,Ot,(t=>n(1,o=t)));const r=new Array(Nt.board.height).fill(null).map((()=>[]));let i=Nt.board.width*Nt.board.height;return I((()=>{for(let t=0;t<r.length;++t)for(let e=0;e<r[t].length;++e){const o=[];for(let n=-1;n<=1;++n)for(let i=-1;i<=1;++i)(n||i)&&r[t+n]&&r[t+n][e+i]&&o.push(r[t+n][e+i]);n(0,r[t][e].neighbors=o,r)}})),[r,o,function(t){o===kt.UNSTARTED&&(f(Ot,o=kt.ACTIVE,o),function(t,e,o){const i=new Array(Nt.board.width*Nt.board.height).fill(null).map(((t,e)=>e)),s=new Set;s.add(e+t*Nt.board.width),o.forEach((t=>s.add(t.col+t.row*Nt.board.width)));for(let t=0;t<Nt.board.bombs;++t){let t=It(i.length);for(;s.has(i[t]);)i.splice(t,1),t=It(i.length);const e=i.splice(t,1)[0];n(0,r[Math.floor(e/Nt.board.width)][e%Nt.board.width].bomb=!0,r)}}(t.detail.row,t.detail.col,t.detail.neighbors)),i-=1,i===Nt.board.bombs&&(f(Ot,o=kt.WON,o),Lt.set(Nt.board.bombs))},function(t,e,o){F[t?"unshift":"push"]((()=>{r[e][o]=t,n(0,r)}))},function(e){V.call(this,t,e)}]}class Jt extends vt{constructor(t){super(),bt(this,t,Gt,Ft,s,{tiles:0})}get tiles(){return this.$$.ctx[0]}}function Kt(t){let e;return{c(){e=_("🙂")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Qt(t){let e;return{c(){e=_("😮")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Xt(t){let e;return{c(){e=_("😖")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Yt(t){let e;return{c(){e=_("😎")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Zt(e){let n,o,r;function i(t,e){return t[1]===kt.WON?Yt:t[1]===kt.LOST?Xt:t[0]?Qt:Kt}let s=i(e),c=s(e);return{c(){n=k("div"),c.c(),A(n,"class","face svelte-1qtximc")},m(t,i){w(t,n,i),c.m(n,null),o||(r=T(n,"click",e[2]),o=!0)},p(t,[e]){s!==(s=i(t))&&(c.d(1),c=s(t),c&&(c.c(),c.m(n,null)))},i:t,o:t,d(t){t&&y(n),c.d(),o=!1,r()}}}function te(t,e,n){let o;u(t,Ot,(t=>n(1,o=t)));let{anticipating:r}=e;return t.$$set=t=>{"anticipating"in t&&n(0,r=t.anticipating)},[r,o,function(e){V.call(this,t,e)}]}class ee extends vt{constructor(t){super(),bt(this,t,te,Zt,s,{anticipating:0})}}function ne(e){let n,o;return{c(){n=k("div"),o=_(e[0]),A(n,"class","display svelte-1umr28q")},m(t,e){w(t,n,e),g(n,o)},p(t,[e]){1&e&&O(o,t[0])},i:t,o:t,d(t){t&&y(n)}}}function oe(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}class re extends vt{constructor(t){super(),bt(this,t,oe,ne,s,{value:0})}}function ie(t){let e,n;return e=new re({props:{value:t[0]}}),{c(){$t(e.$$.fragment)},m(t,o){mt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.value=t[0]),e.$set(o)},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){at(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function se(t){const e=Math.floor(t/3600);return(e?`${e}:`.padStart(3,"0"):"")+`${Math.floor(t%3600/60)}:`.padStart(3,"0")+(""+t%60).padStart(2,"0")}function ce(t,e,n){let o,{time:r=0}=e,i="00:00";return t.$$set=t=>{"time"in t&&n(1,r=t.time)},[i,r,function(){n(1,r=0),o=setInterval((()=>{n(1,r+=1),n(0,i=se(r))}),1e3)},function(){clearInterval(o)},function(){clearInterval(o),n(0,i="00:00")}]}class le extends vt{constructor(t){super(),bt(this,t,ce,ie,s,{time:1,start:2,stop:3,reset:4})}get time(){return this.$$.ctx[1]}set time(t){this.$$set({time:t}),nt()}get start(){return this.$$.ctx[2]}get stop(){return this.$$.ctx[3]}get reset(){return this.$$.ctx[4]}}function ue(t,{delay:n=0,duration:o=400,easing:r=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*i}}function ae(t){let e,n,o,r;const i=t[5].default,s=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(i,t,t[4],null);return{c(){e=k("div"),s&&s.c(),A(e,"class","radio svelte-18dwl1k"),A(e,"checked",t[0])},m(i,c){w(i,e,c),s&&s.m(e,null),n=!0,o||(r=T(e,"click",t[6]),o=!0)},p(t,[o]){s&&s.p&&(!n||16&o)&&function(t,e,n,o,r,i){if(r){const s=a(e,n,o,i);t.p(s,r)}}(s,i,t,t[4],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(i,t[4],o,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[4]),null),(!n||1&o)&&A(e,"checked",t[0])},i(t){n||(ut(s,t),n=!0)},o(t){at(s,t),n=!1},d(t){t&&y(e),s&&s.d(t),o=!1,r()}}}class fe{constructor(){this.elements=new Set,this.value=null,this.size=0}add(t){t.isChecked()&&this.check(t),this.elements.add(t),++this.size}delete(t){this.elements.delete(t),--this.size,t.isChecked()&&(this.value=null)}check(t){this.value=t.value;for(const e of this.elements)e.isChecked()&&e!==t&&e.uncheck()}}const de=new Map;function he(t,e,n){let{$$slots:o={},$$scope:r}=e,{checked:i=!1}=e,{name:s=null}=e,{value:c}=e;const l={value:c,isChecked:()=>i,uncheck:()=>n(0,i=!1)};let u=!1;I((()=>{s&&(de.has(s)||de.set(s,new fe),de.get(s).add(l)),n(3,u=!0)})),j((()=>{if(s){const t=de.get(s);1===t.size?de.delete(s):t.delete(l)}}));return t.$$set=t=>{"checked"in t&&n(0,i=t.checked),"name"in t&&n(1,s=t.name),"value"in t&&n(2,c=t.value),"$$scope"in t&&n(4,r=t.$$scope)},t.$$.update=()=>{11&t.$$.dirty&&i&&u&&de.get(s).check(l)},[i,s,c,u,r,o,()=>n(0,i=!0)]}class $e extends vt{constructor(t){super(),bt(this,t,he,ae,s,{checked:0,name:1,value:2})}}function me(e){let n,o,i,s,c,l,u,a;return{c(){n=k("div"),o=k("div"),i=N(),s=k("div"),c=N(),l=k("div"),A(o,"class","slider border svelte-1okqpth"),A(s,"class","slider bar svelte-1okqpth"),L(s,"width",`${e[1]}%`,!1),A(l,"class","knob svelte-1okqpth"),L(l,"left","min(max("+e[1]+"%, var(--half)), calc(100% - var(--half)))"),A(l,"value",e[0]),A(n,"class","range svelte-1okqpth"),A(n,"tabindex","0")},m(t,r){w(t,n,r),g(n,o),g(n,i),g(n,s),g(n,c),g(n,l),e[8](n),u||(a=[T(n,"mousedown",e[3]),T(n,"keydown",e[4])],u=!0)},p(t,[e]){2&e&&L(s,"width",`${t[1]}%`,!1),2&e&&L(l,"left","min(max("+t[1]+"%, var(--half)), calc(100% - var(--half)))"),1&e&&A(l,"value",t[0])},i:t,o:t,d(t){t&&y(n),e[8](null),u=!1,r(a)}}}function pe(t,e,n,o=1){return(t=ge(t,o))>e?t<n?t:n:e}function ge(t,e){const n=t%e;return n>e/2?t+e-n:t-n}function be(t,e,n){let o,{min:r}=e,{max:i}=e,{step:s=1}=e,{value:c=null}=e,l=100/(i-r);s*=l;let u=(r*l+s)%s,a=100-100%s,f=ge(50,s);function d(t){const{left:e,width:r}=o.getBoundingClientRect();n(1,f=pe(100*(t.x-e)/r,u,a,s))}function h(t){window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",h)}return t.$$set=t=>{"min"in t&&n(6,r=t.min),"max"in t&&n(7,i=t.max),"step"in t&&n(5,s=t.step),"value"in t&&n(0,c=t.value)},t.$$.update=()=>{66&t.$$.dirty&&n(0,c=r+Math.round(f/l))},[c,f,o,function(t){const{left:e,width:r}=o.getBoundingClientRect();n(1,f=pe(100*(t.x-e)/r,u,a,s)),window.addEventListener("mousemove",d),window.addEventListener("mouseup",h)},function(t){const e=t.key.toLowerCase();["s","a","arrowleft","arrowdown"].includes(e)?n(1,f=pe(f-s,u,a,s)):["w","d","arrowright","arrowup"].includes(e)&&n(1,f=pe(f+s,u,a,s))},s,r,i,function(t){F[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class ve extends vt{constructor(t){super(),bt(this,t,be,me,s,{min:6,max:7,step:5,value:0})}}function we(t){let e;return{c(){e=_("Easy")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function ye(t){let e;return{c(){e=_("Normal")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function xe(t){let e;return{c(){e=_("Hard")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function ke(t){let e;return{c(){e=_("Expert")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Ee(t){let e;return{c(){e=_("Custom")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function _e(t){let e,n,o,r,i,s,c,l,u,a,f,d,h,$,m,p,b,v,x,S,L,z,M,R,P,q,D,W,B,I,j,U,V,H,G,J,K,Q,Z,tt,et,nt,ot,rt,it,st,ct;function lt(e){t[5](e)}a=new $e({props:{value:"0",name:"difficulty",$$slots:{default:[we]},$$scope:{ctx:t}}}),d=new $e({props:{value:"1",name:"difficulty",$$slots:{default:[ye]},$$scope:{ctx:t}}}),$=new $e({props:{value:"2",name:"difficulty",checked:!0,$$slots:{default:[xe]},$$scope:{ctx:t}}}),p=new $e({props:{value:"3",name:"difficulty",$$slots:{default:[ke]},$$scope:{ctx:t}}}),v=new $e({props:{value:"4",name:"difficulty",checked:!0,$$slots:{default:[Ee]},$$scope:{ctx:t}}});let ft={min:3,max:50};function gt(e){t[6](e)}void 0!==t[2]&&(ft.value=t[2]),q=new ve({props:ft}),F.push((()=>ht(q,"value",lt)));let bt={min:5,max:50};function vt(e){t[7](e)}void 0!==t[3]&&(bt.value=t[3]),H=new ve({props:bt}),F.push((()=>ht(H,"value",gt)));let wt={min:1,max:t[2]*t[3]-9};return void 0!==t[1]&&(wt.value=t[1]),nt=new ve({props:wt}),F.push((()=>ht(nt,"value",vt))),{c(){e=k("div"),n=k("section"),o=k("h1"),o.textContent="Settings",r=N(),i=E("svg"),s=E("path"),c=N(),l=k("h2"),l.textContent="Difficulty",u=N(),$t(a.$$.fragment),f=N(),$t(d.$$.fragment),h=N(),$t($.$$.fragment),m=N(),$t(p.$$.fragment),b=N(),$t(v.$$.fragment),x=N(),S=k("div"),L=k("h4"),z=_("Width ("),M=_(t[2]),R=_(")"),P=N(),$t(q.$$.fragment),W=N(),B=k("h4"),I=_("Height ("),j=_(t[3]),U=_(")"),V=N(),$t(H.$$.fragment),J=N(),K=k("h4"),Q=_("Bombs ("),Z=_(t[1]),tt=_(")"),et=N(),$t(nt.$$.fragment),A(s,"d","M1 1L7 7M7 1L1 7"),A(i,"class","close svelte-148fjbb"),A(i,"xmlns","http://www.w3.org/2000/svg"),A(i,"viewBox","0 0 8 8"),A(S,"class","custom svelte-148fjbb"),A(n,"class","svelte-148fjbb"),A(e,"class","settings svelte-148fjbb"),C(e,"visible",t[0])},m(y,k){w(y,e,k),g(e,n),g(n,o),g(n,r),g(n,i),g(i,s),g(n,c),g(n,l),g(n,u),mt(a,n,null),g(n,f),mt(d,n,null),g(n,h),mt($,n,null),g(n,m),mt(p,n,null),g(n,b),mt(v,n,null),g(n,x),g(n,S),g(S,L),g(L,z),g(L,M),g(L,R),g(S,P),mt(q,S,null),g(S,W),g(S,B),g(B,I),g(B,j),g(B,U),g(S,V),mt(H,S,null),g(S,J),g(S,K),g(K,Q),g(K,Z),g(K,tt),g(S,et),mt(nt,S,null),it=!0,st||(ct=T(i,"click",t[4]),st=!0)},p(t,[n]){const o={};512&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o);const r={};512&n&&(r.$$scope={dirty:n,ctx:t}),d.$set(r);const i={};512&n&&(i.$$scope={dirty:n,ctx:t}),$.$set(i);const s={};512&n&&(s.$$scope={dirty:n,ctx:t}),p.$set(s);const c={};512&n&&(c.$$scope={dirty:n,ctx:t}),v.$set(c),(!it||4&n)&&O(M,t[2]);const l={};!D&&4&n&&(D=!0,l.value=t[2],Y((()=>D=!1))),q.$set(l),(!it||8&n)&&O(j,t[3]);const u={};!G&&8&n&&(G=!0,u.value=t[3],Y((()=>G=!1))),H.$set(u),(!it||2&n)&&O(Z,t[1]);const f={};12&n&&(f.max=t[2]*t[3]-9),!ot&&2&n&&(ot=!0,f.value=t[1],Y((()=>ot=!1))),nt.$set(f),1&n&&C(e,"visible",t[0])},i(t){it||(ut(a.$$.fragment,t),ut(d.$$.fragment,t),ut($.$$.fragment,t),ut(p.$$.fragment,t),ut(v.$$.fragment,t),ut(q.$$.fragment,t),ut(H.$$.fragment,t),ut(nt.$$.fragment,t),X((()=>{rt||(rt=dt(e,ue,{duration:200},!0)),rt.run(1)})),it=!0)},o(t){at(a.$$.fragment,t),at(d.$$.fragment,t),at($.$$.fragment,t),at(p.$$.fragment,t),at(v.$$.fragment,t),at(q.$$.fragment,t),at(H.$$.fragment,t),at(nt.$$.fragment,t),rt||(rt=dt(e,ue,{duration:200},!1)),rt.run(0),it=!1},d(t){t&&y(e),pt(a),pt(d),pt($),pt(p),pt(v),pt(q),pt(H),pt(nt),t&&rt&&rt.end(),st=!1,ct()}}}function Ne(t,e,n){let{visible:o=!1}=e;const r=U();let{bombs:i,width:s,height:c}=Nt.board;return t.$$set=t=>{"visible"in t&&n(0,o=t.visible)},[o,i,s,c,function(){const t=+de.get("difficulty").value;t===Et.custom?St(Et.custom,{bombs:i,width:s,height:c}):St(t),r("close"),n(0,o=!1)},function(t){s=t,n(2,s)},function(t){c=t,n(3,c)},function(t){i=t,n(1,i)}]}class Se extends vt{constructor(t){super(),bt(this,t,Ne,_e,s,{visible:0})}}function Te(t){let e,n;return e=new Jt({props:{}}),t[15](e),e.$on("flatten",t[16]),{c(){$t(e.$$.fragment)},m(t,o){mt(e,t,o),n=!0},p(t,n){e.$set({})},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){at(e.$$.fragment,t),n=!1},d(n){t[15](null),pt(e,n)}}}function Ae(e){let n,o,r,i,c,l,u,a,f,d=e[0];r=new re({props:{value:Nt.board.bombs-e[9]}}),c=new ee({props:{anticipating:e[3]}}),c.$on("click",e[12]);u=new le({props:{}}),e[14](u);let h=Te(e);return{c(){n=k("main"),o=k("header"),$t(r.$$.fragment),i=N(),$t(c.$$.fragment),l=N(),$t(u.$$.fragment),a=N(),h.c(),A(o,"class","svelte-1elxm43"),L(n,"--tile-size",e[5]),A(n,"class","svelte-1elxm43")},m(t,s){w(t,n,s),g(n,o),mt(r,o,null),g(o,i),mt(c,o,null),g(o,l),mt(u,o,null),g(n,a),h.m(n,null),e[17](n),f=!0},p(e,o){const i={};512&o&&(i.value=Nt.board.bombs-e[9]),r.$set(i);const l={};8&o&&(l.anticipating=e[3]),c.$set(l);u.$set({}),1&o&&s(d,d=e[0])?(ct(),at(h,1,1,t),lt(),h=Te(e),h.c(),ut(h,1),h.m(n,null)):h.p(e,o),(!f||32&o)&&L(n,"--tile-size",e[5])},i(t){f||(ut(r.$$.fragment,t),ut(c.$$.fragment,t),ut(u.$$.fragment,t),ut(h),f=!0)},o(t){at(r.$$.fragment,t),at(c.$$.fragment,t),at(u.$$.fragment,t),at(h),f=!1},d(t){t&&y(n),pt(r),pt(c),e[14](null),pt(u),h.d(t),e[17](null)}}}function Oe(e){let n,o,i,c,l,u,a,f=e[7],d=Ae(e);function h(t){e[18](t)}let $={};return void 0!==e[8]&&($.visible=e[8]),i=new Se({props:$}),F.push((()=>ht(i,"visible",h))),i.$on("close",e[13]),{c(){n=N(),d.c(),o=N(),$t(i.$$.fragment)},m(t,r){w(t,n,r),d.m(t,r),w(t,o,r),mt(i,t,r),l=!0,u||(a=[T(document.body,"mousedown",e[11]),T(document.body,"mouseup",e[10])],u=!0)},p(e,[n]){128&n&&s(f,f=e[7])?(ct(),at(d,1,1,t),lt(),d=Ae(e),d.c(),ut(d,1),d.m(o.parentNode,o)):d.p(e,n);const r={};!c&&256&n&&(c=!0,r.visible=e[8],Y((()=>c=!1))),i.$set(r)},i(t){l||(ut(d),ut(i.$$.fragment,t),l=!0)},o(t){at(d),at(i.$$.fragment,t),l=!1},d(t){t&&y(n),d.d(t),t&&y(o),pt(i,t),u=!1,r(a)}}}function Le(t,e,n){let o,r;u(t,Lt,(t=>n(9,o=t))),u(t,Ot,(t=>n(19,r=t)));let i,s,c,l,a=0,d=null,h=!1,$=!1,m=!0;c=window.innerWidth>window.innerHeight?100/(Nt.board.height+1.5)+"vmin":100/Nt.board.width+"vmin",l&&l.style.setProperty("--tile-size",c);const p=Ot.subscribe((t=>{switch(t){case kt.ACTIVE:s.start();break;case kt.WON:!function(t){if(Nt.difficulty===Et.custom)return;const e=JSON.parse(atob(localStorage.getItem("high-scores")||"W10=")),n=+e[Nt.difficulty];(isNaN(n)||n>t)&&(console.log(`new best time for ${Et[Nt.difficulty]} mode: ${se(t)}`),e[Nt.difficulty]=t,localStorage.setItem("high-scores",btoa(JSON.stringify(e))))}(s.time);case kt.LOST:s.stop()}}));I((()=>{window.addEventListener("resize",(()=>{window.innerWidth>window.innerHeight?n(5,c=100/(Nt.board.height+1.5)+"vmin"):n(5,c=100/Nt.board.width+"vmin"),l&&l.style.setProperty("--tile-size",c)}))})),j(p);return[a,d,i,h,s,c,l,$,m,o,function(t){t.button===Nt.primary_action&&t.target.classList.contains("tile")&&n(3,h=!1),d&&(d.unflattenNeighbors(t),n(1,d=null))},function(t){t.button===Nt.primary_action&&t.target.classList.contains("tile")&&n(3,h=!0)},function(){r!==kt.UNSTARTED?(n(0,a+=1),f(Ot,r=kt.UNSTARTED,r),s.reset(),f(Lt,o=0,o)):n(8,m=!0)},function(){window.innerWidth>window.innerHeight?n(5,c=100/(Nt.board.height+1.5)+"vmin"):n(5,c=100/Nt.board.width+"vmin"),l&&l.style.setProperty("--tile-size",c),n(7,$=!$)},function(t){F[t?"unshift":"push"]((()=>{s=t,n(4,s)}))},function(t){F[t?"unshift":"push"]((()=>{i=t,n(2,i)}))},t=>n(1,d=i.tiles[t.detail.row][t.detail.col]),function(t){F[t?"unshift":"push"]((()=>{l=t,n(6,l)}))},function(t){m=t,n(8,m)}]}return new class extends vt{constructor(t){super(),bt(this,t,Le,Oe,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
