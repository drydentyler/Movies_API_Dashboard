(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function ni(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ss=ni(Is);function Ja(e){return!!e||e===""}function ri(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ae(r)?Fs(r):ri(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(ae(e))return e;if(X(e))return e}}const Ps=/;(?![^(]*\))/g,Ds=/:(.+)/;function Fs(e){const t={};return e.split(Ps).forEach(n=>{if(n){const r=n.split(Ds);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ii(e){let t="";if(ae(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=ii(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function $s(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ft(e[r],t[r]);return n}function Ft(e,t){if(e===t)return!0;let n=Wi(e),r=Wi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=en(e),r=en(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return n&&r?$s(e,t):!1;if(n=X(e),r=X(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Ft(e[o],t[o]))return!1}}return String(e)===String(t)}function Ga(e,t){return e.findIndex(n=>Ft(n,t))}const oe=e=>ae(e)?e:e==null?"":P(e)||X(e)&&(e.toString===eo||!R(e.toString))?JSON.stringify(e,Za,2):String(e),Za=(e,t)=>t&&t.__v_isRef?Za(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:er(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!P(t)&&!to(t)?String(t):t,V={},Tt=[],Ie=()=>{},Rs=()=>!1,Ls=/^on[^a-z]/,Qn=e=>Ls.test(e),ai=e=>e.startsWith("onUpdate:"),he=Object.assign,oi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},js=Object.prototype.hasOwnProperty,z=(e,t)=>js.call(e,t),P=Array.isArray,It=e=>dn(e)==="[object Map]",er=e=>dn(e)==="[object Set]",Wi=e=>dn(e)==="[object Date]",R=e=>typeof e=="function",ae=e=>typeof e=="string",en=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Qa=e=>X(e)&&R(e.then)&&R(e.catch),eo=Object.prototype.toString,dn=e=>eo.call(e),Us=e=>dn(e).slice(8,-1),to=e=>dn(e)==="[object Object]",si=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zs=/-(\w)/g,Ue=tr(e=>e.replace(zs,(t,n)=>n?n.toUpperCase():"")),Hs=/\B([A-Z])/g,zt=tr(e=>e.replace(Hs,"-$1").toLowerCase()),nr=tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),yr=tr(e=>e?`on${nr(e)}`:""),zn=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ki;const Bs=()=>Ki||(Ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $e;class Ys{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Vs(e,t=$e){t&&t.active&&t.effects.push(e)}const li=e=>{const t=new Set(e);return t.w=0,t.n=0,t},no=e=>(e.w&it)>0,ro=e=>(e.n&it)>0,Ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},Ks=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];no(i)&&!ro(i)?i.delete(e):t[n++]=i,i.w&=~it,i.n&=~it}t.length=n}},Tr=new WeakMap;let qt=0,it=1;const Ir=30;let Ee;const yt=Symbol(""),Sr=Symbol("");class ci{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vs(this,r)}run(){if(!this.active)return this.fn();let t=Ee,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,tt=!0,it=1<<++qt,qt<=Ir?Ws(this):qi(this),this.fn()}finally{qt<=Ir&&Ks(this),it=1<<--qt,Ee=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(qi(this),this.onStop&&this.onStop(),this.active=!1)}}function qi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const io=[];function Ht(){io.push(tt),tt=!1}function Bt(){const e=io.pop();tt=e===void 0?!0:e}function we(e,t,n){if(tt&&Ee){let r=Tr.get(e);r||Tr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=li()),ao(i)}}function ao(e,t){let n=!1;qt<=Ir?ro(e)||(e.n|=it,n=!no(e)):n=!e.has(Ee),n&&(e.add(Ee),Ee.deps.push(e))}function Ve(e,t,n,r,i,a){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&P(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":P(e)?si(n)&&s.push(o.get("length")):(s.push(o.get(yt)),It(e)&&s.push(o.get(Sr)));break;case"delete":P(e)||(s.push(o.get(yt)),It(e)&&s.push(o.get(Sr)));break;case"set":It(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Pr(li(l))}}function Pr(e,t){const n=P(e)?e:[...e];for(const r of n)r.computed&&Xi(r);for(const r of n)r.computed||Xi(r)}function Xi(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const qs=ni("__proto__,__v_isRef,__isVue"),oo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(en)),Xs=fi(),Js=fi(!1,!0),Gs=fi(!0),Ji=Zs();function Zs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let a=0,o=this.length;a<o;a++)we(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ht();const r=Y(this)[t].apply(this,n);return Bt(),r}}),e}function fi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?pl:uo:t?fo:co).get(r))return r;const o=P(r);if(!e&&o&&z(Ji,i))return Reflect.get(Ji,i,a);const s=Reflect.get(r,i,a);return(en(i)?oo.has(i):qs(i))||(e||we(r,"get",i),t)?s:pe(s)?o&&si(i)?s:s.value:X(s)?e?mo(s):mi(s):s}}const Qs=so(),el=so(!0);function so(e=!1){return function(n,r,i,a){let o=n[r];if(tn(o)&&pe(o)&&!pe(i))return!1;if(!e&&(!Dr(i)&&!tn(i)&&(o=Y(o),i=Y(i)),!P(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const s=P(n)&&si(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,i,a);return n===Y(a)&&(s?zn(i,o)&&Ve(n,"set",r,i):Ve(n,"add",r,i)),l}}function tl(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function nl(e,t){const n=Reflect.has(e,t);return(!en(t)||!oo.has(t))&&we(e,"has",t),n}function rl(e){return we(e,"iterate",P(e)?"length":yt),Reflect.ownKeys(e)}const lo={get:Xs,set:Qs,deleteProperty:tl,has:nl,ownKeys:rl},il={get:Gs,set(e,t){return!0},deleteProperty(e,t){return!0}},al=he({},lo,{get:Js,set:el}),ui=e=>e,rr=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const i=Y(e),a=Y(t);n||(t!==a&&we(i,"get",t),we(i,"get",a));const{has:o}=rr(i),s=r?ui:n?gi:hi;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=Y(n),i=Y(e);return t||(e!==i&&we(r,"has",e),we(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function xn(e,t=!1){return e=e.__v_raw,!t&&we(Y(e),"iterate",yt),Reflect.get(e,"size",e)}function Gi(e){e=Y(e);const t=Y(this);return rr(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function Zi(e,t){t=Y(t);const n=Y(this),{has:r,get:i}=rr(n);let a=r.call(n,e);a||(e=Y(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?zn(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function Qi(e){const t=Y(this),{has:n,get:r}=rr(t);let i=n.call(t,e);i||(e=Y(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Ve(t,"delete",e,void 0),a}function ea(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=Y(o),l=t?ui:e?gi:hi;return!e&&we(s,"iterate",yt),o.forEach((c,d)=>r.call(i,l(c),l(d),a))}}function An(e,t,n){return function(...r){const i=this.__v_raw,a=Y(i),o=It(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),d=n?ui:t?gi:hi;return!t&&we(a,"iterate",l?Sr:yt),{next(){const{value:p,done:b}=c.next();return b?{value:p,done:b}:{value:s?[d(p[0]),d(p[1])]:d(p),done:b}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function ol(){const e={get(a){return wn(this,a)},get size(){return xn(this)},has:_n,add:Gi,set:Zi,delete:Qi,clear:ea,forEach:kn(!1,!1)},t={get(a){return wn(this,a,!1,!0)},get size(){return xn(this)},has:_n,add:Gi,set:Zi,delete:Qi,clear:ea,forEach:kn(!1,!0)},n={get(a){return wn(this,a,!0)},get size(){return xn(this,!0)},has(a){return _n.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:kn(!0,!1)},r={get(a){return wn(this,a,!0,!0)},get size(){return xn(this,!0)},has(a){return _n.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),n[a]=An(a,!0,!1),t[a]=An(a,!1,!0),r[a]=An(a,!0,!0)}),[e,n,t,r]}const[sl,ll,cl,fl]=ol();function di(e,t){const n=t?e?fl:cl:e?ll:sl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(z(n,i)&&i in r?n:r,i,a)}const ul={get:di(!1,!1)},dl={get:di(!1,!0)},ml={get:di(!0,!1)},co=new WeakMap,fo=new WeakMap,uo=new WeakMap,pl=new WeakMap;function hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gl(e){return e.__v_skip||!Object.isExtensible(e)?0:hl(Us(e))}function mi(e){return tn(e)?e:pi(e,!1,lo,ul,co)}function vl(e){return pi(e,!1,al,dl,fo)}function mo(e){return pi(e,!0,il,ml,uo)}function pi(e,t,n,r,i){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=gl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function St(e){return tn(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Dr(e){return!!(e&&e.__v_isShallow)}function po(e){return St(e)||tn(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function ho(e){return Hn(e,"__v_skip",!0),e}const hi=e=>X(e)?mi(e):e,gi=e=>X(e)?mo(e):e;function bl(e){tt&&Ee&&(e=Y(e),ao(e.dep||(e.dep=li())))}function yl(e,t){e=Y(e),e.dep&&Pr(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function wl(e){return pe(e)?e.value:e}const _l={get:(e,t,n)=>wl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function go(e){return St(e)?e:new Proxy(e,_l)}var vo;class xl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[vo]=!1,this._dirty=!0,this.effect=new ci(t,()=>{this._dirty||(this._dirty=!0,yl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Y(this);return bl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}vo="__v_isReadonly";function kl(e,t,n=!1){let r,i;const a=R(e);return a?(r=e,i=Ie):(r=e.get,i=e.set),new xl(r,i,a||!i,n)}function nt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){ir(a,t,n)}return i}function Se(e,t,n,r){if(R(e)){const a=nt(e,t,n,r);return a&&Qa(a)&&a.catch(o=>{ir(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Se(e[a],t,n,r));return i}function ir(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}Al(e,n,i,r)}function Al(e,t,n,r=!0){console.error(e)}let nn=!1,Fr=!1;const ce=[];let Le=0;const Pt=[];let Be=null,pt=0;const bo=Promise.resolve();let vi=null;function Ol(e){const t=vi||bo;return e?t.then(this?e.bind(this):e):t}function El(e){let t=Le+1,n=ce.length;for(;t<n;){const r=t+n>>>1;rn(ce[r])<e?t=r+1:n=r}return t}function bi(e){(!ce.length||!ce.includes(e,nn&&e.allowRecurse?Le+1:Le))&&(e.id==null?ce.push(e):ce.splice(El(e.id),0,e),yo())}function yo(){!nn&&!Fr&&(Fr=!0,vi=bo.then(_o))}function Ml(e){const t=ce.indexOf(e);t>Le&&ce.splice(t,1)}function Nl(e){P(e)?Pt.push(...e):(!Be||!Be.includes(e,e.allowRecurse?pt+1:pt))&&Pt.push(e),yo()}function ta(e,t=nn?Le+1:0){for(;t<ce.length;t++){const n=ce[t];n&&n.pre&&(ce.splice(t,1),t--,n())}}function wo(e){if(Pt.length){const t=[...new Set(Pt)];if(Pt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>rn(n)-rn(r)),pt=0;pt<Be.length;pt++)Be[pt]();Be=null,pt=0}}const rn=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _o(e){Fr=!1,nn=!0,ce.sort(Cl);const t=Ie;try{for(Le=0;Le<ce.length;Le++){const n=ce[Le];n&&n.active!==!1&&nt(n,null,14)}}finally{Le=0,ce.length=0,wo(),nn=!1,vi=null,(ce.length||Pt.length)&&_o()}}function Tl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:b}=r[d]||V;b&&(i=n.map(A=>A.trim())),p&&(i=n.map(Cr))}let s,l=r[s=yr(t)]||r[s=yr(Ue(t))];!l&&a&&(l=r[s=yr(zt(t))]),l&&Se(l,e,6,i);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,i)}}function xo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=xo(c,t,!0);d&&(s=!0,he(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(X(e)&&r.set(e,null),null):(P(a)?a.forEach(l=>o[l]=null):he(o,a),X(e)&&r.set(e,o),o)}function ar(e,t){return!e||!Qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,zt(t))||z(e,t))}let Ne=null,or=null;function Bn(e){const t=Ne;return Ne=e,or=e&&e.type.__scopeId||null,t}function ko(e){or=e}function Ao(){or=null}function Il(e,t=Ne,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ua(-1);const a=Bn(t);let o;try{o=e(...i)}finally{Bn(a),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:p,data:b,setupState:A,ctx:$,inheritAttrs:S}=e;let L,w;const M=Bn(e);try{if(n.shapeFlag&4){const j=i||r;L=Re(d.call(j,j,p,a,A,b,$)),w=l}else{const j=t;L=Re(j.length>1?j(a,{attrs:l,slots:s,emit:c}):j(a,null)),w=t.props?l:Sl(l)}}catch(j){Jt.length=0,ir(j,e,1),L=ie(xt)}let F=L;if(w&&S!==!1){const j=Object.keys(w),{shapeFlag:W}=F;j.length&&W&7&&(o&&j.some(ai)&&(w=Pl(w,o)),F=Rt(F,w))}return n.dirs&&(F=Rt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,Bn(M),L}const Sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qn(n))&&((t||(t={}))[n]=e[n]);return t},Pl=(e,t)=>{const n={};for(const r in e)(!ai(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Dl(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?na(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const b=d[p];if(o[b]!==r[b]&&!ar(c,b))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?na(r,o,c):!0:!!o;return!1}function na(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!ar(n,a))return!0}return!1}function Fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const $l=e=>e.__isSuspense;function Rl(e,t){t&&t.pendingBranch?P(e)?t.effects.push(...e):t.effects.push(e):Nl(e)}function Ll(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function _r(e,t,n=!1){const r=se||Ne;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const ra={};function $n(e,t,n){return Oo(e,t,n)}function Oo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=V){const s=se;let l,c=!1,d=!1;if(pe(e)?(l=()=>e.value,c=Dr(e)):St(e)?(l=()=>e,r=!0):P(e)?(d=!0,c=e.some(w=>St(w)||Dr(w)),l=()=>e.map(w=>{if(pe(w))return w.value;if(St(w))return gt(w);if(R(w))return nt(w,s,2)})):R(e)?t?l=()=>nt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return p&&p(),Se(e,s,3,[b])}:l=Ie,t&&r){const w=l;l=()=>gt(w())}let p,b=w=>{p=L.onStop=()=>{nt(w,s,4)}};if(on)return b=Ie,t?n&&Se(t,s,3,[l(),d?[]:void 0,b]):l(),Ie;let A=d?[]:ra;const $=()=>{if(!!L.active)if(t){const w=L.run();(r||c||(d?w.some((M,F)=>zn(M,A[F])):zn(w,A)))&&(p&&p(),Se(t,s,3,[w,A===ra?void 0:A,b]),A=w)}else L.run()};$.allowRecurse=!!t;let S;i==="sync"?S=$:i==="post"?S=()=>be($,s&&s.suspense):($.pre=!0,s&&($.id=s.uid),S=()=>bi($));const L=new ci(l,S);return t?n?$():A=L.run():i==="post"?be(L.run.bind(L),s&&s.suspense):L.run(),()=>{L.stop(),s&&s.scope&&oi(s.scope.effects,L)}}function jl(e,t,n){const r=this.proxy,i=ae(e)?e.includes(".")?Eo(r,e):()=>r[e]:e.bind(r,r);let a;R(t)?a=t:(a=t.handler,n=t);const o=se;Lt(this);const s=Oo(i,a.bind(r),n);return o?Lt(o):_t(),s}function Eo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function gt(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))gt(e.value,t);else if(P(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(er(e)||It(e))e.forEach(n=>{gt(n,t)});else if(to(e))for(const n in e)gt(e[n],t);return e}function yi(e){return R(e)?{setup:e,name:e.name}:e}const Rn=e=>!!e.type.__asyncLoader,Mo=e=>e.type.__isKeepAlive;function Ul(e,t){No(e,"a",t)}function zl(e,t){No(e,"da",t)}function No(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(sr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Mo(i.parent.vnode)&&Hl(r,t,n,i),i=i.parent}}function Hl(e,t,n,r){const i=sr(t,e,r,!0);Co(()=>{oi(r[t],i)},n)}function sr(e,t,n=se,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ht(),Lt(n);const s=Se(t,n,e,o);return _t(),Bt(),s});return r?i.unshift(a):i.push(a),a}}const Xe=e=>(t,n=se)=>(!on||e==="sp")&&sr(e,(...r)=>t(...r),n),Bl=Xe("bm"),Yl=Xe("m"),Vl=Xe("bu"),Wl=Xe("u"),Kl=Xe("bum"),Co=Xe("um"),ql=Xe("sp"),Xl=Xe("rtg"),Jl=Xe("rtc");function Gl(e,t=se){sr("ec",e,t)}function ee(e,t){const n=Ne;if(n===null)return e;const r=cr(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,s,l,c=V]=t[a];R(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function ut(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Ht(),Se(l,n,8,[e.el,s,e,t]),Bt())}}const To="components";function rt(e,t){return Ql(To,e,!0,t)||e}const Zl=Symbol();function Ql(e,t,n=!0,r=!1){const i=Ne||se;if(i){const a=i.type;if(e===To){const s=Nc(a,!1);if(s&&(s===t||s===Ue(t)||s===nr(Ue(t))))return a}const o=ia(i[e]||a[e],t)||ia(i.appContext[e],t);return!o&&r?a:o}}function ia(e,t){return e&&(e[t]||e[Ue(t)]||e[nr(Ue(t))])}function $t(e,t,n,r){let i;const a=n&&n[r];if(P(e)||ae(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(X(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];i[s]=t(e[c],c,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const $r=e=>e?zo(e)?cr(e)||e.proxy:$r(e.parent):null,Yn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$emit:e=>e.emit,$options:e=>wi(e),$forceUpdate:e=>e.f||(e.f=()=>bi(e.update)),$nextTick:e=>e.n||(e.n=Ol.bind(e.proxy)),$watch:e=>jl.bind(e)}),ec={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==V&&z(r,t))return o[t]=1,r[t];if(i!==V&&z(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,a[t];if(n!==V&&z(n,t))return o[t]=4,n[t];Rr&&(o[t]=0)}}const d=Yn[t];let p,b;if(d)return t==="$attrs"&&we(e,"get",t),d(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==V&&z(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,z(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==V&&z(i,t)?(i[t]=n,!0):r!==V&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==V&&z(e,o)||t!==V&&z(t,o)||(s=a[0])&&z(s,o)||z(r,o)||z(Yn,o)||z(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Rr=!0;function tc(e){const t=wi(e),n=e.proxy,r=e.ctx;Rr=!1,t.beforeCreate&&aa(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:p,mounted:b,beforeUpdate:A,updated:$,activated:S,deactivated:L,beforeDestroy:w,beforeUnmount:M,destroyed:F,unmounted:j,render:W,renderTracked:ge,renderTriggered:le,errorCaptured:Ae,serverPrefetch:xe,expose:ze,inheritAttrs:Vt,components:gn,directives:vn,filters:gr}=t;if(c&&nc(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const K=o[Z];R(K)&&(r[Z]=K.bind(n))}if(i){const Z=i.call(n,n);X(Z)&&(e.data=mi(Z))}if(Rr=!0,a)for(const Z in a){const K=a[Z],ct=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):Ie,bn=!R(K)&&R(K.set)?K.set.bind(n):Ie,ft=ke({get:ct,set:bn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Pe=>ft.value=Pe})}if(s)for(const Z in s)Io(s[Z],r,n,Z);if(l){const Z=R(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Ll(K,Z[K])})}d&&aa(d,e,"c");function fe(Z,K){P(K)?K.forEach(ct=>Z(ct.bind(n))):K&&Z(K.bind(n))}if(fe(Bl,p),fe(Yl,b),fe(Vl,A),fe(Wl,$),fe(Ul,S),fe(zl,L),fe(Gl,Ae),fe(Jl,ge),fe(Xl,le),fe(Kl,M),fe(Co,j),fe(ql,xe),P(ze))if(ze.length){const Z=e.exposed||(e.exposed={});ze.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:ct=>n[K]=ct})})}else e.exposed||(e.exposed={});W&&e.render===Ie&&(e.render=W),Vt!=null&&(e.inheritAttrs=Vt),gn&&(e.components=gn),vn&&(e.directives=vn)}function nc(e,t,n=Ie,r=!1){P(e)&&(e=Lr(e));for(const i in e){const a=e[i];let o;X(a)?"default"in a?o=_r(a.from||i,a.default,!0):o=_r(a.from||i):o=_r(a),pe(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function aa(e,t,n){Se(P(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,r){const i=r.includes(".")?Eo(n,r):()=>n[r];if(ae(e)){const a=t[e];R(a)&&$n(i,a)}else if(R(e))$n(i,e.bind(n));else if(X(e))if(P(e))e.forEach(a=>Io(a,t,n,r));else{const a=R(e.handler)?e.handler.bind(n):t[e.handler];R(a)&&$n(i,a,e)}}function wi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Vn(l,c,o,!0)),Vn(l,t,o)),X(t)&&a.set(t,l),l}function Vn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Vn(e,a,n,!0),i&&i.forEach(o=>Vn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=rc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const rc={data:oa,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:mt,directives:mt,watch:ac,provide:oa,inject:ic};function oa(e,t){return t?e?function(){return he(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function ic(e,t){return mt(Lr(e),Lr(t))}function Lr(e){if(P(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function mt(e,t){return e?he(he(Object.create(null),e),t):t}function ac(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function oc(e,t,n,r=!1){const i={},a={};Hn(a,lr,1),e.propsDefaults=Object.create(null),So(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:vl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function sc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Y(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let b=d[p];if(ar(e.emitsOptions,b))continue;const A=t[b];if(l)if(z(a,b))A!==a[b]&&(a[b]=A,c=!0);else{const $=Ue(b);i[$]=jr(l,s,$,A,e,!1)}else A!==a[b]&&(a[b]=A,c=!0)}}}else{So(e,t,i,a)&&(c=!0);let d;for(const p in s)(!t||!z(t,p)&&((d=zt(p))===p||!z(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=jr(l,s,p,void 0,e,!0)):delete i[p]);if(a!==s)for(const p in a)(!t||!z(t,p)&&!0)&&(delete a[p],c=!0)}c&&Ve(e,"set","$attrs")}function So(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dn(l))continue;const c=t[l];let d;i&&z(i,d=Ue(l))?!a||!a.includes(d)?n[d]=c:(s||(s={}))[d]=c:ar(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=Y(n),c=s||V;for(let d=0;d<a.length;d++){const p=a[d];n[p]=jr(i,l,p,c[p],e,!z(c,p))}}return o}function jr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Lt(i),r=c[n]=l.call(null,t),_t())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function Po(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!R(e)){const d=p=>{l=!0;const[b,A]=Po(p,t,!0);he(o,b),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!l)return X(e)&&r.set(e,Tt),Tt;if(P(a))for(let d=0;d<a.length;d++){const p=Ue(a[d]);sa(p)&&(o[p]=V)}else if(a)for(const d in a){const p=Ue(d);if(sa(p)){const b=a[d],A=o[p]=P(b)||R(b)?{type:b}:b;if(A){const $=fa(Boolean,A.type),S=fa(String,A.type);A[0]=$>-1,A[1]=S<0||$<S,($>-1||z(A,"default"))&&s.push(p)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function sa(e){return e[0]!=="$"}function la(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ca(e,t){return la(e)===la(t)}function fa(e,t){return P(t)?t.findIndex(n=>ca(n,e)):R(t)&&ca(t,e)?0:-1}const Do=e=>e[0]==="_"||e==="$stable",_i=e=>P(e)?e.map(Re):[Re(e)],lc=(e,t,n)=>{if(t._n)return t;const r=Il((...i)=>_i(t(...i)),n);return r._c=!1,r},Fo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Do(i))continue;const a=e[i];if(R(a))t[i]=lc(i,a,r);else if(a!=null){const o=_i(a);t[i]=()=>o}}},$o=(e,t)=>{const n=_i(t);e.slots.default=()=>n},cc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Hn(t,"_",n)):Fo(t,e.slots={})}else e.slots={},t&&$o(e,t);Hn(e.slots,lr,1)},fc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(he(i,t),!n&&s===1&&delete i._):(a=!t.$stable,Fo(t,i)),o=t}else t&&($o(e,t),o={default:1});if(a)for(const s in i)!Do(s)&&!(s in o)&&delete i[s]};function Ro(){return{app:null,config:{isNativeTag:Rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uc=0;function dc(e,t){return function(r,i=null){R(r)||(r=Object.assign({},r)),i!=null&&!X(i)&&(i=null);const a=Ro(),o=new Set;let s=!1;const l=a.app={_uid:uc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Tc,get config(){return a.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,d){return d?(a.components[c]=d,l):a.components[c]},directive(c,d){return d?(a.directives[c]=d,l):a.directives[c]},mount(c,d,p){if(!s){const b=ie(r,i);return b.appContext=a,d&&t?t(b,c):e(b,c,p),s=!0,l._container=c,c.__vue_app__=l,cr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return a.provides[c]=d,l}};return l}}function Ur(e,t,n,r,i=!1){if(P(e)){e.forEach((b,A)=>Ur(b,t&&(P(t)?t[A]:t),n,r,i));return}if(Rn(r)&&!i)return;const a=r.shapeFlag&4?cr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,p=s.setupState;if(c!=null&&c!==l&&(ae(c)?(d[c]=null,z(p,c)&&(p[c]=null)):pe(c)&&(c.value=null)),R(l))nt(l,s,12,[o,d]);else{const b=ae(l),A=pe(l);if(b||A){const $=()=>{if(e.f){const S=b?z(p,l)?p[l]:d[l]:l.value;i?P(S)&&oi(S,a):P(S)?S.includes(a)||S.push(a):b?(d[l]=[a],z(p,l)&&(p[l]=d[l])):(l.value=[a],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,z(p,l)&&(p[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?($.id=-1,be($,n)):$()}}}const be=Rl;function mc(e){return pc(e)}function pc(e,t){const n=Bs();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:b,setScopeId:A=Ie,insertStaticContent:$}=e,S=(f,u,h,v=null,g=null,x=null,O=!1,_=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!Kt(f,u)&&(v=yn(f),Pe(f,g,x,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:y,ref:T,shapeFlag:N}=u;switch(y){case xi:L(f,u,h,v);break;case xt:w(f,u,h,v);break;case xr:f==null&&M(u,h,v,O);break;case de:gn(f,u,h,v,g,x,O,_,k);break;default:N&1?W(f,u,h,v,g,x,O,_,k):N&6?vn(f,u,h,v,g,x,O,_,k):(N&64||N&128)&&y.process(f,u,h,v,g,x,O,_,k,Et)}T!=null&&g&&Ur(T,f&&f.ref,x,u||f,!u)},L=(f,u,h,v)=>{if(f==null)r(u.el=s(u.children),h,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},w=(f,u,h,v)=>{f==null?r(u.el=l(u.children||""),h,v):u.el=f.el},M=(f,u,h,v)=>{[f.el,f.anchor]=$(f.children,u,h,v,f.el,f.anchor)},F=({el:f,anchor:u},h,v)=>{let g;for(;f&&f!==u;)g=b(f),r(f,h,v),f=g;r(u,h,v)},j=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=b(f),i(f),f=h;i(u)},W=(f,u,h,v,g,x,O,_,k)=>{O=O||u.type==="svg",f==null?ge(u,h,v,g,x,O,_,k):xe(f,u,g,x,O,_,k)},ge=(f,u,h,v,g,x,O,_)=>{let k,y;const{type:T,props:N,shapeFlag:I,transition:D,dirs:U}=f;if(k=f.el=o(f.type,x,N&&N.is,N),I&8?d(k,f.children):I&16&&Ae(f.children,k,null,v,g,x&&T!=="foreignObject",O,_),U&&ut(f,null,v,"created"),N){for(const H in N)H!=="value"&&!Dn(H)&&a(k,H,null,N[H],x,f.children,v,g,He);"value"in N&&a(k,"value",null,N.value),(y=N.onVnodeBeforeMount)&&Fe(y,v,f)}le(k,f,f.scopeId,O,v),U&&ut(f,null,v,"beforeMount");const q=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;q&&D.beforeEnter(k),r(k,u,h),((y=N&&N.onVnodeMounted)||q||U)&&be(()=>{y&&Fe(y,v,f),q&&D.enter(k),U&&ut(f,null,v,"mounted")},g)},le=(f,u,h,v,g)=>{if(h&&A(f,h),v)for(let x=0;x<v.length;x++)A(f,v[x]);if(g){let x=g.subTree;if(u===x){const O=g.vnode;le(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},Ae=(f,u,h,v,g,x,O,_,k=0)=>{for(let y=k;y<f.length;y++){const T=f[y]=_?Qe(f[y]):Re(f[y]);S(null,T,u,h,v,g,x,O,_)}},xe=(f,u,h,v,g,x,O)=>{const _=u.el=f.el;let{patchFlag:k,dynamicChildren:y,dirs:T}=u;k|=f.patchFlag&16;const N=f.props||V,I=u.props||V;let D;h&&dt(h,!1),(D=I.onVnodeBeforeUpdate)&&Fe(D,h,u,f),T&&ut(u,f,h,"beforeUpdate"),h&&dt(h,!0);const U=g&&u.type!=="foreignObject";if(y?ze(f.dynamicChildren,y,_,h,v,U,x):O||K(f,u,_,null,h,v,U,x,!1),k>0){if(k&16)Vt(_,u,N,I,h,v,g);else if(k&2&&N.class!==I.class&&a(_,"class",null,I.class,g),k&4&&a(_,"style",N.style,I.style,g),k&8){const q=u.dynamicProps;for(let H=0;H<q.length;H++){const ne=q[H],Oe=N[ne],Mt=I[ne];(Mt!==Oe||ne==="value")&&a(_,ne,Oe,Mt,g,f.children,h,v,He)}}k&1&&f.children!==u.children&&d(_,u.children)}else!O&&y==null&&Vt(_,u,N,I,h,v,g);((D=I.onVnodeUpdated)||T)&&be(()=>{D&&Fe(D,h,u,f),T&&ut(u,f,h,"updated")},v)},ze=(f,u,h,v,g,x,O)=>{for(let _=0;_<u.length;_++){const k=f[_],y=u[_],T=k.el&&(k.type===de||!Kt(k,y)||k.shapeFlag&70)?p(k.el):h;S(k,y,T,null,v,g,x,O,!0)}},Vt=(f,u,h,v,g,x,O)=>{if(h!==v){if(h!==V)for(const _ in h)!Dn(_)&&!(_ in v)&&a(f,_,h[_],null,O,u.children,g,x,He);for(const _ in v){if(Dn(_))continue;const k=v[_],y=h[_];k!==y&&_!=="value"&&a(f,_,y,k,O,u.children,g,x,He)}"value"in v&&a(f,"value",h.value,v.value)}},gn=(f,u,h,v,g,x,O,_,k)=>{const y=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:N,dynamicChildren:I,slotScopeIds:D}=u;D&&(_=_?_.concat(D):D),f==null?(r(y,h,v),r(T,h,v),Ae(u.children,h,T,g,x,O,_,k)):N>0&&N&64&&I&&f.dynamicChildren?(ze(f.dynamicChildren,I,h,g,x,O,_),(u.key!=null||g&&u===g.subTree)&&Lo(f,u,!0)):K(f,u,h,T,g,x,O,_,k)},vn=(f,u,h,v,g,x,O,_,k)=>{u.slotScopeIds=_,f==null?u.shapeFlag&512?g.ctx.activate(u,h,v,O,k):gr(u,h,v,g,x,O,k):Ui(f,u,k)},gr=(f,u,h,v,g,x,O)=>{const _=f.component=kc(f,v,g);if(Mo(f)&&(_.ctx.renderer=Et),Ac(_),_.asyncDep){if(g&&g.registerDep(_,fe),!f.el){const k=_.subTree=ie(xt);w(null,k,u,h)}return}fe(_,f,u,h,g,x,O)},Ui=(f,u,h)=>{const v=u.component=f.component;if(Dl(f,u,h))if(v.asyncDep&&!v.asyncResolved){Z(v,u,h);return}else v.next=u,Ml(v.update),v.update();else u.el=f.el,v.vnode=u},fe=(f,u,h,v,g,x,O)=>{const _=()=>{if(f.isMounted){let{next:T,bu:N,u:I,parent:D,vnode:U}=f,q=T,H;dt(f,!1),T?(T.el=U.el,Z(f,T,O)):T=U,N&&Fn(N),(H=T.props&&T.props.onVnodeBeforeUpdate)&&Fe(H,D,T,U),dt(f,!0);const ne=wr(f),Oe=f.subTree;f.subTree=ne,S(Oe,ne,p(Oe.el),yn(Oe),f,g,x),T.el=ne.el,q===null&&Fl(f,ne.el),I&&be(I,g),(H=T.props&&T.props.onVnodeUpdated)&&be(()=>Fe(H,D,T,U),g)}else{let T;const{el:N,props:I}=u,{bm:D,m:U,parent:q}=f,H=Rn(u);if(dt(f,!1),D&&Fn(D),!H&&(T=I&&I.onVnodeBeforeMount)&&Fe(T,q,u),dt(f,!0),N&&br){const ne=()=>{f.subTree=wr(f),br(N,f.subTree,f,g,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=wr(f);S(null,ne,h,v,f,g,x),u.el=ne.el}if(U&&be(U,g),!H&&(T=I&&I.onVnodeMounted)){const ne=u;be(()=>Fe(T,q,ne),g)}(u.shapeFlag&256||q&&Rn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&be(f.a,g),f.isMounted=!0,u=h=v=null}},k=f.effect=new ci(_,()=>bi(y),f.scope),y=f.update=()=>k.run();y.id=f.uid,dt(f,!0),y()},Z=(f,u,h)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,sc(f,u.props,v,h),fc(f,u.children,h),Ht(),ta(),Bt()},K=(f,u,h,v,g,x,O,_,k=!1)=>{const y=f&&f.children,T=f?f.shapeFlag:0,N=u.children,{patchFlag:I,shapeFlag:D}=u;if(I>0){if(I&128){bn(y,N,h,v,g,x,O,_,k);return}else if(I&256){ct(y,N,h,v,g,x,O,_,k);return}}D&8?(T&16&&He(y,g,x),N!==y&&d(h,N)):T&16?D&16?bn(y,N,h,v,g,x,O,_,k):He(y,g,x,!0):(T&8&&d(h,""),D&16&&Ae(N,h,v,g,x,O,_,k))},ct=(f,u,h,v,g,x,O,_,k)=>{f=f||Tt,u=u||Tt;const y=f.length,T=u.length,N=Math.min(y,T);let I;for(I=0;I<N;I++){const D=u[I]=k?Qe(u[I]):Re(u[I]);S(f[I],D,h,null,g,x,O,_,k)}y>T?He(f,g,x,!0,!1,N):Ae(u,h,v,g,x,O,_,k,N)},bn=(f,u,h,v,g,x,O,_,k)=>{let y=0;const T=u.length;let N=f.length-1,I=T-1;for(;y<=N&&y<=I;){const D=f[y],U=u[y]=k?Qe(u[y]):Re(u[y]);if(Kt(D,U))S(D,U,h,null,g,x,O,_,k);else break;y++}for(;y<=N&&y<=I;){const D=f[N],U=u[I]=k?Qe(u[I]):Re(u[I]);if(Kt(D,U))S(D,U,h,null,g,x,O,_,k);else break;N--,I--}if(y>N){if(y<=I){const D=I+1,U=D<T?u[D].el:v;for(;y<=I;)S(null,u[y]=k?Qe(u[y]):Re(u[y]),h,U,g,x,O,_,k),y++}}else if(y>I)for(;y<=N;)Pe(f[y],g,x,!0),y++;else{const D=y,U=y,q=new Map;for(y=U;y<=I;y++){const ye=u[y]=k?Qe(u[y]):Re(u[y]);ye.key!=null&&q.set(ye.key,y)}let H,ne=0;const Oe=I-U+1;let Mt=!1,Bi=0;const Wt=new Array(Oe);for(y=0;y<Oe;y++)Wt[y]=0;for(y=D;y<=N;y++){const ye=f[y];if(ne>=Oe){Pe(ye,g,x,!0);continue}let De;if(ye.key!=null)De=q.get(ye.key);else for(H=U;H<=I;H++)if(Wt[H-U]===0&&Kt(ye,u[H])){De=H;break}De===void 0?Pe(ye,g,x,!0):(Wt[De-U]=y+1,De>=Bi?Bi=De:Mt=!0,S(ye,u[De],h,null,g,x,O,_,k),ne++)}const Yi=Mt?hc(Wt):Tt;for(H=Yi.length-1,y=Oe-1;y>=0;y--){const ye=U+y,De=u[ye],Vi=ye+1<T?u[ye+1].el:v;Wt[y]===0?S(null,De,h,Vi,g,x,O,_,k):Mt&&(H<0||y!==Yi[H]?ft(De,h,Vi,2):H--)}}},ft=(f,u,h,v,g=null)=>{const{el:x,type:O,transition:_,children:k,shapeFlag:y}=f;if(y&6){ft(f.component.subTree,u,h,v);return}if(y&128){f.suspense.move(u,h,v);return}if(y&64){O.move(f,u,h,Et);return}if(O===de){r(x,u,h);for(let N=0;N<k.length;N++)ft(k[N],u,h,v);r(f.anchor,u,h);return}if(O===xr){F(f,u,h);return}if(v!==2&&y&1&&_)if(v===0)_.beforeEnter(x),r(x,u,h),be(()=>_.enter(x),g);else{const{leave:N,delayLeave:I,afterLeave:D}=_,U=()=>r(x,u,h),q=()=>{N(x,()=>{U(),D&&D()})};I?I(x,U,q):q()}else r(x,u,h)},Pe=(f,u,h,v=!1,g=!1)=>{const{type:x,props:O,ref:_,children:k,dynamicChildren:y,shapeFlag:T,patchFlag:N,dirs:I}=f;if(_!=null&&Ur(_,null,h,f,!0),T&256){u.ctx.deactivate(f);return}const D=T&1&&I,U=!Rn(f);let q;if(U&&(q=O&&O.onVnodeBeforeUnmount)&&Fe(q,u,f),T&6)Ts(f.component,h,v);else{if(T&128){f.suspense.unmount(h,v);return}D&&ut(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,h,g,Et,v):y&&(x!==de||N>0&&N&64)?He(y,u,h,!1,!0):(x===de&&N&384||!g&&T&16)&&He(k,u,h),v&&zi(f)}(U&&(q=O&&O.onVnodeUnmounted)||D)&&be(()=>{q&&Fe(q,u,f),D&&ut(f,null,u,"unmounted")},h)},zi=f=>{const{type:u,el:h,anchor:v,transition:g}=f;if(u===de){Cs(h,v);return}if(u===xr){j(f);return}const x=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:_}=g,k=()=>O(h,x);_?_(f.el,x,k):k()}else x()},Cs=(f,u)=>{let h;for(;f!==u;)h=b(f),i(f),f=h;i(u)},Ts=(f,u,h)=>{const{bum:v,scope:g,update:x,subTree:O,um:_}=f;v&&Fn(v),g.stop(),x&&(x.active=!1,Pe(O,f,u,h)),_&&be(_,u),be(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},He=(f,u,h,v=!1,g=!1,x=0)=>{for(let O=x;O<f.length;O++)Pe(f[O],u,h,v,g)},yn=f=>f.shapeFlag&6?yn(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),Hi=(f,u,h)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,h),ta(),wo(),u._vnode=f},Et={p:S,um:Pe,m:ft,r:zi,mt:gr,mc:Ae,pc:K,pbc:ze,n:yn,o:e};let vr,br;return t&&([vr,br]=t(Et)),{render:Hi,hydrate:vr,createApp:dc(Hi,vr)}}function dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lo(e,t,n=!1){const r=e.children,i=t.children;if(P(r)&&P(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Qe(i[a]),s.el=o.el),n||Lo(o,s))}}function hc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const gc=e=>e.__isTeleport,de=Symbol(void 0),xi=Symbol(void 0),xt=Symbol(void 0),xr=Symbol(void 0),Jt=[];let Ce=null;function B(e=!1){Jt.push(Ce=e?null:[])}function vc(){Jt.pop(),Ce=Jt[Jt.length-1]||null}let an=1;function ua(e){an+=e}function jo(e){return e.dynamicChildren=an>0?Ce||Tt:null,vc(),an>0&&Ce&&Ce.push(e),e}function te(e,t,n,r,i,a){return jo(m(e,t,n,r,i,a,!0))}function kt(e,t,n,r,i){return jo(ie(e,t,n,r,i,!0))}function zr(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",Uo=({key:e})=>e!=null?e:null,Ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?ae(e)||pe(e)||R(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function m(e,t=null,n=null,r=0,i=null,a=e===de?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uo(t),ref:t&&Ln(t),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(ki(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),an>0&&!o&&Ce&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ce.push(l),l}const ie=bc;function bc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Zl)&&(e=xt),zr(e)){const s=Rt(e,t,!0);return n&&ki(s,n),an>0&&!a&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(Cc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=ii(s)),X(l)&&(po(l)&&!P(l)&&(l=he({},l)),t.style=ri(l))}const o=ae(e)?1:$l(e)?128:gc(e)?64:X(e)?4:R(e)?2:0;return m(e,t,n,r,i,o,a,!0)}function yc(e){return e?po(e)||lr in e?he({},e):e:null}function Rt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?wc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Uo(s),ref:t&&t.ref?n&&i?P(i)?i.concat(Ln(t)):[i,Ln(t)]:Ln(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ye(e=" ",t=0){return ie(xi,null,e,t)}function wt(e="",t=!1){return t?(B(),kt(xt,null,e)):ie(xt,null,e)}function Re(e){return e==null||typeof e=="boolean"?ie(xt):P(e)?ie(de,null,e.slice()):typeof e=="object"?Qe(e):ie(xi,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function ki(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(P(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ki(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(lr in t)?t._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[Ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function wc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ii([t.class,r.class]));else if(i==="style")t.style=ri([t.style,r.style]);else if(Qn(i)){const a=t[i],o=r[i];o&&a!==o&&!(P(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Fe(e,t,n,r=null){Se(e,t,7,[n,r])}const _c=Ro();let xc=0;function kc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||_c,a={uid:xc++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ys(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Po(r,i),emitsOptions:xo(r,i),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Tl.bind(null,a),e.ce&&e.ce(a),a}let se=null;const Lt=e=>{se=e,e.scope.on()},_t=()=>{se&&se.scope.off(),se=null};function zo(e){return e.vnode.shapeFlag&4}let on=!1;function Ac(e,t=!1){on=t;const{props:n,children:r}=e.vnode,i=zo(e);oc(e,n,i,t),cc(e,r);const a=i?Oc(e,t):void 0;return on=!1,a}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ho(new Proxy(e.ctx,ec));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Mc(e):null;Lt(e),Ht();const a=nt(r,e,0,[e.props,i]);if(Bt(),_t(),Qa(a)){if(a.then(_t,_t),t)return a.then(o=>{da(e,o,t)}).catch(o=>{ir(o,e,0)});e.asyncDep=a}else da(e,a,t)}else Ho(e,t)}function da(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=go(t)),Ho(e,n)}let ma;function Ho(e,t,n){const r=e.type;if(!e.render){if(!t&&ma&&!r.render){const i=r.template||wi(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=he(he({isCustomElement:a,delimiters:s},o),l);r.render=ma(i,c)}}e.render=r.render||Ie}Lt(e),Ht(),tc(e),Bt(),_t()}function Ec(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function Mc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ec(e))},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(go(ho(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yn)return Yn[n](e)}}))}function Nc(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Cc(e){return R(e)&&"__vccOpts"in e}const ke=(e,t)=>kl(e,t,on);function Bo(e,t,n){const r=arguments.length;return r===2?X(t)&&!P(t)?zr(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zr(n)&&(n=[n]),ie(e,t,n))}const Tc="3.2.41",Ic="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,pa=ht&&ht.createElement("template"),Sc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ht.createElementNS(Ic,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{pa.innerHTML=r?`<svg>${e}</svg>`:e;const s=pa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Pc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Dc(e,t,n){const r=e.style,i=ae(n);if(n&&!i){for(const a in n)Hr(r,a,n[a]);if(t&&!ae(t))for(const a in t)n[a]==null&&Hr(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const ha=/\s*!important$/;function Hr(e,t,n){if(P(n))n.forEach(r=>Hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fc(e,t);ha.test(n)?e.setProperty(zt(r),n.replace(ha,""),"important"):e[r]=n}}const ga=["Webkit","Moz","ms"],kr={};function Fc(e,t){const n=kr[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return kr[t]=r;r=nr(r);for(let i=0;i<ga.length;i++){const a=ga[i]+r;if(a in e)return kr[t]=a}return t}const va="http://www.w3.org/1999/xlink";function $c(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(va,t.slice(6,t.length)):e.setAttributeNS(va,t,n);else{const a=Ss(t);n==null||a&&!Ja(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Rc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ja(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function et(e,t,n,r){e.addEventListener(t,n,r)}function Lc(e,t,n,r){e.removeEventListener(t,n,r)}function jc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Uc(t);if(r){const c=a[t]=Bc(r,i);et(e,s,c,l)}else o&&(Lc(e,s,o,l),a[t]=void 0)}}const ba=/(?:Once|Passive|Capture)$/;function Uc(e){let t;if(ba.test(e)){t={};let r;for(;r=e.match(ba);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Ar=0;const zc=Promise.resolve(),Hc=()=>Ar||(zc.then(()=>Ar=0),Ar=Date.now());function Bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(Yc(r,n.value),t,5,[r])};return n.value=e,n.attached=Hc(),n}function Yc(e,t){if(P(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ya=/^on[a-z]/,Vc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?Pc(e,r,i):t==="style"?Dc(e,n,r):Qn(t)?ai(t)||jc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wc(e,t,r,i))?Rc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$c(e,t,r,i))};function Wc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ya.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ya.test(t)&&ae(n)?!1:t in e}const jt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return P(t)?n=>Fn(t,n):t};function Kc(e){e.target.composing=!0}function wa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const me={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=jt(i);const a=r||i.props&&i.props.type==="number";et(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=Cr(s)),e._assign(s)}),n&&et(e,"change",()=>{e.value=e.value.trim()}),t||(et(e,"compositionstart",Kc),et(e,"compositionend",wa),et(e,"change",wa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e._assign=jt(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Cr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Yo={deep:!0,created(e,t,n){e._assign=jt(n),et(e,"change",()=>{const r=e._modelValue,i=Vo(e),a=e.checked,o=e._assign;if(P(r)){const s=Ga(r,i),l=s!==-1;if(a&&!l)o(r.concat(i));else if(!a&&l){const c=[...r];c.splice(s,1),o(c)}}else if(er(r)){const s=new Set(r);a?s.add(i):s.delete(i),o(s)}else o(Wo(e,a))})},mounted:_a,beforeUpdate(e,t,n){e._assign=jt(n),_a(e,t,n)}};function _a(e,{value:t,oldValue:n},r){e._modelValue=t,P(t)?e.checked=Ga(t,r.props.value)>-1:er(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Ft(t,Wo(e,!0)))}const Wn={created(e,{value:t},n){e.checked=Ft(t,n.props.value),e._assign=jt(n),et(e,"change",()=>{e._assign(Vo(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=jt(r),t!==n&&(e.checked=Ft(t,r.props.value))}};function Vo(e){return"_value"in e?e._value:e.value}function Wo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const qc=["ctrl","shift","alt","meta"],Xc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qc.some(n=>e[`${n}Key`]&&!t.includes(n))},Kn=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const a=Xc[t[i]];if(a&&a(n,t))return}return e(n,...r)},Jc=he({patchProp:Vc},Sc);let xa;function Gc(){return xa||(xa=mc(Jc))}const Zc=(...e)=>{const t=Gc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Qc(r);if(!i)return;const a=t._component;!R(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Qc(e){return ae(e)?document.querySelector(e):e}const fr="https://localhost:50514/api/Movies",Ko="https://localhost:50514/api/Directors";async function qo(){return fetch("https://localhost:50514/api/Directors").then(e=>e.json()).then(e=>e)}async function Xo(){return fetch(fr).then(e=>e.json())}async function ef(e){await fetch(fr,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}async function Jo(e){await fetch("https://localhost:50514/api/Directors",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}async function tf(e){let t;try{t=await fetch(fr+`/${e.id}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error(n)}finally{return!(!t||!t.ok)}}async function nf(e){let t;try{t=await fetch(Ko+`/${e.directorId}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error(n)}finally{return!(!t||!t.ok)}}async function rf(e){const t=fr+`/${e}`;return console.log(t),await fetch(t,{method:"DELETE"}).then(n=>n.json())}async function af(e){const t=Ko+`/${e}`;return await fetch(t,{method:"DELETE"}).then(n=>n.json())}const lt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},of={name:"edit-movie-modal",props:["selectedMovie","directors"],methods:{async submitUpdatedMovieInfo(e){await tf(e),this.closeModalView(),this.$emit("updateMovies")},closeModalView(){this.$emit("someEvent")}}},sf={class:"modal is-active"},lf=m("div",{class:"modal-background"},null,-1),cf={class:"modal-card"},ff={class:"modal-card-head"},uf={class:"modal-card-title"},df={class:"modal-card-body"},mf=m("br",null,null,-1),pf=m("br",null,null,-1),hf=m("br",null,null,-1),gf=m("p",null,"Received an Academy Award?",-1),vf=m("label",{for:"yesAward"},"Yes",-1),bf=m("br",null,null,-1),yf=m("label",{for:"noAward"},"No",-1),wf=m("br",null,null,-1),_f=m("h4",null,"Directors:",-1),xf=["id","onUpdate:modelValue","value"],kf=["for"],Af=m("br",null,null,-1),Of={class:"modal-card-foot"};function Ef(e,t,n,r,i,a){return B(),te("div",sf,[lf,m("div",cf,[m("header",ff,[m("p",uf,'Edit "'+oe(n.selectedMovie.name)+'" Information',1),m("button",{onClick:t[0]||(t[0]=o=>a.closeModalView()),class:"delete","aria-label":"close"})]),m("section",df,[m("form",null,[m("div",null,[ee(m("input",{id:"edit-movie-name",class:"input is-primary",required:"",type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=o=>n.selectedMovie.name=o)},null,512),[[me,n.selectedMovie.name]])]),Ye(),mf,m("div",null,[ee(m("textarea",{id:"edit-movie-description",required:"",rows:"4",cols:"60",placeholder:"Description","onUpdate:modelValue":t[2]||(t[2]=o=>n.selectedMovie.description=o)},null,512),[[me,n.selectedMovie.description]])]),Ye(),pf,m("div",null,[ee(m("input",{id:"edit-movie-release-year",class:"is-rounded",required:"",type:"number",min:"1900",max:"2099",placeholder:"Year","onUpdate:modelValue":t[3]||(t[3]=o=>n.selectedMovie.releaseYear=o)},null,512),[[me,n.selectedMovie.releaseYear]])]),Ye(),hf,m("div",null,[gf,ee(m("input",{required:"",type:"radio",id:"yesAward",value:!0,name:"award","onUpdate:modelValue":t[4]||(t[4]=o=>n.selectedMovie.academyAward=o)},null,512),[[Wn,n.selectedMovie.academyAward]]),vf,bf,ee(m("input",{type:"radio",id:"noAward",value:!1,name:"award","onUpdate:modelValue":t[5]||(t[5]=o=>n.selectedMovie.academyAward=o)},null,512),[[Wn,n.selectedMovie.academyAward]]),yf]),wf,_f,(B(!0),te(de,null,$t(n.directors,o=>(B(),te("div",{key:o.directorId},[ee(m("input",{id:"edit-checkbox-"+o.firstName+"-"+o.lastName,type:"checkbox","onUpdate:modelValue":s=>n.selectedMovie.director=s,value:o.director,checked:""},null,8,xf),[[Yo,n.selectedMovie.director]]),m("label",{for:"edit-checkbox-"+o.firstName+"-"+o.lastName},oe(o.director.firstName)+" "+oe(o.director.lastName),9,kf)]))),128))]),Ye(),Af]),m("footer",Of,[m("button",{id:"submit-edited-movie",onClick:t[6]||(t[6]=Kn(o=>a.submitUpdatedMovieInfo(n.selectedMovie),["prevent"])),class:"button is-success"},"Save changes"),m("button",{onClick:t[7]||(t[7]=o=>a.closeModalView()),class:"button"},"Cancel")])])])}const Mf=lt(of,[["render",Ef]]);const Nf={name:"new-director-form",props:["isShowing"],data(){return{newDirector:{directorId:0,firstName:"",lastName:"",yearOfBirth:""}}},methods:{closeModal(){this.$emit("closeModal")},async submitNewDirectorForm(){await Jo(this.newDirector),this.$emit("closeModal")}}},Cf={class:"modal is-active"},Tf=m("div",{class:"modal-background"},null,-1),If={class:"modal-card"},Sf={class:"modal-card-head"},Pf=m("p",{class:"modal-card-title"},"Add A New Director",-1),Df={class:"modal-card-body"},Ff=m("br",null,null,-1),$f=m("br",null,null,-1),Rf=m("br",null,null,-1),Lf=m("br",null,null,-1),jf={class:"modal-card-foot"};function Uf(e,t,n,r,i,a){return B(),te("div",Cf,[Tf,m("div",If,[m("header",Sf,[Pf,m("button",{onClick:t[0]||(t[0]=o=>a.closeModal()),class:"delete","aria-label":"close"})]),m("section",Df,[m("form",null,[m("div",null,[ee(m("input",{id:"new-director-first-name",required:"",class:"input is-primary director-name",type:"text",maxlength:"50",placeholder:"Director First Name","onUpdate:modelValue":t[1]||(t[1]=o=>i.newDirector.firstName=o)},null,512),[[me,i.newDirector.firstName]]),Ff,$f,ee(m("input",{id:"new-director-last-name",required:"",class:"input is-primary director-name",type:"text",maxlength:"50",placeholder:"Director Last Name","onUpdate:modelValue":t[2]||(t[2]=o=>i.newDirector.lastName=o)},null,512),[[me,i.newDirector.lastName]]),Rf,Lf,ee(m("input",{id:"new-director-birth-year",required:"",class:"input is-primary director-year",type:"number",minlength:"4",maxlength:"4",min:"1900",placeholder:"Director Year of Birth","onUpdate:modelValue":t[3]||(t[3]=o=>i.newDirector.yearOfBirth=o)},null,512),[[me,i.newDirector.yearOfBirth]])])])]),m("footer",jf,[m("button",{id:"submit-new-director",onClick:t[4]||(t[4]=Kn(o=>a.submitNewDirectorForm(),["prevent"])),class:"button is-success"},"Save changes"),m("button",{onClick:t[5]||(t[5]=o=>a.closeModal()),class:"button"},"Cancel")])])])}const Ai=lt(Nf,[["render",Uf]]);const zf={components:{NewDirectorForm:Ai},name:"new-movie-form",props:["directors"],data(){return{inputTags:[{firstName:"",lastName:"",yearOfBirth:""}],showNewDirectorForm:!1,newDirector:{firstName:"",lastName:"",yearOfBirth:""},newMovie:{id:0,name:"",description:"",releaseYear:"",academyAward:!1,director:[]}}},methods:{async addANewDirector(){await Jo(this.newDirector),this.$emit("updateInformation"),this.newDirector={}},toggleModal(){this.$emit("toggle")},async submitNewMovieForm(){this.newMovie.academyAward,await ef(this.newMovie),this.$emit("updateInformation"),this.toggleModal()}}},Hf={class:"modal is-active"},Bf=m("div",{class:"modal-background"},null,-1),Yf={class:"modal-card"},Vf={class:"modal-card-head"},Wf=m("p",{class:"modal-card-title"},"Add A New Movie",-1),Kf={class:"modal-card-body"},qf=m("br",null,null,-1),Xf=m("br",null,null,-1),Jf=m("br",null,null,-1),Gf=m("p",null,"Received an Academy Award?",-1),Zf=m("label",{for:"yesAward"},"Yes",-1),Qf=m("br",null,null,-1),eu=m("label",{for:"noAward"},"No",-1),tu=m("br",null,null,-1),nu=m("h3",null,"Directors:",-1),ru=["id","value"],iu=["for"],au=m("br",null,null,-1),ou=m("br",null,null,-1),su=m("br",null,null,-1),lu=m("br",null,null,-1),cu={class:"modal-card-foot"};function fu(e,t,n,r,i,a){return B(),te("div",Hf,[Bf,m("div",Yf,[m("header",Vf,[Wf,m("button",{onClick:t[0]||(t[0]=o=>a.toggleModal()),class:"delete","aria-label":"close"})]),m("section",Kf,[m("form",null,[m("div",null,[ee(m("input",{id:"new-movie-name",required:"",class:"input is-rounded",maxlength:"50",type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=o=>i.newMovie.name=o)},null,512),[[me,i.newMovie.name]])]),Ye(),qf,m("div",null,[ee(m("textarea",{id:"new-movie-description",required:"",class:"textarea",maxlength:"500",rows:"4",cols:"50",placeholder:"Description","onUpdate:modelValue":t[2]||(t[2]=o=>i.newMovie.description=o)},null,512),[[me,i.newMovie.description]])]),Ye(),Xf,m("div",null,[ee(m("input",{required:"",id:"new-movie-release-year",class:"input is-rounded",style:{width:"25%"},maxlength:"4",minlength:"4",type:"number",min:"1900",max:"2099",placeholder:"Year","onUpdate:modelValue":t[3]||(t[3]=o=>i.newMovie.releaseYear=o)},null,512),[[me,i.newMovie.releaseYear]])]),Ye(),Jf,m("div",null,[Gf,ee(m("input",{required:"",type:"radio",id:"yesAward",value:!0,name:"award","onUpdate:modelValue":t[4]||(t[4]=o=>i.newMovie.academyAward=o)},null,512),[[Wn,i.newMovie.academyAward]]),Zf,Qf,ee(m("input",{type:"radio",id:"noAward",value:!1,name:"award","onUpdate:modelValue":t[5]||(t[5]=o=>i.newMovie.academyAward=o)},null,512),[[Wn,i.newMovie.academyAward]]),eu]),tu,nu,(B(!0),te(de,null,$t(n.directors,o=>(B(),te("div",{key:o.directorId},[ee(m("input",{type:"checkbox",id:"checkbox-"+o.director.firstName+"-"+o.director.lastName,"onUpdate:modelValue":t[6]||(t[6]=s=>i.newMovie.director=s),value:o.director},null,8,ru),[[Yo,i.newMovie.director]]),m("label",{for:"checkbox-"+o.director.firstName+"-"+o.director.lastName},oe(o.director.firstName)+" "+oe(o.director.lastName),9,iu)]))),128)),Ye(),au,m("form",null,[(B(!0),te(de,null,$t(i.inputTags,(o,s)=>(B(),te("div",{key:s},[ee(m("input",{id:"new-movie-director-first-name",type:"text",style:{width:"30%"},class:"input is-rounded",maxlength:"50",placeholder:"Director First Name","onUpdate:modelValue":t[7]||(t[7]=l=>i.newDirector.firstName=l)},null,512),[[me,i.newDirector.firstName]]),ee(m("input",{id:"new-movie-director-last-name",type:"text",style:{width:"30%"},class:"input is-rounded",maxlength:"50",placeholder:"Director Last Name","onUpdate:modelValue":t[8]||(t[8]=l=>i.newDirector.lastName=l)},null,512),[[me,i.newDirector.lastName]]),ee(m("input",{id:"new-movie-director-birth-year",type:"number",style:{width:"30%"},class:"input is-rounded",minlength:"4",maxlength:"4",min:"1900",placeholder:"Year of Birth","onUpdate:modelValue":t[9]||(t[9]=l=>i.newDirector.yearOfBirth=l)},null,512),[[me,i.newDirector.yearOfBirth]])]))),128))]),ou,m("button",{id:"add-new-director-button",class:"button is-info is-rounded",onClick:t[10]||(t[10]=Kn(o=>a.addANewDirector(),["prevent"]))},"Add New Director"),su,lu])]),m("footer",cu,[m("button",{id:"submit-new-movie-button",class:"button is-success",onClick:t[11]||(t[11]=Kn(o=>a.submitNewMovieForm(),["prevent"]))},"Submit"),m("button",{onClick:t[12]||(t[12]=o=>a.toggleModal()),class:"button"},"Cancel")])])])}const Go=lt(zf,[["render",fu]]);const uu={components:{EditMovieModal:Mf,NewDirectorForm:Ai,NewForm:Go},props:["movies","directors"],data(){return{showNewForm:!1,editMovieInfo:!1,newDirectorForm:!1,clickedMovieId:0,selectedMovie:{id:0,name:"",description:"",releaseYear:0,academyAward:!0,director:[]}}},async mounted(){await this.getMovies(),await this.getDirectors()},methods:{async updateAllInformation(){this.$emit("updateInformation")},showModal(){this.editMovieInfo=!this.editMovieInfo},updateMovieInfo(e){this.selectedMovie=e,this.editMovieInfo=!0},async deleteMovie(e){confirm("Are you sure you want to delete this movie?")&&(alert(`Deleting movie "${e.name}"`),await rf(e.id),this.$emit("updateInformation"))},async getMovies(){let e=await Xo();console.log("ayo"),this.movies=e,this.showNewForm=!1},async getDirectors(){let e=await qo();this.directors=e},createNewMovie(){this.showNewForm=!this.showNewForm}}},Oi=e=>(ko("data-v-18bc566e"),e=e(),Ao(),e),du={id:"moviesTable"},mu=Oi(()=>m("br",null,null,-1)),pu={class:"table table-dark table-striped table-hover"},hu=Oi(()=>m("thead",{class:"thead-light"},[m("tr",null,[m("th",null,"Name"),m("th",null,"Description"),m("th",null,"Release Year"),m("th",null,"Academy Award"),m("th",null,"Director Name"),m("th",{style:{"min-width":"120px"},scope:"col"})])],-1)),gu=["movies"],vu=Oi(()=>m("br",null,null,-1)),bu=["id","onClick"],yu=["id","onClick"];function wu(e,t,n,r,i,a){const o=rt("NewForm"),s=rt("EditMovieModal"),l=rt("font-awesome-icon");return B(),te("div",du,[i.newDirectorForm?wt("",!0):(B(),te("button",{key:0,id:"new-movie-form-button",class:"button is-primary is-rounded",onClick:t[0]||(t[0]=c=>a.createNewMovie())},"Add New Movie")),i.showNewForm?(B(),kt(o,{key:1,directors:n.directors,onUpdateInformation:t[1]||(t[1]=c=>a.updateAllInformation()),onToggle:t[2]||(t[2]=c=>a.createNewMovie())},null,8,["directors"])):wt("",!0),mu,i.editMovieInfo?(B(),kt(s,{key:2,selectedMovie:i.selectedMovie,directors:n.directors,onSomeEvent:t[3]||(t[3]=c=>a.showModal()),onUpdateMovies:t[4]||(t[4]=c=>a.updateAllInformation())},null,8,["selectedMovie","directors"])):wt("",!0),m("table",pu,[hu,m("tbody",null,[(B(!0),te(de,null,$t(n.movies,c=>(B(),te("tr",{movies:n.movies,key:c.ID},[m("td",null,oe(c.name),1),m("td",null,oe(c.description),1),m("td",null,oe(c.releaseYear),1),m("td",null,oe(c.academyAward),1),m("td",null,[m("ul",null,[(B(!0),te(de,null,$t(c.director,d=>(B(),te("li",{class:"director-row",key:d.directorId},"-"+oe(d.firstName)+" "+oe(d.lastName),1))),128))]),vu]),m("td",null,[m("span",{id:"edit-movie-"+c.id,class:"clickable m-2",onClick:d=>a.updateMovieInfo(c)},[ie(l,{icon:"fa-solid fa-pen-to-square"})],8,bu),m("span",{id:"delete-movie-"+c.id,class:"clickable m-2",onClick:d=>a.deleteMovie(c)},[ie(l,{icon:"fa-solid fa-trash"})],8,yu)])],8,gu))),128))])])])}const _u=lt(uu,[["render",wu],["__scopeId","data-v-18bc566e"]]),xu={name:"edit-director-modal",props:["directorToEdit"],methods:{closeModal(){this.$emit("closeModal")},async submitChanges(e){await nf(e).then(this.closeModal())}}},ku={class:"modal is-active"},Au=m("div",{class:"modal-background"},null,-1),Ou={class:"modal-card"},Eu={class:"modal-card-head"},Mu=m("p",{class:"modal-card-title"},"Edit Director Information",-1),Nu={class:"modal-card-body"},Cu=m("br",null,null,-1),Tu=m("br",null,null,-1),Iu=m("br",null,null,-1),Su=m("br",null,null,-1),Pu={class:"modal-card-foot"};function Du(e,t,n,r,i,a){return B(),te("div",ku,[Au,m("div",Ou,[m("header",Eu,[Mu,m("button",{onClick:t[0]||(t[0]=o=>a.closeModal()),class:"delete","aria-label":"close"})]),m("section",Nu,[m("form",null,[m("div",null,[ee(m("input",{id:"edit-director-first-name",required:"",class:"input is-primary director-name",type:"text",maxlength:"50",placeholder:"Director First Name","onUpdate:modelValue":t[1]||(t[1]=o=>n.directorToEdit.firstName=o)},null,512),[[me,n.directorToEdit.firstName]]),Cu,Tu,ee(m("input",{id:"edit-director-last-name",required:"",class:"input is-primary director-name",type:"text",maxlength:"50",placeholder:"Director Last Name","onUpdate:modelValue":t[2]||(t[2]=o=>n.directorToEdit.lastName=o)},null,512),[[me,n.directorToEdit.lastName]]),Iu,Su,ee(m("input",{id:"edit-director-birth-year",required:"",class:"input is-primary director-year",type:"number",minlength:"4",maxlength:"4",min:"1900",placeholder:"Director Year of Birth","onUpdate:modelValue":t[3]||(t[3]=o=>n.directorToEdit.yearOfBirth=o)},null,512),[[me,n.directorToEdit.yearOfBirth]])])])]),m("footer",Pu,[m("button",{id:"submit-edited-director",onClick:t[4]||(t[4]=o=>a.submitChanges(n.directorToEdit)),class:"button is-success"},"Save changes"),m("button",{onClick:t[5]||(t[5]=o=>a.closeModal()),class:"button"},"Cancel")])])])}const Fu=lt(xu,[["render",Du]]),$u={props:["directors"],async mounted(){},data(){return{isShowingNewDirectorForm:!1,isShowingEditModal:!1,directorToEdit:{directorId:"",firstName:"",lastName:"",yearOfBirth:""}}},components:{EditDirectorModal:Fu,NewDirectorForm:Ai},methods:{async closeModalView(){this.isShowingNewDirectorForm=!1,this.isShowingEditModal=!1,this.$emit("updateInformation")},displayNewDirectorForm(){this.isShowingNewDirectorForm=!this.isShowingNewDirectorForm},updateDirector(e){console.log(e),this.directorToEdit=e.director,this.isShowingEditModal=!0},async deleteDirector(e){const t=`${e.director.firstName} ${e.director.lastName}`;confirm(`Are you sure you want to delete the director: ${t} ?`)?(alert(`${t} is being deleted.`),await af(e.director.directorId),this.$emit("updateInformation")):alert(`${t} will not be deleted.`)}}},Ru={id:"directorstable"},Lu={class:"table table-dark table-striped table-hover"},ju=m("thead",{class:"thead-light"},[m("tr",null,[m("th",null,"First Name"),m("th",null,"Last Name"),m("th",null,"Birth Year"),m("th",null,"Academy Awards"),m("th",{style:{"min-width":"120px"},scope:"col"})])],-1),Uu=["directors"],zu=["id","onClick"],Hu=["id","onClick"];function Bu(e,t,n,r,i,a){const o=rt("EditDirectorModal"),s=rt("NewDirectorForm"),l=rt("font-awesome-icon");return B(),te("div",Ru,[i.isShowingEditModal?(B(),kt(o,{key:0,directorToEdit:i.directorToEdit,onCloseModal:t[0]||(t[0]=c=>a.closeModalView())},null,8,["directorToEdit"])):wt("",!0),i.isShowingNewDirectorForm?(B(),kt(s,{key:1,onCloseModal:t[1]||(t[1]=c=>a.closeModalView()),isShowing:e.isShowing},null,8,["isShowing"])):wt("",!0),m("button",{id:"add-new-director",class:"button is-primary is-rounded",onClick:t[2]||(t[2]=c=>a.displayNewDirectorForm())},oe(i.isShowingNewDirectorForm?"Hide New Director Form":"Add New Director"),1),m("table",Lu,[ju,m("tbody",null,[(B(!0),te(de,null,$t(n.directors,c=>(B(),te("tr",{directors:n.directors,key:c.ID},[m("td",null,oe(c.director.firstName),1),m("td",null,oe(c.director.lastName),1),m("td",null,oe(c.director.yearOfBirth),1),m("td",null,oe(c.numberOfAwards),1),m("td",null,[m("span",{id:"edit-director-"+c.director.directorId,class:"clickable m-2",onClick:d=>a.updateDirector(c)},[ie(l,{icon:"fa-solid fa-pen-to-square"})],8,zu),m("span",{id:"delete-director-"+c.director.directorId,class:"clickable m-2",onClick:d=>a.deleteDirector(c)},[ie(l,{icon:"fa-solid fa-trash"})],8,Hu)])],8,Uu))),128))])])])}const Yu=lt($u,[["render",Bu]]);const Vu={async mounted(){await this.getMoviesAndDirectors()},name:"movies-directors-container",components:{MoviesTable:_u,DirectorsTable:Yu,NewForm:Go},data(){return{showNewForm:!1,isShowingMoviesTable:!0,isShowingDirectorsTable:!1,movies:[],directors:[]}},methods:{toggleTableViews(){this.isShowingMoviesTable=!this.isShowingMoviesTable,this.isShowingDirectorsTable=!this.isShowingDirectorsTable},async getMoviesAndDirectors(){const e=await Xo();this.movies=e;const t=await qo();this.directors=t}}},Wu=m("br",null,null,-1),Ku=m("br",null,null,-1),qu=m("br",null,null,-1);function Xu(e,t,n,r,i,a){const o=rt("MoviesTable"),s=rt("DirectorsTable");return B(),te("div",null,[m("button",{id:"toggle-movies-directors",onClick:t[0]||(t[0]=l=>a.toggleTableViews()),class:"button is-link is-rounded"},oe(i.isShowingDirectorsTable?"Show Movies Table":"Show Directors Table"),1),Wu,Ku,i.isShowingMoviesTable?(B(),kt(o,{key:0,onUpdateInformation:t[1]||(t[1]=l=>a.getMoviesAndDirectors()),movies:i.movies,directors:i.directors},null,8,["movies","directors"])):wt("",!0),i.isShowingDirectorsTable?(B(),kt(s,{key:1,directors:i.directors,onUpdateInformation:t[2]||(t[2]=l=>a.getMoviesAndDirectors())},null,8,["directors"])):wt("",!0),qu])}const Ju=lt(Vu,[["render",Xu]]);const Zo=e=>(ko("data-v-e1a8f169"),e=e(),Ao(),e),Gu={class:"container"},Zu=Zo(()=>m("h1",null,"Movies Collection",-1)),Qu=Zo(()=>m("br",null,null,-1)),ed={__name:"App",setup(e){return(t,n)=>(B(),te("div",Gu,[Zu,Qu,ie(Ju)]))}},td=lt(ed,[["__scopeId","data-v-e1a8f169"]]);function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ka(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(e){return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function nd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Aa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rd(e,t,n){return t&&Aa(e.prototype,t),n&&Aa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ei(e,t){return ad(e)||sd(e,t)||Qo(e,t)||cd()}function mn(e){return id(e)||od(e)||Qo(e)||ld()}function id(e){if(Array.isArray(e))return Br(e)}function ad(e){if(Array.isArray(e))return e}function od(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Qo(e,t){if(!!e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ld(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oa=function(){},Mi={},es={},ts=null,ns={mark:Oa,measure:Oa};try{typeof window<"u"&&(Mi=window),typeof document<"u"&&(es=document),typeof MutationObserver<"u"&&(ts=MutationObserver),typeof performance<"u"&&(ns=performance)}catch{}var fd=Mi.navigator||{},Ea=fd.userAgent,Ma=Ea===void 0?"":Ea,at=Mi,G=es,Na=ts,On=ns;at.document;var Je=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",rs=~Ma.indexOf("MSIE")||~Ma.indexOf("Trident/"),En,Mn,Nn,Cn,Tn,We="___FONT_AWESOME___",Yr=16,is="fa",as="svg-inline--fa",At="data-fa-i2svg",Vr="data-fa-pseudo-element",ud="data-fa-pseudo-element-pending",Ni="data-prefix",Ci="data-icon",Ca="fontawesome-i2svg",dd="async",md=["HTML","HEAD","STYLE","SCRIPT"],os=function(){try{return!0}catch{return!1}}(),J="classic",Q="sharp",Ti=[J,Q];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[J]}})}var sn=pn((En={},re(En,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(En,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),En)),ln=pn((Mn={},re(Mn,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(Mn,Q,{solid:"fass"}),Mn)),cn=pn((Nn={},re(Nn,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(Nn,Q,{fass:"fa-solid"}),Nn)),pd=pn((Cn={},re(Cn,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(Cn,Q,{"fa-solid":"fass"}),Cn)),hd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ss="fa-layers-text",gd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vd=pn((Tn={},re(Tn,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(Tn,Q,{900:"fass"}),Tn)),ls=[1,2,3,4,5,6,7,8,9,10],bd=ls.concat([11,12,13,14,15,16,17,18,19,20]),yd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=new Set;Object.keys(ln[J]).map(fn.add.bind(fn));Object.keys(ln[Q]).map(fn.add.bind(fn));var wd=[].concat(Ti,mn(fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(ls.map(function(e){return"".concat(e,"x")})).concat(bd.map(function(e){return"w-".concat(e)})),Gt=at.FontAwesomeConfig||{};function _d(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kd.forEach(function(e){var t=Ei(e,2),n=t[0],r=t[1],i=xd(_d(n));i!=null&&(Gt[r]=i)})}var cs={styleDefault:"solid",familyDefault:"classic",cssPrefix:is,replacementClass:as,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var Ut=E(E({},cs),Gt);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var C={};Object.keys(cs).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ut[e]=n,Zt.forEach(function(r){return r(C)})},get:function(){return Ut[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ut.cssPrefix=t,Zt.forEach(function(n){return n(C)})},get:function(){return Ut.cssPrefix}});at.FontAwesomeConfig=C;var Zt=[];function Ad(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var Ze=Yr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Od(e){if(!(!e||!Je)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var Ed="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var e=12,t="";e-- >0;)t+=Ed[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ii(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function fs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Md(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(fs(e[n]),'" ')},"").trim()}function ur(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Si(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Nd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Cd(e){var t=e.transform,n=e.width,r=n===void 0?Yr:n,i=e.height,a=i===void 0?Yr:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&rs?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Td=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function us(){var e=is,t=as,n=C.cssPrefix,r=C.replacementClass,i=Td;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ta=!1;function Or(){C.autoAddCss&&!Ta&&(Od(us()),Ta=!0)}var Id={mixout:function(){return{dom:{css:us,insertCss:Or}}},hooks:function(){return{beforeDOMElementCreation:function(){Or()},beforeI2svg:function(){Or()}}}},Ke=at||{};Ke[We]||(Ke[We]={});Ke[We].styles||(Ke[We].styles={});Ke[We].hooks||(Ke[We].hooks={});Ke[We].shims||(Ke[We].shims=[]);var Te=Ke[We],ds=[],Sd=function e(){G.removeEventListener("DOMContentLoaded",e),Xn=1,ds.map(function(t){return t()})},Xn=!1;Je&&(Xn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Xn||G.addEventListener("DOMContentLoaded",Sd));function Pd(e){!Je||(Xn?setTimeout(e,0):ds.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?fs(e):"<".concat(t," ").concat(Md(r),">").concat(a.map(hn).join(""),"</").concat(t,">")}function Ia(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Dd=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Er=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Dd(n,i):n,l,c,d;for(r===void 0?(l=1,d=t[a[0]]):(l=0,d=r);l<o;l++)c=a[l],d=s(d,t[c],c,t);return d};function Fd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Wr(e){var t=Fd(e);return t.length===1?t[0].toString(16):null}function $d(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Kr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Sa(t);typeof Te.hooks.addPack=="function"&&!i?Te.hooks.addPack(e,Sa(t)):Te.styles[e]=E(E({},Te.styles[e]||{}),a),e==="fas"&&Kr("fa",t)}var In,Sn,Pn,Nt=Te.styles,Rd=Te.shims,Ld=(In={},re(In,J,Object.values(cn[J])),re(In,Q,Object.values(cn[Q])),In),Pi=null,ms={},ps={},hs={},gs={},vs={},jd=(Sn={},re(Sn,J,Object.keys(sn[J])),re(Sn,Q,Object.keys(sn[Q])),Sn);function Ud(e){return~wd.indexOf(e)}function zd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ud(i)?i:null}var bs=function(){var t=function(a){return Er(Nt,function(o,s,l){return o[l]=Er(s,a,{}),o},{})};ms=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ps=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),vs=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Nt||C.autoFetchSvg,r=Er(Rd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});hs=r.names,gs=r.unicodes,Pi=dr(C.styleDefault,{family:C.familyDefault})};Ad(function(e){Pi=dr(e.styleDefault,{family:C.familyDefault})});bs();function Di(e,t){return(ms[e]||{})[t]}function Hd(e,t){return(ps[e]||{})[t]}function bt(e,t){return(vs[e]||{})[t]}function ys(e){return hs[e]||{prefix:null,iconName:null}}function Bd(e){var t=gs[e],n=Di("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return Pi}var Fi=function(){return{prefix:null,iconName:null,rest:[]}};function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?J:n,i=sn[r][e],a=ln[r][e]||ln[r][i],o=e in Te.styles?e:null;return a||o||null}var Pa=(Pn={},re(Pn,J,Object.keys(cn[J])),re(Pn,Q,Object.keys(cn[Q])),Pn);function mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},re(t,J,"".concat(C.cssPrefix,"-").concat(J)),re(t,Q,"".concat(C.cssPrefix,"-").concat(Q)),t),o=null,s=J;(e.includes(a[J])||e.some(function(c){return Pa[J].includes(c)}))&&(s=J),(e.includes(a[Q])||e.some(function(c){return Pa[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var p=zd(C.cssPrefix,d);if(Nt[d]?(d=Ld[s].includes(d)?pd[s][d]:d,o=d,c.prefix=d):jd[s].indexOf(d)>-1?(o=d,c.prefix=dr(d,{family:s})):p?c.iconName=p:d!==C.replacementClass&&d!==a[J]&&d!==a[Q]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var b=o==="fa"?ys(c.iconName):{},A=bt(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||A||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!Nt.far&&Nt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Fi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(Nt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ot()||"fas"),l}var Yd=function(){function e(){nd(this,e),this.definitions={}}return rd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Kr(s,o[s]);var l=cn[J][s];l&&Kr(l,o[s]),bs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[s][p]=c)}),n[s][l]=c}),n}}]),e}(),Da=[],Ct={},Dt={},Vd=Object.keys(Dt);function Wd(e,t){var n=t.mixoutsTo;return Da=e,Ct={},Object.keys(Dt).forEach(function(r){Vd.indexOf(r)===-1&&delete Dt[r]}),Da.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),qn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ct[o]||(Ct[o]=[]),Ct[o].push(a[o])})}r.provides&&r.provides(Dt)}),n}function qr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ct[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ct[e]||[];i.forEach(function(a){a.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Dt[e]?Dt[e].apply(null,t):void 0}function Xr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ot();if(!!t)return t=bt(n,t)||t,Ia(ws.definitions,n,t)||Ia(Te.styles,n,t)}var ws=new Yd,Kd=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,Ot("noAuto")},qd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Je?(Ot("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Pd(function(){Jd({autoReplaceSvgRoot:n}),Ot("watch",t)})}},Xd={icon:function(t){if(t===null)return null;if(qn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=dr(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(hd))){var i=mr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ot(),iconName:bt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=ot();return{prefix:a,iconName:bt(a,t)||t}}}},_e={noAuto:Kd,config:C,dom:qd,parse:Xd,library:ws,findIconDefinition:Xr,toHtml:hn},Jd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Te.styles).length>0||C.autoFetchSvg)&&Je&&C.autoReplaceSvg&&_e.dom.i2svg({node:r})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Je){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Si(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=ur(E(E({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Zd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},i),{},{id:o}),children:r}]}]}function $i(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,p=e.extra,b=e.watchable,A=b===void 0?!1:b,$=r.found?r:n,S=$.width,L=$.height,w=i==="fak",M=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(function(xe){return p.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(p.classes).join(" "),F={children:[],attributes:E(E({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:M,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},j=w&&!~p.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};A&&(F.attributes[At]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||un())},children:[l]}),delete F.attributes.title);var W=E(E({},F),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},j),p.styles)}),ge=r.found&&n.found?qe("generateAbstractMask",W)||{children:[],attributes:{}}:qe("generateAbstractIcon",W)||{children:[],attributes:{}},le=ge.children,Ae=ge.attributes;return W.children=le,W.attributes=Ae,s?Zd(W):Gd(W)}function Fa(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[At]="");var d=E({},o.styles);Si(i)&&(d.transform=Cd({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=ur(d);p.length>0&&(c.style=p);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),a&&b.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),b}function Qd(e){var t=e.content,n=e.title,r=e.extra,i=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=ur(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mr=Te.styles;function Jr(e){var t=e[0],n=e[1],r=e.slice(4),i=Ei(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var em={found:!1,width:512,height:512};function tm(e,t){!os&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=ot()),new Promise(function(r,i){if(qe("missingIconAbstract"),n==="fa"){var a=ys(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Mr[t]&&Mr[t][e]){var o=Mr[t][e];return r(Jr(o))}tm(e,t),r(E(E({},em),{},{icon:C.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var $a=function(){},Zr=C.measurePerformance&&On&&On.mark&&On.measure?On:{mark:$a,measure:$a},Xt='FA "6.2.0"',nm=function(t){return Zr.mark("".concat(Xt," ").concat(t," begins")),function(){return _s(t)}},_s=function(t){Zr.mark("".concat(Xt," ").concat(t," ends")),Zr.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Ri={begin:nm,end:_s},jn=function(){};function Ra(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function rm(e){var t=e.getAttribute?e.getAttribute(Ni):null,n=e.getAttribute?e.getAttribute(Ci):null;return t&&n}function im(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function am(){if(C.autoReplaceSvg===!0)return Un.replace;var e=Un[C.autoReplaceSvg];return e||Un.replace}function om(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function sm(e){return G.createElement(e)}function xs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?om:sm:n;if(typeof e=="string")return G.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(xs(o,{ceFn:r}))}),i}function lm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(xs(i),n)}),n.getAttribute(At)===null&&C.keepOriginalSource){var r=G.createComment(lm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ii(n).indexOf(C.replacementClass))return Un.replace(t);var i=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function La(e){e()}function ks(e,t){var n=typeof t=="function"?t:jn;if(e.length===0)n();else{var r=La;C.mutateApproach===dd&&(r=at.requestAnimationFrame||La),r(function(){var i=am(),a=Ri.begin("mutate");e.map(i),a(),n()})}}var Li=!1;function As(){Li=!0}function Qr(){Li=!1}var Jn=null;function ja(e){if(!!Na&&!!C.observeMutations){var t=e.treeCallback,n=t===void 0?jn:t,r=e.nodeCallback,i=r===void 0?jn:r,a=e.pseudoElementsCallback,o=a===void 0?jn:a,s=e.observeMutationsRoot,l=s===void 0?G:s;Jn=new Na(function(c){if(!Li){var d=ot();Yt(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Ra(p.addedNodes[0])&&(C.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&C.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Ra(p.target)&&~yd.indexOf(p.attributeName))if(p.attributeName==="class"&&rm(p.target)){var b=mr(Ii(p.target)),A=b.prefix,$=b.iconName;p.target.setAttribute(Ni,A||d),$&&p.target.setAttribute(Ci,$)}else im(p.target)&&i(p.target)})}}),Je&&Jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cm(){!Jn||Jn.disconnect()}function fm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function um(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=mr(Ii(e));return i.prefix||(i.prefix=ot()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Hd(i.prefix,e.innerText)||Di(i.prefix,Wr(e.innerText))),!i.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function dm(e){var t=Yt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||un()):(t["aria-hidden"]="true",t.focusable="false")),t}function mm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=um(e),r=n.iconName,i=n.prefix,a=n.rest,o=dm(e),s=qr("parseNodeAttributes",{},e),l=t.styleParser?fm(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var pm=Te.styles;function Os(e){var t=C.autoReplaceSvg==="nest"?Ua(e,{styleParser:!1}):Ua(e);return~t.extra.classes.indexOf(ss)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var st=new Set;Ti.map(function(e){st.add("fa-".concat(e))});Object.keys(sn[J]).map(st.add.bind(st));Object.keys(sn[Q]).map(st.add.bind(st));st=mn(st);function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Je)return Promise.resolve();var n=G.documentElement.classList,r=function(p){return n.add("".concat(Ca,"-").concat(p))},i=function(p){return n.remove("".concat(Ca,"-").concat(p))},a=C.autoFetchSvg?st:Ti.map(function(d){return"fa-".concat(d)}).concat(Object.keys(pm));a.includes("fa")||a.push("fa");var o=[".".concat(ss,":not([").concat(At,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Yt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ri.begin("onTree"),c=s.reduce(function(d,p){try{var b=Os(p);b&&d.push(b)}catch(A){os||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(b){ks(b,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),p(b)})})}function hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Os(e).then(function(n){n&&ks([n],t)})}function gm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xr(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Xr(i||{})),e(r,E(E({},n),{},{mask:i}))}}var vm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?je:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,p=n.title,b=p===void 0?null:p,A=n.titleId,$=A===void 0?null:A,S=n.classes,L=S===void 0?[]:S,w=n.attributes,M=w===void 0?{}:w,F=n.styles,j=F===void 0?{}:F;if(!!t){var W=t.prefix,ge=t.iconName,le=t.icon;return pr(E({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(b?M["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat($||un()):(M["aria-hidden"]="true",M.focusable="false")),$i({icons:{main:Jr(le),mask:l?Jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ge,transform:E(E({},je),i),symbol:o,title:b,maskId:d,titleId:$,extra:{attributes:M,styles:j,classes:L}})})}},bm={mixout:function(){return{icon:gm(vm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=za,n.nodeCallback=hm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,o=a===void 0?function(){}:a;return za(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,p=r.maskId,b=r.extra;return new Promise(function(A,$){Promise.all([Gr(i,s),d.iconName?Gr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Ei(S,2),w=L[0],M=L[1];A([n,$i({icons:{main:w,mask:M},prefix:s,iconName:i,transform:l,symbol:c,maskId:p,title:a,titleId:o,extra:b,watchable:!0})])}).catch($)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ur(s);l.length>0&&(i.style=l);var c;return Si(o)&&(c=qe("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},ym={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return pr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(mn(a)).join(" ")},children:o}]})}}}},wm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,p=d===void 0?{}:d;return pr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Qd({content:n.toString(),title:a,extra:{attributes:c,styles:p,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},_m={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?je:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,p=d===void 0?{}:d,b=r.styles,A=b===void 0?{}:b;return pr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Fa({content:n,transform:E(E({},je),a),title:s,extra:{attributes:p,styles:A,classes:["".concat(C.cssPrefix,"-layers-text")].concat(mn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(rs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},xm=new RegExp('"',"ug"),Ha=[1105920,1112319];function km(e){var t=e.replace(xm,""),n=$d(t,0),r=n>=Ha[0]&&n<=Ha[1],i=t.length===2?t[0]===t[1]:!1;return{value:Wr(i?t[0]:t),isSecondary:r||i}}function Ba(e,t){var n="".concat(ud).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Yt(e.children),o=a.filter(function(le){return le.getAttribute(Vr)===t})[0],s=at.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gd),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?Q:J,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ln[b][l[2].toLowerCase()]:vd[b][c],$=km(p),S=$.value,L=$.isSecondary,w=l[0].startsWith("FontAwesome"),M=Di(A,S),F=M;if(w){var j=Bd(S);j.iconName&&j.prefix&&(M=j.iconName,A=j.prefix)}if(M&&!L&&(!o||o.getAttribute(Ni)!==A||o.getAttribute(Ci)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var W=mm(),ge=W.extra;ge.attributes[Vr]=t,Gr(M,A).then(function(le){var Ae=$i(E(E({},W),{},{icons:{main:le,mask:Fi()},prefix:A,iconName:F,extra:ge,watchable:!0})),xe=G.createElement("svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=Ae.map(function(ze){return hn(ze)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Am(e){return Promise.all([Ba(e,"::before"),Ba(e,"::after")])}function Om(e){return e.parentNode!==document.head&&!~md.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ya(e){if(!!Je)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(Om).map(Am),i=Ri.begin("searchPseudoElements");As(),Promise.all(r).then(function(){i(),Qr(),t()}).catch(function(){i(),Qr(),n()})})}var Em={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ya,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;C.searchPseudoElements&&Ya(i)}}},Va=!1,Mm={mixout:function(){return{dom:{unwatch:function(){As(),Va=!0}}}},hooks:function(){return{bootstrap:function(){ja(qr("mutationObserverCallbacks",{}))},noAuto:function(){cm()},watch:function(n){var r=n.observeMutationsRoot;Va?Qr():ja(qr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nm={mixout:function(){return{parse:{transform:function(n){return Wa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Wa(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:p,path:b};return{tag:"g",attributes:E({},A.outer),children:[{tag:"g",attributes:E({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),A.path)}]}]}}}},Nr={x:0,y:0,width:"100%",height:"100%"};function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cm(e){return e.tag==="g"?e.children:[e]}var Tm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?mr(i.split(" ").map(function(o){return o.trim()})):Fi();return a.prefix||(a.prefix=ot()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,d=a.icon,p=o.width,b=o.icon,A=Nd({transform:l,containerWidth:p,iconWidth:c}),$={tag:"rect",attributes:E(E({},Nr),{},{fill:"white"})},S=d.children?{children:d.children.map(Ka)}:{},L={tag:"g",attributes:E({},A.inner),children:[Ka(E({tag:d.tag,attributes:E(E({},d.attributes),A.path)},S))]},w={tag:"g",attributes:E({},A.outer),children:[L]},M="mask-".concat(s||un()),F="clip-".concat(s||un()),j={tag:"mask",attributes:E(E({},Nr),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,w]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Cm(b)},j]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(M,")")},Nr)}),{children:r,attributes:i}}}},Im={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Pm=[Id,bm,ym,wm,_m,Em,Mm,Nm,Tm,Im,Sm];Wd(Pm,{mixoutsTo:_e});_e.noAuto;var Es=_e.config,hr=_e.library;_e.dom;var Gn=_e.parse;_e.findIconDefinition;_e.toHtml;var Dm=_e.icon;_e.layer;var Fm=_e.text;_e.counter;function qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qa(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $m(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rm(e,t){if(e==null)return{};var n=$m(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ei(e){return Lm(e)||jm(e)||Um(e)||zm()}function Lm(e){if(Array.isArray(e))return ti(e)}function jm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Um(e,t){if(!!e){if(typeof e=="string")return ti(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ti(e,t)}}function ti(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ms={exports:{}};(function(e){(function(t){var n=function(w,M,F){if(!c(M)||p(M)||b(M)||A(M)||l(M))return M;var j,W=0,ge=0;if(d(M))for(j=[],ge=M.length;W<ge;W++)j.push(n(w,M[W],F));else{j={};for(var le in M)Object.prototype.hasOwnProperty.call(M,le)&&(j[w(le,F)]=n(w,M[le],F))}return j},r=function(w,M){M=M||{};var F=M.separator||"_",j=M.split||/(?=[A-Z])/;return w.split(j).join(F)},i=function(w){return $(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(M,F){return F?F.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var M=i(w);return M.substr(0,1).toUpperCase()+M.substr(1)},o=function(w,M){return r(w,M).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},p=function(w){return s.call(w)=="[object Date]"},b=function(w){return s.call(w)=="[object RegExp]"},A=function(w){return s.call(w)=="[object Boolean]"},$=function(w){return w=w-0,w===w},S=function(w,M){var F=M&&"process"in M?M.process:M;return typeof F!="function"?w:function(j,W){return F(j,w,W)}},L={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(w,M){return n(S(i,M),w)},decamelizeKeys:function(w,M){return n(S(o,M),w,M)},pascalizeKeys:function(w,M){return n(S(a,M),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Hm)})(Ms);var Bm=Ms.exports,Ym=["class","style"];function Vm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Wm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ji(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Wm(d);break;case"style":l.style=Vm(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Rm(n,Ym);return Bo(e.tag,Me(Me(Me({},t),{},{class:i.class,style:Me(Me({},i.style),o)},i.attrs),s),r)}var Ns=!1;try{Ns=!0}catch{}function Km(){if(!Ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}function qm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ve(t,"fa-".concat(e.size),e.size!==null),ve(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ve(t,"fa-pull-".concat(e.pull),e.pull!==null),ve(t,"fa-swap-opacity",e.swapOpacity),ve(t,"fa-bounce",e.bounce),ve(t,"fa-shake",e.shake),ve(t,"fa-beat",e.beat),ve(t,"fa-fade",e.fade),ve(t,"fa-beat-fade",e.beatFade),ve(t,"fa-flash",e.flash),ve(t,"fa-spin-pulse",e.spinPulse),ve(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Xa(e){if(e&&Zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gn.icon)return Gn.icon(e);if(e===null)return null;if(Zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Xm=yi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ke(function(){return Xa(t.icon)}),a=ke(function(){return Qt("classes",qm(t))}),o=ke(function(){return Qt("transform",typeof t.transform=="string"?Gn.transform(t.transform):t.transform)}),s=ke(function(){return Qt("mask",Xa(t.mask))}),l=ke(function(){return Dm(i.value,Me(Me(Me(Me({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});$n(l,function(d){if(!d)return Km("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=ke(function(){return l.value?ji(l.value.abstract[0],{},r):null});return function(){return c.value}}});yi({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=Es.familyPrefix,a=ke(function(){return["".concat(i,"-layers")].concat(ei(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Bo("div",{class:a.value},r.default?r.default():[])}}});yi({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=Es.familyPrefix,a=ke(function(){return Qt("classes",[].concat(ei(t.counter?["".concat(i,"-layers-counter")]:[]),ei(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),o=ke(function(){return Qt("transform",typeof t.transform=="string"?Gn.transform(t.transform):t.transform)}),s=ke(function(){var c=Fm(t.value.toString(),Me(Me({},o.value),a.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ke(function(){return ji(s.value,{},r)});return function(){return l.value}}});var Jm={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Gm={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Zm={prefix:"fas",iconName:"copy",icon:[512,512,[],"f0c5","M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]},Qm={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};hr.add(Jm);hr.add(Zm);hr.add(Gm);hr.add(Qm);Zc(td).component("font-awesome-icon",Xm).mount("#app");
