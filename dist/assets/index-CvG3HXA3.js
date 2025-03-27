(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ah(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},Po=[],Ji=()=>{},ex=()=>!1,nu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),lh=n=>n.startsWith("onUpdate:"),wn=Object.assign,ch=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},tx=Object.prototype.hasOwnProperty,yt=(n,e)=>tx.call(n,e),Ke=Array.isArray,Do=n=>iu(n)==="[object Map]",P_=n=>iu(n)==="[object Set]",Ze=n=>typeof n=="function",Kt=n=>typeof n=="string",Ir=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",D_=n=>(Ut(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),L_=Object.prototype.toString,iu=n=>L_.call(n),nx=n=>iu(n).slice(8,-1),I_=n=>iu(n)==="[object Object]",uh=n=>Kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Na=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ru=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ix=/-(\w)/g,wi=ru(n=>n.replace(ix,(e,t)=>t?t.toUpperCase():"")),rx=/\B([A-Z])/g,eo=ru(n=>n.replace(rx,"-$1").toLowerCase()),su=ru(n=>n.charAt(0).toUpperCase()+n.slice(1)),wu=ru(n=>n?`on${su(n)}`:""),Qr=(n,e)=>!Object.is(n,e),Au=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},U_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},sx=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let op;const ou=()=>op||(op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Kt(i)?cx(i):au(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Kt(n)||Ut(n))return n}const ox=/;(?![^(]*\))/g,ax=/:([^]+)/,lx=/\/\*[^]*?\*\//g;function cx(n){const e={};return n.replace(lx,"").split(ox).forEach(t=>{if(t){const i=t.split(ax);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ii(n){let e="";if(Kt(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=Ii(n[t]);i&&(e+=i+" ")}else if(Ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ux="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fx=ah(ux);function N_(n){return!!n||n===""}const O_=n=>!!(n&&n.__v_isRef===!0),fh=n=>Kt(n)?n:n==null?"":Ke(n)||Ut(n)&&(n.toString===L_||!Ze(n.toString))?O_(n)?fh(n.value):JSON.stringify(n,F_,2):String(n),F_=(n,e)=>O_(e)?F_(n,e.value):Do(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ru(i,s)+" =>"]=r,t),{})}:P_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ru(t))}:Ir(e)?Ru(e):Ut(e)&&!Ke(e)&&!I_(e)?String(e):e,Ru=(n,e="")=>{var t;return Ir(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;class dx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ti,!e&&ti&&(this.index=(ti.scopes||(ti.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ti;try{return ti=this,e()}finally{ti=t}}}on(){ti=this}off(){ti=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hx(){return ti}let Pt;const Cu=new WeakSet;class B_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ti&&ti.active&&ti.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cu.has(this)&&(Cu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||z_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ap(this),H_(this);const e=Pt,t=Fi;Pt=this,Fi=!0;try{return this.fn()}finally{V_(this),Pt=e,Fi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ph(e);this.deps=this.depsTail=void 0,ap(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Df(this)&&this.run()}get dirty(){return Df(this)}}let k_=0,Oa,Fa;function z_(n,e=!1){if(n.flags|=8,e){n.next=Fa,Fa=n;return}n.next=Oa,Oa=n}function dh(){k_++}function hh(){if(--k_>0)return;if(Fa){let e=Fa;for(Fa=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Oa;){let e=Oa;for(Oa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function H_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function V_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ph(i),px(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Df(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(G_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function G_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===el))return;n.globalVersion=el;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Df(n)){n.flags&=-3;return}const t=Pt,i=Fi;Pt=n,Fi=!0;try{H_(n);const r=n.fn(n._value);(e.version===0||Qr(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Pt=t,Fi=i,V_(n),n.flags&=-3}}function ph(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ph(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function px(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fi=!0;const W_=[];function fs(){W_.push(Fi),Fi=!1}function ds(){const n=W_.pop();Fi=n===void 0?!0:n}function ap(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Pt;Pt=void 0;try{e()}finally{Pt=t}}}let el=0;class mx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Pt||!Fi||Pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Pt)t=this.activeLink=new mx(Pt,this),Pt.deps?(t.prevDep=Pt.depsTail,Pt.depsTail.nextDep=t,Pt.depsTail=t):Pt.deps=Pt.depsTail=t,X_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Pt.depsTail,t.nextDep=void 0,Pt.depsTail.nextDep=t,Pt.depsTail=t,Pt.deps===t&&(Pt.deps=i)}return t}trigger(e){this.version++,el++,this.notify(e)}notify(e){dh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hh()}}}function X_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)X_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Lf=new WeakMap,ks=Symbol(""),If=Symbol(""),tl=Symbol("");function vn(n,e,t){if(Fi&&Pt){let i=Lf.get(n);i||Lf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new mh),r.map=i,r.key=t),r.track()}}function gr(n,e,t,i,r,s){const o=Lf.get(n);if(!o){el++;return}const a=l=>{l&&l.trigger()};if(dh(),e==="clear")o.forEach(a);else{const l=Ke(n),c=l&&uh(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===tl||!Ir(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(tl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ks)),Do(n)&&a(o.get(If)));break;case"delete":l||(a(o.get(ks)),Do(n)&&a(o.get(If)));break;case"set":Do(n)&&a(o.get(ks));break}}hh()}function io(n){const e=xt(n);return e===n?e:(vn(e,"iterate",tl),Ei(n)?e:e.map(xn))}function lu(n){return vn(n=xt(n),"iterate",tl),n}const _x={__proto__:null,[Symbol.iterator](){return Pu(this,Symbol.iterator,xn)},concat(...n){return io(this).concat(...n.map(e=>Ke(e)?io(e):e))},entries(){return Pu(this,"entries",n=>(n[1]=xn(n[1]),n))},every(n,e){return or(this,"every",n,e,void 0,arguments)},filter(n,e){return or(this,"filter",n,e,t=>t.map(xn),arguments)},find(n,e){return or(this,"find",n,e,xn,arguments)},findIndex(n,e){return or(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return or(this,"findLast",n,e,xn,arguments)},findLastIndex(n,e){return or(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return or(this,"forEach",n,e,void 0,arguments)},includes(...n){return Du(this,"includes",n)},indexOf(...n){return Du(this,"indexOf",n)},join(n){return io(this).join(n)},lastIndexOf(...n){return Du(this,"lastIndexOf",n)},map(n,e){return or(this,"map",n,e,void 0,arguments)},pop(){return pa(this,"pop")},push(...n){return pa(this,"push",n)},reduce(n,...e){return lp(this,"reduce",n,e)},reduceRight(n,...e){return lp(this,"reduceRight",n,e)},shift(){return pa(this,"shift")},some(n,e){return or(this,"some",n,e,void 0,arguments)},splice(...n){return pa(this,"splice",n)},toReversed(){return io(this).toReversed()},toSorted(n){return io(this).toSorted(n)},toSpliced(...n){return io(this).toSpliced(...n)},unshift(...n){return pa(this,"unshift",n)},values(){return Pu(this,"values",xn)}};function Pu(n,e,t){const i=lu(n),r=i[e]();return i!==n&&!Ei(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const gx=Array.prototype;function or(n,e,t,i,r,s){const o=lu(n),a=o!==n&&!Ei(n),l=o[e];if(l!==gx[e]){const f=l.apply(n,s);return a?xn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,xn(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function lp(n,e,t,i){const r=lu(n);let s=t;return r!==n&&(Ei(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,xn(a),l,n)}),r[e](s,...i)}function Du(n,e,t){const i=xt(n);vn(i,"iterate",tl);const r=i[e](...t);return(r===-1||r===!1)&&vh(t[0])?(t[0]=xt(t[0]),i[e](...t)):r}function pa(n,e,t=[]){fs(),dh();const i=xt(n)[e].apply(n,t);return hh(),ds(),i}const vx=ah("__proto__,__v_isRef,__isVue"),q_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ir));function xx(n){Ir(n)||(n=String(n));const e=xt(this);return vn(e,"has",n),e.hasOwnProperty(n)}class Y_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Cx:Z_:s?K_:j_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!r){let l;if(o&&(l=_x[t]))return l;if(t==="hasOwnProperty")return xx}const a=Reflect.get(e,t,En(e)?e:i);return(Ir(t)?q_.has(t):vx(t))||(r||vn(e,"get",t),s)?a:En(a)?o&&uh(t)?a:a.value:Ut(a)?r?Q_(a):cu(a):a}}class $_ extends Y_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ys(s);if(!Ei(i)&&!Ys(i)&&(s=xt(s),i=xt(i)),!Ke(e)&&En(s)&&!En(i))return l?!1:(s.value=i,!0)}const o=Ke(e)&&uh(t)?Number(t)<e.length:yt(e,t),a=Reflect.set(e,t,i,En(e)?e:r);return e===xt(r)&&(o?Qr(i,s)&&gr(e,"set",t,i):gr(e,"add",t,i)),a}deleteProperty(e,t){const i=yt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&gr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ir(t)||!q_.has(t))&&vn(e,"has",t),i}ownKeys(e){return vn(e,"iterate",Ke(e)?"length":ks),Reflect.ownKeys(e)}}class yx extends Y_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Sx=new $_,Mx=new yx,bx=new $_(!0);const Uf=n=>n,Al=n=>Reflect.getPrototypeOf(n);function Ex(n,e,t){return function(...i){const r=this.__v_raw,s=xt(r),o=Do(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Uf:e?Nf:xn;return!e&&vn(s,"iterate",l?If:ks),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Rl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Tx(n,e){const t={get(r){const s=this.__v_raw,o=xt(s),a=xt(r);n||(Qr(r,a)&&vn(o,"get",r),vn(o,"get",a));const{has:l}=Al(o),c=e?Uf:n?Nf:xn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&vn(xt(r),"iterate",ks),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=xt(s),a=xt(r);return n||(Qr(r,a)&&vn(o,"has",r),vn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=xt(a),c=e?Uf:n?Nf:xn;return!n&&vn(l,"iterate",ks),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return wn(t,n?{add:Rl("add"),set:Rl("set"),delete:Rl("delete"),clear:Rl("clear")}:{add(r){!e&&!Ei(r)&&!Ys(r)&&(r=xt(r));const s=xt(this);return Al(s).has.call(s,r)||(s.add(r),gr(s,"add",r,r)),this},set(r,s){!e&&!Ei(s)&&!Ys(s)&&(s=xt(s));const o=xt(this),{has:a,get:l}=Al(o);let c=a.call(o,r);c||(r=xt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Qr(s,u)&&gr(o,"set",r,s):gr(o,"add",r,s),this},delete(r){const s=xt(this),{has:o,get:a}=Al(s);let l=o.call(s,r);l||(r=xt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&gr(s,"delete",r,void 0),c},clear(){const r=xt(this),s=r.size!==0,o=r.clear();return s&&gr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ex(r,n,e)}),t}function _h(n,e){const t=Tx(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(yt(t,r)&&r in i?t:i,r,s)}const wx={get:_h(!1,!1)},Ax={get:_h(!1,!0)},Rx={get:_h(!0,!1)};const j_=new WeakMap,K_=new WeakMap,Z_=new WeakMap,Cx=new WeakMap;function Px(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dx(n){return n.__v_skip||!Object.isExtensible(n)?0:Px(nx(n))}function cu(n){return Ys(n)?n:gh(n,!1,Sx,wx,j_)}function J_(n){return gh(n,!1,bx,Ax,K_)}function Q_(n){return gh(n,!0,Mx,Rx,Z_)}function gh(n,e,t,i,r){if(!Ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Dx(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Lo(n){return Ys(n)?Lo(n.__v_raw):!!(n&&n.__v_isReactive)}function Ys(n){return!!(n&&n.__v_isReadonly)}function Ei(n){return!!(n&&n.__v_isShallow)}function vh(n){return n?!!n.__v_raw:!1}function xt(n){const e=n&&n.__v_raw;return e?xt(e):n}function Lx(n){return!yt(n,"__v_skip")&&Object.isExtensible(n)&&U_(n,"__v_skip",!0),n}const xn=n=>Ut(n)?cu(n):n,Nf=n=>Ut(n)?Q_(n):n;function En(n){return n?n.__v_isRef===!0:!1}function Li(n){return eg(n,!1)}function Ix(n){return eg(n,!0)}function eg(n,e){return En(n)?n:new Ux(n,e)}class Ux{constructor(e,t){this.dep=new mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:xt(e),this._value=t?e:xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Ei(e)||Ys(e);e=i?e:xt(e),Qr(e,t)&&(this._rawValue=e,this._value=i?e:xn(e),this.dep.trigger())}}function Io(n){return En(n)?n.value:n}const Nx={get:(n,e,t)=>e==="__v_raw"?n:Io(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return En(r)&&!En(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function tg(n){return Lo(n)?n:new Proxy(n,Nx)}class Ox{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=el-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return z_(this,!0),!0}get value(){const e=this.dep.track();return G_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fx(n,e,t=!1){let i,r;return Ze(n)?i=n:(i=n.get,r=n.set),new Ox(i,r,t)}const Cl={},Uc=new WeakMap;let Ts;function Bx(n,e=!1,t=Ts){if(t){let i=Uc.get(t);i||Uc.set(t,i=[]),i.push(n)}}function kx(n,e,t=Tt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Ei(v)||r===!1||r===0?vr(v,1):vr(v);let u,f,d,h,g=!1,_=!1;if(En(n)?(f=()=>n.value,g=Ei(n)):Lo(n)?(f=()=>c(n),g=!0):Ke(n)?(_=!0,g=n.some(v=>Lo(v)||Ei(v)),f=()=>n.map(v=>{if(En(v))return v.value;if(Lo(v))return c(v);if(Ze(v))return l?l(v,2):v()})):Ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){fs();try{d()}finally{ds()}}const v=Ts;Ts=u;try{return l?l(n,3,[h]):n(h)}finally{Ts=v}}:f=Ji,e&&r){const v=f,P=r===!0?1/0:r;f=()=>vr(v(),P)}const m=hx(),p=()=>{u.stop(),m&&m.active&&ch(m.effects,u)};if(s&&e){const v=e;e=(...P)=>{v(...P),p()}}let M=_?new Array(n.length).fill(Cl):Cl;const b=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const P=u.run();if(r||g||(_?P.some((C,w)=>Qr(C,M[w])):Qr(P,M))){d&&d();const C=Ts;Ts=u;try{const w=[P,M===Cl?void 0:_&&M[0]===Cl?[]:M,h];l?l(e,3,w):e(...w),M=P}finally{Ts=C}}}else u.run()};return a&&a(b),u=new B_(f),u.scheduler=o?()=>o(b,!1):b,h=v=>Bx(v,!1,u),d=u.onStop=()=>{const v=Uc.get(u);if(v){if(l)l(v,4);else for(const P of v)P();Uc.delete(u)}},e?i?b(!0):M=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function vr(n,e=1/0,t){if(e<=0||!Ut(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,En(n))vr(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)vr(n[i],e,t);else if(P_(n)||Do(n))n.forEach(i=>{vr(i,e,t)});else if(I_(n)){for(const i in n)vr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&vr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(n,e,t,i){try{return i?n(...i):n()}catch(r){uu(r,e,t)}}function rr(n,e,t,i){if(Ze(n)){const r=vl(n,e,t,i);return r&&D_(r)&&r.catch(s=>{uu(s,e,t)}),r}if(Ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(rr(n[s],e,t,i));return r}}function uu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){fs(),vl(s,null,10,[n,l,c]),ds();return}}zx(n,t,r,i,o)}function zx(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const On=[];let Vi=-1;const Uo=[];let Wr=null,Mo=0;const ng=Promise.resolve();let Nc=null;function ig(n){const e=Nc||ng;return n?e.then(this?n.bind(this):n):e}function Hx(n){let e=Vi+1,t=On.length;for(;e<t;){const i=e+t>>>1,r=On[i],s=nl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function xh(n){if(!(n.flags&1)){const e=nl(n),t=On[On.length-1];!t||!(n.flags&2)&&e>=nl(t)?On.push(n):On.splice(Hx(e),0,n),n.flags|=1,rg()}}function rg(){Nc||(Nc=ng.then(og))}function Vx(n){Ke(n)?Uo.push(...n):Wr&&n.id===-1?Wr.splice(Mo+1,0,n):n.flags&1||(Uo.push(n),n.flags|=1),rg()}function cp(n,e,t=Vi+1){for(;t<On.length;t++){const i=On[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;On.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function sg(n){if(Uo.length){const e=[...new Set(Uo)].sort((t,i)=>nl(t)-nl(i));if(Uo.length=0,Wr){Wr.push(...e);return}for(Wr=e,Mo=0;Mo<Wr.length;Mo++){const t=Wr[Mo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Wr=null,Mo=0}}const nl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function og(n){try{for(Vi=0;Vi<On.length;Vi++){const e=On[Vi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vi<On.length;Vi++){const e=On[Vi];e&&(e.flags&=-2)}Vi=-1,On.length=0,sg(),Nc=null,(On.length||Uo.length)&&og()}}let fn=null,ag=null;function Oc(n){const e=fn;return fn=n,ag=n&&n.type.__scopeId||null,e}function Yi(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&yp(-1);const s=Oc(e);let o;try{o=n(...r)}finally{Oc(s),i._d&&yp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function up(n,e){if(fn===null)return n;const t=mu(fn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Tt]=e[r];s&&(Ze(s)&&(s={mounted:s,updated:s}),s.deep&&vr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ms(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(fs(),rr(l,t,8,[n.el,a,n,e]),ds())}}const Gx=Symbol("_vte"),Wx=n=>n.__isTeleport;function yh(n,e){n.shapeFlag&6&&n.component?(n.transition=e,yh(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function lg(n,e){return Ze(n)?wn({name:n.name},e,{setup:n}):n}function cg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fc(n,e,t,i,r=!1){if(Ke(n)){n.forEach((g,_)=>Fc(g,e&&(Ke(e)?e[_]:e),t,i,r));return}if(No(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fc(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?mu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,f=a.setupState,d=xt(f),h=f===Tt?()=>!1:g=>yt(d,g);if(c!=null&&c!==l&&(Kt(c)?(u[c]=null,h(c)&&(f[c]=null)):En(c)&&(c.value=null)),Ze(l))vl(l,a,12,[o,u]);else{const g=Kt(l),_=En(l);if(g||_){const m=()=>{if(n.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Ke(p)&&ch(p,s):Ke(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,ei(m,t)):m()}}}ou().requestIdleCallback;ou().cancelIdleCallback;const No=n=>!!n.type.__asyncLoader,ug=n=>n.type.__isKeepAlive;function Xx(n,e){fg(n,"a",e)}function qx(n,e){fg(n,"da",e)}function fg(n,e,t=yn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fu(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ug(r.parent.vnode)&&Yx(i,e,t,r),r=r.parent}}function Yx(n,e,t,i){const r=fu(e,n,i,!0);Sh(()=>{ch(i[e],r)},t)}function fu(n,e,t=yn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{fs();const a=xl(t),l=rr(e,t,n,o);return a(),ds(),l});return i?r.unshift(s):r.push(s),s}}const Ur=n=>(e,t=yn)=>{(!sl||n==="sp")&&fu(n,(...i)=>e(...i),t)},$x=Ur("bm"),du=Ur("m"),jx=Ur("bu"),Kx=Ur("u"),dg=Ur("bum"),Sh=Ur("um"),Zx=Ur("sp"),Jx=Ur("rtg"),Qx=Ur("rtc");function ey(n,e=yn){fu("ec",n,e)}const ty="components";function Tr(n,e){return iy(ty,n,!0,e)||n}const ny=Symbol.for("v-ndc");function iy(n,e,t=!0,i=!1){const r=fn||yn;if(r){const s=r.type;{const a=Xy(s,!1);if(a&&(a===e||a===wi(e)||a===su(wi(e))))return s}const o=fp(r[n]||s[n],e)||fp(r.appContext[n],e);return!o&&i?s:o}}function fp(n,e){return n&&(n[e]||n[wi(e)]||n[su(wi(e))])}function ry(n,e,t,i){let r;const s=t,o=Ke(n);if(o||Kt(n)){const a=o&&Lo(n);let l=!1;a&&(l=!Ei(n),n=lu(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?xn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Ut(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function sy(n,e,t={},i,r){if(fn.ce||fn.parent&&No(fn.parent)&&fn.parent.ce)return Bi(),zf(si,null,[wt("slot",t,i)],64);let s=n[e];s&&s._c&&(s._d=!1),Bi();const o=s&&hg(s(t)),a=t.key||o&&o.key,l=zf(si,{key:(a&&!Ir(a)?a:`_${e}`)+""},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function hg(n){return n.some(e=>rl(e)?!(e.type===qo||e.type===si&&!hg(e.children)):!0)?n:null}const Of=n=>n?Ug(n)?mu(n):Of(n.parent):null,Ba=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Of(n.parent),$root:n=>Of(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>mg(n),$forceUpdate:n=>n.f||(n.f=()=>{xh(n.update)}),$nextTick:n=>n.n||(n.n=ig.bind(n.proxy)),$watch:n=>wy.bind(n)}),Lu=(n,e)=>n!==Tt&&!n.__isScriptSetup&&yt(n,e),oy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Lu(i,e))return o[e]=1,i[e];if(r!==Tt&&yt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&yt(c,e))return o[e]=3,s[e];if(t!==Tt&&yt(t,e))return o[e]=4,t[e];Ff&&(o[e]=0)}}const u=Ba[e];let f,d;if(u)return e==="$attrs"&&vn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Tt&&yt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,yt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Lu(r,e)?(r[e]=t,!0):i!==Tt&&yt(i,e)?(i[e]=t,!0):yt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Tt&&yt(n,o)||Lu(e,o)||(a=s[0])&&yt(a,o)||yt(i,o)||yt(Ba,o)||yt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:yt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dp(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ff=!0;function ay(n){const e=mg(n),t=n.proxy,i=n.ctx;Ff=!1,e.beforeCreate&&hp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:v,render:P,renderTracked:C,renderTriggered:w,errorCaptured:I,serverPrefetch:E,expose:y,inheritAttrs:D,components:N,directives:H,filters:W}=e;if(c&&ly(c,i,null),o)for(const q in o){const V=o[q];Ze(V)&&(i[q]=V.bind(t))}if(r){const q=r.call(t,t);Ut(q)&&(n.data=cu(q))}if(Ff=!0,s)for(const q in s){const V=s[q],fe=Ze(V)?V.bind(t,t):Ze(V.get)?V.get.bind(t,t):Ji,F=!Ze(V)&&Ze(V.set)?V.set.bind(t):Ji,ye=Ui({get:fe,set:F});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ce=>ye.value=Ce})}if(a)for(const q in a)pg(a[q],i,t,q);if(l){const q=Ze(l)?l.call(t):l;Reflect.ownKeys(q).forEach(V=>{hc(V,q[V])})}u&&hp(u,n,"c");function Y(q,V){Ke(V)?V.forEach(fe=>q(fe.bind(t))):V&&q(V.bind(t))}if(Y($x,f),Y(du,d),Y(jx,h),Y(Kx,g),Y(Xx,_),Y(qx,m),Y(ey,I),Y(Qx,C),Y(Jx,w),Y(dg,M),Y(Sh,v),Y(Zx,E),Ke(y))if(y.length){const q=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(q,V,{get:()=>t[V],set:fe=>t[V]=fe})})}else n.exposed||(n.exposed={});P&&n.render===Ji&&(n.render=P),D!=null&&(n.inheritAttrs=D),N&&(n.components=N),H&&(n.directives=H),E&&cg(n)}function ly(n,e,t=Ji){Ke(n)&&(n=Bf(n));for(const i in n){const r=n[i];let s;Ut(r)?"default"in r?s=wr(r.from||i,r.default,!0):s=wr(r.from||i):s=wr(r),En(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function hp(n,e,t){rr(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function pg(n,e,t,i){let r=i.includes(".")?Cg(t,i):()=>t[i];if(Kt(n)){const s=e[n];Ze(s)&&pc(r,s)}else if(Ze(n))pc(r,n.bind(t));else if(Ut(n))if(Ke(n))n.forEach(s=>pg(s,e,t,i));else{const s=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(s)&&pc(r,s,n)}}function mg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Bc(l,c,o,!0)),Bc(l,e,o)),Ut(e)&&s.set(e,l),l}function Bc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Bc(n,s,t,!0),r&&r.forEach(o=>Bc(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cy={data:pp,props:mp,emits:mp,methods:wa,computed:wa,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:wa,directives:wa,watch:fy,provide:pp,inject:uy};function pp(n,e){return e?n?function(){return wn(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function uy(n,e){return wa(Bf(n),Bf(e))}function Bf(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pn(n,e){return n?[...new Set([].concat(n,e))]:e}function wa(n,e){return n?wn(Object.create(null),n,e):e}function mp(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:wn(Object.create(null),dp(n),dp(e??{})):e}function fy(n,e){if(!n)return e;if(!e)return n;const t=wn(Object.create(null),n);for(const i in e)t[i]=Pn(n[i],e[i]);return t}function _g(){return{app:null,config:{isNativeTag:ex,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dy=0;function hy(n,e){return function(i,r=null){Ze(i)||(i=wn({},i)),r!=null&&!Ut(r)&&(r=null);const s=_g(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:dy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yy,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...f)):Ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||wt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,mu(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(rr(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Oo;Oo=c;try{return u()}finally{Oo=f}}};return c}}let Oo=null;function hc(n,e){if(yn){let t=yn.provides;const i=yn.parent&&yn.parent.provides;i===t&&(t=yn.provides=Object.create(i)),t[n]=e}}function wr(n,e,t=!1){const i=yn||fn;if(i||Oo){const r=Oo?Oo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const gg={},vg=()=>Object.create(gg),xg=n=>Object.getPrototypeOf(n)===gg;function py(n,e,t,i=!1){const r={},s=vg();n.propsDefaults=Object.create(null),yg(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:J_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function my(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=xt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(hu(n.emitsOptions,d))continue;const h=e[d];if(l)if(yt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=wi(d);r[g]=kf(l,a,g,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{yg(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!yt(e,f)&&((u=eo(f))===f||!yt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=kf(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!yt(e,f))&&(delete s[f],c=!0)}c&&gr(n.attrs,"set","")}function yg(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Na(l))continue;const c=e[l];let u;r&&yt(r,u=wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:hu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=xt(t),c=a||Tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=kf(r,l,f,c[f],n,!yt(c,f))}}return o}function kf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=yt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=xl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===eo(t))&&(i=!0))}return i}const _y=new WeakMap;function Sg(n,e,t=!1){const i=t?_y:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ze(n)){const u=f=>{l=!0;const[d,h]=Sg(f,e,!0);wn(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ut(n)&&i.set(n,Po),Po;if(Ke(s))for(let u=0;u<s.length;u++){const f=wi(s[u]);_p(f)&&(o[f]=Tt)}else if(s)for(const u in s){const f=wi(u);if(_p(f)){const d=s[u],h=o[f]=Ke(d)||Ze(d)?{type:d}:wn({},d),g=h.type;let _=!1,m=!0;if(Ke(g))for(let p=0;p<g.length;++p){const M=g[p],b=Ze(M)&&M.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Ze(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||yt(h,"default"))&&a.push(f)}}const c=[o,a];return Ut(n)&&i.set(n,c),c}function _p(n){return n[0]!=="$"&&!Na(n)}const Mg=n=>n[0]==="_"||n==="$stable",Mh=n=>Ke(n)?n.map(Xi):[Xi(n)],gy=(n,e,t)=>{if(e._n)return e;const i=Yi((...r)=>Mh(e(...r)),t);return i._c=!1,i},bg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Mg(r))continue;const s=n[r];if(Ze(s))e[r]=gy(r,s,i);else if(s!=null){const o=Mh(s);e[r]=()=>o}}},Eg=(n,e)=>{const t=Mh(e);n.slots.default=()=>t},Tg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},vy=(n,e,t)=>{const i=n.slots=vg();if(n.vnode.shapeFlag&32){const r=e._;r?(Tg(i,e,t),t&&U_(i,"_",r,!0)):bg(e,i)}else e&&Eg(n,e)},xy=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Tg(r,e,t):(s=!e.$stable,bg(e,r)),o=e}else e&&(Eg(n,e),o={default:1});if(s)for(const a in r)!Mg(a)&&o[a]==null&&delete r[a]},ei=Iy;function yy(n){return Sy(n)}function Sy(n,e){const t=ou();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Ji,insertStaticContent:g}=n,_=(L,R,x,ee=null,j=null,U=null,se=void 0,de=null,re=!!R.dynamicChildren)=>{if(L===R)return;L&&!ma(L,R)&&(ee=k(L),Ce(L,j,U,!0),L=null),R.patchFlag===-2&&(re=!1,R.dynamicChildren=null);const{type:T,ref:S,shapeFlag:B}=R;switch(T){case pu:m(L,R,x,ee);break;case qo:p(L,R,x,ee);break;case mc:L==null&&M(R,x,ee,se);break;case si:N(L,R,x,ee,j,U,se,de,re);break;default:B&1?P(L,R,x,ee,j,U,se,de,re):B&6?H(L,R,x,ee,j,U,se,de,re):(B&64||B&128)&&T.process(L,R,x,ee,j,U,se,de,re,ce)}S!=null&&j&&Fc(S,L&&L.ref,U,R||L,!R)},m=(L,R,x,ee)=>{if(L==null)i(R.el=a(R.children),x,ee);else{const j=R.el=L.el;R.children!==L.children&&c(j,R.children)}},p=(L,R,x,ee)=>{L==null?i(R.el=l(R.children||""),x,ee):R.el=L.el},M=(L,R,x,ee)=>{[L.el,L.anchor]=g(L.children,R,x,ee,L.el,L.anchor)},b=({el:L,anchor:R},x,ee)=>{let j;for(;L&&L!==R;)j=d(L),i(L,x,ee),L=j;i(R,x,ee)},v=({el:L,anchor:R})=>{let x;for(;L&&L!==R;)x=d(L),r(L),L=x;r(R)},P=(L,R,x,ee,j,U,se,de,re)=>{R.type==="svg"?se="svg":R.type==="math"&&(se="mathml"),L==null?C(R,x,ee,j,U,se,de,re):E(L,R,j,U,se,de,re)},C=(L,R,x,ee,j,U,se,de)=>{let re,T;const{props:S,shapeFlag:B,transition:$,dirs:K}=L;if(re=L.el=o(L.type,U,S&&S.is,S),B&8?u(re,L.children):B&16&&I(L.children,re,null,ee,j,Iu(L,U),se,de),K&&ms(L,null,ee,"created"),w(re,L,L.scopeId,se,ee),S){for(const me in S)me!=="value"&&!Na(me)&&s(re,me,null,S[me],U,ee);"value"in S&&s(re,"value",null,S.value,U),(T=S.onVnodeBeforeMount)&&Hi(T,ee,L)}K&&ms(L,null,ee,"beforeMount");const Q=My(j,$);Q&&$.beforeEnter(re),i(re,R,x),((T=S&&S.onVnodeMounted)||Q||K)&&ei(()=>{T&&Hi(T,ee,L),Q&&$.enter(re),K&&ms(L,null,ee,"mounted")},j)},w=(L,R,x,ee,j)=>{if(x&&h(L,x),ee)for(let U=0;U<ee.length;U++)h(L,ee[U]);if(j){let U=j.subTree;if(R===U||Dg(U.type)&&(U.ssContent===R||U.ssFallback===R)){const se=j.vnode;w(L,se,se.scopeId,se.slotScopeIds,j.parent)}}},I=(L,R,x,ee,j,U,se,de,re=0)=>{for(let T=re;T<L.length;T++){const S=L[T]=de?Xr(L[T]):Xi(L[T]);_(null,S,R,x,ee,j,U,se,de)}},E=(L,R,x,ee,j,U,se)=>{const de=R.el=L.el;let{patchFlag:re,dynamicChildren:T,dirs:S}=R;re|=L.patchFlag&16;const B=L.props||Tt,$=R.props||Tt;let K;if(x&&_s(x,!1),(K=$.onVnodeBeforeUpdate)&&Hi(K,x,R,L),S&&ms(R,L,x,"beforeUpdate"),x&&_s(x,!0),(B.innerHTML&&$.innerHTML==null||B.textContent&&$.textContent==null)&&u(de,""),T?y(L.dynamicChildren,T,de,x,ee,Iu(R,j),U):se||V(L,R,de,null,x,ee,Iu(R,j),U,!1),re>0){if(re&16)D(de,B,$,x,j);else if(re&2&&B.class!==$.class&&s(de,"class",null,$.class,j),re&4&&s(de,"style",B.style,$.style,j),re&8){const Q=R.dynamicProps;for(let me=0;me<Q.length;me++){const pe=Q[me],Se=B[pe],Fe=$[pe];(Fe!==Se||pe==="value")&&s(de,pe,Se,Fe,j,x)}}re&1&&L.children!==R.children&&u(de,R.children)}else!se&&T==null&&D(de,B,$,x,j);((K=$.onVnodeUpdated)||S)&&ei(()=>{K&&Hi(K,x,R,L),S&&ms(R,L,x,"updated")},ee)},y=(L,R,x,ee,j,U,se)=>{for(let de=0;de<R.length;de++){const re=L[de],T=R[de],S=re.el&&(re.type===si||!ma(re,T)||re.shapeFlag&70)?f(re.el):x;_(re,T,S,null,ee,j,U,se,!0)}},D=(L,R,x,ee,j)=>{if(R!==x){if(R!==Tt)for(const U in R)!Na(U)&&!(U in x)&&s(L,U,R[U],null,j,ee);for(const U in x){if(Na(U))continue;const se=x[U],de=R[U];se!==de&&U!=="value"&&s(L,U,de,se,j,ee)}"value"in x&&s(L,"value",R.value,x.value,j)}},N=(L,R,x,ee,j,U,se,de,re)=>{const T=R.el=L?L.el:a(""),S=R.anchor=L?L.anchor:a("");let{patchFlag:B,dynamicChildren:$,slotScopeIds:K}=R;K&&(de=de?de.concat(K):K),L==null?(i(T,x,ee),i(S,x,ee),I(R.children||[],x,S,j,U,se,de,re)):B>0&&B&64&&$&&L.dynamicChildren?(y(L.dynamicChildren,$,x,j,U,se,de),(R.key!=null||j&&R===j.subTree)&&wg(L,R,!0)):V(L,R,x,S,j,U,se,de,re)},H=(L,R,x,ee,j,U,se,de,re)=>{R.slotScopeIds=de,L==null?R.shapeFlag&512?j.ctx.activate(R,x,ee,se,re):W(R,x,ee,j,U,se,re):Z(L,R,re)},W=(L,R,x,ee,j,U,se)=>{const de=L.component=zy(L,ee,j);if(ug(L)&&(de.ctx.renderer=ce),Hy(de,!1,se),de.asyncDep){if(j&&j.registerDep(de,Y,se),!L.el){const re=de.subTree=wt(qo);p(null,re,R,x)}}else Y(de,L,R,x,j,U,se)},Z=(L,R,x)=>{const ee=R.component=L.component;if(Dy(L,R,x))if(ee.asyncDep&&!ee.asyncResolved){q(ee,R,x);return}else ee.next=R,ee.update();else R.el=L.el,ee.vnode=R},Y=(L,R,x,ee,j,U,se)=>{const de=()=>{if(L.isMounted){let{next:B,bu:$,u:K,parent:Q,vnode:me}=L;{const xe=Ag(L);if(xe){B&&(B.el=me.el,q(L,B,se)),xe.asyncDep.then(()=>{L.isUnmounted||de()});return}}let pe=B,Se;_s(L,!1),B?(B.el=me.el,q(L,B,se)):B=me,$&&Au($),(Se=B.props&&B.props.onVnodeBeforeUpdate)&&Hi(Se,Q,B,me),_s(L,!0);const Fe=vp(L),_e=L.subTree;L.subTree=Fe,_(_e,Fe,f(_e.el),k(_e),L,j,U),B.el=Fe.el,pe===null&&Ly(L,Fe.el),K&&ei(K,j),(Se=B.props&&B.props.onVnodeUpdated)&&ei(()=>Hi(Se,Q,B,me),j)}else{let B;const{el:$,props:K}=R,{bm:Q,m:me,parent:pe,root:Se,type:Fe}=L,_e=No(R);_s(L,!1),Q&&Au(Q),!_e&&(B=K&&K.onVnodeBeforeMount)&&Hi(B,pe,R),_s(L,!0);{Se.ce&&Se.ce._injectChildStyle(Fe);const xe=L.subTree=vp(L);_(null,xe,x,ee,L,j,U),R.el=xe.el}if(me&&ei(me,j),!_e&&(B=K&&K.onVnodeMounted)){const xe=R;ei(()=>Hi(B,pe,xe),j)}(R.shapeFlag&256||pe&&No(pe.vnode)&&pe.vnode.shapeFlag&256)&&L.a&&ei(L.a,j),L.isMounted=!0,R=x=ee=null}};L.scope.on();const re=L.effect=new B_(de);L.scope.off();const T=L.update=re.run.bind(re),S=L.job=re.runIfDirty.bind(re);S.i=L,S.id=L.uid,re.scheduler=()=>xh(S),_s(L,!0),T()},q=(L,R,x)=>{R.component=L;const ee=L.vnode.props;L.vnode=R,L.next=null,my(L,R.props,ee,x),xy(L,R.children,x),fs(),cp(L),ds()},V=(L,R,x,ee,j,U,se,de,re=!1)=>{const T=L&&L.children,S=L?L.shapeFlag:0,B=R.children,{patchFlag:$,shapeFlag:K}=R;if($>0){if($&128){F(T,B,x,ee,j,U,se,de,re);return}else if($&256){fe(T,B,x,ee,j,U,se,de,re);return}}K&8?(S&16&&ve(T,j,U),B!==T&&u(x,B)):S&16?K&16?F(T,B,x,ee,j,U,se,de,re):ve(T,j,U,!0):(S&8&&u(x,""),K&16&&I(B,x,ee,j,U,se,de,re))},fe=(L,R,x,ee,j,U,se,de,re)=>{L=L||Po,R=R||Po;const T=L.length,S=R.length,B=Math.min(T,S);let $;for($=0;$<B;$++){const K=R[$]=re?Xr(R[$]):Xi(R[$]);_(L[$],K,x,null,j,U,se,de,re)}T>S?ve(L,j,U,!0,!1,B):I(R,x,ee,j,U,se,de,re,B)},F=(L,R,x,ee,j,U,se,de,re)=>{let T=0;const S=R.length;let B=L.length-1,$=S-1;for(;T<=B&&T<=$;){const K=L[T],Q=R[T]=re?Xr(R[T]):Xi(R[T]);if(ma(K,Q))_(K,Q,x,null,j,U,se,de,re);else break;T++}for(;T<=B&&T<=$;){const K=L[B],Q=R[$]=re?Xr(R[$]):Xi(R[$]);if(ma(K,Q))_(K,Q,x,null,j,U,se,de,re);else break;B--,$--}if(T>B){if(T<=$){const K=$+1,Q=K<S?R[K].el:ee;for(;T<=$;)_(null,R[T]=re?Xr(R[T]):Xi(R[T]),x,Q,j,U,se,de,re),T++}}else if(T>$)for(;T<=B;)Ce(L[T],j,U,!0),T++;else{const K=T,Q=T,me=new Map;for(T=Q;T<=$;T++){const Me=R[T]=re?Xr(R[T]):Xi(R[T]);Me.key!=null&&me.set(Me.key,T)}let pe,Se=0;const Fe=$-Q+1;let _e=!1,xe=0;const Be=new Array(Fe);for(T=0;T<Fe;T++)Be[T]=0;for(T=K;T<=B;T++){const Me=L[T];if(Se>=Fe){Ce(Me,j,U,!0);continue}let Ge;if(Me.key!=null)Ge=me.get(Me.key);else for(pe=Q;pe<=$;pe++)if(Be[pe-Q]===0&&ma(Me,R[pe])){Ge=pe;break}Ge===void 0?Ce(Me,j,U,!0):(Be[Ge-Q]=T+1,Ge>=xe?xe=Ge:_e=!0,_(Me,R[Ge],x,null,j,U,se,de,re),Se++)}const ke=_e?by(Be):Po;for(pe=ke.length-1,T=Fe-1;T>=0;T--){const Me=Q+T,Ge=R[Me],We=Me+1<S?R[Me+1].el:ee;Be[T]===0?_(null,Ge,x,We,j,U,se,de,re):_e&&(pe<0||T!==ke[pe]?ye(Ge,x,We,2):pe--)}}},ye=(L,R,x,ee,j=null)=>{const{el:U,type:se,transition:de,children:re,shapeFlag:T}=L;if(T&6){ye(L.component.subTree,R,x,ee);return}if(T&128){L.suspense.move(R,x,ee);return}if(T&64){se.move(L,R,x,ce);return}if(se===si){i(U,R,x);for(let B=0;B<re.length;B++)ye(re[B],R,x,ee);i(L.anchor,R,x);return}if(se===mc){b(L,R,x);return}if(ee!==2&&T&1&&de)if(ee===0)de.beforeEnter(U),i(U,R,x),ei(()=>de.enter(U),j);else{const{leave:B,delayLeave:$,afterLeave:K}=de,Q=()=>i(U,R,x),me=()=>{B(U,()=>{Q(),K&&K()})};$?$(U,Q,me):me()}else i(U,R,x)},Ce=(L,R,x,ee=!1,j=!1)=>{const{type:U,props:se,ref:de,children:re,dynamicChildren:T,shapeFlag:S,patchFlag:B,dirs:$,cacheIndex:K}=L;if(B===-2&&(j=!1),de!=null&&Fc(de,null,x,L,!0),K!=null&&(R.renderCache[K]=void 0),S&256){R.ctx.deactivate(L);return}const Q=S&1&&$,me=!No(L);let pe;if(me&&(pe=se&&se.onVnodeBeforeUnmount)&&Hi(pe,R,L),S&6)he(L.component,x,ee);else{if(S&128){L.suspense.unmount(x,ee);return}Q&&ms(L,null,R,"beforeUnmount"),S&64?L.type.remove(L,R,x,ce,ee):T&&!T.hasOnce&&(U!==si||B>0&&B&64)?ve(T,R,x,!1,!0):(U===si&&B&384||!j&&S&16)&&ve(re,R,x),ee&&ze(L)}(me&&(pe=se&&se.onVnodeUnmounted)||Q)&&ei(()=>{pe&&Hi(pe,R,L),Q&&ms(L,null,R,"unmounted")},x)},ze=L=>{const{type:R,el:x,anchor:ee,transition:j}=L;if(R===si){te(x,ee);return}if(R===mc){v(L);return}const U=()=>{r(x),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(L.shapeFlag&1&&j&&!j.persisted){const{leave:se,delayLeave:de}=j,re=()=>se(x,U);de?de(L.el,U,re):re()}else U()},te=(L,R)=>{let x;for(;L!==R;)x=d(L),r(L),L=x;r(R)},he=(L,R,x)=>{const{bum:ee,scope:j,job:U,subTree:se,um:de,m:re,a:T}=L;gp(re),gp(T),ee&&Au(ee),j.stop(),U&&(U.flags|=8,Ce(se,L,R,x)),de&&ei(de,R),ei(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ve=(L,R,x,ee=!1,j=!1,U=0)=>{for(let se=U;se<L.length;se++)Ce(L[se],R,x,ee,j)},k=L=>{if(L.shapeFlag&6)return k(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const R=d(L.anchor||L.el),x=R&&R[Gx];return x?d(x):R};let ne=!1;const le=(L,R,x)=>{L==null?R._vnode&&Ce(R._vnode,null,null,!0):_(R._vnode||null,L,R,null,null,null,x),R._vnode=L,ne||(ne=!0,cp(),sg(),ne=!1)},ce={p:_,um:Ce,m:ye,r:ze,mt:W,mc:I,pc:V,pbc:y,n:k,o:n};return{render:le,hydrate:void 0,createApp:hy(le)}}function Iu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _s({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function My(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wg(n,e,t=!1){const i=n.children,r=e.children;if(Ke(i)&&Ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&wg(o,a)),a.type===pu&&(a.el=o.el)}}function by(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ag(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ag(e)}function gp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ey=Symbol.for("v-scx"),Ty=()=>wr(Ey);function pc(n,e,t){return Rg(n,e,t)}function Rg(n,e,t=Tt){const{immediate:i,deep:r,flush:s,once:o}=t,a=wn({},t),l=e&&i||!e&&s!=="post";let c;if(sl){if(s==="sync"){const h=Ty();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ji,h.resume=Ji,h.pause=Ji,h}}const u=yn;a.call=(h,g,_)=>rr(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{ei(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():xh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=kx(n,e,a);return sl&&(c?c.push(d):l&&d()),d}function wy(n,e,t){const i=this.proxy,r=Kt(n)?n.includes(".")?Cg(i,n):()=>i[n]:n.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=xl(this),a=Rg(r,s.bind(i),t);return o(),a}function Cg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ay=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wi(e)}Modifiers`]||n[`${eo(e)}Modifiers`];function Ry(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let r=t;const s=e.startsWith("update:"),o=s&&Ay(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Kt(u)?u.trim():u)),o.number&&(r=t.map(sx)));let a,l=i[a=wu(e)]||i[a=wu(wi(e))];!l&&s&&(l=i[a=wu(eo(e))]),l&&rr(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rr(c,n,6,r)}}function Pg(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const u=Pg(c,e,!0);u&&(a=!0,wn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ut(n)&&i.set(n,null),null):(Ke(s)?s.forEach(l=>o[l]=null):wn(o,s),Ut(n)&&i.set(n,o),o)}function hu(n,e){return!n||!nu(e)?!1:(e=e.slice(2).replace(/Once$/,""),yt(n,e[0].toLowerCase()+e.slice(1))||yt(n,eo(e))||yt(n,e))}function vp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,m=Oc(n);let p,M;try{if(t.shapeFlag&4){const v=r||i,P=v;p=Xi(c.call(P,v,u,f,h,d,g)),M=a}else{const v=e;p=Xi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),M=e.props?a:Cy(a)}}catch(v){ka.length=0,uu(v,n,1),p=wt(qo)}let b=p;if(M&&_!==!1){const v=Object.keys(M),{shapeFlag:P}=b;v.length&&P&7&&(s&&v.some(lh)&&(M=Py(M,s)),b=Yo(b,M,!1,!0))}return t.dirs&&(b=Yo(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&yh(b,t.transition),p=b,Oc(m),p}const Cy=n=>{let e;for(const t in n)(t==="class"||t==="style"||nu(t))&&((e||(e={}))[t]=n[t]);return e},Py=(n,e)=>{const t={};for(const i in n)(!lh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Dy(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?xp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!hu(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?xp(i,o,c):!0:!!o;return!1}function xp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!hu(t,s))return!0}return!1}function Ly({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Dg=n=>n.__isSuspense;function Iy(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):Vx(n)}const si=Symbol.for("v-fgt"),pu=Symbol.for("v-txt"),qo=Symbol.for("v-cmt"),mc=Symbol.for("v-stc"),ka=[];let ci=null;function Bi(n=!1){ka.push(ci=n?null:[])}function Uy(){ka.pop(),ci=ka[ka.length-1]||null}let il=1;function yp(n,e=!1){il+=n,n<0&&ci&&e&&(ci.hasOnce=!0)}function Lg(n){return n.dynamicChildren=il>0?ci||Po:null,Uy(),il>0&&ci&&ci.push(n),n}function es(n,e,t,i,r,s){return Lg(O(n,e,t,i,r,s,!0))}function zf(n,e,t,i,r){return Lg(wt(n,e,t,i,r,!0))}function rl(n){return n?n.__v_isVNode===!0:!1}function ma(n,e){return n.type===e.type&&n.key===e.key}const Ig=({key:n})=>n??null,_c=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Kt(n)||En(n)||Ze(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,i=0,r=null,s=n===si?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ig(e),ref:e&&_c(e),scopeId:ag,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(bh(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),il>0&&!o&&ci&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ci.push(l),l}const wt=Ny;function Ny(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ny)&&(n=qo),rl(n)){const a=Yo(n,e,!0);return t&&bh(a,t),il>0&&!s&&ci&&(a.shapeFlag&6?ci[ci.indexOf(n)]=a:ci.push(a)),a.patchFlag=-2,a}if(qy(n)&&(n=n.__vccOpts),e){e=Oy(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=Ii(a)),Ut(l)&&(vh(l)&&!Ke(l)&&(l=wn({},l)),e.style=au(l))}const o=Kt(n)?1:Dg(n)?128:Wx(n)?64:Ut(n)?4:Ze(n)?2:0;return O(n,e,t,i,r,o,s,!0)}function Oy(n){return n?vh(n)||xg(n)?wn({},n):n:null}function Yo(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Fy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ig(c),ref:e&&e.ref?t&&s?Ke(s)?s.concat(_c(e)):[s,_c(e)]:_c(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==si?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Yo(n.ssContent),ssFallback:n.ssFallback&&Yo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&yh(u,l.clone(u)),u}function an(n=" ",e=0){return wt(pu,null,n,e)}function Hf(n,e){const t=wt(mc,null,n);return t.staticCount=e,t}function Xi(n){return n==null||typeof n=="boolean"?wt(qo):Ke(n)?wt(si,null,n.slice()):rl(n)?Xr(n):wt(pu,null,String(n))}function Xr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Yo(n)}function bh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),bh(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!xg(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[an(e)]):t=8);n.children=e,n.shapeFlag|=t}function Fy(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ii([e.class,i.class]));else if(r==="style")e.style=au([e.style,i.style]);else if(nu(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Hi(n,e,t,i=null){rr(n,e,7,[t,i])}const By=_g();let ky=0;function zy(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||By,s={uid:ky++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sg(i,r),emitsOptions:Pg(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ry.bind(null,s),n.ce&&n.ce(s),s}let yn=null,kc,Vf;{const n=ou(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};kc=e("__VUE_INSTANCE_SETTERS__",t=>yn=t),Vf=e("__VUE_SSR_SETTERS__",t=>sl=t)}const xl=n=>{const e=yn;return kc(n),n.scope.on(),()=>{n.scope.off(),kc(e)}},Sp=()=>{yn&&yn.scope.off(),kc(null)};function Ug(n){return n.vnode.shapeFlag&4}let sl=!1;function Hy(n,e=!1,t=!1){e&&Vf(e);const{props:i,children:r}=n.vnode,s=Ug(n);py(n,i,s,e),vy(n,r,t);const o=s?Vy(n,e):void 0;return e&&Vf(!1),o}function Vy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,oy);const{setup:i}=t;if(i){fs();const r=n.setupContext=i.length>1?Wy(n):null,s=xl(n),o=vl(i,n,0,[n.props,r]),a=D_(o);if(ds(),s(),(a||n.sp)&&!No(n)&&cg(n),a){if(o.then(Sp,Sp),e)return o.then(l=>{Mp(n,l)}).catch(l=>{uu(l,n,0)});n.asyncDep=o}else Mp(n,o)}else Ng(n)}function Mp(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ut(e)&&(n.setupState=tg(e)),Ng(n)}function Ng(n,e,t){const i=n.type;n.render||(n.render=i.render||Ji);{const r=xl(n);fs();try{ay(n)}finally{ds(),r()}}}const Gy={get(n,e){return vn(n,"get",""),n[e]}};function Wy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gy),slots:n.slots,emit:n.emit,expose:e}}function mu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tg(Lx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ba)return Ba[t](n)},has(e,t){return t in e||t in Ba}})):n.proxy}function Xy(n,e=!0){return Ze(n)?n.displayName||n.name:n.name||e&&n.__name}function qy(n){return Ze(n)&&"__vccOpts"in n}const Ui=(n,e)=>Fx(n,e,sl);function Og(n,e,t){const i=arguments.length;return i===2?Ut(e)&&!Ke(e)?rl(e)?wt(n,null,[e]):wt(n,e):wt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&rl(t)&&(t=[t]),wt(n,e,t))}const Yy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gf;const bp=typeof window<"u"&&window.trustedTypes;if(bp)try{Gf=bp.createPolicy("vue",{createHTML:n=>n})}catch{}const Fg=Gf?n=>Gf.createHTML(n):n=>n,$y="http://www.w3.org/2000/svg",jy="http://www.w3.org/1998/Math/MathML",pr=typeof document<"u"?document:null,Ep=pr&&pr.createElement("template"),Ky={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?pr.createElementNS($y,n):e==="mathml"?pr.createElementNS(jy,n):t?pr.createElement(n,{is:t}):pr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>pr.createTextNode(n),createComment:n=>pr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ep.innerHTML=Fg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ep.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zy=Symbol("_vtc");function Jy(n,e,t){const i=n[Zy];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zc=Symbol("_vod"),Bg=Symbol("_vsh"),Tp={beforeMount(n,{value:e},{transition:t}){n[zc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):_a(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),_a(n,!0),i.enter(n)):i.leave(n,()=>{_a(n,!1)}):_a(n,e))},beforeUnmount(n,{value:e}){_a(n,e)}};function _a(n,e){n.style.display=e?n[zc]:"none",n[Bg]=!e}const Qy=Symbol(""),eS=/(^|;)\s*display\s*:/;function tS(n,e,t){const i=n.style,r=Kt(t);let s=!1;if(t&&!r){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&gc(i,a,"")}else for(const o in e)t[o]==null&&gc(i,o,"");for(const o in t)o==="display"&&(s=!0),gc(i,o,t[o])}else if(r){if(e!==t){const o=i[Qy];o&&(t+=";"+o),i.cssText=t,s=eS.test(t)}}else e&&n.removeAttribute("style");zc in n&&(n[zc]=s?i.display:"",n[Bg]&&(i.display="none"))}const wp=/\s*!important$/;function gc(n,e,t){if(Ke(t))t.forEach(i=>gc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=nS(n,e);wp.test(t)?n.setProperty(eo(i),t.replace(wp,""),"important"):n[i]=t}}const Ap=["Webkit","Moz","ms"],Uu={};function nS(n,e){const t=Uu[e];if(t)return t;let i=wi(e);if(i!=="filter"&&i in n)return Uu[e]=i;i=su(i);for(let r=0;r<Ap.length;r++){const s=Ap[r]+i;if(s in n)return Uu[e]=s}return e}const Rp="http://www.w3.org/1999/xlink";function Cp(n,e,t,i,r,s=fx(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Rp,e.slice(6,e.length)):n.setAttributeNS(Rp,e,t):t==null||s&&!N_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ir(t)?String(t):t)}function Pp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Fg(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=N_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function iS(n,e,t,i){n.addEventListener(e,t,i)}function rS(n,e,t,i){n.removeEventListener(e,t,i)}const Dp=Symbol("_vei");function sS(n,e,t,i,r=null){const s=n[Dp]||(n[Dp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=oS(e);if(i){const c=s[e]=cS(i,r);iS(n,a,c,l)}else o&&(rS(n,a,o,l),s[e]=void 0)}}const Lp=/(?:Once|Passive|Capture)$/;function oS(n){let e;if(Lp.test(n)){e={};let i;for(;i=n.match(Lp);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):eo(n.slice(2)),e]}let Nu=0;const aS=Promise.resolve(),lS=()=>Nu||(aS.then(()=>Nu=0),Nu=Date.now());function cS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rr(uS(i,t.value),e,5,[i])};return t.value=n,t.attached=lS(),t}function uS(n,e){if(Ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ip=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fS=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jy(n,i,o):e==="style"?tS(n,t,i):nu(e)?lh(e)||sS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dS(n,e,i,o))?(Pp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cp(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Kt(i))?Pp(n,wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Cp(n,e,i,o))};function dS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ip(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ip(e)&&Kt(t)?!1:e in n}const hS=["ctrl","shift","alt","meta"],pS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>hS.some(t=>n[`${t}Key`]&&!e.includes(t))},mS=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=pS[e[o]];if(a&&a(r,e))return}return n(r,...s)})},_S=wn({patchProp:fS},Ky);let Up;function gS(){return Up||(Up=yy(_S))}const vS=(...n)=>{const e=gS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yS(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function yS(n){return Kt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const bo=typeof document<"u";function kg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function SS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&kg(n.default)}const gt=Object.assign;function Ou(n,e){const t={};for(const i in e){const r=e[i];t[i]=zi(r)?r.map(n):n(r)}return t}const za=()=>{},zi=Array.isArray,zg=/#/g,MS=/&/g,bS=/\//g,ES=/=/g,TS=/\?/g,Hg=/\+/g,wS=/%5B/g,AS=/%5D/g,Vg=/%5E/g,RS=/%60/g,Gg=/%7B/g,CS=/%7C/g,Wg=/%7D/g,PS=/%20/g;function Eh(n){return encodeURI(""+n).replace(CS,"|").replace(wS,"[").replace(AS,"]")}function DS(n){return Eh(n).replace(Gg,"{").replace(Wg,"}").replace(Vg,"^")}function Wf(n){return Eh(n).replace(Hg,"%2B").replace(PS,"+").replace(zg,"%23").replace(MS,"%26").replace(RS,"`").replace(Gg,"{").replace(Wg,"}").replace(Vg,"^")}function LS(n){return Wf(n).replace(ES,"%3D")}function IS(n){return Eh(n).replace(zg,"%23").replace(TS,"%3F")}function US(n){return n==null?"":IS(n).replace(bS,"%2F")}function ol(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const NS=/\/$/,OS=n=>n.replace(NS,"");function Fu(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zS(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ol(o)}}function FS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Np(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function BS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&$o(e.matched[i],t.matched[r])&&Xg(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function $o(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Xg(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!kS(n[t],e[t]))return!1;return!0}function kS(n,e){return zi(n)?Op(n,e):zi(e)?Op(e,n):n===e}function Op(n,e){return zi(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function zS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var al;(function(n){n.pop="pop",n.push="push"})(al||(al={}));var Ha;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ha||(Ha={}));function HS(n){if(!n)if(bo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),OS(n)}const VS=/^[^#]+#/;function GS(n,e){return n.replace(VS,"#")+e}function WS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const _u=()=>({left:window.scrollX,top:window.scrollY});function XS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=WS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fp(n,e){return(history.state?history.state.position-e:-1)+n}const Xf=new Map;function qS(n,e){Xf.set(n,e)}function YS(n){const e=Xf.get(n);return Xf.delete(n),e}let $S=()=>location.protocol+"//"+location.host;function qg(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Np(l,"")}return Np(t,n)+i+r}function jS(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=qg(n,location),g=t.value,_=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(t.value,g,{delta:m,type:al.pop,direction:m?m>0?Ha.forward:Ha.back:Ha.unknown})})};function l(){o=t.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(gt({},d.state,{scroll:_u()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Bp(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?_u():null}}function KS(n){const{history:e,location:t}=window,i={value:qg(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:$S()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){const u=gt({},e.state,Bp(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=gt({},r.value,e.state,{forward:l,scroll:_u()});s(u.current,u,!0);const f=gt({},Bp(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function ZS(n){n=HS(n);const e=KS(n),t=jS(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=gt({location:"",base:n,go:i,createHref:GS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function JS(n){return typeof n=="string"||n&&typeof n=="object"}function Yg(n){return typeof n=="string"||typeof n=="symbol"}const $g=Symbol("");var kp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(kp||(kp={}));function jo(n,e){return gt(new Error,{type:n,[$g]:!0},e)}function ar(n,e){return n instanceof Error&&$g in n&&(e==null||!!(n.type&e))}const zp="[^/]+?",QS={sensitive:!1,strict:!1,start:!0,end:!0},e1=/[.+*?^${}()[\]/\\]/g;function t1(n,e){const t=gt({},QS,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(e1,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const M=p||zp;if(M!==zp){h+=10;try{new RegExp(`(${M})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+v.message)}}let b=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,h+=20,m&&(h+=-8),_&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(zi(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=zi(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function n1(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jg(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=n1(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Hp(i))return 1;if(Hp(r))return-1}return r.length-i.length}function Hp(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const i1={type:0,value:""},r1=/[a-zA-Z0-9_]/;function s1(n){if(!n)return[[]];if(n==="/")return[[i1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:r1.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function o1(n,e,t){const i=t1(s1(n.path),t),r=gt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function a1(n,e){const t=[],i=new Map;e=Xp({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=Gp(f);_.aliasOf=h&&h.record;const m=Xp(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of v)p.push(Gp(gt({},_,{components:h?h.record.components:_.components,path:P,aliasOf:h?h.record:_})))}let M,b;for(const v of p){const{path:P}=v;if(d&&P[0]!=="/"){const C=d.record.path,w=C[C.length-1]==="/"?"":"/";v.path=d.record.path+(P&&w+P)}if(M=o1(v,d,m),h?h.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),g&&f.name&&!Wp(M)&&o(f.name)),Kg(M)&&l(M),_.children){const C=_.children;for(let w=0;w<C.length;w++)s(C[w],M,h&&h.children[w])}h=h||M}return b?()=>{o(b)}:za}function o(f){if(Yg(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=u1(f,t);t.splice(d,0,f),f.record.name&&!Wp(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw jo(1,{location:f});m=h.record.name,g=gt(Vp(d.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Vp(f.params,h.keys.map(b=>b.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=t.find(b=>b.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(b=>b.re.test(d.path)),!h)throw jo(1,{location:f,currentLocation:d});m=h.record.name,g=gt({},d.params,f.params),_=h.stringify(g)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:p,meta:c1(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Vp(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:l1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function l1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Wp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function c1(n){return n.reduce((e,t)=>gt(e,t.meta),{})}function Xp(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function u1(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;jg(n,e[s])<0?i=s:t=s+1}const r=f1(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function f1(n){let e=n;for(;e=e.parent;)if(Kg(e)&&jg(n,e)===0)return e}function Kg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function d1(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Hg," "),o=s.indexOf("="),a=ol(o<0?s:s.slice(0,o)),l=o<0?null:ol(s.slice(o+1));if(a in e){let c=e[a];zi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qp(n){let e="";for(let t in n){const i=n[t];if(t=LS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(zi(i)?i.map(s=>s&&Wf(s)):[i&&Wf(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function h1(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=zi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const p1=Symbol(""),Yp=Symbol(""),Th=Symbol(""),Zg=Symbol(""),qf=Symbol("");function ga(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function qr(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(jo(4,{from:t,to:e})):d instanceof Error?l(d):JS(d)?l(jo(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Bu(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(kg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(qr(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=SS(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&qr(h,t,i,o,a,r)()}))}}return s}function $p(n){const e=wr(Th),t=wr(Zg),i=Ui(()=>{const l=Io(n.to);return e.resolve(l)}),r=Ui(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex($o.bind(null,u));if(d>-1)return d;const h=jp(l[c-2]);return c>1&&jp(u)===h&&f[f.length-1].path!==h?f.findIndex($o.bind(null,l[c-2])):d}),s=Ui(()=>r.value>-1&&x1(t.params,i.value.params)),o=Ui(()=>r.value>-1&&r.value===t.matched.length-1&&Xg(t.params,i.value.params));function a(l={}){if(v1(l)){const c=e[Io(n.replace)?"replace":"push"](Io(n.to)).catch(za);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ui(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function m1(n){return n.length===1?n[0]:n}const _1=lg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$p,setup(n,{slots:e}){const t=cu($p(n)),{options:i}=wr(Th),r=Ui(()=>({[Kp(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Kp(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&m1(e.default(t));return n.custom?s:Og("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),g1=_1;function v1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function x1(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!zi(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function jp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Kp=(n,e,t)=>n??e??t,y1=lg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=wr(qf),r=Ui(()=>n.route||i.value),s=wr(Yp,0),o=Ui(()=>{let c=Io(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ui(()=>r.value.matched[o.value]);hc(Yp,Ui(()=>o.value+1)),hc(p1,a),hc(qf,r);const l=Li();return pc(()=>[l.value,a.value,n.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!$o(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return Zp(t.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Og(d,gt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Zp(t.default,{Component:m,route:c})||m}}});function Zp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const S1=y1;function M1(n){const e=a1(n.routes,n),t=n.parseQuery||d1,i=n.stringifyQuery||qp,r=n.history,s=ga(),o=ga(),a=ga(),l=Ix(Or);let c=Or;bo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ou.bind(null,k=>""+k),f=Ou.bind(null,US),d=Ou.bind(null,ol);function h(k,ne){let le,ce;return Yg(k)?(le=e.getRecordMatcher(k),ce=ne):ce=k,e.addRoute(ce,le)}function g(k){const ne=e.getRecordMatcher(k);ne&&e.removeRoute(ne)}function _(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,ne){if(ne=gt({},ne||l.value),typeof k=="string"){const x=Fu(t,k,ne.path),ee=e.resolve({path:x.path},ne),j=r.createHref(x.fullPath);return gt(x,ee,{params:d(ee.params),hash:ol(x.hash),redirectedFrom:void 0,href:j})}let le;if(k.path!=null)le=gt({},k,{path:Fu(t,k.path,ne.path).path});else{const x=gt({},k.params);for(const ee in x)x[ee]==null&&delete x[ee];le=gt({},k,{params:f(x)}),ne.params=f(ne.params)}const ce=e.resolve(le,ne),Pe=k.hash||"";ce.params=u(d(ce.params));const L=FS(i,gt({},k,{hash:DS(Pe),path:ce.path})),R=r.createHref(L);return gt({fullPath:L,hash:Pe,query:i===qp?h1(k.query):k.query||{}},ce,{redirectedFrom:void 0,href:R})}function M(k){return typeof k=="string"?Fu(t,k,l.value.path):gt({},k)}function b(k,ne){if(c!==k)return jo(8,{from:ne,to:k})}function v(k){return w(k)}function P(k){return v(gt(M(k),{replace:!0}))}function C(k){const ne=k.matched[k.matched.length-1];if(ne&&ne.redirect){const{redirect:le}=ne;let ce=typeof le=="function"?le(k):le;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=M(ce):{path:ce},ce.params={}),gt({query:k.query,hash:k.hash,params:ce.path!=null?{}:k.params},ce)}}function w(k,ne){const le=c=p(k),ce=l.value,Pe=k.state,L=k.force,R=k.replace===!0,x=C(le);if(x)return w(gt(M(x),{state:typeof x=="object"?gt({},Pe,x.state):Pe,force:L,replace:R}),ne||le);const ee=le;ee.redirectedFrom=ne;let j;return!L&&BS(i,ce,le)&&(j=jo(16,{to:ee,from:ce}),ye(ce,ce,!0,!1)),(j?Promise.resolve(j):y(ee,ce)).catch(U=>ar(U)?ar(U,2)?U:F(U):V(U,ee,ce)).then(U=>{if(U){if(ar(U,2))return w(gt({replace:R},M(U.to),{state:typeof U.to=="object"?gt({},Pe,U.to.state):Pe,force:L}),ne||ee)}else U=N(ee,ce,!0,R,Pe);return D(ee,ce,U),U})}function I(k,ne){const le=b(k,ne);return le?Promise.reject(le):Promise.resolve()}function E(k){const ne=te.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(k):k()}function y(k,ne){let le;const[ce,Pe,L]=b1(k,ne);le=Bu(ce.reverse(),"beforeRouteLeave",k,ne);for(const x of ce)x.leaveGuards.forEach(ee=>{le.push(qr(ee,k,ne))});const R=I.bind(null,k,ne);return le.push(R),ve(le).then(()=>{le=[];for(const x of s.list())le.push(qr(x,k,ne));return le.push(R),ve(le)}).then(()=>{le=Bu(Pe,"beforeRouteUpdate",k,ne);for(const x of Pe)x.updateGuards.forEach(ee=>{le.push(qr(ee,k,ne))});return le.push(R),ve(le)}).then(()=>{le=[];for(const x of L)if(x.beforeEnter)if(zi(x.beforeEnter))for(const ee of x.beforeEnter)le.push(qr(ee,k,ne));else le.push(qr(x.beforeEnter,k,ne));return le.push(R),ve(le)}).then(()=>(k.matched.forEach(x=>x.enterCallbacks={}),le=Bu(L,"beforeRouteEnter",k,ne,E),le.push(R),ve(le))).then(()=>{le=[];for(const x of o.list())le.push(qr(x,k,ne));return le.push(R),ve(le)}).catch(x=>ar(x,8)?x:Promise.reject(x))}function D(k,ne,le){a.list().forEach(ce=>E(()=>ce(k,ne,le)))}function N(k,ne,le,ce,Pe){const L=b(k,ne);if(L)return L;const R=ne===Or,x=bo?history.state:{};le&&(ce||R?r.replace(k.fullPath,gt({scroll:R&&x&&x.scroll},Pe)):r.push(k.fullPath,Pe)),l.value=k,ye(k,ne,le,R),F()}let H;function W(){H||(H=r.listen((k,ne,le)=>{if(!he.listening)return;const ce=p(k),Pe=C(ce);if(Pe){w(gt(Pe,{replace:!0,force:!0}),ce).catch(za);return}c=ce;const L=l.value;bo&&qS(Fp(L.fullPath,le.delta),_u()),y(ce,L).catch(R=>ar(R,12)?R:ar(R,2)?(w(gt(M(R.to),{force:!0}),ce).then(x=>{ar(x,20)&&!le.delta&&le.type===al.pop&&r.go(-1,!1)}).catch(za),Promise.reject()):(le.delta&&r.go(-le.delta,!1),V(R,ce,L))).then(R=>{R=R||N(ce,L,!1),R&&(le.delta&&!ar(R,8)?r.go(-le.delta,!1):le.type===al.pop&&ar(R,20)&&r.go(-1,!1)),D(ce,L,R)}).catch(za)}))}let Z=ga(),Y=ga(),q;function V(k,ne,le){F(k);const ce=Y.list();return ce.length?ce.forEach(Pe=>Pe(k,ne,le)):console.error(k),Promise.reject(k)}function fe(){return q&&l.value!==Or?Promise.resolve():new Promise((k,ne)=>{Z.add([k,ne])})}function F(k){return q||(q=!k,W(),Z.list().forEach(([ne,le])=>k?le(k):ne()),Z.reset()),k}function ye(k,ne,le,ce){const{scrollBehavior:Pe}=n;if(!bo||!Pe)return Promise.resolve();const L=!le&&YS(Fp(k.fullPath,0))||(ce||!le)&&history.state&&history.state.scroll||null;return ig().then(()=>Pe(k,ne,L)).then(R=>R&&XS(R)).catch(R=>V(R,k,ne))}const Ce=k=>r.go(k);let ze;const te=new Set,he={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:v,replace:P,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:fe,install(k){const ne=this;k.component("RouterLink",g1),k.component("RouterView",S1),k.config.globalProperties.$router=ne,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Io(l)}),bo&&!ze&&l.value===Or&&(ze=!0,v(r.location).catch(Pe=>{}));const le={};for(const Pe in Or)Object.defineProperty(le,Pe,{get:()=>l.value[Pe],enumerable:!0});k.provide(Th,ne),k.provide(Zg,J_(le)),k.provide(qf,l);const ce=k.unmount;te.add(k),k.unmount=function(){te.delete(k),te.size<1&&(c=Or,H&&H(),H=null,l.value=Or,ze=!1,q=!1),ce()}}};function ve(k){return k.reduce((ne,le)=>ne.then(()=>E(le)),Promise.resolve())}return he}function b1(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>$o(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>$o(c,l))||r.push(l))}return[t,i,r]}const E1={class:"app-container"},T1={__name:"App",setup(n){const e=Li(!1),t=()=>{e.value=window.scrollY>100};return du(()=>{window.addEventListener("scroll",t),t()}),Sh(()=>{window.removeEventListener("scroll",t)}),(i,r)=>{const s=Tr("Header"),o=Tr("router-view");return Bi(),es("div",E1,[O("div",{class:Ii(["header-container",{"header-visible":e.value}])},[wt(s,{class:"fixed-header"})],2),wt(o)])}}};function w1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vc={exports:{}},A1=vc.exports,Jp;function R1(){return Jp||(Jp=1,function(n,e){(function(t,i){n.exports=i()})(A1,function(){return function(t){function i(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=t,i.c=r,i.p="dist/",i(0)}([function(t,i,r){function s(W){return W&&W.__esModule?W:{default:W}}var o=Object.assign||function(W){for(var Z=1;Z<arguments.length;Z++){var Y=arguments[Z];for(var q in Y)Object.prototype.hasOwnProperty.call(Y,q)&&(W[q]=Y[q])}return W},a=r(1),l=(s(a),r(6)),c=s(l),u=r(7),f=s(u),d=r(8),h=s(d),g=r(9),_=s(g),m=r(10),p=s(m),M=r(11),b=s(M),v=r(14),P=s(v),C=[],w=!1,I={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var W=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(W&&(w=!0),w)return C=(0,b.default)(C,I),(0,p.default)(C,I.once),C},y=function(){C=(0,P.default)(),E()},D=function(){C.forEach(function(W,Z){W.node.removeAttribute("data-aos"),W.node.removeAttribute("data-aos-easing"),W.node.removeAttribute("data-aos-duration"),W.node.removeAttribute("data-aos-delay")})},N=function(W){return W===!0||W==="mobile"&&_.default.mobile()||W==="phone"&&_.default.phone()||W==="tablet"&&_.default.tablet()||typeof W=="function"&&W()===!0},H=function(W){I=o(I,W),C=(0,P.default)();var Z=document.all&&!window.atob;return N(I.disable)||Z?D():(I.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),I.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",I.easing),document.querySelector("body").setAttribute("data-aos-duration",I.duration),document.querySelector("body").setAttribute("data-aos-delay",I.delay),I.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):I.startEvent==="load"?window.addEventListener(I.startEvent,function(){E(!0)}):document.addEventListener(I.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,f.default)(E,I.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(E,I.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,p.default)(C,I.once)},I.throttleDelay)),I.disableMutationObserver||h.default.ready("[data-aos]",y),C)};t.exports={init:H,refresh:E,refreshHard:y}},function(t,i){},,,,,function(t,i){(function(r){function s(N,H,W){function Z(x){var ee=te,j=he;return te=he=void 0,ce=x,k=N.apply(j,ee)}function Y(x){return ce=x,ne=setTimeout(fe,H),Pe?Z(x):k}function q(x){var ee=x-le,j=x-ce,U=H-ee;return L?y(U,ve-j):U}function V(x){var ee=x-le,j=x-ce;return le===void 0||ee>=H||ee<0||L&&j>=ve}function fe(){var x=D();return V(x)?F(x):void(ne=setTimeout(fe,q(x)))}function F(x){return ne=void 0,R&&te?Z(x):(te=he=void 0,k)}function ye(){ne!==void 0&&clearTimeout(ne),ce=0,te=le=he=ne=void 0}function Ce(){return ne===void 0?k:F(D())}function ze(){var x=D(),ee=V(x);if(te=arguments,he=this,le=x,ee){if(ne===void 0)return Y(le);if(L)return ne=setTimeout(fe,H),Z(le)}return ne===void 0&&(ne=setTimeout(fe,H)),k}var te,he,ve,k,ne,le,ce=0,Pe=!1,L=!1,R=!0;if(typeof N!="function")throw new TypeError(d);return H=u(H)||0,a(W)&&(Pe=!!W.leading,L="maxWait"in W,ve=L?E(u(W.maxWait)||0,H):ve,R="trailing"in W?!!W.trailing:R),ze.cancel=ye,ze.flush=Ce,ze}function o(N,H,W){var Z=!0,Y=!0;if(typeof N!="function")throw new TypeError(d);return a(W)&&(Z="leading"in W?!!W.leading:Z,Y="trailing"in W?!!W.trailing:Y),s(N,H,{leading:Z,maxWait:H,trailing:Y})}function a(N){var H=typeof N>"u"?"undefined":f(N);return!!N&&(H=="object"||H=="function")}function l(N){return!!N&&(typeof N>"u"?"undefined":f(N))=="object"}function c(N){return(typeof N>"u"?"undefined":f(N))=="symbol"||l(N)&&I.call(N)==g}function u(N){if(typeof N=="number")return N;if(c(N))return h;if(a(N)){var H=typeof N.valueOf=="function"?N.valueOf():N;N=a(H)?H+"":H}if(typeof N!="string")return N===0?N:+N;N=N.replace(_,"");var W=p.test(N);return W||M.test(N)?b(N.slice(2),W?2:8):m.test(N)?h:+N}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},d="Expected a function",h=NaN,g="[object Symbol]",_=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,M=/^0o[0-7]+$/i,b=parseInt,v=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,P=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,C=v||P||Function("return this")(),w=Object.prototype,I=w.toString,E=Math.max,y=Math.min,D=function(){return C.Date.now()};t.exports=o}).call(i,function(){return this}())},function(t,i){(function(r){function s(D,N,H){function W(R){var x=ze,ee=te;return ze=te=void 0,le=R,ve=D.apply(ee,x)}function Z(R){return le=R,k=setTimeout(V,N),ce?W(R):ve}function Y(R){var x=R-ne,ee=R-le,j=N-x;return Pe?E(j,he-ee):j}function q(R){var x=R-ne,ee=R-le;return ne===void 0||x>=N||x<0||Pe&&ee>=he}function V(){var R=y();return q(R)?fe(R):void(k=setTimeout(V,Y(R)))}function fe(R){return k=void 0,L&&ze?W(R):(ze=te=void 0,ve)}function F(){k!==void 0&&clearTimeout(k),le=0,ze=ne=te=k=void 0}function ye(){return k===void 0?ve:fe(y())}function Ce(){var R=y(),x=q(R);if(ze=arguments,te=this,ne=R,x){if(k===void 0)return Z(ne);if(Pe)return k=setTimeout(V,N),W(ne)}return k===void 0&&(k=setTimeout(V,N)),ve}var ze,te,he,ve,k,ne,le=0,ce=!1,Pe=!1,L=!0;if(typeof D!="function")throw new TypeError(f);return N=c(N)||0,o(H)&&(ce=!!H.leading,Pe="maxWait"in H,he=Pe?I(c(H.maxWait)||0,N):he,L="trailing"in H?!!H.trailing:L),Ce.cancel=F,Ce.flush=ye,Ce}function o(D){var N=typeof D>"u"?"undefined":u(D);return!!D&&(N=="object"||N=="function")}function a(D){return!!D&&(typeof D>"u"?"undefined":u(D))=="object"}function l(D){return(typeof D>"u"?"undefined":u(D))=="symbol"||a(D)&&w.call(D)==h}function c(D){if(typeof D=="number")return D;if(l(D))return d;if(o(D)){var N=typeof D.valueOf=="function"?D.valueOf():D;D=o(N)?N+"":N}if(typeof D!="string")return D===0?D:+D;D=D.replace(g,"");var H=m.test(D);return H||p.test(D)?M(D.slice(2),H?2:8):_.test(D)?d:+D}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},f="Expected a function",d=NaN,h="[object Symbol]",g=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,M=parseInt,b=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,v=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,P=b||v||Function("return this")(),C=Object.prototype,w=C.toString,I=Math.max,E=Math.min,y=function(){return P.Date.now()};t.exports=s}).call(i,function(){return this}())},function(t,i){function r(u){var f=void 0,d=void 0;for(f=0;f<u.length;f+=1)if(d=u[f],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function a(u,f){var d=window.document,h=s(),g=new h(l);c=f,g.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var d=Array.prototype.slice.call(f.addedNodes),h=Array.prototype.slice.call(f.removedNodes),g=d.concat(h);if(r(g))return c()})}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){};i.default={isSupported:o,ready:a}},function(t,i){function r(d,h){if(!(d instanceof h))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function d(h,g){for(var _=0;_<g.length;_++){var m=g[_];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(h,m.key,m)}}return function(h,g,_){return g&&d(h.prototype,g),_&&d(h,_),h}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function d(){r(this,d)}return o(d,[{key:"phone",value:function(){var h=s();return!(!a.test(h)&&!l.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=s();return!(!c.test(h)&&!u.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();i.default=new f},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,a,l){var c=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,a){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(u,f){r(u,c+l,a)})};i.default=s},function(t,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),a=s(o),l=function(c,u){return c.forEach(function(f,d){f.node.classList.add("aos-init"),f.position=(0,a.default)(f.node,u.offset)}),c};i.default=l},function(t,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),a=s(o),l=function(c,u){var f=0,d=0,h=window.innerHeight,g={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(d=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(c=document.querySelectorAll(g.anchor)[0]),f=(0,a.default)(c).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=c.offsetHeight/2;break;case"bottom-bottom":f+=c.offsetHeight;break;case"top-center":f+=h/2;break;case"bottom-center":f+=h/2+c.offsetHeight;break;case"center-center":f+=h/2+c.offsetHeight/2;break;case"top-top":f+=h;break;case"bottom-top":f+=c.offsetHeight+h;break;case"center-top":f+=c.offsetHeight/2+h}return g.anchorPlacement||g.offset||isNaN(u)||(d=u),f+d};i.default=l},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var o=0,a=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),a+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:a,left:o}};i.default=r},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};i.default=r}])})}(vc)),vc.exports}var C1=R1();const P1=w1(C1);function mr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Jg(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ko={duration:.5,overwrite:!1,delay:0},wh,hn,It,Qi=1e8,bn=1/Qi,Yf=Math.PI*2,D1=Yf/4,L1=0,Qg=Math.sqrt,I1=Math.cos,U1=Math.sin,cn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Cr=function(e){return typeof e=="number"},Ah=function(e){return typeof e>"u"},sr=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},Rh=function(){return typeof window<"u"},Pl=function(e){return kt(e)||cn(e)},e0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,$f=/(?:-?\.?\d|\.)+/gi,t0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n0=/[+-]=-?[.\d]+/,i0=/[^,'"\[\]\s]+/gi,N1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Gi,jf,Ch,di={},Hc={},r0,s0=function(e){return(Hc=Zo(e,di))&&jn},Ph=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},o0=function(e,t){return e&&(di[e]=t)&&Hc&&(Hc[e]=t)||di},cl=function(){return 0},O1={suppressEvents:!0,isStart:!0,kill:!1},xc={suppressEvents:!0,kill:!1},F1={suppressEvents:!0},Dh={},ts=[],Kf={},a0,ri={},zu={},Qp=30,yc=[],Lh="",Ih=function(e){var t=e[0],i,r;if(sr(t)||kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=yc.length;r--&&!yc[r].targetTest(t););i=yc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new D0(e[r],i)))||e.splice(r,1);return e},zs=function(e){return e._gsap||Ih(bi(e))[0]._gsap},l0=function(e,t,i){return(i=e[t])&&kt(i)?e[t]():Ah(i)&&e.getAttribute&&e.getAttribute(t)||i},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Fo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},B1=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Vc=function(){var e=ts.length,t=ts.slice(0),i,r;for(Kf={},ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},c0=function(e,t,i,r){ts.length&&!hn&&Vc(),e.render(t,i,hn&&t<0&&(e._initted||e._startAt)),ts.length&&!hn&&Vc()},u0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(i0).length<2?t:cn(e)?e.trim():e},f0=function(e){return e},hi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},k1=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Zo=function(e,t){for(var i in t)e[i]=t[i];return e},em=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=sr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Gc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Va=function(e){var t=e.parent||Nt,i=e.keyframes?k1(Tn(e.keyframes)):hi;if(Vn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},z1=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},d0=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},gu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},H1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zf=function(e,t,i,r){return e._startAt&&(hn?e._startAt.revert(xc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},V1=function n(e){return!e||e._ts&&n(e.parent)},tm=function(e){return e._repeat?Jo(e._tTime,e=e.duration()+e._rDelay)*e:0},Jo=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Wc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vu=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bn)||0))},xu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vu(e),i._dirty||Hs(i,e)),e},h0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Wc(e.rawTime(),t),(!t._dur||yl(0,t.totalDuration(),i)-t._tTime>bn)&&t.render(i,!0)),Hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},$i=function(e,t,i,r){return t.parent&&os(t),t._start=jt((Cr(i)?i:i||e!==Nt?vi(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),d0(e,t,"_first","_last",e._sort?"_start":0),Jf(t)||(e._recent=t),r||h0(e,t),e._ts<0&&xu(e,e._tTime),e},p0=function(e,t){return(di.ScrollTrigger||Ph("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},m0=function(e,t,i,r,s){if(Nh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&a0!==ai.frame)return ts.push(e),e._lazy=[s,r],1},G1=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Jf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},W1=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&G1(e)&&!(!e._initted&&Jf(e))||(e._ts<0||e._dp._ts<0)&&!Jf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=yl(0,e._tDur,t),u=Jo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Jo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||r||e._zTime===bn||!t&&e._zTime){if(!e._initted&&m0(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?bn:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zf(e,t,i,!0),e._onUpdate&&!i&&ui(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&os(e,1),!i&&!hn&&(ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},X1=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qo=function(e,t,i,r){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&xu(e,e._tTime=e._tDur*a),e.parent&&vu(e),i||Hs(e.parent,e),e},nm=function(e){return e instanceof Fn?Hs(e):Qo(e,e._dur)},q1={_start:0,endTime:cl,totalDuration:cl},vi=function n(e,t,i){var r=e.labels,s=e._recent||q1,o=e.duration()>=Qi?s.endTime(!1):e._dur,a,l,c;return cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Tn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ga=function(e,t,i){var r=Cr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},hs=function(e,t){return e||e===0?t(e):t},yl=function(e,t,i){return i<e?e:i>t?t:i},Sn=function(e,t){return!cn(e)||!(t=N1.exec(e))?"":t[1]},Y1=function(e,t,i){return hs(i,function(r){return yl(e,t,r)})},Qf=[].slice,_0=function(e,t){return e&&sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&sr(e[0]))&&!e.nodeType&&e!==Gi},$1=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return cn(r)&&!t||_0(r,1)?(s=i).push.apply(s,bi(r)):i.push(r)})||i},bi=function(e,t,i){return It&&!t&&It.selector?It.selector(e):cn(e)&&!i&&(jf||!ea())?Qf.call((t||Ch).querySelectorAll(e),0):Tn(e)?$1(e,i):_0(e)?Qf.call(e,0):e?[e]:[]},ed=function(e){return e=bi(e)[0]||ll("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bi(t,i.querySelectorAll?i:i===e?ll("Invalid scope")||Ch.createElement("div"):e)}},g0=function(e){return e.sort(function(){return .5-Math.random()})},v0=function(e){if(kt(e))return e;var t=sr(e)?e:{each:e},i=Vs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return cn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,g){var _=(g||t).length,m=o[_],p,M,b,v,P,C,w,I,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Qi])[1],!E){for(w=-1e8;w<(w=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],p=l?Math.min(E,_)*u-.5:r%E,M=E===Qi?0:l?_*f/E-.5:r/E|0,w=0,I=Qi,C=0;C<_;C++)b=C%E-p,v=M-(C/E|0),m[C]=P=c?Math.abs(c==="y"?v:b):Qg(b*b+v*v),P>w&&(w=P),P<I&&(I=P);r==="random"&&g0(m),m.max=w-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Sn(t.amount||t.each)||0,i=i&&_<0?R0(i):i}return _=(m[d]-m.min)/m.max||0,jt(m.b+(i?i(_):_)*m.v)+m.u}},td=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Cr(i)?0:Sn(i))}},x0=function(e,t){var i=Tn(e),r,s;return!i&&sr(e)&&(r=i=e.radius||Qi,e.values?(e=bi(e.values),(s=!Cr(e[0]))&&(r*=r)):e=td(e.increment)),hs(t,i?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qi,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Cr(o)?u:u+Sn(o)}:td(e))},y0=function(e,t,i,r){return hs(Tn(e)?!t:i===!0?!!(i=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},j1=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},K1=function(e,t){return function(i){return e(parseFloat(i))+(t||Sn(i))}},Z1=function(e,t,i){return M0(e,t,0,1,i)},S0=function(e,t,i){return hs(i,function(r){return e[~~t(r)]})},J1=function n(e,t,i){var r=t-e;return Tn(e)?S0(e,n(0,e.length),t):hs(i,function(s){return(r+(s-e)%r)%r+e})},Q1=function n(e,t,i){var r=t-e,s=r*2;return Tn(e)?S0(e,n(0,e.length-1),t):hs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ul=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?i0:$f),i+=e.substr(t,r-t)+y0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},M0=function(e,t,i,r,s){var o=t-e,a=r-i;return hs(s,function(l){return i+((l-e)/o*a||0)})},eM=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=cn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},i=t}else r||(e=Zo(Tn(e)?[]:{},e));if(!u){for(l in t)Uh.call(a,e,l,"get",t[l]);s=function(g){return Bh(g,a)||(o?e.p:e)}}}return hs(i,s)},im=function(e,t,i){var r=e.labels,s=Qi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ui=function(e,t,i){var r=e.vars,s=r[t],o=It,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ts.length&&Vc(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},Aa=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ui(e,"onInterrupt"),e},Ao,b0=[],E0=function(e){if(e)if(e=!e.name&&e.default||e,Rh()||e.headless){var t=e.name,i=kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:cl,render:Bh,add:Uh,kill:_M,modifier:mM,rawVars:0},o={targetTest:0,get:0,getSetter:Fh,aliases:{},register:0};if(ea(),e!==r){if(ri[t])return;hi(r,hi(Gc(e,s),o)),Zo(r.prototype,Zo(s,Gc(e,o))),ri[r.prop=t]=r,e.targetTest&&(yc.push(r),Dh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o0(t,r),e.register&&e.register(jn,r,Wn)}else b0.push(e)},Et=255,Ra={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Hu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Et+.5|0},T0=function(e,t,i){var r=e?Cr(e)?[e>>16,e>>8&Et,e&Et]:0:Ra.black,s,o,a,l,c,u,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ra[e])r=Ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match($f),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Hu(l+1/3,s,o),r[1]=Hu(l,s,o),r[2]=Hu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(t0),i&&r.length<4&&(r[3]=1),r}else r=e.match($f)||Ra.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},w0=function(e){var t=[],i=[],r=-1;return e.split(ns).forEach(function(s){var o=s.match(wo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},rm=function(e,t,i){var r="",s=(e+r).match(ns),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=T0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=w0(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ns,"1").split(wo),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ns),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ns=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ra)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),tM=/hsl[a]?\(/,A0=function(e){var t=e.join(" "),i;if(ns.lastIndex=0,ns.test(t))return i=tM.test(t),e[1]=rm(e[1],i),e[0]=rm(e[0],i,w0(e[1])),!0},fl,ai=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(m){var p=n()-r,M=m===!0,b,v,P,C;if((p>e||p<0)&&(i+=p-t),r+=p,P=r-i,b=P-o,(b>0||M)&&(C=++f.frame,d=P-f.time*1e3,f.time=P=P/1e3,o+=b+(b>=s?4:s-b),v=1),M||(l=c(_)),v)for(h=0;h<a.length;h++)a[h](P,d,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){r0&&(!jf&&Rh()&&(Gi=jf=window,Ch=Gi.document||{},di.gsap=jn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(jn.version),s0(Hc||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),b0.forEach(E0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},fl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),fl=0,c=cl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var b=p?function(v,P,C,w){m(v,P,C,w),f.remove(b)}:m;return f.remove(m),a[M?"unshift":"push"](b),ea(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),ea=function(){return!fl&&ai.wake()},lt={},nM=/^[\d.\-M][\d.\-,\s]/,iM=/["']/g,rM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(iM,"").trim():+c,r=l.substr(a+1).trim();return t},sM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},oM=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[rM(t[1])]:sM(e).split(",").map(u0)):lt._CE&&nM.test(e)?lt._CE("",e):i},R0=function(e){return function(t){return 1-e(1-t)}},C0=function n(e,t){for(var i=e._first,r;i;)i instanceof Fn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Vs=function(e,t){return e&&(kt(e)?e:lt[e]||oM(e))||t},to=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Gn(e,function(a){lt[a]=di[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},P0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vu=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Yf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*U1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:P0(a);return s=Yf/s,l.config=function(c,u){return n(e,c,u)},l},Gu=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:P0(i);return r.config=function(s){return n(e,s)},r};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;to(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;to("Elastic",Vu("in"),Vu("out"),Vu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};to("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);to("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});to("Circ",function(n){return-(Qg(1-n*n)-1)});to("Sine",function(n){return n===1?1:-I1(n*D1)+1});to("Back",Gu("in"),Gu("out"),Gu());lt.SteppedEase=lt.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bn;return function(a){return((r*yl(0,o,a)|0)+s)*i}}};Ko.ease=lt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Lh+=n+","+n+"Params,"});var D0=function(e,t){this.id=L1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:l0,this.set=t?t.getSetter:Fh},dl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),fl||ai.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xu(this,i),!s._dp||s.parent||h0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),c0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+tm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+tm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Jo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Wc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(yl(-Math.abs(this._delay),this._tDur,s),r!==!1),vu(this),H1(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bn&&(this._tTime-=bn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$i(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=F1);var r=hn;return hn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),hn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,nm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,nm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(vi(this,i),Vn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Vn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bn)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=kt(i)?i:f0,a=function(){var c=r.then;r.then=null,kt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Aa(this)},n}();hi(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Fn=function(n){Jg(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Vn(i.sortChildren),Nt&&$i(i.parent||Nt,mr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&p0(mr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ga(0,arguments,this),this},t.from=function(r,s,o){return Ga(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ga(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(r,s,vi(this,o),1),this},t.call=function(r,s,o){return $i(this,$t.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(r,o,vi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Va(o).immediateRender=Vn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Va(a).immediateRender=Vn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:jt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,g,_,m,p,M,b,v,P,C,w;if(this!==Nt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,v=this._start,b=this._ts,p=!b,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=jt(u%m),u===l?(_=this._repeat,d=c):(P=jt(u/m),_=~~P,_&&_===P&&(d=c,_--),d>c&&(d=c)),P=Jo(this._tTime,m),!a&&this._tTime&&P!==_&&this._tTime-P*m-this._dur<=0&&(P=_),C&&_&1&&(d=c-d,w=1),_!==P&&!this._lock){var I=C&&P&1,E=I===(C&&_&1);if(_<P&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:jt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;C0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=X1(this,jt(a),jt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(ui(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&M!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-1e-8);break}}h=g}else{h=this._last;for(var y=r<0?r:d;h;){if(g=h._prev,(h._act||y<=h._end)&&h._ts&&M!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(y-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(y-h._start)*h._ts,s,o||hn&&(h._initted||h._startAt)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=y?-1e-8:bn);break}}h=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=v,vu(this),this.render(r,s,o);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&os(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ui(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Cr(s)||(s=vi(this,s,r)),!(r instanceof dl)){if(Tn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(cn(r))return this.addLabel(r,s);if(kt(r))r=$t.delayedCall(0,r);else return this}return this!==r?$i(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return cn(r)?this.removeLabel(r):kt(r)?this.killTweensOf(r):(r.parent===this&&gu(this,r),r===this._recent&&(this._recent=this._last),Hs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(ai.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=vi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=$t.delayedCall(0,s||cl,o);return a.data="isPause",this._hasPause=1,$i(this,a,vi(this,r))},t.removePause=function(r){var s=this._first;for(r=vi(this,r);s;)s._start===r&&s.data==="isPause"&&os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)$r!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=bi(r),l=this._first,c=Cr(s),u;l;)l instanceof $t?B1(l._targets,a)&&(c?(!$r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=vi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=$t.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bn,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Qo(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,hi({startAt:{time:vi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),im(this,vi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),im(this,vi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Hs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qo(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Nt._ts&&(c0(Nt,Wc(r,Nt)),a0=ai.frame),ai.frame>=Qp){Qp+=fi.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&fi.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},e}(dl);hi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var aM=function(e,t,i,r,s,o,a){var l=new Wn(this._pt,e,t,0,1,F0,null,s),c=0,u=0,f,d,h,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ul(r)),o&&(M=[i,r],o(M,e,t),i=M[0],r=M[1]),d=i.match(ku)||[];f=ku.exec(r);)g=f[0],_=r.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Fo(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=ku.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(n0.test(r)||p)&&(l.e=0),this._pt=l,l},Uh=function(e,t,i,r,s,o,a,l,c,u){kt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:kt(f)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=kt(f)?c?dM:N0:Oh,g;if(cn(r)&&(~r.indexOf("random(")&&(r=ul(r)),r.charAt(1)==="="&&(g=Fo(d,r)+(Sn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||nd)return!isNaN(d*r)&&r!==""?(g=new Wn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?pM:O0,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Ph(t,r),aM.call(this,e,t,d,r,h,l||fi.stringFilter,c))},lM=function(e,t,i,r,s){if(kt(e)&&(e=Wa(e,s,t,i,r)),!sr(e)||e.style&&e.nodeType||Tn(e)||e0(e))return cn(e)?Wa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Wa(e[a],s,t,i,r);return o},L0=function(e,t,i,r,s,o){var a,l,c,u;if(ri[e]&&(a=new ri[e]).init(s,a.rawVars?t[e]:lM(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Wn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ao))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},$r,nd,Nh=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!wh,v=e.timeline,P,C,w,I,E,y,D,N,H,W,Z,Y,q;if(v&&(!d||!s)&&(s="none"),e._ease=Vs(s,Ko.ease),e._yEase=f?R0(Vs(f===!0?s:f,Ko.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(N=m[0]?zs(m[0]).harness:0,Y=N&&r[N.prop],P=Gc(r,Dh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?xc:O1),_._lazy=0),o){if(os(e._startAt=$t.set(m,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ui(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!h)&&e._startAt.revert(xc),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Vn(l),immediateRender:a,stagger:0,parent:p},P),Y&&(w[N.prop]=Y),os(e._startAt=$t.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(xc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bn,bn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Vn(l)||l&&!g,C=0;C<m.length;C++){if(E=m[C],D=E._gsap||Ih(m)[C]._gsap,e._ptLookup[C]=W={},Kf[D.id]&&ts.length&&Vc(),Z=M===m?C:M.indexOf(E),N&&(H=new N).init(E,Y||P,e,Z,M)!==!1&&(e._pt=I=new Wn(e._pt,E,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(V){W[V]=I}),H.priority&&(y=1)),!N||Y)for(w in P)ri[w]&&(H=L0(w,P,e,Z,E,M))?H.priority&&(y=1):W[w]=I=Uh.call(e,E,w,"get",P[w],Z,M,0,r.stringFilter);e._op&&e._op[C]&&e.kill(E,e._op[C]),b&&e._pt&&($r=e,Nt.killTweensOf(E,W,e.globalTime(t)),q=!e.parent,$r=0),e._pt&&l&&(Kf[D.id]=1)}y&&B0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&v.render(Qi,!0,!0)},cM=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nd=1,e.vars[t]="+=0",Nh(e,a),nd=0,l?ll(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Ht(i)+Sn(f.e)),f.b&&(f.b=u.s+Sn(f.b))},uM=function(e,t){var i=e[0]?zs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Zo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fM=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Tn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Wa=function(e,t,i,r,s){return kt(e)?e.call(t,i,r,s):cn(e)&&~e.indexOf("random(")?ul(e):e},I0=Lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",U0={};Gn(I0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return U0[n]=1});var $t=function(n){Jg(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Va(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Nt,b=(Tn(i)||e0(i)?Cr(i[0]):"length"in r)?[i]:bi(i),v,P,C,w,I,E,y,D;if(a._targets=b.length?Ih(b):ll("GSAP target "+i+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Pl(c)||Pl(u)){if(r=a.vars,v=a.timeline=new Fn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:b}),v.kill(),v.parent=v._dp=mr(a),v._start=0,d||Pl(c)||Pl(u)){if(w=b.length,y=d&&v0(d),sr(d))for(I in d)~I0.indexOf(I)&&(D||(D={}),D[I]=d[I]);for(P=0;P<w;P++)C=Gc(r,U0),C.stagger=0,p&&(C.yoyoEase=p),D&&Zo(C,D),E=b[P],C.duration=+Wa(c,mr(a),P,E,b),C.delay=(+Wa(u,mr(a),P,E,b)||0)-a._delay,!d&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),v.to(E,C,y?y(P,E,b):0),v._ease=lt.none;v.duration()?c=u=0:a.timeline=0}else if(g){Va(hi(v.vars.defaults,{ease:"none"})),v._ease=Vs(g.ease||r.ease||"none");var N=0,H,W,Z;if(Tn(g))g.forEach(function(Y){return v.to(b,Y,">")}),v.duration();else{C={};for(I in g)I==="ease"||I==="easeEach"||fM(I,g[I],C,g.easeEach);for(I in C)for(H=C[I].sort(function(Y,q){return Y.t-q.t}),N=0,P=0;P<H.length;P++)W=H[P],Z={ease:W.e,duration:(W.t-(P?H[P-1].t:0))/100*c},Z[I]=W.v,v.to(b,Z,N),N+=Z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return h===!0&&!wh&&($r=mr(a),Nt.killTweensOf(b),$r=0),$i(M,mr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===jt(M._time)&&Vn(f)&&V1(mr(a))&&M.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&p0(mr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-bn&&!u?l:r<bn?0:r,d,h,g,_,m,p,M,b,v;if(!c)W1(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=jt(f%_),f===l?(g=this._repeat,d=c):(m=jt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=Jo(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(b&&this._yEase&&C0(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(m0(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(ui(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(M,h.d),h=h._next;b&&b.render(r<0?r:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zf(this,r,s,o),ui(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Zf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&os(this,1),!s&&!(u&&!a)&&(f||a||p)&&(ui(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){fl||ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nh(this,c),u=this._ease(c/this._dur),cM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(xu(this,0),this.parent||d0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,$r&&$r.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&Qo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?bi(r):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&z1(a,l))return s==="all"&&(this._pt=0),Aa(this);for(f=this._op=this._op||[],s!=="all"&&(cn(s)&&(_={},Gn(s,function(M){return _[M]=1}),s=_),s=uM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&gu(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Aa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ga(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ga(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Nt.killTweensOf(r,s,o)},e}(dl);hi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(n){$t[n]=function(){var e=new Fn,t=Qf.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Oh=function(e,t,i){return e[t]=i},N0=function(e,t,i){return e[t](i)},dM=function(e,t,i,r){return e[t](r.fp,i)},hM=function(e,t,i){return e.setAttribute(t,i)},Fh=function(e,t){return kt(e[t])?N0:Ah(e[t])&&e.setAttribute?hM:Oh},O0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},F0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Bh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},mM=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},_M=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},gM=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},B0=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Wn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||O0,this.d=l||this,this.set=c||Oh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=gM,this.m=i,this.mt=s,this.tween=r},n}();Gn(Lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Dh[n]=1});di.TweenMax=di.TweenLite=$t;di.TimelineLite=di.TimelineMax=Fn;Nt=new Fn({sortChildren:!1,defaults:Ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=A0;var Gs=[],Sc={},vM=[],sm=0,xM=0,Wu=function(e){return(Sc[e]||vM).map(function(t){return t()})},id=function(){var e=Date.now(),t=[];e-sm>2&&(Wu("matchMediaInit"),Gs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Gi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Wu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),sm=e,Wu("matchMedia"))},k0=function(){function n(t,i){this.selector=i&&ed(i),this.data=[],this._r=[],this.isReverted=!1,this.id=xM++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){kt(i)&&(s=r,r=i,i=kt);var o=this,a=function(){var c=It,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ed(s)),It=o,f=r.apply(o,arguments),kt(f)&&o._r.push(f),It=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=It;It=null,i(this),It=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof $t&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Gs.length;o--;)Gs[o].id===this.id&&Gs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),yM=function(){function n(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){sr(i)||(i={matches:i});var o=new k0(0,s||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Gi.matchMedia(i[c]),l&&(Gs.indexOf(o)<0&&Gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(id):l.addEventListener("change",id)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return E0(r)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,i,r){cn(e)&&(e=bi(e)[0]);var s=zs(e||{}).get,o=i?f0:u0;return i==="native"&&(i=""),e&&(t?o((ri[t]&&ri[t].get||s)(e,t,i,r)):function(a,l,c){return o((ri[a]&&ri[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=bi(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=ri[t],a=zs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ao._pt=0,f.init(e,i?u+i:u,Ao,0,[e]),f.render(1,f),Ao._pt&&Bh(1,Ao)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=jn.to(e,hi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vs(e.ease,Ko.ease)),em(Ko,e||{})},config:function(e){return em(fi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ri[a]&&!di[a]&&ll(t+" effect requires "+a+" plugin.")}),zu[t]=function(a,l,c){return i(bi(a),hi(l||{},s),c)},o&&(Fn.prototype[t]=function(a,l,c){return this.add(zu[t](a,sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Vs(t)},parseEase:function(e,t){return arguments.length?Vs(e,t):lt},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Fn(e),r,s;for(i.smoothChildTiming=Vn(e.smoothChildTiming),Nt.remove(i),i._dp=0,i._time=i._tTime=Nt._time,r=Nt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]))&&$i(i,r,r._start-r._delay),r=s;return $i(Nt,i,0),i},context:function(e,t){return e?new k0(e,t):It},matchMedia:function(e){return new yM(e)},matchMediaRefresh:function(){return Gs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||id()},addEventListener:function(e,t){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:J1,wrapYoyo:Q1,distribute:v0,random:y0,snap:x0,normalize:Z1,getUnit:Sn,clamp:Y1,splitColor:T0,toArray:bi,selector:ed,mapRange:M0,pipe:j1,unitize:K1,interpolate:eM,shuffle:g0},install:s0,effects:zu,ticker:ai,updateRoot:Fn.updateRoot,plugins:ri,globalTimeline:Nt,core:{PropTween:Wn,globals:o0,Tween:$t,Timeline:Fn,Animation:dl,getCache:zs,_removeLinkedListItem:gu,reverting:function(){return hn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return wh=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Xc[n]=$t[n]});ai.add(Fn.updateRoot);Ao=Xc.to({},{duration:0});var SM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},MM=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=SM(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Xu=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(cn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}MM(a,s)}}}},jn=Xc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)hn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Xu("roundProps",td),Xu("modifiers"),Xu("snap",x0))||Xc;$t.version=Fn.version=jn.version="3.12.7";r0=1;Rh()&&ea();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var om,jr,Bo,kh,Us,am,zh,bM=function(){return typeof window<"u"},Pr={},ws=180/Math.PI,ko=Math.PI/180,ro=Math.atan2,lm=1e8,Hh=/([A-Z])/g,EM=/(left|right|width|margin|padding|x)/i,TM=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},RM=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},z0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},H0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CM=function(e,t,i){return e.style[t]=i},PM=function(e,t,i){return e.style.setProperty(t,i)},DM=function(e,t,i){return e._gsap[t]=i},LM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},IM=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},UM=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ot="transform",Xn=Ot+"Origin",NM=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=_r(r,a)}):this.tfm[e]=o.x?o[e]:_r(r,e),e===Xn&&(this.tfm.zOrigin=o.zOrigin);else return ji.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},V0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OM=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zh(),(!s||!s.isStart)&&!i[Ot]&&(V0(i),r.zOrigin&&i[Xn]&&(i[Xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},G0=function(e,t){var i={target:e,props:[],revert:OM,save:NM};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},W0,sd=function(e,t){var i=jr.createElementNS?jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jr.createElement(e);return i&&i.style?i:jr.createElement(e)},er=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Hh,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ta(t)||t,1)||""},cm="O,Moz,ms,Ms,Webkit".split(","),ta=function(e,t,i){var r=t||Us,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?cm[o]:"")+e},od=function(){bM()&&window.document&&(om=window,jr=om.document,Bo=jr.documentElement,Us=sd("div")||{style:{}},sd("div"),Ot=ta(Ot),Xn=Ot+"Origin",Us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",W0=!!ta("perspective"),zh=jn.core.reverting,kh=1)},um=function(e){var t=e.ownerSVGElement,i=sd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Bo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Bo.removeChild(i),s},fm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},X0=function(e){var t,i;try{t=e.getBBox()}catch{t=um(e),i=1}return t&&(t.width||t.height)||i||(t=um(e)),t&&!t.width&&!t.x&&!t.y?{x:+fm(e,["x","cx","x1"])||0,y:+fm(e,["y","cy","y1"])||0,width:0,height:0}:t},q0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&X0(e))},$s=function(e,t){if(t){var i=e.style,r;t in Pr&&t!==Xn&&(t=Ot),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Hh,"-$1").toLowerCase())):i.removeAttribute(t)}},Kr=function(e,t,i,r,s,o){var a=new Wn(e._pt,t,i,0,1,o?H0:z0);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},dm={deg:1,rad:1,turn:1},FM={grid:1,flex:1},as=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Us.style,l=EM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===o||!s||dm[r]||dm[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&q0(e),(h||o==="%")&&(Pr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ht(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===jr||!_.appendChild)&&(_=jr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===ai.time&&!m.uncache)return Ht(s/m.width*f);if(h&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:$s(e,t)}else(h||o==="%")&&!FM[er(_,"display")]&&(a.position=er(e,"position")),_===e&&(a.position="static"),_.appendChild(Us),g=Us[u],_.removeChild(Us),a.position="absolute";return l&&h&&(m=zs(_),m.time=ai.time,m.width=_[u]),Ht(d?g*s/f:g&&s?f/g*s:0)},_r=function(e,t,i,r){var s;return kh||od(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pr[t]&&t!=="transform"?(s=pl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yc(er(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qc[t]&&qc[t](e,t,i)||er(e,t)||l0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?as(e,t,s,i)+i:s},BM=function(e,t,i,r){if(!i||i==="none"){var s=ta(t,e,1),o=s&&er(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=er(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,F0),l=0,c=0,u,f,d,h,g,_,m,p,M,b,v,P;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=er(e,t)||r,_?e.style[t]=_:$s(e,t)),u=[i,r],A0(u),i=u[0],r=u[1],d=i.match(wo)||[],P=r.match(wo)||[],P.length){for(;f=wo.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Fo(h,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=wo.lastIndex-b.length,b||(b=b||fi.units[t]||v,l===r.length&&(r+=b,a.e+=b)),v!==b&&(h=as(e,t,_,b)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?H0:z0;return n0.test(r)&&(a.e=0),this._pt=a,a},hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kM=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=hm[i]||i,t[1]=hm[r]||r,t.join(" ")},zM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pr[a]&&(l=1,a=a==="transformOrigin"?Xn:Ot),$s(i,a);l&&($s(i,Ot),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",pl(i,1),o.uncache=1,V0(r)))}},qc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,t,i,0,0,zM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},hl=[1,0,0,1,0,0],Y0={},$0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pm=function(e){var t=er(e,Ot);return $0(t)?hl:t.substr(7).match(t0).map(Ht)},Vh=function(e,t){var i=e._gsap||zs(e),r=e.style,s=pm(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?hl:s):(s===hl&&!e.offsetParent&&e!==Bo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Bo.appendChild(e)),s=pm(e),l?r.display=l:$s(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Bo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ad=function(e,t,i,r,s,o){var a=e._gsap,l=s||Vh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],b=t.split(" "),v=parseFloat(b[0])||0,P=parseFloat(b[1])||0,C,w,I,E;i?l!==hl&&(w=h*m-g*_)&&(I=v*(m/w)+P*(-_/w)+(_*M-m*p)/w,E=v*(-g/w)+P*(h/w)-(h*M-g*p)/w,v=I,P=E):(C=X0(e),v=C.x+(~b[0].indexOf("%")?v/100*C.width:v),P=C.y+(~(b[1]||b[0]).indexOf("%")?P/100*C.height:P)),r||r!==!1&&a.smooth?(p=v-c,M=P-u,a.xOffset=f+(p*h+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Xn]="0px 0px",o&&(Kr(o,a,"xOrigin",c,v),Kr(o,a,"yOrigin",u,P),Kr(o,a,"xOffset",f,a.xOffset),Kr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+P)},pl=function(e,t){var i=e._gsap||new D0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=er(e,Xn)||"0",u,f,d,h,g,_,m,p,M,b,v,P,C,w,I,E,y,D,N,H,W,Z,Y,q,V,fe,F,ye,Ce,ze,te,he;return u=f=d=_=m=p=M=b=v=0,h=g=1,i.svg=!!(e.getCTM&&q0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),r.scale=r.rotate=r.translate="none"),w=Vh(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),c=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ad(e,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,w)),P=i.xOrigin||0,C=i.yOrigin||0,w!==hl&&(D=w[0],N=w[1],H=w[2],W=w[3],u=Z=w[4],f=Y=w[5],w.length===6?(h=Math.sqrt(D*D+N*N),g=Math.sqrt(W*W+H*H),_=D||N?ro(N,D)*ws:0,M=H||W?ro(H,W)*ws+_:0,M&&(g*=Math.abs(Math.cos(M*ko))),i.svg&&(u-=P-(P*D+C*H),f-=C-(P*N+C*W))):(he=w[6],ze=w[7],F=w[8],ye=w[9],Ce=w[10],te=w[11],u=w[12],f=w[13],d=w[14],I=ro(he,Ce),m=I*ws,I&&(E=Math.cos(-I),y=Math.sin(-I),q=Z*E+F*y,V=Y*E+ye*y,fe=he*E+Ce*y,F=Z*-y+F*E,ye=Y*-y+ye*E,Ce=he*-y+Ce*E,te=ze*-y+te*E,Z=q,Y=V,he=fe),I=ro(-H,Ce),p=I*ws,I&&(E=Math.cos(-I),y=Math.sin(-I),q=D*E-F*y,V=N*E-ye*y,fe=H*E-Ce*y,te=W*y+te*E,D=q,N=V,H=fe),I=ro(N,D),_=I*ws,I&&(E=Math.cos(I),y=Math.sin(I),q=D*E+N*y,V=Z*E+Y*y,N=N*E-D*y,Y=Y*E-Z*y,D=q,Z=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Ht(Math.sqrt(D*D+N*N+H*H)),g=Ht(Math.sqrt(Y*Y+he*he)),I=ro(Z,Y),M=Math.abs(I)>2e-4?I*ws:0,v=te?1/(te<0?-te:te):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!$0(er(e,Ot)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(h*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ht(h),i.scaleY=Ht(g),i.rotation=Ht(_)+a,i.rotationX=Ht(m)+a,i.rotationY=Ht(p)+a,i.skewX=M+a,i.skewY=b+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Xn]=Yc(c)),i.xOffset=i.yOffset=0,i.force3D=fi.force3D,i.renderTransform=i.svg?VM:W0?j0:HM,i.uncache=0,i},Yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},qu=function(e,t,i){var r=Sn(t);return Ht(parseFloat(t)+parseFloat(as(e,"x",i+"px",r)))+r},HM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,j0(e,t)},gs="0deg",va="0px",vs=") ",j0=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,b=i.zOrigin,v="",P=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==gs||u!==gs)){var C=parseFloat(u)*ko,w=Math.sin(C),I=Math.cos(C),E;C=parseFloat(f)*ko,E=Math.cos(C),o=qu(M,o,w*E*-b),a=qu(M,a,-Math.sin(C)*-b),l=qu(M,l,I*E*-b+b)}m!==va&&(v+="perspective("+m+vs),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(P||o!==va||a!==va||l!==va)&&(v+=l!==va||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vs),c!==gs&&(v+="rotate("+c+vs),u!==gs&&(v+="rotateY("+u+vs),f!==gs&&(v+="rotateX("+f+vs),(d!==gs||h!==gs)&&(v+="skew("+d+", "+h+vs),(g!==1||_!==1)&&(v+="scale("+g+", "+_+vs),M.style[Ot]=v||"translate(0, 0)"},VM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,b=parseFloat(o),v=parseFloat(a),P,C,w,I,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ko,c*=ko,P=Math.cos(l)*f,C=Math.sin(l)*f,w=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(u*=ko,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,I*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),P*=E,C*=E)),P=Ht(P),C=Ht(C),w=Ht(w),I=Ht(I)):(P=f,I=d,C=w=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=as(h,"x",o,"px"),v=as(h,"y",a,"px")),(g||_||m||p)&&(b=Ht(b+g-(g*P+_*w)+m),v=Ht(v+_-(g*C+_*I)+p)),(r||s)&&(E=h.getBBox(),b=Ht(b+r/100*E.width),v=Ht(v+s/100*E.height)),E="matrix("+P+","+C+","+w+","+I+","+b+","+v+")",h.setAttribute("transform",E),M&&(h.style[Ot]=E)},GM=function(e,t,i,r,s){var o=360,a=cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ws:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*lm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*lm)%o-~~(c/o)*o)),e._pt=d=new Wn(e._pt,t,i,r,c,wM),d.e=u,d.u="deg",e._props.push(i),d},mm=function(e,t){for(var i in t)e[i]=t[i];return e},WM=function(e,t,i){var r=mm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ot]=t,a=pl(i,1),$s(i,Ot),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ot],o[Ot]=t,a=pl(i,1),o[Ot]=c);for(l in Pr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Sn(c),g=Sn(u),f=h!==g?as(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Wn(e._pt,a,l,f,d-f,rd),e._pt.u=g||0,e._props.push(l));mm(a,r)};Gn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});qc[e>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return _r(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var K0={name:"css",register:od,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,g,_,m,p,M,b,v,P,C,w,I;kh||od(),this.styles=this.styles||G0(e),I=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ri[_]&&L0(_,t,i,r,e,s)))){if(h=typeof u,g=qc[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ul(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ns.lastIndex=0,ns.test(c)||(m=Sn(c),p=Sn(u)),p?m!==p&&(c=as(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],cn(c)&&~c.indexOf("random(")&&(c=ul(c)),Sn(c+"")||c==="auto"||(c+=fi.units[_]||Sn(_r(e,_))||""),(c+"").charAt(1)==="="&&(c=_r(e,_))):c=_r(e,_),d=parseFloat(c),M=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in ji&&(_==="autoAlpha"&&(d===1&&_r(e,"visibility")==="hidden"&&f&&(d=0),I.push("visibility",0,a.visibility),Kr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Pr,b){if(this.styles.save(_),v||(P=e._gsap,P.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),C=t.smoothOrigin!==!1&&P.smooth,v=this._pt=new Wn(this._pt,a,Ot,0,1,P.renderTransform,P,0,-1),v.dep=1),_==="scale")this._pt=new Wn(this._pt,P,"scaleY",P.scaleY,(M?Fo(P.scaleY,M+f):f)-P.scaleY||0,rd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Xn,0,a[Xn]),u=kM(u),P.svg?ad(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&Kr(this,P,"zOrigin",P.zOrigin,p),Kr(this,a,_,Yc(c),Yc(u)));continue}else if(_==="svgOrigin"){ad(e,u,1,C,0,this);continue}else if(_ in Y0){GM(this,P,_,d,M?Fo(d,M+u):u);continue}else if(_==="smoothOrigin"){Kr(this,P,"smooth",P.smooth,u);continue}else if(_==="force3D"){P[_]=u;continue}else if(_==="transform"){WM(this,u,e);continue}}else _ in a||(_=ta(_)||_);if(b||(f||f===0)&&(d||d===0)&&!TM.test(u)&&_ in a)m=(c+"").substr((d+"").length),f||(f=0),p=Sn(u)||(_ in fi.units?fi.units[_]:m),m!==p&&(d=as(e,_,c,p)),this._pt=new Wn(this._pt,b?P:a,_,d,(M?Fo(d,M+f):f)-d,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?RM:rd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=AM);else if(_ in a)BM.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Ph(_,u);continue}b||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}w&&B0(this)},render:function(e,t){if(t.tween._time||!zh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_r,aliases:ji,getSetter:function(e,t,i){var r=ji[t];return r&&r.indexOf(",")<0&&(t=r),t in Pr&&t!==Xn&&(e._gsap.x||_r(e,"x"))?i&&am===i?t==="scale"?LM:DM:(am=i||{})&&(t==="scale"?IM:UM):e.style&&!Ah(e.style[t])?CM:~t.indexOf("-")?PM:Fh(e,t)},core:{_removeProperty:$s,_getMatrix:Vh}};jn.utils.checkPrefix=ta;jn.core.getStyleSaver=G0;(function(n,e,t,i){var r=Gn(n+","+e+","+t,function(s){Pr[s]=1});Gn(e,function(s){fi.units[s]="deg",Y0[s]=1}),ji[r[13]]=n+","+e,Gn(i,function(s){var o=s.split(":");ji[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){fi.units[n]="px"});jn.registerPlugin(K0);var Ns=jn.registerPlugin(K0)||jn;Ns.core.Tween;const XM="/assets/logoIcon-XgSw2vr9.png",ua=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},qM={name:"TopNav",data(){return{menuOpen:!1,animating:!1,isScrolled:!1,scrollThreshold:50,activeSection:"",navigationLinks:[{name:"Inicio",path:"/"},{name:"Nosotros",path:"/#nosotros"},{name:"Proyectos",path:"/#proyectos"},{name:"Impacto",path:"/#impacto"},{name:"Testimonios",path:"/#testimonios"},{name:"Contacto",path:"/#contact"}]}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen,this.handleAnimation()},closeMenu(){this.menuOpen=!1,this.handleAnimation()},handleAnimation(){this.animating=!0,setTimeout(()=>{this.animating=!1},1e3)},handleScroll(){this.isScrolled=window.scrollY>this.scrollThreshold},scrollToSection(n){if(this.closeMenu(),n.includes("#")){const e=this.$route.path,t=n.split("#")[0],i=n.split("#")[1];if(e===t||e==="/"&&t===""){setTimeout(()=>{const r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100);return}this.$router.push(t).then(()=>{setTimeout(()=>{const r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},500)})}else this.$router.push(n)},isActivePath(n){if(n==="/")return this.$route.path==="/"&&!this.activeSection;if(n.includes("#")){const e=n.split("#")[1];return this.activeSection===e}return this.$route.path===n},updateActiveSection(){if(this.$route.path!=="/"){this.activeSection="";return}const n=document.querySelectorAll("section[id]"),e=window.scrollY+window.innerHeight/3;let t="";n.forEach(i=>{const r=i.offsetTop,s=i.offsetHeight;e>=r&&e<r+s&&(t=i.id)}),this.activeSection=t}},mounted(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.updateActiveSection),this.handleScroll(),this.updateActiveSection()},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.updateActiveSection)}},YM={class:"flex justify-between items-center"},$M={class:"flex justify-end p-3 sm:p-4"},jM={class:"flex flex-col space-y-4 sm:space-y-6 px-4 sm:px-6 pt-4 sm:pt-8"},KM=["onClick"];function ZM(n,e,t,i,r,s){const o=Tr("router-link");return Bi(),es("div",null,[O("div",{class:Ii(["nav-container fixed top-0 left-0 right-0 z-50",[r.isScrolled?"nav-scrolled":"nav-top"]])},[O("nav",{class:Ii(["w-full rounded-xl",[r.isScrolled?"nav-scrolled-inner":"nav-top-inner"]])},[O("div",{class:Ii(["section-container",[r.isScrolled?"py-3":"py-5","px-4 sm:px-6"]])},[O("div",YM,[O("div",null,[wt(o,{to:"/",class:"flex items-center"},{default:Yi(()=>e[3]||(e[3]=[O("img",{src:XM,alt:"Tenzorial Software Logo",class:"h-8 sm:h-10"},null,-1)])),_:1})]),O("div",null,[O("button",{onClick:e[0]||(e[0]=(...a)=>s.toggleMenu&&s.toggleMenu(...a)),class:"text-white focus:outline-none p-1 sm:p-2 hamburger-button"},e[4]||(e[4]=[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 sm:h-8 sm:w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])])],2),O("div",{class:Ii(["gradient-border absolute inset-0 rounded-xl pointer-events-none transition-opacity",{"opacity-100":r.isScrolled,"opacity-0":!r.isScrolled}])},null,2)],2)],2),up(O("div",{class:Ii(["sidebar-menu fixed top-0 right-0 h-full z-[60]",{"sidebar-open":r.menuOpen,"sidebar-closed":!r.menuOpen}])},[O("div",$M,[O("button",{onClick:e[1]||(e[1]=(...a)=>s.closeMenu&&s.closeMenu(...a)),class:"text-white hover:text-gray-300 focus:outline-none"},e[5]||(e[5]=[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 sm:h-8 sm:w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),O("div",jM,[(Bi(!0),es(si,null,ry(r.navigationLinks,(a,l)=>(Bi(),es("a",{key:a.path,onClick:mS(c=>s.scrollToSection(a.path),["prevent"]),href:"#",class:Ii(["menu-item text-white hover:text-gray-200 transition-colors text-xl font-nohemi",{active:s.isActivePath(a.path)}]),style:au({transitionDelay:r.menuOpen?`${l*80+150}ms`:"0ms"})},fh(a.name),15,KM))),128))])],2),[[Tp,r.menuOpen||r.animating]]),up(O("div",{onClick:e[2]||(e[2]=(...a)=>s.closeMenu&&s.closeMenu(...a)),class:Ii(["fixed inset-0 bg-black transition-all duration-700 ease-in-out menu-overlay",{"bg-opacity-50 overlay-visible":r.menuOpen,"bg-opacity-0 overlay-hidden":!r.menuOpen}]),style:{"z-index":"59"}},null,2),[[Tp,r.menuOpen||r.animating]])])}const JM=ua(qM,[["render",ZM],["__scopeId","data-v-3e8bf8a8"]]),QM={name:"Footer",computed:{currentYear(){return new Date().getFullYear()}}},eb={class:"bg-dark text-white pt-12 pb-6"},tb={class:"section-container"},nb={class:"grid grid-cols-1 md:grid-cols-4 gap-8"},ib={class:"space-y-2"},rb={class:"border-t border-gray-700 mt-8 pt-6 text-center text-gray-400"};function sb(n,e,t,i,r,s){const o=Tr("router-link");return Bi(),es("footer",eb,[O("div",tb,[O("div",nb,[e[6]||(e[6]=Hf('<div class="md:col-span-2"><h3 class="text-xl font-bold font-nohemi mb-4">Tenzoft</h3><p class="mb-4 text-gray-300">Creando soluciones de software innovadoras para empresas y consumidores. Desde proyectos personalizados para clientes hasta nuestras propias aplicaciones, ofrecemos software de calidad que satisface necesidades reales.</p><div class="flex space-x-4 mt-4"><a href="#" class="text-white hover:text-primary transition-colors"><i class="fab fa-twitter text-xl"></i></a><a href="#" class="text-white hover:text-primary transition-colors"><i class="fab fa-linkedin text-xl"></i></a><a href="#" class="text-white hover:text-primary transition-colors"><i class="fab fa-github text-xl"></i></a><a href="#" class="text-white hover:text-primary transition-colors"><i class="fab fa-instagram text-xl"></i></a></div></div>',1)),O("div",null,[e[5]||(e[5]=O("h3",{class:"text-lg font-semibold font-nohemi mb-4"},"Quick Links",-1)),O("ul",ib,[O("li",null,[wt(o,{to:"/",class:"text-gray-300 hover:text-primary transition-colors"},{default:Yi(()=>e[0]||(e[0]=[an("Inicio")])),_:1})]),O("li",null,[wt(o,{to:"/#nosotros",class:"text-gray-300 hover:text-primary transition-colors"},{default:Yi(()=>e[1]||(e[1]=[an("Nosotros")])),_:1})]),O("li",null,[wt(o,{to:"/#proyectos",class:"text-gray-300 hover:text-primary transition-colors"},{default:Yi(()=>e[2]||(e[2]=[an("Proyectos")])),_:1})]),O("li",null,[wt(o,{to:"/#impacto",class:"text-gray-300 hover:text-primary transition-colors"},{default:Yi(()=>e[3]||(e[3]=[an("Impacto")])),_:1})]),O("li",null,[wt(o,{to:"/#contact",class:"text-gray-300 hover:text-primary transition-colors"},{default:Yi(()=>e[4]||(e[4]=[an("Contacto")])),_:1})])])]),e[7]||(e[7]=Hf('<div><h3 class="text-lg font-semibold font-nohemi mb-4">Contact Us</h3><ul class="space-y-2 text-gray-300"><li class="flex items-center"><i class="fas fa-phone mr-2 text-primary"></i><a href="tel:+1234567890" class="hover:text-primary transition-colors">+52 (81) 3257-1521</a></li><li class="flex items-center"><i class="fa-brands fa-map-marker-alt mr-2 text-primary"></i><span>Nuevo Leon, Monterrey</span></li></ul></div>',1))]),O("div",rb,[O("p",null,"© "+fh(s.currentYear)+" Tenzorial Software. All rights reserved.",1)])])])}const ob=ua(QM,[["render",sb]]),ab={name:"MainLayout",components:{TopNav:JM,FooterSection:ob}},lb={class:"min-h-screen flex flex-col bg-gray-50"},cb={class:"flex-grow"};function ub(n,e,t,i,r,s){const o=Tr("TopNav"),a=Tr("FooterSection");return Bi(),es("div",lb,[wt(o),O("main",cb,[sy(n.$slots,"default",{},void 0)]),e[0]||(e[0]=O("a",{href:"https://wa.me/+528132571521",target:"_blank",rel:"noopener noreferrer",class:"whatsapp-float","aria-label":"Contact us on WhatsApp"},[O("i",{class:"fa-brands fa-whatsapp"})],-1)),wt(a)])}const fb=ua(ab,[["render",ub],["__scopeId","data-v-45582525"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="174",db=0,_m=1,hb=2,Z0=1,pb=2,hr=3,ls=0,qn=1,xr=2,is=0,zo=1,ld=2,gm=3,vm=4,mb=5,Ls=100,_b=101,gb=102,vb=103,xb=104,yb=200,Sb=201,Mb=202,bb=203,cd=204,ud=205,Eb=206,Tb=207,wb=208,Ab=209,Rb=210,Cb=211,Pb=212,Db=213,Lb=214,fd=0,dd=1,hd=2,na=3,pd=4,md=5,_d=6,gd=7,J0=0,Ib=1,Ub=2,rs=0,Nb=1,Ob=2,Fb=3,Bb=4,kb=5,zb=6,Hb=7,Q0=300,ia=301,ra=302,vd=303,xd=304,yu=306,yd=1e3,Os=1001,Sd=1002,ki=1003,Vb=1004,Dl=1005,Ki=1006,Yu=1007,Fs=1008,Dr=1009,ev=1010,tv=1011,ml=1012,Wh=1013,js=1014,Sr=1015,Sl=1016,Xh=1017,qh=1018,sa=1020,nv=35902,iv=1021,rv=1022,Oi=1023,sv=1024,ov=1025,Ho=1026,oa=1027,av=1028,Yh=1029,lv=1030,$h=1031,jh=1033,Mc=33776,bc=33777,Ec=33778,Tc=33779,Md=35840,bd=35841,Ed=35842,Td=35843,wd=36196,Ad=37492,Rd=37496,Cd=37808,Pd=37809,Dd=37810,Ld=37811,Id=37812,Ud=37813,Nd=37814,Od=37815,Fd=37816,Bd=37817,kd=37818,zd=37819,Hd=37820,Vd=37821,wc=36492,Gd=36494,Wd=36495,cv=36283,Xd=36284,qd=36285,Yd=36286,Gb=3200,Wb=3201,Xb=0,qb=1,Yr="",xi="srgb",aa="srgb-linear",$c="linear",St="srgb",so=7680,xm=519,Yb=512,$b=513,jb=514,uv=515,Kb=516,Zb=517,Jb=518,Qb=519,ym=35044,Sm="300 es",Mr=2e3,jc=2001;class fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,$d=180/Math.PI;function Ml(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function eE(n,e){return(n%e+e)%e}function ju(n,e,t){return(1-t)*n+t*e}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],b=r[4],v=r[7],P=r[2],C=r[5],w=r[8];return s[0]=o*_+a*M+l*P,s[3]=o*m+a*b+l*C,s[6]=o*p+a*v+l*w,s[1]=c*_+u*M+f*P,s[4]=c*m+u*b+f*C,s[7]=c*p+u*v+f*w,s[2]=d*_+h*M+g*P,s[5]=d*m+h*b+g*C,s[8]=d*p+h*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Qe;function fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tE(){const n=Kc("canvas");return n.style.display="block",n}const Mm={};function As(n){n in Mm||(Mm[n]=!0,console.warn(n))}function nE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function iE(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sE(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=Vo(r.r),r.g=Vo(r.g),r.b=Vo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?$c:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:$c,toXYZ:bm,fromXYZ:Em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:i,transfer:St,toXYZ:bm,fromXYZ:Em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const dt=sE();function Ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oo;class oE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oo===void 0&&(oo=Kc("canvas")),oo.width=e.width,oo.height=e.height;const i=oo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oo}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ar(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ar(t[i]/255)*255):t[i]=Ar(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zu(r[o].image)):s.push(Zu(r[o]))}else s=Zu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;class Yn extends fa{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,i=Os,r=Os,s=Ki,o=Fs,a=Oi,l=Dr,c=Yn.DEFAULT_ANISOTROPY,u=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Ml(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Q0;Yn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(h+1)/2,P=(p+1)/2,C=(u+d)/4,w=(f+_)/4,I=(g+m)/4;return b>v&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=w/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=I/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=I/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cE extends fa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends cE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dv extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uE extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),C=Math.atan2(P,p*M);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const v=a*M;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new oe,Tm=new bl;class El{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Il.subVectors(this.max,ya),ao.subVectors(e.a,ya),lo.subVectors(e.b,ya),co.subVectors(e.c,ya),Fr.subVectors(lo,ao),Br.subVectors(co,lo),xs.subVectors(ao,co);let t=[0,-Fr.z,Fr.y,0,-Br.z,Br.y,0,-xs.z,xs.y,Fr.z,0,-Fr.x,Br.z,0,-Br.x,xs.z,0,-xs.x,-Fr.y,Fr.x,0,-Br.y,Br.x,0,-xs.y,xs.x,0];return!Qu(t,ao,lo,co,Il)||(t=[1,0,0,0,1,0,0,0,1],!Qu(t,ao,lo,co,Il))?!1:(Ul.crossVectors(Fr,Br),t=[Ul.x,Ul.y,Ul.z],Qu(t,ao,lo,co,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ri=new oe,Ll=new El,ao=new oe,lo=new oe,co=new oe,Fr=new oe,Br=new oe,xs=new oe,ya=new oe,Il=new oe,Ul=new oe,ys=new oe;function Qu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ys.fromArray(n,s);const a=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fE=new El,Sa=new oe,ef=new oe;class Su{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(ef)),this.expandByPoint(Sa.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new oe,tf=new oe,Nl=new oe,kr=new oe,nf=new oe,Ol=new oe,rf=new oe;class hv{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(tf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),a=kr.dot(this.direction),l=-kr.dot(Nl),c=kr.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tf).addScaledVector(Nl,d),h}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,r,s){nf.subVectors(t,e),Ol.subVectors(i,e),rf.crossVectors(nf,Ol);let o=this.direction.dot(rf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(kr,Ol));if(l<0)return null;const c=a*this.direction.dot(nf.cross(kr));if(c<0||l+c>o)return null;const u=-a*kr.dot(rf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/uo.setFromMatrixColumn(e,0).length(),s=1/uo.setFromMatrixColumn(e,1).length(),o=1/uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,hE)}lookAt(e,t,i){const r=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),zr.crossVectors(i,Jn),zr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),zr.crossVectors(i,Jn)),zr.normalize(),Fl.crossVectors(Jn,zr),r[0]=zr.x,r[4]=Fl.x,r[8]=Jn.x,r[1]=zr.y,r[5]=Fl.y,r[9]=Jn.y,r[2]=zr.z,r[6]=Fl.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],b=i[7],v=i[11],P=i[15],C=r[0],w=r[4],I=r[8],E=r[12],y=r[1],D=r[5],N=r[9],H=r[13],W=r[2],Z=r[6],Y=r[10],q=r[14],V=r[3],fe=r[7],F=r[11],ye=r[15];return s[0]=o*C+a*y+l*W+c*V,s[4]=o*w+a*D+l*Z+c*fe,s[8]=o*I+a*N+l*Y+c*F,s[12]=o*E+a*H+l*q+c*ye,s[1]=u*C+f*y+d*W+h*V,s[5]=u*w+f*D+d*Z+h*fe,s[9]=u*I+f*N+d*Y+h*F,s[13]=u*E+f*H+d*q+h*ye,s[2]=g*C+_*y+m*W+p*V,s[6]=g*w+_*D+m*Z+p*fe,s[10]=g*I+_*N+m*Y+p*F,s[14]=g*E+_*H+m*q+p*ye,s[3]=M*C+b*y+v*W+P*V,s[7]=M*w+b*D+v*Z+P*fe,s[11]=M*I+b*N+v*Y+P*F,s[15]=M*E+b*H+v*q+P*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,b=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,v=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,P=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=t*M+i*b+r*v+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=M*w,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*w,e[4]=b*w,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*w,e[8]=v*w,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*w,e[12]=P*w,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=l*c,b=l*u,v=l*f,P=i.x,C=i.y,w=i.z;return r[0]=(1-(_+p))*P,r[1]=(h+v)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(h-v)*C,r[5]=(1-(d+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+b)*w,r[9]=(m-M)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=uo.set(r[0],r[1],r[2]).length();const o=uo.set(r[4],r[5],r[6]).length(),a=uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);const c=1/s,u=1/o,f=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=f,Ci.elements[9]*=f,Ci.elements[10]*=f,t.setFromRotationMatrix(Ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Mr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(a===Mr)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===jc)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let g,_;if(a===Mr)g=(o+s)*f,_=-2*f;else if(a===jc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const uo=new oe,Ci=new Wt,dE=new oe(0,0,0),hE=new oe(1,1,1),zr=new oe,Fl=new oe,Jn=new oe,wm=new Wt,Am=new bl;class Lr{constructor(e=0,t=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pE=0;const Rm=new oe,fo=new bl,ur=new Wt,Bl=new oe,Ma=new oe,mE=new oe,_E=new bl,Cm=new oe(1,0,0),Pm=new oe(0,1,0),Dm=new oe(0,0,1),Lm={type:"added"},gE={type:"removed"},ho={type:"childadded",child:null},sf={type:"childremoved",child:null};class $n extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new oe,t=new Lr,i=new bl,r=new oe(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Qe}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,t){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Ma,Bl,this.up):ur.lookAt(Bl,Ma,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(ur),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gE),sf.child=e,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,mE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$n.DEFAULT_UP=new oe(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new oe,fr=new oe,of=new oe,dr=new oe,po=new oe,mo=new oe,Im=new oe,af=new oe,lf=new oe,cf=new oe,uf=new Vt,ff=new Vt,df=new Vt;class Ni{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pi.subVectors(e,t),r.cross(Pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pi.subVectors(r,t),fr.subVectors(i,t),of.subVectors(e,t);const o=Pi.dot(Pi),a=Pi.dot(fr),l=Pi.dot(of),c=fr.dot(fr),u=fr.dot(of),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return uf.setScalar(0),ff.setScalar(0),df.setScalar(0),uf.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,i),df.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(uf,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(df,s.z),o}static isFrontFacing(e,t,i,r){return Pi.subVectors(i,t),fr.subVectors(e,t),Pi.cross(fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Pi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;po.subVectors(r,i),mo.subVectors(s,i),af.subVectors(e,i);const l=po.dot(af),c=mo.dot(af);if(l<=0&&c<=0)return t.copy(i);lf.subVectors(e,r);const u=po.dot(lf),f=mo.dot(lf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(po,o);cf.subVectors(e,s);const h=po.dot(cf),g=mo.dot(cf);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(mo,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Im.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(Im,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(po,o).addScaledVector(mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=eE(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return dt.fromWorkingColorSpace(mn.copy(this),e),Math.round(at(mn.r*255,0,255))*65536+Math.round(at(mn.g*255,0,255))*256+Math.round(at(mn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(mn.copy(this),t);const i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=xi){dt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,r=mn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(kl);const i=ju(Hr.h,kl.h,t),r=ju(Hr.s,kl.s,t),s=ju(Hr.l,kl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ht;ht.NAMES=mv;let vE=0;class Tl extends fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=zo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _v extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new oe,zl=new At;let xE=0;class tr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=Sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}}class gv extends tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vv extends tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nr extends tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yE=0;const gi=new Wt,pf=new $n,_o=new oe,Qn=new El,ba=new El,sn=new oe;class Nr extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?vv:gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Qn.min,ba.min),Qn.expandByPoint(sn),sn.addVectors(Qn.max,ba.max),Qn.expandByPoint(sn)):(Qn.expandByPoint(ba.min),Qn.expandByPoint(ba.max))}Qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(e,c),sn.add(_o)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new oe,l[I]=new oe;const c=new oe,u=new oe,f=new oe,d=new At,h=new At,g=new At,_=new oe,m=new oe;function p(I,E,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[E].add(_),a[y].add(_),l[I].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,E=M.length;I<E;++I){const y=M[I],D=y.start,N=y.count;for(let H=D,W=D+N;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new oe,v=new oe,P=new oe,C=new oe;function w(I){P.fromBufferAttribute(r,I),C.copy(P);const E=a[I];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(C,E);const D=v.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,E=M.length;I<E;++I){const y=M[I],D=y.start,N=y.count;for(let H=D,W=D+N;H<W;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new oe,s=new oe,o=new oe,a=new oe,l=new oe,c=new oe,u=new oe,f=new oe;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new tr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new Wt,Ss=new hv,Hl=new Su,Nm=new oe,Vl=new oe,Gl=new oe,Wl=new oe,mf=new oe,Xl=new oe,Om=new oe,ql=new oe;class br extends $n{constructor(e=new Nr,t=new _v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(mf.fromBufferAttribute(f,e),o?Xl.addScaledVector(mf,u):Xl.addScaledVector(mf.sub(t),u))}t.add(Xl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(Hl.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Hl,Nm)===null||Ss.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=M,P=b;v<P;v+=3){const C=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);r=Yl(this,p,e,i,c,u,f,C,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=Yl(this,o,e,i,c,u,f,M,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=M,P=b;v<P;v+=3){const C=v,w=v+1,I=v+2;r=Yl(this,p,e,i,c,u,f,C,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,v=m+2;r=Yl(this,o,e,i,c,u,f,M,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function SE(n,e,t,i,r,s,o,a){let l;if(e.side===qn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ls,a),l===null)return null;ql.copy(a),ql.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ql);return c<t.near||c>t.far?null:{distance:c,point:ql.clone(),object:n}}function Yl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Vl),n.getVertexPosition(l,Gl),n.getVertexPosition(c,Wl);const u=SE(n,e,t,i,Vl,Gl,Wl,Om);if(u){const f=new oe;Ni.getBarycoord(Om,Vl,Gl,Wl,f),r&&(u.uv=Ni.getInterpolatedAttribute(r,a,l,c,f,new At)),s&&(u.uv1=Ni.getInterpolatedAttribute(s,a,l,c,f,new At)),o&&(u.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new oe),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new oe,materialIndex:0};Ni.getNormal(Vl,Gl,Wl,d.normal),u.face=d,u.barycoord=f}return u}class wl extends Nr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nr(c,3)),this.setAttribute("normal",new nr(u,3)),this.setAttribute("uv",new nr(f,2));function g(_,m,p,M,b,v,P,C,w,I,E){const y=v/w,D=P/I,N=v/2,H=P/2,W=C/2,Z=w+1,Y=I+1;let q=0,V=0;const fe=new oe;for(let F=0;F<Y;F++){const ye=F*D-H;for(let Ce=0;Ce<Z;Ce++){const ze=Ce*y-N;fe[_]=ze*M,fe[m]=ye*b,fe[p]=W,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ce/w),f.push(1-F/I),q+=1}}for(let F=0;F<I;F++)for(let ye=0;ye<w;ye++){const Ce=d+ye+Z*F,ze=d+ye+Z*(F+1),te=d+(ye+1)+Z*(F+1),he=d+(ye+1)+Z*F;l.push(Ce,ze,he),l.push(ze,te,he),V+=6}a.addGroup(h,V,E),h+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ln(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const r in i)e[r]=i[r]}return e}function ME(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const bE={clone:la,merge:Ln};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new oe,Fm=new At,Bm=new At;class yi extends yv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Fm,Bm),t.subVectors(Bm,Fm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,vo=1;class wE extends $n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(go,vo,e,t);r.layers=this.layers,this.add(r);const s=new yi(go,vo,e,t);s.layers=this.layers,this.add(s);const o=new yi(go,vo,e,t);o.layers=this.layers,this.add(o);const a=new yi(go,vo,e,t);a.layers=this.layers,this.add(a);const l=new yi(go,vo,e,t);l.layers=this.layers,this.add(l);const c=new yi(go,vo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sv extends Yn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ia,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AE extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wl(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:is});s.uniforms.tEquirect.value=t;const o=new br(r,s),a=t.minFilter;return t.minFilter===Fs&&(t.minFilter=Ki),new wE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class $l extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $l;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class CE extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gf=new oe,PE=new oe,DE=new Qe;class Rs{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gf.subVectors(i,t).cross(PE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DE.getNormalMatrix(e),r=this.coplanarPoint(gf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Su,jl=new oe;class Mv{constructor(e=new Rs,t=new Rs,i=new Rs,r=new Rs,s=new Rs,o=new Rs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],b=r[14],v=r[15];if(i[0].setComponents(l-s,d-c,m-h,v-p).normalize(),i[1].setComponents(l+s,d+c,m+h,v+p).normalize(),i[2].setComponents(l+o,d+u,m+g,v+M).normalize(),i[3].setComponents(l-o,d-u,m-g,v-M).normalize(),i[4].setComponents(l-a,d-f,m-_,v-b).normalize(),t===Mr)i[5].setComponents(l+a,d+f,m+_,v+b).normalize();else if(t===jc)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bv extends Tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new Wt,jd=new hv,Kl=new Su,Zl=new oe;class LE extends $n{constructor(e=new Nr,t=new bv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(r),Kl.radius+=s,e.ray.intersectsSphere(Kl)===!1)return;km.copy(r).invert(),jd.copy(e.ray).applyMatrix4(km);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);Zl.fromBufferAttribute(f,m),zm(Zl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Zl.fromBufferAttribute(f,g),zm(Zl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zm(n,e,t,i,r,s,o){const a=jd.distanceSqToPoint(n);if(a<t){const l=new oe;jd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ev extends Yn{constructor(e,t,i,r,s,o,a,l,c,u=Ho){if(u!==Ho&&u!==oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ho&&(i=js),i===void 0&&u===oa&&(i=sa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mu extends Nr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let b=0;b<c;b++){const v=b*f-s;g.push(v,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const b=M+c*p,v=M+c*(p+1),P=M+1+c*(p+1),C=M+1+c*p;h.push(b,v,C),h.push(v,P,C)}this.setIndex(h),this.setAttribute("position",new nr(g,3)),this.setAttribute("normal",new nr(_,3)),this.setAttribute("uv",new nr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class IE extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UE extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class NE extends yv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class OE extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Hm(n,e,t,i){const r=FE(i);switch(t){case iv:return n*e;case sv:return n*e;case ov:return n*e*2;case av:return n*e/r.components*r.byteLength;case Yh:return n*e/r.components*r.byteLength;case lv:return n*e*2/r.components*r.byteLength;case $h:return n*e*2/r.components*r.byteLength;case rv:return n*e*3/r.components*r.byteLength;case Oi:return n*e*4/r.components*r.byteLength;case jh:return n*e*4/r.components*r.byteLength;case Mc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:case Td:return Math.max(n,16)*Math.max(e,8)/4;case Md:case Ed:return Math.max(n,8)*Math.max(e,8)/2;case wd:case Ad:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wc:case Gd:case Wd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cv:case Xd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qd:case Yd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FE(n){switch(n){case Dr:case ev:return{byteLength:1,components:1};case ml:case tv:case Sl:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case js:case Wh:case Sr:return{byteLength:4,components:1};case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ET=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:kE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:VE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:qE,batching_pars_vertex:YE,batching_vertex:$E,begin_vertex:jE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:JE,bumpmap_pars_fragment:QE,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:dT,emissivemap_fragment:hT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:_T,envmap_fragment:gT,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:DT,envmap_vertex:ST,fog_vertex:MT,fog_pars_vertex:bT,fog_fragment:ET,fog_pars_fragment:TT,gradientmap_pars_fragment:wT,lightmap_pars_fragment:AT,lights_lambert_fragment:RT,lights_lambert_pars_fragment:CT,lights_pars_begin:PT,lights_toon_fragment:LT,lights_toon_pars_fragment:IT,lights_phong_fragment:UT,lights_phong_pars_fragment:NT,lights_physical_fragment:OT,lights_physical_pars_fragment:FT,lights_fragment_begin:BT,lights_fragment_maps:kT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:qT,map_particle_fragment:YT,map_particle_pars_fragment:$T,metalnessmap_fragment:jT,metalnessmap_pars_fragment:KT,morphinstance_vertex:ZT,morphcolor_vertex:JT,morphnormal_vertex:QT,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:uw,iridescence_pars_fragment:fw,opaque_fragment:dw,packing:hw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:_w,dithering_pars_fragment:gw,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:bw,skinbase_vertex:Ew,skinning_pars_vertex:Tw,skinning_vertex:ww,skinnormal_vertex:Aw,specularmap_fragment:Rw,specularmap_pars_fragment:Cw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Dw,transmission_fragment:Lw,transmission_pars_fragment:Iw,uv_pars_fragment:Uw,uv_pars_vertex:Nw,uv_vertex:Ow,worldpos_vertex:Fw,background_vert:Bw,background_frag:kw,backgroundCube_vert:zw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:qw,distanceRGBA_frag:Yw,equirect_vert:$w,equirect_frag:jw,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Jw,meshbasic_frag:Qw,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:fA,points_vert:dA,points_frag:hA,shadow_vert:pA,shadow_frag:mA,sprite_vert:_A,sprite_frag:gA},Re={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},qi={basic:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ln([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ln([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ln([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ln([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ln([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ln([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Ln([Re.common,Re.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Ln([Re.lights,Re.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};qi.physical={uniforms:Ln([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Jl={r:0,b:0,g:0},bs=new Lr,vA=new Wt;function xA(n,e,t,i,r,s,o){const a=new ht(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const P=g(b);P===null?p(a,l):P&&P.isColor&&(p(P,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===yu)?(u===void 0&&(u=new br(new wl(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:la(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bs.copy(v.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(bs)),u.material.toneMapped=dt.getTransfer(P.colorSpace)!==St,(f!==P||d!==P.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new br(new Mu(2,2),new cs({name:"BackgroundMaterial",uniforms:la(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(P.colorSpace)!==St,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(Jl,xv(n)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:M}}function yA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,D,N,H,W){let Z=!1;const Y=f(H,N,D);s!==Y&&(s=Y,c(s.object)),Z=h(y,H,N,W),Z&&g(y,H,N,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(y,D,N,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,D,N){const H=N.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let Z=W[D.id];Z===void 0&&(Z={},W[D.id]=Z);let Y=Z[H];return Y===void 0&&(Y=d(l()),Z[H]=Y),Y}function d(y){const D=[],N=[],H=[];for(let W=0;W<t;W++)D[W]=0,N[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:H,object:y,attributes:{},index:null}}function h(y,D,N,H){const W=s.attributes,Z=D.attributes;let Y=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){const F=W[V];let ye=Z[V];if(ye===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),F===void 0||F.attribute!==ye||ye&&F.data!==ye.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(y,D,N,H){const W={},Z=D.attributes;let Y=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){let F=Z[V];F===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(F=y.instanceColor));const ye={};ye.attribute=F,F&&F.data&&(ye.data=F.data),W[V]=ye,Y++}s.attributes=W,s.attributesNum=Y,s.index=H}function _(){const y=s.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const N=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;N[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),W[y]!==D&&(n.vertexAttribDivisor(y,D),W[y]=D)}function M(){const y=s.newAttributes,D=s.enabledAttributes;for(let N=0,H=D.length;N<H;N++)D[N]!==y[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function b(y,D,N,H,W,Z,Y){Y===!0?n.vertexAttribIPointer(y,D,N,W,Z):n.vertexAttribPointer(y,D,N,H,W,Z)}function v(y,D,N,H){_();const W=H.attributes,Z=N.getAttributes(),Y=D.defaultAttributeValues;for(const q in Z){const V=Z[q];if(V.location>=0){let fe=W[q];if(fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const F=fe.normalized,ye=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const ze=Ce.buffer,te=Ce.type,he=Ce.bytesPerElement,ve=te===n.INT||te===n.UNSIGNED_INT||fe.gpuType===Wh;if(fe.isInterleavedBufferAttribute){const k=fe.data,ne=k.stride,le=fe.offset;if(k.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,k.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ce=0;ce<V.locationSize;ce++)b(V.location+ce,ye/V.locationSize,te,F,ne*he,(le+ye/V.locationSize*ce)*he,ve)}else{if(fe.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)p(V.location+k,fe.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let k=0;k<V.locationSize;k++)b(V.location+k,ye/V.locationSize,te,F,ye*he,ye/V.locationSize*k*he,ve)}}else if(Y!==void 0){const F=Y[q];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(V.location,F);break;case 3:n.vertexAttrib3fv(V.location,F);break;case 4:n.vertexAttrib4fv(V.location,F);break;default:n.vertexAttrib1fv(V.location,F)}}}}M()}function P(){I();for(const y in i){const D=i[y];for(const N in D){const H=D[N];for(const W in H)u(H[W].object),delete H[W];delete D[N]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const N in D){const H=D[N];for(const W in H)u(H[W].object),delete H[W];delete D[N]}delete i[y.id]}function w(y){for(const D in i){const N=i[D];if(N[y.id]===void 0)continue;const H=N[y.id];for(const W in H)u(H[W].object),delete H[W];delete N[y.id]}}function I(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function SA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Oi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sr&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:P,maxSamples:C}}function bA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Rs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,b=M*4;let v=p.clippingState||null;l.value=v,v=u(g,d,b,h);for(let P=0;P!==b;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=h;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EA(n){let e=new WeakMap;function t(o,a){return a===vd?o.mapping=ia:a===xd&&(o.mapping=ra),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vd||a===xd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ro=4,Vm=[.125,.215,.35,.446,.526,.582],Is=20,vf=new NE,Gm=new ht;let xf=null,yf=0,Sf=0,Mf=!1;const Cs=(1+Math.sqrt(5))/2,xo=1/Cs,Wm=[new oe(-Cs,xo,0),new oe(Cs,xo,0),new oe(-xo,0,Cs),new oe(xo,0,Cs),new oe(0,Cs,-xo),new oe(0,Cs,xo),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],TA=new oe;class Xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=TA}=s;xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,yf,Sf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:Sl,format:Oi,colorSpace:aa,depthBuffer:!1},r=qm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wA(s)),this._blurMaterial=AA(s,e,t)}return r}_compileMaterial(e){const t=new br(this._lodPlanes[0],e);this._renderer.compile(t,vf)}_sceneToCubeUV(e,t,i,r,s){const l=new yi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Gm),f.toneMapping=rs,f.autoClear=!1;const g=new _v({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),_=new br(new wl,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Gm),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const v=this._cubeSize;Ql(r,b*v,M>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ia||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new br(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wm[(r-s-1)%Wm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new br(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Is-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Is;m>Is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let M=0;for(let w=0;w<Is;++w){const I=w/_,E=Math.exp(-I*I/2);p.push(E),w===0?M+=E:w<m&&(M+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const v=this._sizeLods[r],P=3*v*(r>b-Ro?r-b+Ro:0),C=4*(this._cubeSize-v);Ql(t,P,C,3*v,2*v),l.setRenderTarget(t),l.render(f,vf)}}function wA(n){const e=[],t=[],i=[];let r=n;const s=n-Ro+1+Vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ro?l=Vm[o-n+Ro-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),b=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let C=0;C<h;C++){const w=C%3*2/3-1,I=C>2?0:-1,E=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(E,_*g*C),b.set(d,m*g*C);const y=[C,C,C,C,C,C];v.set(y,p*g*C)}const P=new Nr;P.setAttribute("position",new tr(M,_)),P.setAttribute("uv",new tr(b,m)),P.setAttribute("faceIndex",new tr(v,p)),e.push(P),r>Ro&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qm(n,e,t){const i=new Ks(n,e,t);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ql(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AA(n,e,t){const i=new Float32Array(Is),r=new oe(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Ym(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function $m(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vd||l===xd,u=l===ia||l===ra;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Xm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Xm(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PA(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let b=0,v=M.length;b<v;b+=3){const P=M[b+0],C=M[b+1],w=M[b+2];d.push(P,C,C,w,w,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const P=b+0,C=b+1,w=b+2;d.push(P,C,C,w,w,P)}}else return;const m=new(fv(d)?vv:gv)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DA(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*o,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IA(n,e,t){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*C*4*f),I=new dv(w,P,C,f);I.type=Sr,I.needsUpdate=!0;const E=v*4;for(let D=0;D<f;D++){const N=p[D],H=M[D],W=b[D],Z=P*C*4*D;for(let Y=0;Y<N.count;Y++){const q=Y*E;g===!0&&(r.fromBufferAttribute(N,Y),w[Z+q+0]=r.x,w[Z+q+1]=r.y,w[Z+q+2]=r.z,w[Z+q+3]=0),_===!0&&(r.fromBufferAttribute(H,Y),w[Z+q+4]=r.x,w[Z+q+5]=r.y,w[Z+q+6]=r.z,w[Z+q+7]=0),m===!0&&(r.fromBufferAttribute(W,Y),w[Z+q+8]=r.x,w[Z+q+9]=r.y,w[Z+q+10]=r.z,w[Z+q+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new At(P,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function UA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const wv=new Yn,jm=new Ev(1,1),Av=new dv,Rv=new uE,Cv=new Sv,Km=[],Zm=[],Jm=new Float32Array(16),Qm=new Float32Array(9),e_=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bu(n,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function BA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function kA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;e_.set(i),n.uniformMatrix2fv(this.addr,!1,e_),rn(t,i)}}function zA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Qm.set(i),n.uniformMatrix3fv(this.addr,!1,Qm),rn(t,i)}}function HA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Jm.set(i),n.uniformMatrix4fv(this.addr,!1,Jm),rn(t,i)}}function VA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function qA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function YA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function KA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jm.compareFunction=uv,s=jm):s=wv,t.setTexture2D(e||s,r)}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rv,r)}function JA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cv,r)}function QA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Av,r)}function e2(n){switch(n){case 5126:return NA;case 35664:return OA;case 35665:return FA;case 35666:return BA;case 35674:return kA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return VA;case 35667:case 35671:return GA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return qA;case 36294:return YA;case 36295:return $A;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return QA}}function t2(n,e){n.uniform1fv(this.addr,e)}function n2(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function i2(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function r2(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function s2(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function o2(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a2(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function l2(n,e){n.uniform1iv(this.addr,e)}function c2(n,e){n.uniform2iv(this.addr,e)}function u2(n,e){n.uniform3iv(this.addr,e)}function f2(n,e){n.uniform4iv(this.addr,e)}function d2(n,e){n.uniform1uiv(this.addr,e)}function h2(n,e){n.uniform2uiv(this.addr,e)}function p2(n,e){n.uniform3uiv(this.addr,e)}function m2(n,e){n.uniform4uiv(this.addr,e)}function _2(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wv,s[o])}function g2(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rv,s[o])}function v2(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cv,s[o])}function x2(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Av,s[o])}function y2(n){switch(n){case 5126:return t2;case 35664:return n2;case 35665:return i2;case 35666:return r2;case 35674:return s2;case 35675:return o2;case 35676:return a2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return h2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return x2}}class S2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=e2(t.type)}}class M2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y2(t.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function t_(n,e){n.seq.push(e),n.map[e.id]=e}function E2(n,e,t){const i=n.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){t_(t,c===void 0?new S2(a,n,e):new M2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new b2(a),t_(t,f)),t=f}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);E2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function n_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T2=37297;let w2=0;function A2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const i_=new Qe;function R2(n){dt._getMatrix(i_,dt.workingColorSpace,n);const e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case $c:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function r_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+A2(n.getShaderSource(e),o)}else return r}function C2(n,e){const t=R2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P2(n,e){let t;switch(e){case Nb:t="Linear";break;case Ob:t="Reinhard";break;case Fb:t="Cineon";break;case Bb:t="ACESFilmic";break;case zb:t="AgX";break;case Hb:t="Neutral";break;case kb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new oe;function D2(){dt.getLuminanceCoefficients(ec);const n=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function I2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function U2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ca(n){return n!==""}function s_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(n){return n.replace(N2,F2)}const O2=new Map;function F2(n,e){let t=et[e];if(t===void 0){const i=O2.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(t)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(B2,k2)}function k2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function H2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function G2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case J0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ib:e="ENVMAP_BLENDING_MIX";break;case Ub:e="ENVMAP_BLENDING_ADD";break}return e}function W2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function X2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=z2(t),c=H2(t),u=V2(t),f=G2(t),d=W2(t),h=L2(t),g=I2(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(m=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?et.tonemapping_pars_fragment:"",t.toneMapping!==rs?P2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,C2("linearToOutputTexel",t.outputColorSpace),D2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=Kd(o),o=s_(o,t),o=o_(o,t),a=Kd(a),a=s_(a,t),a=o_(a,t),o=a_(o),a=a_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+o,v=M+p+a,P=n_(r,r.VERTEX_SHADER,b),C=n_(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,C);else{const q=r_(r,P,"vertex"),V=r_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Z,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(P),r.deleteShader(C),I=new Ac(r,_),E=U2(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,T2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let q2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $2(e),t.set(e,i)),i}}class $2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function j2(n,e,t,i,r,s,o){const a=new pv,l=new Y2,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,D,N,H){const W=N.fog,Z=H.geometry,Y=E.isMeshStandardMaterial?N.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),V=q&&q.mapping===yu?q.image.height:null,fe=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const F=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ye=F!==void 0?F.length:0;let Ce=0;Z.morphAttributes.position!==void 0&&(Ce=1),Z.morphAttributes.normal!==void 0&&(Ce=2),Z.morphAttributes.color!==void 0&&(Ce=3);let ze,te,he,ve;if(fe){const De=qi[fe];ze=De.vertexShader,te=De.fragmentShader}else ze=E.vertexShader,te=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const k=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),le=H.isInstancedMesh===!0,ce=H.isBatchedMesh===!0,Pe=!!E.map,L=!!E.matcap,R=!!q,x=!!E.aoMap,ee=!!E.lightMap,j=!!E.bumpMap,U=!!E.normalMap,se=!!E.displacementMap,de=!!E.emissiveMap,re=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,K=E.iridescence>0,Q=E.sheen>0,me=E.transmission>0,pe=S&&!!E.anisotropyMap,Se=B&&!!E.clearcoatMap,Fe=B&&!!E.clearcoatNormalMap,_e=B&&!!E.clearcoatRoughnessMap,xe=K&&!!E.iridescenceMap,Be=K&&!!E.iridescenceThicknessMap,ke=Q&&!!E.sheenColorMap,Me=Q&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,We=!!E.specularColorMap,ct=!!E.specularIntensityMap,z=me&&!!E.transmissionMap,Ee=me&&!!E.thicknessMap,ae=!!E.gradientMap,ue=!!E.alphaMap,be=E.alphaTest>0,Te=!!E.alphaHash,Ye=!!E.extensions;let ut=rs;E.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Ft={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:te,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ce,batchingColor:ce&&H._colorsTexture!==null,instancing:le,instancingColor:le&&H.instanceColor!==null,instancingMorph:le&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:aa,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:L,envMap:R,envMapMode:R&&q.mapping,envMapCubeUVHeight:V,aoMap:x,lightMap:ee,bumpMap:j,normalMap:U,displacementMap:d&&se,emissiveMap:de,normalMapObjectSpace:U&&E.normalMapType===qb,normalMapTangentSpace:U&&E.normalMapType===Xb,metalnessMap:re,roughnessMap:T,anisotropy:S,anisotropyMap:pe,clearcoat:B,clearcoatMap:Se,clearcoatNormalMap:Fe,clearcoatRoughnessMap:_e,dispersion:$,iridescence:K,iridescenceMap:xe,iridescenceThicknessMap:Be,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:Ge,specularColorMap:We,specularIntensityMap:ct,transmission:me,transmissionMap:z,thicknessMap:Ee,gradientMap:ae,opaque:E.transparent===!1&&E.blending===zo&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:be,alphaHash:Te,combine:E.combine,mapUv:Pe&&_(E.map.channel),aoMapUv:x&&_(E.aoMap.channel),lightMapUv:ee&&_(E.lightMap.channel),bumpMapUv:j&&_(E.bumpMap.channel),normalMapUv:U&&_(E.normalMap.channel),displacementMapUv:se&&_(E.displacementMap.channel),emissiveMapUv:de&&_(E.emissiveMap.channel),metalnessMapUv:re&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:pe&&_(E.anisotropyMap.channel),clearcoatMapUv:Se&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(E.sheenRoughnessMap.channel),specularMapUv:Ge&&_(E.specularMap.channel),specularColorMapUv:We&&_(E.specularColorMap.channel),specularIntensityMapUv:ct&&_(E.specularIntensityMap.channel),transmissionMapUv:z&&_(E.transmissionMap.channel),thicknessMapUv:Ee&&_(E.thicknessMap.channel),alphaMapUv:ue&&_(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(U||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Pe||ue),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===St,decodeVideoTextureEmissive:de&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xr,flipSided:E.side===qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(y,E),b(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=g[E.type];let D;if(y){const N=qi[y];D=bE.clone(N.uniforms)}else D=E.uniforms;return D}function P(E,y){let D;for(let N=0,H=u.length;N<H;N++){const W=u[N];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new X2(n,y,E,s),u.push(D)),D}function C(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:I}}function K2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Z2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function c_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function u_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||Z2),i.length>1&&i.sort(d||c_),r.length>1&&r.sort(d||c_)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function J2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new u_,n.set(i,[o])):r>=s.length?(o=new u_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new ht};break;case"SpotLight":t={position:new oe,direction:new oe,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function eR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tR=0;function nR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iR(n){const e=new Q2,t=eR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new oe);const r=new oe,s=new Wt,o=new Wt;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,b=0,v=0,P=0,C=0,w=0;c.sort(nR);for(let E=0,y=c.length;E<y;E++){const D=c[E],N=D.color,H=D.intensity,W=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*H,f+=N.g*H,d+=N.b*H;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],H);w++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=D.shadow.matrix,M++}i.directional[h]=Y,h++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(N).multiplyScalar(H),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[_]=Y;const q=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,q.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=q.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Z,v++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(N).multiplyScalar(H),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(H),Y.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,I.directionalLength=h,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=w,i.version=tR++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function f_(n){const e=new iR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new f_(n),e.set(r,[a])):s>=o.length?(a=new f_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aR(n,e,t){let i=new Mv;const r=new At,s=new At,o=new Vt,a=new IE({depthPacking:Wb}),l=new UE,c={},u=t.maxTextureSize,f={[ls]:qn,[qn]:ls,[xr]:xr},d=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:sR,fragmentShader:oR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nr;g.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new br(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let p=this.type;this.render=function(C,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(is),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=p!==hr&&this.type===hr,W=p===hr&&this.type!==hr;for(let Z=0,Y=C.length;Z<Y;Z++){const q=C[Z],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const fe=V.getFrameExtents();if(r.multiply(fe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,V.mapSize.y=s.y)),V.map===null||H===!0||W===!0){const ye=this.type!==hr?{minFilter:ki,magFilter:ki}:{};V.map!==null&&V.map.dispose(),V.map=new Ks(r.x,r.y,ye),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const F=V.getViewportCount();for(let ye=0;ye<F;ye++){const Ce=V.getViewport(ye);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),N.viewport(o),V.updateMatrices(q,ye),i=V.getFrustum(),v(w,I,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===hr&&M(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,D)};function M(C,w){const I=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ks(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,I,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,I,h,_,null)}function b(C,w,I,E){let y=null;const D=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=y.uuid,H=w.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let Z=W[H];Z===void 0&&(Z=y.clone(),W[H]=Z,w.addEventListener("dispose",P)),y=Z}if(y.visible=w.visible,y.wireframe=w.wireframe,E===hr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=I}return y}function v(C,w,I,E,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===hr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const H=e.update(C),W=C.material;if(Array.isArray(W)){const Z=H.groups;for(let Y=0,q=Z.length;Y<q;Y++){const V=Z[Y],fe=W[V.materialIndex];if(fe&&fe.visible){const F=b(C,fe,E,y);C.onBeforeShadow(n,C,w,I,H,F,V),n.renderBufferDirect(I,null,H,F,C,V),C.onAfterShadow(n,C,w,I,H,F,V)}}}else if(W.visible){const Z=b(C,W,E,y);C.onBeforeShadow(n,C,w,I,H,Z,null),n.renderBufferDirect(I,null,H,Z,C,null),C.onAfterShadow(n,C,w,I,H,Z,null)}}const N=C.children;for(let H=0,W=N.length;H<W;H++)v(N[H],w,I,E,y)}function P(C){C.target.removeEventListener("dispose",P);for(const I in c){const E=c[I],y=C.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const lR={[fd]:dd,[hd]:_d,[pd]:gd,[na]:md,[dd]:fd,[_d]:hd,[gd]:pd,[md]:na};function cR(n,e){function t(){let z=!1;const Ee=new Vt;let ae=null;const ue=new Vt(0,0,0,0);return{setMask:function(be){ae!==be&&!z&&(n.colorMask(be,be,be,be),ae=be)},setLocked:function(be){z=be},setClear:function(be,Te,Ye,ut,Ft){Ft===!0&&(be*=ut,Te*=ut,Ye*=ut),Ee.set(be,Te,Ye,ut),ue.equals(Ee)===!1&&(n.clearColor(be,Te,Ye,ut),ue.copy(Ee))},reset:function(){z=!1,ae=null,ue.set(-1,0,0,0)}}}function i(){let z=!1,Ee=!1,ae=null,ue=null,be=null;return{setReversed:function(Te){if(Ee!==Te){const Ye=e.get("EXT_clip_control");Ee?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const ut=be;be=null,this.setClear(ut)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?k(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!z&&(n.depthMask(Te),ae=Te)},setFunc:function(Te){if(Ee&&(Te=lR[Te]),ue!==Te){switch(Te){case fd:n.depthFunc(n.NEVER);break;case dd:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case pd:n.depthFunc(n.EQUAL);break;case md:n.depthFunc(n.GEQUAL);break;case _d:n.depthFunc(n.GREATER);break;case gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){z=Te},setClear:function(Te){be!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),be=Te)},reset:function(){z=!1,ae=null,ue=null,be=null,Ee=!1}}}function r(){let z=!1,Ee=null,ae=null,ue=null,be=null,Te=null,Ye=null,ut=null,Ft=null;return{setTest:function(De){z||(De?k(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(De){Ee!==De&&!z&&(n.stencilMask(De),Ee=De)},setFunc:function(De,Ne,Je){(ae!==De||ue!==Ne||be!==Je)&&(n.stencilFunc(De,Ne,Je),ae=De,ue=Ne,be=Je)},setOp:function(De,Ne,Je){(Te!==De||Ye!==Ne||ut!==Je)&&(n.stencilOp(De,Ne,Je),Te=De,Ye=Ne,ut=Je)},setLocked:function(De){z=De},setClear:function(De){Ft!==De&&(n.clearStencil(De),Ft=De)},reset:function(){z=!1,Ee=null,ae=null,ue=null,be=null,Te=null,Ye=null,ut=null,Ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,v=null,P=null,C=null,w=new ht(0,0,0),I=0,E=!1,y=null,D=null,N=null,H=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=q>=2);let fe=null,F={};const ye=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),ze=new Vt().fromArray(ye),te=new Vt().fromArray(Ce);function he(z,Ee,ae,ue){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(z,Te),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ae;Ye++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ee+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const ve={};ve[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(na),j(!1),U(_m),k(n.CULL_FACE),x(is);function k(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function ne(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function le(z,Ee){return f[z]!==Ee?(n.bindFramebuffer(z,Ee),f[z]=Ee,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ce(z,Ee){let ae=h,ue=!1;if(z){ae=d.get(Ee),ae===void 0&&(ae=[],d.set(Ee,ae));const be=z.textures;if(ae.length!==be.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ye=be.length;Te<Ye;Te++)ae[Te]=n.COLOR_ATTACHMENT0+Te;ae.length=be.length,ue=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ae)}function Pe(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const L={[Ls]:n.FUNC_ADD,[_b]:n.FUNC_SUBTRACT,[gb]:n.FUNC_REVERSE_SUBTRACT};L[vb]=n.MIN,L[xb]=n.MAX;const R={[yb]:n.ZERO,[Sb]:n.ONE,[Mb]:n.SRC_COLOR,[cd]:n.SRC_ALPHA,[Rb]:n.SRC_ALPHA_SATURATE,[wb]:n.DST_COLOR,[Eb]:n.DST_ALPHA,[bb]:n.ONE_MINUS_SRC_COLOR,[ud]:n.ONE_MINUS_SRC_ALPHA,[Ab]:n.ONE_MINUS_DST_COLOR,[Tb]:n.ONE_MINUS_DST_ALPHA,[Cb]:n.CONSTANT_COLOR,[Pb]:n.ONE_MINUS_CONSTANT_COLOR,[Db]:n.CONSTANT_ALPHA,[Lb]:n.ONE_MINUS_CONSTANT_ALPHA};function x(z,Ee,ae,ue,be,Te,Ye,ut,Ft,De){if(z===is){_===!0&&(ne(n.BLEND),_=!1);return}if(_===!1&&(k(n.BLEND),_=!0),z!==mb){if(z!==m||De!==E){if((p!==Ls||v!==Ls)&&(n.blendEquation(n.FUNC_ADD),p=Ls,v=Ls),De)switch(z){case zo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFunc(n.ONE,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,b=null,P=null,C=null,w.set(0,0,0),I=0,m=z,E=De}return}be=be||Ee,Te=Te||ae,Ye=Ye||ue,(Ee!==p||be!==v)&&(n.blendEquationSeparate(L[Ee],L[be]),p=Ee,v=be),(ae!==M||ue!==b||Te!==P||Ye!==C)&&(n.blendFuncSeparate(R[ae],R[ue],R[Te],R[Ye]),M=ae,b=ue,P=Te,C=Ye),(ut.equals(w)===!1||Ft!==I)&&(n.blendColor(ut.r,ut.g,ut.b,Ft),w.copy(ut),I=Ft),m=z,E=!1}function ee(z,Ee){z.side===xr?ne(n.CULL_FACE):k(n.CULL_FACE);let ae=z.side===qn;Ee&&(ae=!ae),j(ae),z.blending===zo&&z.transparent===!1?x(is):x(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ue=z.stencilWrite;a.setTest(ue),ue&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),de(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(z){y!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),y=z)}function U(z){z!==db?(k(n.CULL_FACE),z!==D&&(z===_m?n.cullFace(n.BACK):z===hb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=z}function se(z){z!==N&&(Y&&n.lineWidth(z),N=z)}function de(z,Ee,ae){z?(k(n.POLYGON_OFFSET_FILL),(H!==Ee||W!==ae)&&(n.polygonOffset(Ee,ae),H=Ee,W=ae)):ne(n.POLYGON_OFFSET_FILL)}function re(z){z?k(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function T(z){z===void 0&&(z=n.TEXTURE0+Z-1),fe!==z&&(n.activeTexture(z),fe=z)}function S(z,Ee,ae){ae===void 0&&(fe===null?ae=n.TEXTURE0+Z-1:ae=fe);let ue=F[ae];ue===void 0&&(ue={type:void 0,texture:void 0},F[ae]=ue),(ue.type!==z||ue.texture!==Ee)&&(fe!==ae&&(n.activeTexture(ae),fe=ae),n.bindTexture(z,Ee||ve[z]),ue.type=z,ue.texture=Ee)}function B(){const z=F[fe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){ze.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ze.copy(z))}function Me(z){te.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function Ge(z,Ee){let ae=c.get(Ee);ae===void 0&&(ae=new WeakMap,c.set(Ee,ae));let ue=ae.get(z);ue===void 0&&(ue=n.getUniformBlockIndex(Ee,z.name),ae.set(z,ue))}function We(z,Ee){const ue=c.get(Ee).get(z);l.get(Ee)!==ue&&(n.uniformBlockBinding(Ee,ue,z.__bindingPointIndex),l.set(Ee,ue))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,F={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,v=null,P=null,C=null,w=new ht(0,0,0),I=0,E=!1,y=null,D=null,N=null,H=null,W=null,ze.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:ne,bindFramebuffer:le,drawBuffers:ce,useProgram:Pe,setBlending:x,setMaterial:ee,setFlipSided:j,setCullFace:U,setLineWidth:se,setPolygonOffset:de,setScissorTest:re,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:xe,texImage3D:Be,updateUBOMapping:Ge,uniformBlockBinding:We,texStorage2D:Fe,texStorage3D:_e,texSubImage2D:Q,texSubImage3D:me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:ke,viewport:Me,reset:ct}}function uR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return h?new OffscreenCanvas(T,S):Kc("canvas")}function _(T,S,B){let $=1;const K=re(T);if((K.width>B||K.height>B)&&($=B/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor($*K.width),me=Math.floor($*K.height);f===void 0&&(f=g(Q,me));const pe=S?g(Q,me):f;return pe.width=Q,pe.height=me,pe.getContext("2d").drawImage(T,0,0,Q,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+me+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,S,B,$,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=S;if(S===n.RED&&(B===n.FLOAT&&(Q=n.R32F),B===n.HALF_FLOAT&&(Q=n.R16F),B===n.UNSIGNED_BYTE&&(Q=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.R8UI),B===n.UNSIGNED_SHORT&&(Q=n.R16UI),B===n.UNSIGNED_INT&&(Q=n.R32UI),B===n.BYTE&&(Q=n.R8I),B===n.SHORT&&(Q=n.R16I),B===n.INT&&(Q=n.R32I)),S===n.RG&&(B===n.FLOAT&&(Q=n.RG32F),B===n.HALF_FLOAT&&(Q=n.RG16F),B===n.UNSIGNED_BYTE&&(Q=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RG8UI),B===n.UNSIGNED_SHORT&&(Q=n.RG16UI),B===n.UNSIGNED_INT&&(Q=n.RG32UI),B===n.BYTE&&(Q=n.RG8I),B===n.SHORT&&(Q=n.RG16I),B===n.INT&&(Q=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),B===n.UNSIGNED_INT&&(Q=n.RGB32UI),B===n.BYTE&&(Q=n.RGB8I),B===n.SHORT&&(Q=n.RGB16I),B===n.INT&&(Q=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),B===n.UNSIGNED_INT&&(Q=n.RGBA32UI),B===n.BYTE&&(Q=n.RGBA8I),B===n.SHORT&&(Q=n.RGBA16I),B===n.INT&&(Q=n.RGBA32I)),S===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),S===n.RGBA){const me=K?$c:dt.getTransfer($);B===n.FLOAT&&(Q=n.RGBA32F),B===n.HALF_FLOAT&&(Q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Q=me===St?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(T,S){let B;return T?S===null||S===js||S===sa?B=n.DEPTH24_STENCIL8:S===Sr?B=n.DEPTH32F_STENCIL8:S===ml&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===js||S===sa?B=n.DEPTH_COMPONENT24:S===Sr?B=n.DEPTH_COMPONENT32F:S===ml&&(B=n.DEPTH_COMPONENT16),B}function P(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ki&&T.minFilter!==Ki?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function C(T){const S=T.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&u.delete(S)}function w(T){const S=T.target;S.removeEventListener("dispose",w),y(S)}function I(T){const S=i.get(T);if(S.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys($).length===0&&d.delete(B)}i.remove(T)}function E(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const B=T.source,$=d.get(B);delete $[S.__cacheKey],o.memory.textures--}function y(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[$][K]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,K=B.length;$<K;$++){const Q=i.get(B[$]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(T)}let D=0;function N(){D=0}function H(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function W(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){const B=i.get(T);if(T.isVideoTexture&&se(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,T,S);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function Y(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){te(B,T,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function q(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){te(B,T,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function V(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){he(B,T,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const fe={[yd]:n.REPEAT,[Os]:n.CLAMP_TO_EDGE,[Sd]:n.MIRRORED_REPEAT},F={[ki]:n.NEAREST,[Vb]:n.NEAREST_MIPMAP_NEAREST,[Dl]:n.NEAREST_MIPMAP_LINEAR,[Ki]:n.LINEAR,[Yu]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},ye={[Yb]:n.NEVER,[Qb]:n.ALWAYS,[$b]:n.LESS,[uv]:n.LEQUAL,[jb]:n.EQUAL,[Jb]:n.GEQUAL,[Kb]:n.GREATER,[Zb]:n.NOTEQUAL};function Ce(T,S){if(S.type===Sr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ki||S.magFilter===Yu||S.magFilter===Dl||S.magFilter===Fs||S.minFilter===Ki||S.minFilter===Yu||S.minFilter===Dl||S.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,fe[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,fe[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,fe[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,F[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,F[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ki||S.minFilter!==Dl&&S.minFilter!==Fs||S.type===Sr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ze(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const Q=W(S);if(Q!==T.__cacheKey){K[Q]===void 0&&(K[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[Q].usedTimes++;const me=K[T.__cacheKey];me!==void 0&&(K[T.__cacheKey].usedTimes--,me.usedTimes===0&&E(S)),T.__cacheKey=Q,T.__webglTexture=K[Q].texture}return B}function te(T,S,B){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const K=ze(T,S),Q=S.source;t.bindTexture($,T.__webglTexture,n.TEXTURE0+B);const me=i.get(Q);if(Q.version!==me.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const pe=dt.getPrimaries(dt.workingColorSpace),Se=S.colorSpace===Yr?null:dt.getPrimaries(S.colorSpace),Fe=S.colorSpace===Yr||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let _e=_(S.image,!1,r.maxTextureSize);_e=de(S,_e);const xe=s.convert(S.format,S.colorSpace),Be=s.convert(S.type);let ke=b(S.internalFormat,xe,Be,S.colorSpace,S.isVideoTexture);Ce($,S);let Me;const Ge=S.mipmaps,We=S.isVideoTexture!==!0,ct=me.__version===void 0||K===!0,z=Q.dataReady,Ee=P(S,_e);if(S.isDepthTexture)ke=v(S.format===oa,S.type),ct&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,ke,_e.width,_e.height,0,xe,Be,null));else if(S.isDataTexture)if(Ge.length>0){We&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,ke,Ge[0].width,Ge[0].height);for(let ae=0,ue=Ge.length;ae<ue;ae++)Me=Ge[ae],We?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,xe,Be,Me.data):t.texImage2D(n.TEXTURE_2D,ae,ke,Me.width,Me.height,0,xe,Be,Me.data);S.generateMipmaps=!1}else We?(ct&&t.texStorage2D(n.TEXTURE_2D,Ee,ke,_e.width,_e.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,xe,Be,_e.data)):t.texImage2D(n.TEXTURE_2D,0,ke,_e.width,_e.height,0,xe,Be,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,ke,Ge[0].width,Ge[0].height,_e.depth);for(let ae=0,ue=Ge.length;ae<ue;ae++)if(Me=Ge[ae],S.format!==Oi)if(xe!==null)if(We){if(z)if(S.layerUpdates.size>0){const be=Hm(Me.width,Me.height,S.format,S.type);for(const Te of S.layerUpdates){const Ye=Me.data.subarray(Te*be/Me.data.BYTES_PER_ELEMENT,(Te+1)*be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Te,Me.width,Me.height,1,xe,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,_e.depth,xe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ke,Me.width,Me.height,_e.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,_e.depth,xe,Be,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ke,Me.width,Me.height,_e.depth,0,xe,Be,Me.data)}else{We&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,ke,Ge[0].width,Ge[0].height);for(let ae=0,ue=Ge.length;ae<ue;ae++)Me=Ge[ae],S.format!==Oi?xe!==null?We?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,xe,Be,Me.data):t.texImage2D(n.TEXTURE_2D,ae,ke,Me.width,Me.height,0,xe,Be,Me.data)}else if(S.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,ke,_e.width,_e.height,_e.depth),z)if(S.layerUpdates.size>0){const ae=Hm(_e.width,_e.height,S.format,S.type);for(const ue of S.layerUpdates){const be=_e.data.subarray(ue*ae/_e.data.BYTES_PER_ELEMENT,(ue+1)*ae/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,xe,Be,be)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,xe,Be,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,_e.width,_e.height,_e.depth,0,xe,Be,_e.data);else if(S.isData3DTexture)We?(ct&&t.texStorage3D(n.TEXTURE_3D,Ee,ke,_e.width,_e.height,_e.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,xe,Be,_e.data)):t.texImage3D(n.TEXTURE_3D,0,ke,_e.width,_e.height,_e.depth,0,xe,Be,_e.data);else if(S.isFramebufferTexture){if(ct)if(We)t.texStorage2D(n.TEXTURE_2D,Ee,ke,_e.width,_e.height);else{let ae=_e.width,ue=_e.height;for(let be=0;be<Ee;be++)t.texImage2D(n.TEXTURE_2D,be,ke,ae,ue,0,xe,Be,null),ae>>=1,ue>>=1}}else if(Ge.length>0){if(We&&ct){const ae=re(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ee,ke,ae.width,ae.height)}for(let ae=0,ue=Ge.length;ae<ue;ae++)Me=Ge[ae],We?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe,Be,Me):t.texImage2D(n.TEXTURE_2D,ae,ke,xe,Be,Me);S.generateMipmaps=!1}else if(We){if(ct){const ae=re(_e);t.texStorage2D(n.TEXTURE_2D,Ee,ke,ae.width,ae.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Be,_e)}else t.texImage2D(n.TEXTURE_2D,0,ke,xe,Be,_e);m(S)&&p($),me.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function he(T,S,B){if(S.image.length!==6)return;const $=ze(T,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const Q=i.get(K);if(K.version!==Q.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const me=dt.getPrimaries(dt.workingColorSpace),pe=S.colorSpace===Yr?null:dt.getPrimaries(S.colorSpace),Se=S.colorSpace===Yr||me===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Fe&&!_e?xe[ue]=_(S.image[ue],!0,r.maxCubemapSize):xe[ue]=_e?S.image[ue].image:S.image[ue],xe[ue]=de(S,xe[ue]);const Be=xe[0],ke=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),Ge=b(S.internalFormat,ke,Me,S.colorSpace),We=S.isVideoTexture!==!0,ct=Q.__version===void 0||$===!0,z=K.dataReady;let Ee=P(S,Be);Ce(n.TEXTURE_CUBE_MAP,S);let ae;if(Fe){We&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ge,Be.width,Be.height);for(let ue=0;ue<6;ue++){ae=xe[ue].mipmaps;for(let be=0;be<ae.length;be++){const Te=ae[be];S.format!==Oi?ke!==null?We?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,Te.width,Te.height,ke,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,Te.width,Te.height,ke,Me,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ge,Te.width,Te.height,0,ke,Me,Te.data)}}}else{if(ae=S.mipmaps,We&&ct){ae.length>0&&Ee++;const ue=re(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ge,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){We?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,ke,Me,xe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,xe[ue].width,xe[ue].height,0,ke,Me,xe[ue].data);for(let be=0;be<ae.length;be++){const Ye=ae[be].image[ue].image;We?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,Ye.width,Ye.height,ke,Me,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ge,Ye.width,Ye.height,0,ke,Me,Ye.data)}}else{We?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ke,Me,xe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,ke,Me,xe[ue]);for(let be=0;be<ae.length;be++){const Te=ae[be];We?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,ke,Me,Te.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ge,ke,Me,Te.image[ue])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),Q.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ve(T,S,B,$,K,Q){const me=s.convert(B.format,B.colorSpace),pe=s.convert(B.type),Se=b(B.internalFormat,me,pe,B.colorSpace),Fe=i.get(S),_e=i.get(B);if(_e.__renderTarget=S,!Fe.__hasExternalTextures){const xe=Math.max(1,S.width>>Q),Be=Math.max(1,S.height>>Q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,Se,xe,Be,S.depth,0,me,pe,null):t.texImage2D(K,Q,Se,xe,Be,0,me,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,_e.__webglTexture,0,j(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,_e.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(T,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,Q=v(S.stencilBuffer,K),me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=j(S);U(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Q,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,T)}else{const $=S.textures;for(let K=0;K<$.length;K++){const Q=$[K],me=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),Se=b(Q.internalFormat,me,pe,Q.colorSpace),Fe=j(S);B&&U(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Se,S.width,S.height):U(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Se,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const K=$.__webglTexture,Q=j(S);if(S.depthTexture.format===Ho)U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===oa)U(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function le(T){const S=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),k(S.__webglDepthbuffer[$],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),k(S.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(T,S,B){const $=i.get(T);S!==void 0&&ve($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&le(T)}function Pe(T){const S=T.texture,B=i.get(T),$=i.get(S);T.addEventListener("dispose",w);const K=T.textures,Q=T.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Se=0;Se<S.mipmaps.length;Se++)B.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(me)for(let pe=0,Se=K.length;pe<Se;pe++){const Fe=i.get(K[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&U(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<K.length;pe++){const Se=K[pe];B.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Fe=s.convert(Se.format,Se.colorSpace),_e=s.convert(Se.type),xe=b(Se.internalFormat,Fe,_e,Se.colorSpace,T.isXRRenderTarget===!0),Be=j(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),k(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ve(B.__webglFramebuffer[pe][Se],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else ve(B.__webglFramebuffer[pe],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let pe=0,Se=K.length;pe<Se;pe++){const Fe=K[pe],_e=i.get(Fe);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),Ce(n.TEXTURE_2D,Fe),ve(B.__webglFramebuffer,T,Fe,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),Ce(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ve(B.__webglFramebuffer[Se],T,S,n.COLOR_ATTACHMENT0,pe,Se);else ve(B.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,pe,0);m(S)&&p(pe),t.unbindTexture()}T.depthBuffer&&le(T)}function L(T){const S=T.textures;for(let B=0,$=S.length;B<$;B++){const K=S[B];if(m(K)){const Q=M(T),me=i.get(K).__webglTexture;t.bindTexture(Q,me),p(Q),t.unbindTexture()}}}const R=[],x=[];function ee(T){if(T.samples>0){if(U(T)===!1){const S=T.textures,B=T.width,$=T.height;let K=n.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(T),pe=S.length>1;if(pe)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Fe=i.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,K,n.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(Q),x.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Fe=i.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function j(T){return Math.min(r.maxSamples,T.samples)}function U(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function de(T,S){const B=T.colorSpace,$=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==aa&&B!==Yr&&(dt.getTransfer(B)===St?($!==Oi||K!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=U}function fR(n,e){function t(i,r=Yr){let s;const o=dt.getTransfer(r);if(i===Dr)return n.UNSIGNED_BYTE;if(i===Xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ev)return n.BYTE;if(i===tv)return n.SHORT;if(i===ml)return n.UNSIGNED_SHORT;if(i===Wh)return n.INT;if(i===js)return n.UNSIGNED_INT;if(i===Sr)return n.FLOAT;if(i===Sl)return n.HALF_FLOAT;if(i===iv)return n.ALPHA;if(i===rv)return n.RGB;if(i===Oi)return n.RGBA;if(i===sv)return n.LUMINANCE;if(i===ov)return n.LUMINANCE_ALPHA;if(i===Ho)return n.DEPTH_COMPONENT;if(i===oa)return n.DEPTH_STENCIL;if(i===av)return n.RED;if(i===Yh)return n.RED_INTEGER;if(i===lv)return n.RG;if(i===$h)return n.RG_INTEGER;if(i===jh)return n.RGBA_INTEGER;if(i===Mc||i===bc||i===Ec||i===Tc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===bd||i===Ed||i===Td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Ad||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Ad)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cd||i===Pd||i===Dd||i===Ld||i===Id||i===Ud||i===Nd||i===Od||i===Fd||i===Bd||i===kd||i===zd||i===Hd||i===Vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cv||i===Xd||i===qd||i===Yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new br(new Mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends fa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new pR,m=t.getContextAttributes();let p=null,M=null;const b=[],v=[],P=new At;let C=null;const w=new yi;w.viewport=new Vt;const I=new yi;I.viewport=new Vt;const E=[w,I],y=new OE;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=b[te];return he===void 0&&(he=new _f,b[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=b[te];return he===void 0&&(he=new _f,b[te]=he),he.getGripSpace()},this.getHand=function(te){let he=b[te];return he===void 0&&(he=new _f,b[te]=he),he.getHandSpace()};function H(te){const he=v.indexOf(te.inputSource);if(he===-1)return;const ve=b[he];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<b.length;te++){const he=v[te];he!==null&&(v[te]=null,b[te].disconnect(he))}D=null,N=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,k=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?oa:Ho,k=m.stencil?sa:js);const le={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ks(d.textureWidth,d.textureHeight,{format:Oi,type:Dr,depthTexture:new Ev(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ks(h.framebufferWidth,h.framebufferHeight,{format:Oi,type:Dr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(te){for(let he=0;he<te.removed.length;he++){const ve=te.removed[he],k=v.indexOf(ve);k>=0&&(v[k]=null,b[k].disconnect(ve))}for(let he=0;he<te.added.length;he++){const ve=te.added[he];let k=v.indexOf(ve);if(k===-1){for(let le=0;le<b.length;le++)if(le>=v.length){v.push(ve),k=le;break}else if(v[le]===null){v[le]=ve,k=le;break}if(k===-1)break}const ne=b[k];ne&&ne.connect(ve)}}const Y=new oe,q=new oe;function V(te,he,ve){Y.setFromMatrixPosition(he.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const k=Y.distanceTo(q),ne=he.projectionMatrix.elements,le=ve.projectionMatrix.elements,ce=ne[14]/(ne[10]-1),Pe=ne[14]/(ne[10]+1),L=(ne[9]+1)/ne[5],R=(ne[9]-1)/ne[5],x=(ne[8]-1)/ne[0],ee=(le[8]+1)/le[0],j=ce*x,U=ce*ee,se=k/(-x+ee),de=se*-x;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(de),te.translateZ(se),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ne[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const re=ce+se,T=Pe+se,S=j-de,B=U+(k-de),$=L*Pe/T*re,K=R*Pe/T*re;te.projectionMatrix.makePerspective(S,B,$,K,re,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function fe(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let he=te.near,ve=te.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),y.near=I.near=w.near=he,y.far=I.far=w.far=ve,(D!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,N=y.far),w.layers.mask=te.layers.mask|2,I.layers.mask=te.layers.mask|4,y.layers.mask=w.layers.mask|I.layers.mask;const k=te.parent,ne=y.cameras;fe(y,k);for(let le=0;le<ne.length;le++)fe(ne[le],k);ne.length===2?V(y,w,I):y.projectionMatrix.copy(w.projectionMatrix),F(te,y,k)};function F(te,he,ve){ve===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=$d*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ye=null;function Ce(te,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let k=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,k=!0);for(let ce=0;ce<ve.length;ce++){const Pe=ve[ce];let L=null;if(h!==null)L=h.getViewport(Pe);else{const x=f.getViewSubImage(d,Pe);L=x.viewport,ce===0&&(e.setRenderTargetTextures(M,x.colorTexture,d.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(M))}let R=E[ce];R===void 0&&(R=new yi,R.layers.enable(ce),R.viewport=new Vt,E[ce]=R),R.matrix.fromArray(Pe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Pe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(L.x,L.y,L.width,L.height),ce===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),k===!0&&y.cameras.push(R)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(ve[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,r.renderState)}}for(let ve=0;ve<b.length;ve++){const k=v[ve],ne=b[ve];k!==null&&ne!==void 0&&ne.update(k,he,c||o)}ye&&ye(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const ze=new Tv;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Es=new Lr,_R=new Wt;function gR(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,Es.copy(v),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(Es)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const v=b.program;i.uniformBlockBinding(M,v)}function c(M,b){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const P=b.program;i.updateUBOMapping(M,P);const C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const b=f();M.__bindingPointIndex=b;const v=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=r[M.id],v=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,w=v.length;C<w;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,y=I.length;E<y;E++){const D=I[E];if(h(D,C,E,P)===!0){const N=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Z=0;Z<H.length;Z++){const Y=H[Z],q=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,N+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,b,v,P){const C=M.value,w=b+"_"+v;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const I=P[w];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return P[w]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(M){const b=M.uniforms;let v=0;const P=16;for(let w=0,I=b.length;w<I;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,D=E.length;y<D;y++){const N=E[y],H=Array.isArray(N.value)?N.value:[N.value];for(let W=0,Z=H.length;W<Z;W++){const Y=H[W],q=_(Y),V=v%P,fe=V%q.boundary,F=V+fe;v+=fe,F!==0&&P-F<q.storage&&(v+=P-F),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=q.storage}}}const C=v%P;return C>0&&(v+=P-C),M.__size=v,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class xR{constructor(e={}){const{canvas:t=tE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=rs,this.toneMappingExposure=1;const v=this;let P=!1,C=0,w=0,I=null,E=-1,y=null;const D=new Vt,N=new Vt;let H=null;const W=new ht(0);let Z=0,Y=t.width,q=t.height,V=1,fe=null,F=null;const ye=new Vt(0,0,Y,q),Ce=new Vt(0,0,Y,q);let ze=!1;const te=new Mv;let he=!1,ve=!1;this.transmissionResolutionScale=1;const k=new Wt,ne=new Wt,le=new oe,ce=new Vt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function R(){return I===null?V:1}let x=i;function ee(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),x===null){const X="webgl2";if(x=ee(X,A),x===null)throw ee(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let j,U,se,de,re,T,S,B,$,K,Q,me,pe,Se,Fe,_e,xe,Be,ke,Me,Ge,We,ct,z;function Ee(){j=new CA(x),j.init(),We=new fR(x,j),U=new MA(x,j,e,We),se=new cR(x,j),U.reverseDepthBuffer&&d&&se.buffers.depth.setReversed(!0),de=new LA(x),re=new K2,T=new uR(x,j,se,re,U,We,de),S=new EA(v),B=new RA(v),$=new BE(x),ct=new yA(x,$),K=new PA(x,$,de,ct),Q=new UA(x,K,$,de),ke=new IA(x,U,T),_e=new bA(re),me=new j2(v,S,B,j,U,ct,_e),pe=new gR(v,re),Se=new J2,Fe=new rR(j),Be=new xA(v,S,B,se,Q,h,l),xe=new aR(v,Q,U),z=new vR(x,de,U,se),Me=new SA(x,j,de),Ge=new DA(x,j,de),de.programs=me.programs,v.capabilities=U,v.extensions=j,v.properties=re,v.renderLists=Se,v.shadowMap=xe,v.state=se,v.info=de}Ee();const ae=new mR(v,x);this.xr=ae,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const A=j.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=j.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(Y,q,!1))},this.getSize=function(A){return A.set(Y,q)},this.setSize=function(A,X,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,q=X,t.width=Math.floor(A*V),t.height=Math.floor(X*V),ie===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Y*V,q*V).floor()},this.setDrawingBufferSize=function(A,X,ie){Y=A,q=X,V=ie,t.width=Math.floor(A*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,X,ie,J){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,X,ie,J),se.viewport(D.copy(ye).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,X,ie,J){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,X,ie,J),se.scissor(N.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){se.setScissorTest(ze=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let J=0;if(A){let G=!1;if(I!==null){const ge=I.texture.format;G=ge===jh||ge===$h||ge===Yh}if(G){const ge=I.texture.type,Ae=ge===Dr||ge===js||ge===ml||ge===sa||ge===Xh||ge===qh,Ie=Be.getClearColor(),Le=Be.getClearAlpha(),Ve=Ie.r,qe=Ie.g,He=Ie.b;Ae?(g[0]=Ve,g[1]=qe,g[2]=He,g[3]=Le,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Ve,_[1]=qe,_[2]=He,_[3]=Le,x.clearBufferiv(x.COLOR,0,_))}else J|=x.COLOR_BUFFER_BIT}X&&(J|=x.DEPTH_BUFFER_BIT),ie&&(J|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Be.dispose(),Se.dispose(),Fe.dispose(),re.dispose(),S.dispose(),B.dispose(),Q.dispose(),ct.dispose(),z.dispose(),me.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",we),ae.removeEventListener("sessionend",je),Oe.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=de.autoReset,X=xe.enabled,ie=xe.autoUpdate,J=xe.needsUpdate,G=xe.type;Ee(),de.autoReset=A,xe.enabled=X,xe.autoUpdate=ie,xe.needsUpdate=J,xe.type=G}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const X=A.target;X.removeEventListener("dispose",Ye),ut(X)}function ut(A){Ft(A),re.remove(A)}function Ft(A){const X=re.get(A).programs;X!==void 0&&(X.forEach(function(ie){me.releaseProgram(ie)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,J,G,ge){X===null&&(X=Pe);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Ie=Kn(A,X,ie,J,G);se.setMaterial(J,Ae);let Le=ie.index,Ve=1;if(J.wireframe===!0){if(Le=K.getWireframeAttribute(ie),Le===void 0)return;Ve=2}const qe=ie.drawRange,He=ie.attributes.position;let tt=qe.start*Ve,mt=(qe.start+qe.count)*Ve;ge!==null&&(tt=Math.max(tt,ge.start*Ve),mt=Math.min(mt,(ge.start+ge.count)*Ve)),Le!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Le.count)):He!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,He.count));const Xt=mt-tt;if(Xt<0||Xt===1/0)return;ct.setup(G,J,Ie,ie,Le);let Bt,ft=Me;if(Le!==null&&(Bt=$.get(Le),ft=Ge,ft.setIndex(Bt)),G.isMesh)J.wireframe===!0?(se.setLineWidth(J.wireframeLinewidth*R()),ft.setMode(x.LINES)):ft.setMode(x.TRIANGLES);else if(G.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),se.setLineWidth(Xe*R()),G.isLineSegments?ft.setMode(x.LINES):G.isLineLoop?ft.setMode(x.LINE_LOOP):ft.setMode(x.LINE_STRIP)}else G.isPoints?ft.setMode(x.POINTS):G.isSprite&&ft.setMode(x.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,un=G._multiDrawCounts,_t=G._multiDrawCount,Ai=Le?$.get(Le).bytesPerElement:1,no=re.get(J).currentProgram.getUniforms();for(let Zn=0;Zn<_t;Zn++)no.setValue(x,"_gl_DrawID",Zn),ft.render(Xe[Zn]/Ai,un[Zn])}else if(G.isInstancedMesh)ft.renderInstances(tt,Xt,G.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,un=Math.min(ie.instanceCount,Xe);ft.renderInstances(tt,Xt,un)}else ft.render(tt,Xt)};function De(A,X,ie){A.transparent===!0&&A.side===xr&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Mt(A,X,ie),A.side=ls,A.needsUpdate=!0,Mt(A,X,ie),A.side=xr):Mt(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),p=Fe.get(ie),p.init(X),b.push(p),ie.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==ie&&A.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const J=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae];De(Ie,ie,G),J.add(Ie)}else De(ge,ie,G),J.add(ge)}),p=b.pop(),J},this.compileAsync=function(A,X,ie=null){const J=this.compile(A,X,ie);return new Promise(G=>{function ge(){if(J.forEach(function(Ae){re.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){G(A);return}setTimeout(ge,10)}j.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ne=null;function Je(A){Ne&&Ne(A)}function we(){Oe.stop()}function je(){Oe.start()}const Oe=new Tv;Oe.setAnimationLoop(Je),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(A){Ne=A,ae.setAnimationLoop(A),A===null?Oe.stop():Oe.start()},ae.addEventListener("sessionstart",we),ae.addEventListener("sessionend",je),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,X,I),p=Fe.get(A,b.length),p.init(X),b.push(p),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(ne),ve=this.localClippingEnabled,he=_e.init(this.clippingPlanes,ve),m=Se.get(A,M.length),m.init(),M.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&$e(ge,X,-1/0,v.sortObjects)}$e(A,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(fe,F),L=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,L&&Be.addToRenderList(m,A),this.info.render.frame++,he===!0&&_e.beginShadows();const ie=p.state.shadowsArray;xe.render(ie,A,X),he===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(p.setupLights(),X.isArrayCamera){const ge=X.cameras;if(G.length>0)for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const Le=ge[Ae];it(J,G,A,Le)}L&&Be.render(A);for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const Le=ge[Ae];zt(m,A,Le,Le.viewport)}}else G.length>0&&it(J,G,A,X),L&&Be.render(A),zt(m,A,X);I!==null&&w===0&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,X),ct.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],he===!0&&_e.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function $e(A,X,ie,J){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){J&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const Ae=Q.update(A),Ie=A.material;Ie.visible&&m.push(A,Ae,Ie,ie,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ae=Q.update(A),Ie=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Ie)){const Le=Ae.groups;for(let Ve=0,qe=Le.length;Ve<qe;Ve++){const He=Le[Ve],tt=Ie[He.materialIndex];tt&&tt.visible&&m.push(A,Ae,tt,ie,ce.z,He)}}else Ie.visible&&m.push(A,Ae,Ie,ie,ce.z,null)}}const ge=A.children;for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++)$e(ge[Ae],X,ie,J)}function zt(A,X,ie,J){const G=A.opaque,ge=A.transmissive,Ae=A.transparent;p.setupLightsView(ie),he===!0&&_e.setGlobalState(v.clippingPlanes,ie),J&&se.viewport(D.copy(J)),G.length>0&&Rt(G,X,ie),ge.length>0&&Rt(ge,X,ie),Ae.length>0&&Rt(Ae,X,ie),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function it(A,X,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ks(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Sl:Dr,minFilter:Fs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ge=p.state.transmissionRenderTarget[J.id],Ae=J.viewport||D;ge.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(W),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),L&&Be.render(ie);const Le=v.toneMapping;v.toneMapping=rs;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),he===!0&&_e.setGlobalState(v.clippingPlanes,J),Rt(A,ie,J),T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge),j.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let He=0,tt=X.length;He<tt;He++){const mt=X[He],Xt=mt.object,Bt=mt.geometry,ft=mt.material,Xe=mt.group;if(ft.side===xr&&Xt.layers.test(J.layers)){const un=ft.side;ft.side=qn,ft.needsUpdate=!0,Zt(Xt,ie,J,Bt,ft,Xe),ft.side=un,ft.needsUpdate=!0,qe=!0}}qe===!0&&(T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge))}v.setRenderTarget(Ie),v.setClearColor(W,Z),Ve!==void 0&&(J.viewport=Ve),v.toneMapping=Le}function Rt(A,X,ie){const J=X.isScene===!0?X.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){const Ae=A[G],Ie=Ae.object,Le=Ae.geometry,Ve=J===null?Ae.material:J,qe=Ae.group;Ie.layers.test(ie.layers)&&Zt(Ie,X,ie,Le,Ve,qe)}}function Zt(A,X,ie,J,G,ge){A.onBeforeRender(v,X,ie,J,G,ge),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,X,ie,J,A,ge),G.transparent===!0&&G.side===xr&&G.forceSinglePass===!1?(G.side=qn,G.needsUpdate=!0,v.renderBufferDirect(ie,X,J,G,A,ge),G.side=ls,G.needsUpdate=!0,v.renderBufferDirect(ie,X,J,G,A,ge),G.side=xr):v.renderBufferDirect(ie,X,J,G,A,ge),A.onAfterRender(v,X,ie,J,G,ge)}function Mt(A,X,ie){X.isScene!==!0&&(X=Pe);const J=re.get(A),G=p.state.lights,ge=p.state.shadowsArray,Ae=G.state.version,Ie=me.getParameters(A,G.state,ge,X,ie),Le=me.getProgramCacheKey(Ie);let Ve=J.programs;J.environment=A.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Ye),Ve=new Map,J.programs=Ve);let qe=Ve.get(Le);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===Ae)return pt(A,Ie),qe}else Ie.uniforms=me.getUniforms(A),A.onBeforeCompile(Ie,v),qe=me.acquireProgram(Ie,Le),Ve.set(Le,qe),J.uniforms=Ie.uniforms;const He=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=_e.uniform),pt(A,Ie),J.needsLights=An(A),J.lightsStateVersion=Ae,J.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function bt(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function pt(A,X){const ie=re.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Kn(A,X,ie,J,G){X.isScene!==!0&&(X=Pe),T.resetTextureUnits();const ge=X.fog,Ae=J.isMeshStandardMaterial?X.environment:null,Ie=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:aa,Le=(J.isMeshStandardMaterial?B:S).get(J.envMap||Ae),Ve=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,qe=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!ie.morphAttributes.position,tt=!!ie.morphAttributes.normal,mt=!!ie.morphAttributes.color;let Xt=rs;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Xt=v.toneMapping);const Bt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ft=Bt!==void 0?Bt.length:0,Xe=re.get(J),un=p.state.lights;if(he===!0&&(ve===!0||A!==y)){const Rn=A===y&&J.id===E;_e.setState(J,A,Rn)}let _t=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==un.state.version||Xe.outputColorSpace!==Ie||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==Le||J.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==_e.numPlanes||Xe.numIntersection!==_e.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==qe||Xe.morphTargets!==He||Xe.morphNormals!==tt||Xe.morphColors!==mt||Xe.toneMapping!==Xt||Xe.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,Xe.__version=J.version);let Ai=Xe.currentProgram;_t===!0&&(Ai=Mt(J,X,G));let no=!1,Zn=!1,ha=!1;const Lt=Ai.getUniforms(),mi=Xe.uniforms;if(se.useProgram(Ai.program)&&(no=!0,Zn=!0,ha=!0),J.id!==E&&(E=J.id,Zn=!0),no||y!==A){se.buffers.depth.getReversed()?(k.copy(A.projectionMatrix),iE(k),rE(k),Lt.setValue(x,"projectionMatrix",k)):Lt.setValue(x,"projectionMatrix",A.projectionMatrix),Lt.setValue(x,"viewMatrix",A.matrixWorldInverse);const kn=Lt.map.cameraPosition;kn!==void 0&&kn.setValue(x,le.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Lt.setValue(x,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(x,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Zn=!0,ha=!0)}if(G.isSkinnedMesh){Lt.setOptional(x,G,"bindMatrix"),Lt.setOptional(x,G,"bindMatrixInverse");const Rn=G.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Lt.setValue(x,"boneTexture",Rn.boneTexture,T))}G.isBatchedMesh&&(Lt.setOptional(x,G,"batchingTexture"),Lt.setValue(x,"batchingTexture",G._matricesTexture,T),Lt.setOptional(x,G,"batchingIdTexture"),Lt.setValue(x,"batchingIdTexture",G._indirectTexture,T),Lt.setOptional(x,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(x,"batchingColorTexture",G._colorsTexture,T));const _i=ie.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&ke.update(G,ie,Ai),(Zn||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Lt.setValue(x,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(mi.envMap.value=Le,mi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(mi.envMapIntensity.value=X.environmentIntensity),Zn&&(Lt.setValue(x,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Dt(mi,ha),ge&&J.fog===!0&&pe.refreshFogUniforms(mi,ge),pe.refreshMaterialUniforms(mi,J,V,q,p.state.transmissionRenderTarget[A.id]),Ac.upload(x,bt(Xe),mi,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ac.upload(x,bt(Xe),mi,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(x,"center",G.center),Lt.setValue(x,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(x,"normalMatrix",G.normalMatrix),Lt.setValue(x,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Rn=J.uniformsGroups;for(let kn=0,Tu=Rn.length;kn<Tu;kn++){const ps=Rn[kn];z.update(ps,Ai),z.bind(ps,Ai)}}return Ai}function Dt(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function An(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,X,ie){re.get(A.texture).__webglTexture=X,re.get(A.depthTexture).__webglTexture=ie;const J=re.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ie=re.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const pi=x.createFramebuffer();this.setRenderTarget=function(A,X=0,ie=0){I=A,C=X,w=ie;let J=!0,G=null,ge=!1,Ae=!1;if(A){const Le=re.get(A);if(Le.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(x.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Le.__hasExternalTextures)T.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&re.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const qe=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?G=qe[X][ie]:G=qe[X],ge=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?G=re.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[ie]:G=qe,D.copy(A.viewport),N.copy(A.scissor),H=A.scissorTest}else D.copy(ye).multiplyScalar(V).floor(),N.copy(Ce).multiplyScalar(V).floor(),H=ze;if(ie!==0&&(G=pi),se.bindFramebuffer(x.FRAMEBUFFER,G)&&J&&se.drawBuffers(A,G),se.viewport(D),se.scissor(N),se.setScissorTest(H),ge){const Le=re.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ie)}else if(Ae){const Le=re.get(A.texture),Ve=X;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Le.__webglTexture,ie,Ve)}else if(A!==null&&ie!==0){const Le=re.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Le.__webglTexture,ie)}E=-1},this.readRenderTargetPixels=function(A,X,ie,J,G,ge,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){se.bindFramebuffer(x.FRAMEBUFFER,Ie);try{const Le=A.texture,Ve=Le.format,qe=Le.type;if(!U.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-J&&ie>=0&&ie<=A.height-G&&x.readPixels(X,ie,J,G,We.convert(Ve),We.convert(qe),ge)}finally{const Le=I!==null?re.get(I).__webglFramebuffer:null;se.bindFramebuffer(x.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,J,G,ge,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){const Le=A.texture,Ve=Le.format,qe=Le.type;if(!U.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-J&&ie>=0&&ie<=A.height-G){se.bindFramebuffer(x.FRAMEBUFFER,Ie);const He=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,He),x.bufferData(x.PIXEL_PACK_BUFFER,ge.byteLength,x.STREAM_READ),x.readPixels(X,ie,J,G,We.convert(Ve),We.convert(qe),0);const tt=I!==null?re.get(I).__webglFramebuffer:null;se.bindFramebuffer(x.FRAMEBUFFER,tt);const mt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await nE(x,mt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,He),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,ge),x.deleteBuffer(He),x.deleteSync(mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ie=0){A.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-ie),G=Math.floor(A.image.width*J),ge=Math.floor(A.image.height*J),Ae=X!==null?X.x:0,Ie=X!==null?X.y:0;T.setTexture2D(A,0),x.copyTexSubImage2D(x.TEXTURE_2D,ie,0,0,Ae,Ie,G,ge),se.unbindTexture()};const Jt=x.createFramebuffer(),Qt=x.createFramebuffer();this.copyTextureToTexture=function(A,X,ie=null,J=null,G=0,ge=null){A.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],X=arguments[2],ge=arguments[3]||0,ie=null),ge===null&&(G!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=G,G=0):ge=0);let Ae,Ie,Le,Ve,qe,He,tt,mt,Xt;const Bt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(ie!==null)Ae=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Ve=ie.min.x,qe=ie.min.y,He=ie.isBox3?ie.min.z:0;else{const _i=Math.pow(2,-G);Ae=Math.floor(Bt.width*_i),Ie=Math.floor(Bt.height*_i),A.isDataArrayTexture?Le=Bt.depth:A.isData3DTexture?Le=Math.floor(Bt.depth*_i):Le=1,Ve=0,qe=0,He=0}J!==null?(tt=J.x,mt=J.y,Xt=J.z):(tt=0,mt=0,Xt=0);const ft=We.convert(X.format),Xe=We.convert(X.type);let un;X.isData3DTexture?(T.setTexture3D(X,0),un=x.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),un=x.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),un=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,X.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=x.getParameter(x.UNPACK_ROW_LENGTH),Ai=x.getParameter(x.UNPACK_IMAGE_HEIGHT),no=x.getParameter(x.UNPACK_SKIP_PIXELS),Zn=x.getParameter(x.UNPACK_SKIP_ROWS),ha=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Bt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Bt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ve),x.pixelStorei(x.UNPACK_SKIP_ROWS,qe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,He);const Lt=A.isDataArrayTexture||A.isData3DTexture,mi=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const _i=re.get(A),Rn=re.get(X),kn=re.get(_i.__renderTarget),Tu=re.get(Rn.__renderTarget);se.bindFramebuffer(x.READ_FRAMEBUFFER,kn.__webglFramebuffer),se.bindFramebuffer(x.DRAW_FRAMEBUFFER,Tu.__webglFramebuffer);for(let ps=0;ps<Le;ps++)Lt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,re.get(A).__webglTexture,G,He+ps),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,re.get(X).__webglTexture,ge,Xt+ps)),x.blitFramebuffer(Ve,qe,Ae,Ie,tt,mt,Ae,Ie,x.DEPTH_BUFFER_BIT,x.NEAREST);se.bindFramebuffer(x.READ_FRAMEBUFFER,null),se.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||re.has(A)){const _i=re.get(A),Rn=re.get(X);se.bindFramebuffer(x.READ_FRAMEBUFFER,Jt),se.bindFramebuffer(x.DRAW_FRAMEBUFFER,Qt);for(let kn=0;kn<Le;kn++)Lt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,_i.__webglTexture,G,He+kn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,_i.__webglTexture,G),mi?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Rn.__webglTexture,ge,Xt+kn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Rn.__webglTexture,ge),G!==0?x.blitFramebuffer(Ve,qe,Ae,Ie,tt,mt,Ae,Ie,x.COLOR_BUFFER_BIT,x.NEAREST):mi?x.copyTexSubImage3D(un,ge,tt,mt,Xt+kn,Ve,qe,Ae,Ie):x.copyTexSubImage2D(un,ge,tt,mt,Ve,qe,Ae,Ie);se.bindFramebuffer(x.READ_FRAMEBUFFER,null),se.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else mi?A.isDataTexture||A.isData3DTexture?x.texSubImage3D(un,ge,tt,mt,Xt,Ae,Ie,Le,ft,Xe,Bt.data):X.isCompressedArrayTexture?x.compressedTexSubImage3D(un,ge,tt,mt,Xt,Ae,Ie,Le,ft,Bt.data):x.texSubImage3D(un,ge,tt,mt,Xt,Ae,Ie,Le,ft,Xe,Bt):A.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ge,tt,mt,Ae,Ie,ft,Xe,Bt.data):A.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ge,tt,mt,Bt.width,Bt.height,ft,Bt.data):x.texSubImage2D(x.TEXTURE_2D,ge,tt,mt,Ae,Ie,ft,Xe,Bt);x.pixelStorei(x.UNPACK_ROW_LENGTH,_t),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Ai),x.pixelStorei(x.UNPACK_SKIP_PIXELS,no),x.pixelStorei(x.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ha),ge===0&&X.generateMipmaps&&x.generateMipmap(un),se.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ie=null,J=null,G=0){return A.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,J=arguments[1]||null,A=arguments[2],X=arguments[3],G=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ie,J,G)},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){C=0,w=0,I=null,se.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const yR={name:"WaveBackground",props:{particleCount:{type:Number,default:1500},particleSize:{type:Number,default:4},speed:{type:Number,default:.3},flowHeight:{type:Number,default:200}},setup(n){const e=Li(null);let t,i,r,s,o,a=0,l=0,c=window.innerWidth/2,u=window.innerHeight/2;const f={primary:new ht(2307315),secondary:new ht(5332991),light:new ht(12962559)},d=()=>{t=new CE,i=new yi(75,window.innerWidth/window.innerHeight,1,1e4),i.position.z=1e3;const p=new Nr,M=[],b=[],v=[],C=window.innerHeight*(n.flowHeight/100);for(let I=0;I<n.particleCount;I++){const E=Math.random()*2e3-1e3,y=Math.random()*C-C/2,D=Math.random()*2e3-1e3;M.push(E,y,D),b.push(Math.random()*n.particleSize+1);let N;const H=Math.random();H<.4?N=f.primary:H<.8?N=f.secondary:N=f.light,v.push(N.r,N.g,N.b)}p.setAttribute("position",new nr(M,3)),p.setAttribute("size",new nr(b,1)),p.setAttribute("color",new nr(v,3));const w=new bv({size:n.particleSize,vertexColors:!0,transparent:!0,opacity:.75,blending:ld,sizeAttenuation:!0,depthWrite:!1});s=new LE(p,w),t.add(s),r=new xR({alpha:!0,antialias:!0,premultipliedAlpha:!1}),r.setClearColor(0,0),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(r.domElement),document.addEventListener("mousemove",h),window.addEventListener("resize",g)},h=p=>{a=p.clientX-c,l=p.clientY-u},g=()=>{c=window.innerWidth/2,u=window.innerHeight/2,i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},_=()=>{o=requestAnimationFrame(_),m()},m=()=>{i.position.x+=(a-i.position.x)*.05,i.position.y+=(-l-i.position.y)*.05,i.lookAt(t.position),s.rotation.y+=n.speed*.002;const p=s.geometry.attributes.position.array,M=s.geometry.attributes.color.array,b=Date.now()*1e-4;for(let v=0;v<p.length;v+=3){const P=M[v],C=M[v+1];let w=.2,I=.3;P>.8?(w=.35,I=.5):C>.35&&(w=.25,I=.4),p[v+1]+=Math.sin((p[v]+b)*I)*w,p[v]+=Math.cos((p[v+1]+b)*.2)*.1,p[v+1]>window.innerHeight*2&&(p[v+1]=-window.innerHeight*2)}s.geometry.attributes.position.needsUpdate=!0,r.render(t,i)};return du(()=>{d(),_()}),dg(()=>{r&&r.domElement&&(document.removeEventListener("mousemove",h),window.removeEventListener("resize",g),cancelAnimationFrame(o),t.remove(s),s.geometry.dispose(),s.material.dispose(),r.dispose(),e.value&&e.value.contains(r.domElement)&&e.value.removeChild(r.domElement))}),{container:e}}},SR={ref:"container",class:"wave-background"};function MR(n,e,t,i,r,s){return Bi(),es("div",SR,null,512)}const bR=ua(yR,[["render",MR],["__scopeId","data-v-5daa0870"]]);function ER(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function TR(n,e,t){return e&&ER(n.prototype,e),n}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,Rc,li,Zr,Jr,Go,Pv,Ps,Xa,Dv,Er,Di,Lv,Iv=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},Uv=1,Co=[],st=[],ir=[],qa=Date.now,Zd=function(e,t){return t},wR=function(){var e=Xa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,ir),st=i,ir=r,Zd=function(o,a){return t[o](a)}},ss=function(e,t){return~ir.indexOf(e)&&ir[ir.indexOf(e)+1][t]},Ya=function(e){return!!~Dv.indexOf(e)},Dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},tc="scrollLeft",nc="scrollTop",Jd=function(){return Er&&Er.isPressed||st.cache++},Zc=function(e,t){var i=function r(s){if(s||s===0){Uv&&(li.history.scrollRestoration="manual");var o=Er&&Er.isPressed;s=r.v=Math.round(s)||(Er&&Er.iOS?1:0),e(s),r.cacheID=st.cache,o&&Zd("ss",s)}else(t||st.cache!==r.cacheID||Zd("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Bn={s:tc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zc(function(n){return arguments.length?li.scrollTo(n,tn.sc()):li.pageXOffset||Zr[tc]||Jr[tc]||Go[tc]||0})},tn={s:nc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Zc(function(n){return arguments.length?li.scrollTo(Bn.sc(),n):li.pageYOffset||Zr[nc]||Jr[nc]||Go[nc]||0})},Hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},us=function(e,t){var i=t.s,r=t.sc;Ya(e)&&(e=Zr.scrollingElement||Jr);var s=st.indexOf(e),o=r===tn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Dn(e,"scroll",Jd);var a=st[s+o],l=a||(st[s+o]=Zc(ss(e,i),!0)||(Ya(e)?r:Zc(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},Qd=function(e,t,i){var r=e,s=e,o=qa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=qa();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,p=qa();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Ea=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},d_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Nv=function(){Xa=dn.core.globals().ScrollTrigger,Xa&&Xa.core&&wR()},Ov=function(e){return dn=e||Iv(),!Rc&&dn&&typeof document<"u"&&document.body&&(li=window,Zr=document,Jr=Zr.documentElement,Go=Zr.body,Dv=[li,Zr,Jr,Go],dn.utils.clamp,Lv=dn.core.context||function(){},Ps="onpointerenter"in Go?"pointer":"mouse",Pv=Gt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Gt.eventTypes=("ontouchstart"in Jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Uv=0},500),Nv(),Rc=1),Rc};Bn.op=tn;st.cache=0;var Gt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Rc||Ov(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Xa||Nv();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,M=i.onDrag,b=i.onPress,v=i.onRelease,P=i.onRight,C=i.onLeft,w=i.onUp,I=i.onDown,E=i.onChangeX,y=i.onChangeY,D=i.onChange,N=i.onToggleX,H=i.onToggleY,W=i.onHover,Z=i.onHoverEnd,Y=i.onMove,q=i.ignoreCheck,V=i.isNormalizer,fe=i.onGestureStart,F=i.onGestureEnd,ye=i.onWheel,Ce=i.onEnable,ze=i.onDisable,te=i.onClick,he=i.scrollSpeed,ve=i.capture,k=i.allowClicks,ne=i.lockAxis,le=i.onLockAxis;this.target=a=Hn(a)||Jr,this.vars=i,h&&(h=dn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,he=he||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Go).lineHeight)||22);var ce,Pe,L,R,x,ee,j,U=this,se=0,de=0,re=i.passive||!u&&i.passive!==!1,T=us(a,Bn),S=us(a,tn),B=T(),$=S(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",Q=Ya(a),me=a.ownerDocument||Zr,pe=[0,0,0],Se=[0,0,0],Fe=0,_e=function(){return Fe=qa()},xe=function(Ne,Je){return(U.event=Ne)&&h&&~h.indexOf(Ne.target)||Je&&K&&Ne.pointerType!=="touch"||q&&q(Ne,Je)},Be=function(){U._vx.reset(),U._vy.reset(),Pe.pause(),f&&f(U)},ke=function(){var Ne=U.deltaX=d_(pe),Je=U.deltaY=d_(Se),we=Math.abs(Ne)>=r,je=Math.abs(Je)>=r;D&&(we||je)&&D(U,Ne,Je,pe,Se),we&&(P&&U.deltaX>0&&P(U),C&&U.deltaX<0&&C(U),E&&E(U),N&&U.deltaX<0!=se<0&&N(U),se=U.deltaX,pe[0]=pe[1]=pe[2]=0),je&&(I&&U.deltaY>0&&I(U),w&&U.deltaY<0&&w(U),y&&y(U),H&&U.deltaY<0!=de<0&&H(U),de=U.deltaY,Se[0]=Se[1]=Se[2]=0),(R||L)&&(Y&&Y(U),L&&(m&&L===1&&m(U),M&&M(U),L=0),R=!1),ee&&!(ee=!1)&&le&&le(U),x&&(ye(U),x=!1),ce=0},Me=function(Ne,Je,we){pe[we]+=Ne,Se[we]+=Je,U._vx.update(Ne),U._vy.update(Je),c?ce||(ce=requestAnimationFrame(ke)):ke()},Ge=function(Ne,Je){ne&&!j&&(U.axis=j=Math.abs(Ne)>Math.abs(Je)?"x":"y",ee=!0),j!=="y"&&(pe[2]+=Ne,U._vx.update(Ne,!0)),j!=="x"&&(Se[2]+=Je,U._vy.update(Je,!0)),c?ce||(ce=requestAnimationFrame(ke)):ke()},We=function(Ne){if(!xe(Ne,1)){Ne=Ea(Ne,u);var Je=Ne.clientX,we=Ne.clientY,je=Je-U.x,Oe=we-U.y,$e=U.isDragging;U.x=Je,U.y=we,($e||(je||Oe)&&(Math.abs(U.startX-Je)>=s||Math.abs(U.startY-we)>=s))&&(L=$e?2:1,$e||(U.isDragging=!0),Ge(je,Oe))}},ct=U.onPress=function(De){xe(De,1)||De&&De.button||(U.axis=j=null,Pe.pause(),U.isPressed=!0,De=Ea(De),se=de=0,U.startX=U.x=De.clientX,U.startY=U.y=De.clientY,U._vx.reset(),U._vy.reset(),Dn(V?a:me,Di[1],We,re,!0),U.deltaX=U.deltaY=0,b&&b(U))},z=U.onRelease=function(De){if(!xe(De,1)){Cn(V?a:me,Di[1],We,!0);var Ne=!isNaN(U.y-U.startY),Je=U.isDragging,we=Je&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),je=Ea(De);!we&&Ne&&(U._vx.reset(),U._vy.reset(),u&&k&&dn.delayedCall(.08,function(){if(qa()-Fe>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(me.createEvent){var Oe=me.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,li,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(Oe)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&Je&&!V&&Pe.restart(!0),L&&ke(),p&&Je&&p(U),v&&v(U,we)}},Ee=function(Ne){return Ne.touches&&Ne.touches.length>1&&(U.isGesturing=!0)&&fe(Ne,U.isDragging)},ae=function(){return(U.isGesturing=!1)||F(U)},ue=function(Ne){if(!xe(Ne)){var Je=T(),we=S();Me((Je-B)*he,(we-$)*he,1),B=Je,$=we,f&&Pe.restart(!0)}},be=function(Ne){if(!xe(Ne)){Ne=Ea(Ne,u),ye&&(x=!0);var Je=(Ne.deltaMode===1?l:Ne.deltaMode===2?li.innerHeight:1)*g;Me(Ne.deltaX*Je,Ne.deltaY*Je,0),f&&!V&&Pe.restart(!0)}},Te=function(Ne){if(!xe(Ne)){var Je=Ne.clientX,we=Ne.clientY,je=Je-U.x,Oe=we-U.y;U.x=Je,U.y=we,R=!0,f&&Pe.restart(!0),(je||Oe)&&Ge(je,Oe)}},Ye=function(Ne){U.event=Ne,W(U)},ut=function(Ne){U.event=Ne,Z(U)},Ft=function(Ne){return xe(Ne)||Ea(Ne,u)&&te(U)};Pe=U._dc=dn.delayedCall(d||.25,Be).pause(),U.deltaX=U.deltaY=0,U._vx=Qd(0,50,!0),U._vy=Qd(0,50,!0),U.scrollX=T,U.scrollY=S,U.isDragging=U.isGesturing=U.isPressed=!1,Lv(this),U.enable=function(De){return U.isEnabled||(Dn(Q?me:a,"scroll",Jd),o.indexOf("scroll")>=0&&Dn(Q?me:a,"scroll",ue,re,ve),o.indexOf("wheel")>=0&&Dn(a,"wheel",be,re,ve),(o.indexOf("touch")>=0&&Pv||o.indexOf("pointer")>=0)&&(Dn(a,Di[0],ct,re,ve),Dn(me,Di[2],z),Dn(me,Di[3],z),k&&Dn(a,"click",_e,!0,!0),te&&Dn(a,"click",Ft),fe&&Dn(me,"gesturestart",Ee),F&&Dn(me,"gestureend",ae),W&&Dn(a,Ps+"enter",Ye),Z&&Dn(a,Ps+"leave",ut),Y&&Dn(a,Ps+"move",Te)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=R=L=!1,U._vx.reset(),U._vy.reset(),B=T(),$=S(),De&&De.type&&ct(De),Ce&&Ce(U)),U},U.disable=function(){U.isEnabled&&(Co.filter(function(De){return De!==U&&Ya(De.target)}).length||Cn(Q?me:a,"scroll",Jd),U.isPressed&&(U._vx.reset(),U._vy.reset(),Cn(V?a:me,Di[1],We,!0)),Cn(Q?me:a,"scroll",ue,ve),Cn(a,"wheel",be,ve),Cn(a,Di[0],ct,ve),Cn(me,Di[2],z),Cn(me,Di[3],z),Cn(a,"click",_e,!0),Cn(a,"click",Ft),Cn(me,"gesturestart",Ee),Cn(me,"gestureend",ae),Cn(a,Ps+"enter",Ye),Cn(a,Ps+"leave",ut),Cn(a,Ps+"move",Te),U.isEnabled=U.isPressed=U.isDragging=!1,ze&&ze(U))},U.kill=U.revert=function(){U.disable();var De=Co.indexOf(U);De>=0&&Co.splice(De,1),Er===U&&(Er=0)},Co.push(U),V&&Ya(a)&&(Er=U),U.enable(_)},TR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Gt.version="3.12.7";Gt.create=function(n){return new Gt(n)};Gt.register=Ov;Gt.getAll=function(){return Co.slice()};Gt.getById=function(n){return Co.filter(function(e){return e.vars.id===n})[0]};Iv()&&dn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,Eo,rt,Ct,oi,vt,Jh,Jc,_l,$a,Pa,ic,_n,Eu,eh,Un,h_,p_,To,Fv,Ef,Bv,In,th,kv,zv,Gr,nh,Qh,Wo,ep,Qc,ih,Tf,rc=1,gn=Date.now,wf=gn(),Ti=0,Da=0,m_=function(e,t,i){var r=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},__=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},AR=function n(){return Da&&requestAnimationFrame(n)},g_=function(){return Eu=1},v_=function(){return Eu=0},Wi=function(e){return e},La=function(e){return Math.round(e*1e5)/1e5||0},Hv=function(){return typeof window<"u"},Vv=function(){return Ue||Hv()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},Zs=function(e){return!!~Jh.indexOf(e)},Gv=function(e){return(e==="Height"?ep:rt["inner"+e])||oi["client"+e]||vt["client"+e]},Wv=function(e){return ss(e,"getBoundingClientRect")||(Zs(e)?function(){return Ic.width=rt.innerWidth,Ic.height=ep,Ic}:function(){return yr(e)})},RR=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ss(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Gv(s):e["client"+s])||0}},CR=function(e,t){return!t||~ir.indexOf(e)?Wv(e):function(){return Ic}},Zi=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ss(e,i))?o()-Wv(e)()[s]:Zs(e)?(oi[i]||vt[i])-Gv(r):e[i]-e["offset"+r])},sc=function(e,t){for(var i=0;i<To.length;i+=3)(!t||~t.indexOf(To[i+1]))&&e(To[i],To[i+1],To[i+2])},ii=function(e){return typeof e=="string"},Mn=function(e){return typeof e=="function"},Ia=function(e){return typeof e=="number"},Ds=function(e){return typeof e=="object"},Ta=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Af=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},yo=Math.abs,Xv="left",qv="top",tp="right",np="bottom",Ws="width",Xs="height",ja="Right",Ka="Left",Za="Top",Ja="Bottom",Yt="padding",Si="margin",ca="Width",ip="Height",en="px",Mi=function(e){return rt.getComputedStyle(e)},PR=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},x_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},yr=function(e,t){var i=t&&Mi(e)[eh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},eu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Yv=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},DR=function(e){return function(t){return Ue.utils.snap(Yv(e),t)}},rp=function(e){var t=Ue.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},LR=function(e){return function(t,i){return rp(Yv(e))(t,i.direction)}},oc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ac=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},y_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lc={toggleActions:"play",anticipatePin:0},tu={top:0,left:0,center:.5,bottom:1,right:1},Cc=function(e,t){if(ii(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in tu?tu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},cc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ct.createElement("div"),_=Zs(i)||ss(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?vt:i,M=e.indexOf("start")!==-1,b=M?c:u,v="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===tn?tp:np)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Pc(g,0,r,M),g},Pc=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ca]=1,s["border"+a+ca]=0,s[i.p]=t+"px",Ue.set(e,s)},nt=[],rh={},gl,S_=function(){return gn()-Ti>34&&(gl||(gl=requestAnimationFrame(Rr)))},So=function(){(!In||!In.isPressed||In.startX>vt.clientWidth)&&(st.cache++,In?gl||(gl=requestAnimationFrame(Rr)):Rr(),Ti||Qs("scrollStart"),Ti=gn())},Rf=function(){zv=rt.innerWidth,kv=rt.innerHeight},Ua=function(e){st.cache++,(e===!0||!_n&&!Bv&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!th||zv!==rt.innerWidth||Math.abs(rt.innerHeight-kv)>rt.innerHeight*.25))&&Jc.restart(!0)},Js={},IR=[],$v=function n(){return on(ot,"scrollEnd",n)||Bs(!0)},Qs=function(e){return Js[e]&&Js[e].map(function(t){return t()})||IR},ni=[],jv=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},sp=function(e,t){var i;for(Un=0;Un<nt.length;Un++)i=nt[Un],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Qc=!0,t&&jv(t),t||Qs("revert")},Kv=function(e,t){st.cache++,(t||!Nn)&&st.forEach(function(i){return Mn(i)&&i.cacheID++&&(i.rec=0)}),ii(e)&&(rt.history.scrollRestoration=Qh=e)},Nn,qs=0,M_,UR=function(){if(M_!==qs){var e=M_=qs;requestAnimationFrame(function(){return e===qs&&Bs(!0)})}},Zv=function(){vt.appendChild(Wo),ep=!In&&Wo.offsetHeight||rt.innerHeight,vt.removeChild(Wo)},b_=function(e){return _l(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Bs=function(e,t){if(oi=Ct.documentElement,vt=Ct.body,Jh=[rt,Ct,oi,vt],Ti&&!e&&!Qc){ln(ot,"scrollEnd",$v);return}Zv(),Nn=ot.isRefreshing=!0,st.forEach(function(r){return Mn(r)&&++r.cacheID&&(r.rec=r())});var i=Qs("refreshInit");Fv&&ot.sort(),t||sp(),st.forEach(function(r){Mn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),Qc=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),ih=1,b_(!0),nt.forEach(function(r){var s=Zi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),b_(!1),ih=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){Mn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Kv(Qh,1),Jc.pause(),qs++,Nn=2,Rr(2),nt.forEach(function(r){return Mn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Nn=ot.isRefreshing=!1,Qs("refresh")},sh=0,Dc=1,Qa,Rr=function(e){if(e===2||!Nn&&!Qc){ot.isUpdating=!0,Qa&&Qa.update(0);var t=nt.length,i=gn(),r=i-wf>=50,s=t&&nt[0].scroll();if(Dc=sh>s?-1:1,Nn||(sh=s),r&&(Ti&&!Eu&&i-Ti>200&&(Ti=0,Qs("scrollEnd")),Pa=wf,wf=i),Dc<0){for(Un=t;Un-- >0;)nt[Un]&&nt[Un].update(0,r);Dc=1}else for(Un=0;Un<t;Un++)nt[Un]&&nt[Un].update(0,r);ot.isUpdating=!1}gl=0},oh=[Xv,qv,np,tp,Si+Ja,Si+ja,Si+Za,Si+Ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lc=oh.concat([Ws,Xs,"boxSizing","max"+ca,"max"+ip,"position",Si,Yt,Yt+Za,Yt+ja,Yt+Ja,Yt+Ka]),NR=function(e,t,i){Xo(i);var r=e._gsap;if(r.spacerIsNative)Xo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Cf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=oh.length,o=t.style,a=e.style,l;s--;)l=oh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[np]=a[tp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ws]=eu(e,Bn)+en,o[Xs]=eu(e,tn)+en,o[Yt]=a[Si]=a[qv]=a[Xv]="0",Xo(r),a[Ws]=a["max"+ca]=i[Ws],a[Xs]=a["max"+ip]=i[Xs],a[Yt]=i[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},OR=/([A-Z])/g,Xo=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(OR,"-$1").toLowerCase())}},uc=function(e){for(var t=Lc.length,i=e.style,r=[],s=0;s<t;s++)r.push(Lc[s],i[Lc[s]]);return r.t=e,r},FR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ic={left:0,top:0},E_=function(e,t,i,r,s,o,a,l,c,u,f,d,h,g){Mn(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Cc("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,M;if(h&&h.seek(0),isNaN(e)||(e=+e),Ia(e))h&&(e=Ue.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Pc(a,i,r,!0);else{Mn(t)&&(t=t(l));var b=(e||"0").split(" "),v,P,C,w;M=Hn(t,l)||vt,v=yr(M)||{},(!v||!v.left&&!v.top)&&Mi(M).display==="none"&&(w=M.style.display,M.style.display="block",v=yr(M),w?M.style.display=w:M.style.removeProperty("display")),P=Cc(b[0],v[r.d]),C=Cc(b[1]||"0",i),e=v[r.p]-c[r.p]-u+P+s-C,a&&Pc(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+i,E=o._isStart;m="scroll"+r.d2,Pc(o,I,r,E&&I>20||!E&&(f?Math.max(vt[m],oi[m]):o.parentNode[m])<=I+1),f&&(c=yr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+en))}return h&&M&&(m=yr(M),h.seek(d),p=yr(M),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},BR=/(webkit|moz|length|cssText|inset)/i,T_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Mi(e);for(o in a)!+o&&!BR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},Jv=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},fc=function(e,t,i){var r={};r[t.p]="+="+i,Ue.set(e,r)},w_=function(e,t){var i=us(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||i();var _=Jv(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Rr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ue.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",i.wheelHandler),ot.isTouch&&ln(e,"touchmove",i.wheelHandler),s},ot=function(){function n(t,i){Eo||n.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Wi;return}i=x_(ii(i)||Ia(i)||i.nodeType?{trigger:i}:i,lc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,b=s.once,v=s.snap,P=s.pinReparent,C=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,E=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Bn:tn,D=!f&&f!==0,N=Hn(i.scroller||rt),H=Ue.core.getCache(N),W=Zs(N),Z=("pinType"in i?i.pinType:ss(N,"pinType")||W&&"fixed")==="fixed",Y=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],q=D&&i.toggleActions.split(" "),V="markers"in i?i.markers:lc.markers,fe=W?0:parseFloat(Mi(N)["border"+y.p2+ca])||0,F=this,ye=i.onRefreshInit&&function(){return i.onRefreshInit(F)},Ce=RR(N,W,y),ze=CR(N,W),te=0,he=0,ve=0,k=us(N,y),ne,le,ce,Pe,L,R,x,ee,j,U,se,de,re,T,S,B,$,K,Q,me,pe,Se,Fe,_e,xe,Be,ke,Me,Ge,We,ct,z,Ee,ae,ue,be,Te,Ye,ut;if(F._startClamp=F._endClamp=!1,F._dir=y,m*=45,F.scroller=N,F.scroll=w?w.time.bind(w):k,Pe=k(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(Fv=1,i.refreshPriority===-9999&&(Qa=F)),H.tweenScroll=H.tweenScroll||{top:w_(N,tn),left:w_(N,Bn)},F.tweenTo=ne=H.tweenScroll[y.p],F.scrubDuration=function(we){Ee=Ia(we)&&we,Ee?z?z.duration(we):z=Ue.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ee,paused:!0,onComplete:function(){return p&&p(F)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(f),We=0,l||(l=r.vars.id)),v&&((!Ds(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in vt.style&&Ue.set(W?[vt,oi]:N,{scrollBehavior:"auto"}),st.forEach(function(we){return Mn(we)&&we.target===(W?Ct.scrollingElement||oi:N)&&(we.smooth=!1)}),ce=Mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?DR(r):v.snapTo==="labelsDirectional"?LR(r):v.directional!==!1?function(we,je){return rp(v.snapTo)(we,gn()-he<500?0:je.direction)}:Ue.utils.snap(v.snapTo),ae=v.duration||{min:.1,max:2},ae=Ds(ae)?$a(ae.min,ae.max):$a(ae,ae),ue=Ue.delayedCall(v.delay||Ee/2||.1,function(){var we=k(),je=gn()-he<500,Oe=ne.tween;if((je||Math.abs(F.getVelocity())<10)&&!Oe&&!Eu&&te!==we){var $e=(we-R)/T,zt=r&&!D?r.totalProgress():$e,it=je?0:(zt-ct)/(gn()-Pa)*1e3||0,Rt=Ue.utils.clamp(-$e,1-$e,yo(it/2)*it/.185),Zt=$e+(v.inertia===!1?0:Rt),Mt,bt,pt=v,Kn=pt.onStart,Dt=pt.onInterrupt,An=pt.onComplete;if(Mt=ce(Zt,F),Ia(Mt)||(Mt=Zt),bt=Math.max(0,Math.round(R+Mt*T)),we<=x&&we>=R&&bt!==we){if(Oe&&!Oe._initted&&Oe.data<=yo(bt-we))return;v.inertia===!1&&(Rt=Mt-$e),ne(bt,{duration:ae(yo(Math.max(yo(Zt-zt),yo(Mt-zt))*.185/it/.05||0)),ease:v.ease||"power3",data:yo(bt-we),onInterrupt:function(){return ue.restart(!0)&&Dt&&Dt(F)},onComplete:function(){F.update(),te=k(),r&&!D&&(z?z.resetTo("totalProgress",Mt,r._tTime/r._tDur):r.progress(Mt)),We=ct=r&&!D?r.totalProgress():F.progress,M&&M(F),An&&An(F)}},we,Rt*T,bt-we-Rt*T),Kn&&Kn(F,ne.tween)}}else F.isActive&&te!==we&&ue.restart(!0)}).pause()),l&&(rh[l]=F),d=F.trigger=Hn(d||h!==!0&&h),ut=d&&d._gsap&&d._gsap.stRevert,ut&&(ut=ut(F)),h=h===!0?d:Hn(h),ii(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Si||(g=!g&&h.parentNode&&h.parentNode.style&&Mi(h.parentNode).display==="flex"?!1:Yt),F.pin=h,le=Ue.core.getCache(h),le.spacer?S=le.pinState:(C&&(C=Hn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),le.spacerIsNative=!!C,C&&(le.spacerState=uc(C))),le.spacer=K=C||Ct.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),le.pinState=S=uc(h)),i.force3D!==!1&&Ue.set(h,{force3D:!0}),F.spacer=K=le.spacer,Ge=Mi(h),_e=Ge[g+y.os2],me=Ue.getProperty(h),pe=Ue.quickSetter(h,y.a,en),Cf(h,K,Ge),$=uc(h)),V){de=Ds(V)?x_(V,y_):y_,U=cc("scroller-start",l,N,y,de,0),se=cc("scroller-end",l,N,y,de,0,U),Q=U["offset"+y.op.d2];var Ft=Hn(ss(N,"content")||N);ee=this.markerStart=cc("start",l,Ft,y,de,Q,0,w),j=this.markerEnd=cc("end",l,Ft,y,de,Q,0,w),w&&(Ye=Ue.quickSetter([ee,j],y.a,en)),!Z&&!(ir.length&&ss(N,"fixedMarkers")===!0)&&(PR(W?vt:N),Ue.set([U,se],{force3D:!0}),Be=Ue.quickSetter(U,y.a,en),Me=Ue.quickSetter(se,y.a,en))}if(w){var De=w.vars.onUpdate,Ne=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){F.update(0,0,1),De&&De.apply(w,Ne||[])})}if(F.previous=function(){return nt[nt.indexOf(F)-1]},F.next=function(){return nt[nt.indexOf(F)+1]},F.revert=function(we,je){if(!je)return F.kill(!0);var Oe=we!==!1||!F.enabled,$e=_n;Oe!==F.isReverted&&(Oe&&(be=Math.max(k(),F.scroll.rec||0),ve=F.progress,Te=r&&r.progress()),ee&&[ee,j,U,se].forEach(function(zt){return zt.style.display=Oe?"none":"block"}),Oe&&(_n=F,F.update(Oe)),h&&(!P||!F.isActive)&&(Oe?NR(h,K,S):Cf(h,K,Mi(h),xe)),Oe||F.update(Oe),_n=$e,F.isReverted=Oe)},F.refresh=function(we,je,Oe,$e){if(!((_n||!F.enabled)&&!je)){if(h&&we&&Ti){ln(n,"scrollEnd",$v);return}!Nn&&ye&&ye(F),_n=F,ne.tween&&!Oe&&(ne.tween.kill(),ne.tween=0),z&&z.pause(),_&&r&&r.revert({kill:!1}).invalidate(),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var zt=Ce(),it=ze(),Rt=w?w.duration():Zi(N,y),Zt=T<=.01,Mt=0,bt=$e||0,pt=Ds(Oe)?Oe.end:i.end,Kn=i.endTrigger||d,Dt=Ds(Oe)?Oe.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),An=F.pinnedContainer=i.pinnedContainer&&Hn(i.pinnedContainer,F),pi=d&&Math.max(0,nt.indexOf(F))||0,Jt=pi,Qt,A,X,ie,J,G,ge,Ae,Ie,Le,Ve,qe,He;for(V&&Ds(Oe)&&(qe=Ue.getProperty(U,y.p),He=Ue.getProperty(se,y.p));Jt-- >0;)G=nt[Jt],G.end||G.refresh(0,1)||(_n=F),ge=G.pin,ge&&(ge===d||ge===h||ge===An)&&!G.isReverted&&(Le||(Le=[]),Le.unshift(G),G.revert(!0,!0)),G!==nt[Jt]&&(pi--,Jt--);for(Mn(Dt)&&(Dt=Dt(F)),Dt=m_(Dt,"start",F),R=E_(Dt,d,zt,y,k(),ee,U,F,it,fe,Z,Rt,w,F._startClamp&&"_startClamp")||(h?-.001:0),Mn(pt)&&(pt=pt(F)),ii(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(ii(Dt)?Dt.split(" ")[0]:"")+pt:(Mt=Cc(pt.substr(2),zt),pt=ii(Dt)?Dt:(w?Ue.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,R):R)+Mt,Kn=d)),pt=m_(pt,"end",F),x=Math.max(R,E_(pt||(Kn?"100% 0":Rt),Kn,zt,y,k()+Mt,j,se,F,it,fe,Z,Rt,w,F._endClamp&&"_endClamp"))||-.001,Mt=0,Jt=pi;Jt--;)G=nt[Jt],ge=G.pin,ge&&G.start-G._pinPush<=R&&!w&&G.end>0&&(Qt=G.end-(F._startClamp?Math.max(0,G.start):G.start),(ge===d&&G.start-G._pinPush<R||ge===An)&&isNaN(Dt)&&(Mt+=Qt*(1-G.progress)),ge===h&&(bt+=Qt));if(R+=Mt,x+=Mt,F._startClamp&&(F._startClamp+=Mt),F._endClamp&&!Nn&&(F._endClamp=x||-.001,x=Math.min(x,Zi(N,y))),T=x-R||(R-=.01)&&.001,Zt&&(ve=Ue.utils.clamp(0,1,Ue.utils.normalize(R,x,be))),F._pinPush=bt,ee&&Mt&&(Qt={},Qt[y.a]="+="+Mt,An&&(Qt[y.p]="-="+k()),Ue.set([ee,j],Qt)),h&&!(ih&&F.end>=Zi(N,y)))Qt=Mi(h),ie=y===tn,X=k(),Se=parseFloat(me(y.a))+bt,!Rt&&x>1&&(Ve=(W?Ct.scrollingElement||oi:N).style,Ve={style:Ve,value:Ve["overflow"+y.a.toUpperCase()]},W&&Mi(vt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ve.style["overflow"+y.a.toUpperCase()]="scroll")),Cf(h,K,Qt),$=uc(h),A=yr(h,!0),Ae=Z&&us(N,ie?Bn:tn)(),g?(xe=[g+y.os2,T+bt+en],xe.t=K,Jt=g===Yt?eu(h,y)+T+bt:0,Jt&&(xe.push(y.d,Jt+en),K.style.flexBasis!=="auto"&&(K.style.flexBasis=Jt+en)),Xo(xe),An&&nt.forEach(function(tt){tt.pin===An&&tt.vars.pinSpacing!==!1&&(tt._subPinOffset=!0)}),Z&&k(be)):(Jt=eu(h,y),Jt&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=Jt+en)),Z&&(J={top:A.top+(ie?X-R:Ae)+en,left:A.left+(ie?Ae:X-R)+en,boxSizing:"border-box",position:"fixed"},J[Ws]=J["max"+ca]=Math.ceil(A.width)+en,J[Xs]=J["max"+ip]=Math.ceil(A.height)+en,J[Si]=J[Si+Za]=J[Si+ja]=J[Si+Ja]=J[Si+Ka]="0",J[Yt]=Qt[Yt],J[Yt+Za]=Qt[Yt+Za],J[Yt+ja]=Qt[Yt+ja],J[Yt+Ja]=Qt[Yt+Ja],J[Yt+Ka]=Qt[Yt+Ka],B=FR(S,J,P),Nn&&k(0)),r?(Ie=r._initted,Ef(1),r.render(r.duration(),!0,!0),Fe=me(y.a)-Se+T+bt,ke=Math.abs(T-Fe)>1,Z&&ke&&B.splice(B.length-2,2),r.render(0,!0,!0),Ie||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ef(0)):Fe=T,Ve&&(Ve.value?Ve.style["overflow"+y.a.toUpperCase()]=Ve.value:Ve.style.removeProperty("overflow-"+y.a));else if(d&&k()&&!w)for(A=d.parentNode;A&&A!==vt;)A._pinOffset&&(R-=A._pinOffset,x-=A._pinOffset),A=A.parentNode;Le&&Le.forEach(function(tt){return tt.revert(!1,!0)}),F.start=R,F.end=x,Pe=L=Nn?be:k(),!w&&!Nn&&(Pe<be&&k(be),F.scroll.rec=0),F.revert(!1,!0),he=gn(),ue&&(te=-1,ue.restart(!0)),_n=0,r&&D&&(r._initted||Te)&&r.progress()!==Te&&r.progress(Te||0,!0).render(r.time(),!0,!0),(Zt||ve!==F.progress||w||_||r&&!r._initted)&&(r&&!D&&r.totalProgress(w&&R<-.001&&!ve?Ue.utils.normalize(R,x,0):ve,!0),F.progress=Zt||(Pe-R)/T===ve?0:ve),h&&g&&(K._pinOffset=Math.round(F.progress*Fe)),z&&z.invalidate(),isNaN(qe)||(qe-=Ue.getProperty(U,y.p),He-=Ue.getProperty(se,y.p),fc(U,y,qe),fc(ee,y,qe-($e||0)),fc(se,y,He),fc(j,y,He-($e||0))),Zt&&!Nn&&F.update(),u&&!Nn&&!re&&(re=!0,u(F),re=!1)}},F.getVelocity=function(){return(k()-L)/(gn()-Pa)*1e3||0},F.endAnimation=function(){Ta(F.callbackAnimation),r&&(z?z.progress(1):r.paused()?D||Ta(r,F.direction<0,1):Ta(r,r.reversed()))},F.labelToScroll=function(we){return r&&r.labels&&(R||F.refresh()||R)+r.labels[we]/r.duration()*T||0},F.getTrailing=function(we){var je=nt.indexOf(F),Oe=F.direction>0?nt.slice(0,je).reverse():nt.slice(je+1);return(ii(we)?Oe.filter(function($e){return $e.vars.preventOverlaps===we}):Oe).filter(function($e){return F.direction>0?$e.end<=R:$e.start>=x})},F.update=function(we,je,Oe){if(!(w&&!Oe&&!we)){var $e=Nn===!0?be:F.scroll(),zt=we?0:($e-R)/T,it=zt<0?0:zt>1?1:zt||0,Rt=F.progress,Zt,Mt,bt,pt,Kn,Dt,An,pi;if(je&&(L=Pe,Pe=w?k():$e,v&&(ct=We,We=r&&!D?r.totalProgress():it)),m&&h&&!_n&&!rc&&Ti&&(!it&&R<$e+($e-L)/(gn()-Pa)*m?it=1e-4:it===1&&x>$e+($e-L)/(gn()-Pa)*m&&(it=.9999)),it!==Rt&&F.enabled){if(Zt=F.isActive=!!it&&it<1,Mt=!!Rt&&Rt<1,Dt=Zt!==Mt,Kn=Dt||!!it!=!!Rt,F.direction=it>Rt?1:-1,F.progress=it,Kn&&!_n&&(bt=it&&!Rt?0:it===1?1:Rt===1?2:3,D&&(pt=!Dt&&q[bt+1]!=="none"&&q[bt+1]||q[bt],pi=r&&(pt==="complete"||pt==="reset"||pt in r))),E&&(Dt||pi)&&(pi||f||!r)&&(Mn(E)?E(F):F.getTrailing(E).forEach(function(X){return X.endAnimation()})),D||(z&&!_n&&!rc?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",it,r._tTime/r._tDur):(z.vars.totalProgress=it,z.invalidate().restart())):r&&r.totalProgress(it,!!(_n&&(he||we)))),h){if(we&&g&&(K.style[g+y.os2]=_e),!Z)pe(La(Se+Fe*it));else if(Kn){if(An=!we&&it>Rt&&x+1>$e&&$e+1>=Zi(N,y),P)if(!we&&(Zt||An)){var Jt=yr(h,!0),Qt=$e-R;T_(h,vt,Jt.top+(y===tn?Qt:0)+en,Jt.left+(y===tn?0:Qt)+en)}else T_(h,K);Xo(Zt||An?B:$),ke&&it<1&&Zt||pe(Se+(it===1&&!An?Fe:0))}}v&&!ne.tween&&!_n&&!rc&&ue.restart(!0),a&&(Dt||b&&it&&(it<1||!Tf))&&_l(a.targets).forEach(function(X){return X.classList[Zt||b?"add":"remove"](a.className)}),o&&!D&&!we&&o(F),Kn&&!_n?(D&&(pi&&(pt==="complete"?r.pause().totalProgress(1):pt==="reset"?r.restart(!0).pause():pt==="restart"?r.restart(!0):r[pt]()),o&&o(F)),(Dt||!Tf)&&(c&&Dt&&Af(F,c),Y[bt]&&Af(F,Y[bt]),b&&(it===1?F.kill(!1,1):Y[bt]=0),Dt||(bt=it===1?1:3,Y[bt]&&Af(F,Y[bt]))),I&&!Zt&&Math.abs(F.getVelocity())>(Ia(I)?I:2500)&&(Ta(F.callbackAnimation),z?z.progress(1):Ta(r,pt==="reverse"?1:!it,1))):D&&o&&!_n&&o(F)}if(Me){var A=w?$e/w.duration()*(w._caScrollDist||0):$e;Be(A+(U._isFlipped?1:0)),Me(A)}Ye&&Ye(-$e/w.duration()*(w._caScrollDist||0))}},F.enable=function(we,je){F.enabled||(F.enabled=!0,ln(N,"resize",Ua),W||ln(N,"scroll",So),ye&&ln(n,"refreshInit",ye),we!==!1&&(F.progress=ve=0,Pe=L=te=k()),je!==!1&&F.refresh())},F.getTween=function(we){return we&&ne?ne.tween:z},F.setPositions=function(we,je,Oe,$e){if(w){var zt=w.scrollTrigger,it=w.duration(),Rt=zt.end-zt.start;we=zt.start+Rt*we/it,je=zt.start+Rt*je/it}F.refresh(!1,!1,{start:__(we,Oe&&!!F._startClamp),end:__(je,Oe&&!!F._endClamp)},$e),F.update()},F.adjustPinSpacing=function(we){if(xe&&we){var je=xe.indexOf(y.d)+1;xe[je]=parseFloat(xe[je])+we+en,xe[1]=parseFloat(xe[1])+we+en,Xo(xe)}},F.disable=function(we,je){if(F.enabled&&(we!==!1&&F.revert(!0,!0),F.enabled=F.isActive=!1,je||z&&z.pause(),be=0,le&&(le.uncache=1),ye&&on(n,"refreshInit",ye),ue&&(ue.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!W)){for(var Oe=nt.length;Oe--;)if(nt[Oe].scroller===N&&nt[Oe]!==F)return;on(N,"resize",Ua),W||on(N,"scroll",So)}},F.kill=function(we,je){F.disable(we,je),z&&!je&&z.kill(),l&&delete rh[l];var Oe=nt.indexOf(F);Oe>=0&&nt.splice(Oe,1),Oe===Un&&Dc>0&&Un--,Oe=0,nt.forEach(function($e){return $e.scroller===F.scroller&&(Oe=1)}),Oe||Nn||(F.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),je||r.kill()),ee&&[ee,j,U,se].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),Qa===F&&(Qa=0),h&&(le&&(le.uncache=1),Oe=0,nt.forEach(function($e){return $e.pin===h&&Oe++}),Oe||(le.spacer=0)),i.onKill&&i.onKill(F)},nt.push(F),F.enable(!1,!1),ut&&ut(F),r&&r.add&&!T){var Je=F.update;F.update=function(){F.update=Je,st.cache++,R||x||F.refresh()},Ue.delayedCall(.01,F.update),T=.01,R=x=0}else F.refresh();h&&UR()},n.register=function(i){return Eo||(Ue=i||Vv(),Hv()&&window.document&&n.enable(),Eo=Da),Eo},n.defaults=function(i){if(i)for(var r in i)lc[r]=i[r];return lc},n.disable=function(i,r){Da=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),on(rt,"wheel",So),on(Ct,"scroll",So),clearInterval(ic),on(Ct,"touchcancel",Wi),on(vt,"touchstart",Wi),oc(on,Ct,"pointerdown,touchstart,mousedown",g_),oc(on,Ct,"pointerup,touchend,mouseup",v_),Jc.kill(),sc(on);for(var s=0;s<st.length;s+=3)ac(on,st[s],st[s+1]),ac(on,st[s],st[s+2])},n.enable=function(){if(rt=window,Ct=document,oi=Ct.documentElement,vt=Ct.body,Ue&&(_l=Ue.utils.toArray,$a=Ue.utils.clamp,nh=Ue.core.context||Wi,Ef=Ue.core.suppressOverwrites||Wi,Qh=rt.history.scrollRestoration||"auto",sh=rt.pageYOffset||0,Ue.core.globals("ScrollTrigger",n),vt)){Da=1,Wo=document.createElement("div"),Wo.style.height="100vh",Wo.style.position="absolute",Zv(),AR(),Gt.register(Ue),n.isTouch=Gt.isTouch,Gr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),th=Gt.isTouch===1,ln(rt,"wheel",So),Jh=[rt,Ct,oi,vt],Ue.matchMedia?(n.matchMedia=function(c){var u=Ue.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ue.addEventListener("matchMediaInit",function(){return sp()}),Ue.addEventListener("matchMediaRevert",function(){return jv()}),Ue.addEventListener("matchMedia",function(){Bs(0,1),Qs("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return Rf(),Rf})):console.warn("Requires GSAP 3.11.0 or later"),Rf(),ln(Ct,"scroll",So);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=yr(vt),tn.m=Math.round(a.top+tn.sc())||0,Bn.m=Math.round(a.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),ic=setInterval(S_,250),Ue.delayedCall(.5,function(){return rc=0}),ln(Ct,"touchcancel",Wi),ln(vt,"touchstart",Wi),oc(ln,Ct,"pointerdown,touchstart,mousedown",g_),oc(ln,Ct,"pointerup,touchend,mouseup",v_),eh=Ue.utils.checkPrefix("transform"),Lc.push(eh),Eo=gn(),Jc=Ue.delayedCall(.2,Bs).pause(),To=[Ct,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Ct.hidden?(h_=c,p_=u):(h_!==c||p_!==u)&&Ua()},Ct,"DOMContentLoaded",Bs,rt,"load",Bs,rt,"resize",Ua],sc(ln),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)ac(on,st[l],st[l+1]),ac(on,st[l],st[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Tf=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(ic)||(ic=r)&&setInterval(S_,r),"ignoreMobileResize"in i&&(th=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(sc(on)||sc(ln,i.autoRefreshEvents||"none"),Bv=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Hn(i),o=st.indexOf(s),a=Zs(s);~o&&st.splice(o,a?6:2),r&&(a?ir.unshift(rt,r,vt,r,oi,r):ir.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(ii(i)?Hn(i):i).getBoundingClientRect(),a=o[s?Ws:Xs]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},n.positionInViewport=function(i,r,s){ii(i)&&(i=Hn(i));var o=i.getBoundingClientRect(),a=o[s?Ws:Xs],l=r==null?a/2:r in tu?tu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Js.killAll||[];Js={},r.forEach(function(s){return s()})}},n}();ot.version="3.12.7";ot.saveStyles=function(n){return n?_l(n).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),nh())}}):ni};ot.revert=function(n,e){return sp(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?Ua(!0):(Eo||ot.register())&&Bs(!0)};ot.update=function(n){return++st.cache&&Rr(n===!0?2:0)};ot.clearScrollMemory=Kv;ot.maxScroll=function(n,e){return Zi(n,e?Bn:tn)};ot.getScrollFunc=function(n,e){return us(Hn(n),e?Bn:tn)};ot.getById=function(n){return rh[n]};ot.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Ti};ot.snapDirectional=rp;ot.addEventListener=function(n,e){var t=Js[n]||(Js[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=Js[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Ue.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Mn(s)&&(s=s(),ln(ot,"refresh",function(){return s=e.batchMax()})),_l(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var A_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Pf=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===oi&&n(vt,t)},dc={auto:1,scroll:1},kR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(dc[(l=Mi(s)).overflowY]||dc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Zs(s)&&(dc[(l=Mi(s)).overflowY]||dc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qv=function(e,t,i,r){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&kR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&ln(Ct,Gt.eventTypes[0],C_,!1,!0)},onDisable:function(){return on(Ct,Gt.eventTypes[0],C_,!0)}})},zR=/(input|label|select|textarea)/i,R_,C_=function(e){var t=zR.test(e.target.tagName);(t||R_)&&(e._gsapAllow=!0,R_=t)},HR=function(e){Ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Hn(e.target)||oi,u=Ue.core.globals().ScrollSmoother,f=u&&u.get(),d=Gr&&(e.content&&Hn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=us(c,tn),g=us(c,Bn),_=1,m=(Gt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,M=Mn(r)?function(){return r(a)}:function(){return r||2.8},b,v,P=Qv(c,e.type,!0,s),C=function(){return v=!1},w=Wi,I=Wi,E=function(){l=Zi(c,tn),I=$a(Gr?1:0,l),i&&(w=$a(0,Zi(c,Bn))),b=qs},y=function(){d._gsap.y=La(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(v){requestAnimationFrame(C);var V=La(a.deltaY/2),fe=I(h.v-V);if(d&&fe!==h.v+h.offset){h.offset=fe-h.v;var F=La((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",d._gsap.y=F+"px",h.cacheID=st.cache,Rr()}return!0}h.offset&&y(),v=!0},N,H,W,Z,Y=function(){E(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return d&&Ue.set(d,{y:"+=0"}),e.ignoreCheck=function(q){return Gr&&q.type==="touchmove"&&D()||_>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=_;_=La((rt.visualViewport&&rt.visualViewport.scale||1)/m),N.pause(),q!==_&&Pf(c,_>1.01?!0:i?!1:"x"),H=g(),W=h(),E(),b=qs},e.onRelease=e.onGestureStart=function(q,V){if(h.offset&&y(),!V)Z.restart(!0);else{st.cache++;var fe=M(),F,ye;i&&(F=g(),ye=F+fe*.05*-q.velocityX/.227,fe*=A_(g,F,ye,Zi(c,Bn)),N.vars.scrollX=w(ye)),F=h(),ye=F+fe*.05*-q.velocityY/.227,fe*=A_(h,F,ye,Zi(c,tn)),N.vars.scrollY=I(ye),N.invalidate().duration(fe).play(.01),(Gr&&N.vars.scrollY>=l||F>=l-1)&&Ue.to({},{onUpdate:Y,duration:fe})}o&&o(q)},e.onWheel=function(){N._ts&&N.pause(),gn()-p>1e3&&(b=0,p=gn())},e.onChange=function(q,V,fe,F,ye){if(qs!==b&&E(),V&&i&&g(w(F[2]===V?H+(q.startX-q.x):g()+V-F[1])),fe){h.offset&&y();var Ce=ye[2]===fe,ze=Ce?W+q.startY-q.y:h()+fe-ye[1],te=I(ze);Ce&&ze!==te&&(W+=te-ze),h(te)}(fe||V)&&Rr()},e.onEnable=function(){Pf(c,i?!1:"x"),ot.addEventListener("refresh",Y),ln(rt,"resize",Y),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),P.enable()},e.onDisable=function(){Pf(c,!0),on(rt,"resize",Y),ot.removeEventListener("refresh",Y),P.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Gr,Gr&&!h()&&h(1),Gr&&Ue.ticker.add(Wi),Z=a._dc,N=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jv(h,h(),function(){return N.pause()})},onUpdate:Rr,onComplete:Z.vars.onComplete}),a};ot.sort=function(n){if(Mn(n))return nt.sort(n);var e=rt.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new Gt(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return In;if(n===!0&&In)return In.enable();if(n===!1){In&&In.kill(),In=n;return}var e=n instanceof Gt?n:HR(n);return In&&In.target===e.target&&In.kill(),Zs(e.target)&&(In=e),e};ot.core={_getVelocityProp:Qd,_inputObserver:Qv,_scrollers:st,_proxies:ir,bridge:{ss:function(){Ti||Qs("scrollStart"),Ti=gn()},ref:function(){return _n}}};Vv()&&Ue.registerPlugin(ot);const VR="/assets/pawhouse-BVW6E_Zu.png",GR="/assets/muaarq-JJ49mmXI.png",WR="/assets/lacasadelnicho-D56I8mrj.png",XR="/assets/outworkmockup-CtXS-16P.png";Ns.registerPlugin(ot);const qR={name:"HomeView",components:{MainLayout:fb,WaveBackground:bR},setup(){const n=Li(null),e=Li(null),t=Li(null),i=Li(null),r=Li(null),s=Li(null),o=Li(null),a=Li(null),l=c=>{const u=document.querySelector(".reviews-slider"),f=document.querySelectorAll(".review-card"),d=f.length;c<0&&(c=d-1),c>=d&&(c=0);const h=f[0].offsetWidth;u.scrollTo({left:c*h,behavior:"smooth"}),document.querySelectorAll(".nav-dot").forEach((g,_)=>{_===c?g.classList.add("active"):g.classList.remove("active")})};return du(()=>{Ns.to(n.value,{innerHTML:4,duration:2,snap:{innerHTML:1},scrollTrigger:{trigger:n.value,start:"top 80%"}}),Ns.to(e.value,{innerHTML:6,duration:2,snap:{innerHTML:1},scrollTrigger:{trigger:e.value,start:"top 80%"}}),Ns.to(t.value,{innerHTML:12,duration:2,snap:{innerHTML:1},scrollTrigger:{trigger:t.value,start:"top 80%"}}),Ns.to(i.value,{innerHTML:12,duration:2.5,snap:{innerHTML:5},scrollTrigger:{trigger:i.value,start:"top 80%"}});const c=[r.value,s.value,o.value,a.value];let u=0,f=null,d=!1;const h=_=>{f&&clearTimeout(f),_!==u&&!d&&(f=setTimeout(()=>{d=!0,l(_),setTimeout(()=>{u=_,d=!1},500)},400))};c.forEach((_,m)=>{_&&(_.addEventListener("mouseenter",()=>{h(m)}),_.addEventListener("mousemove",p=>{const M=_.getBoundingClientRect(),b=p.clientX-M.left,v=p.clientY-M.top,P=M.width/2,C=M.height/2,w=(b-P)/P,I=(v-C)/C;_.style.transform=`perspective(800px) rotateX(${-I*10}deg) rotateY(${w*10}deg) scale3d(1.02, 1.02, 1.02)`}),_.addEventListener("mouseleave",()=>{_.style.transform="perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",f&&(clearTimeout(f),f=null)}))});const g=document.querySelector(".reviews-slider");g&&(g.addEventListener("scroll",()=>{const _=document.querySelector(".review-card").offsetWidth,m=g.scrollLeft,p=Math.round(m/_);document.querySelectorAll(".nav-dot").forEach((M,b)=>{b===p?(M.classList.add("active"),u=b):M.classList.remove("active")})}),g.addEventListener("scrollend",()=>{d=!1}))}),{clientCounter:n,projectCounter:e,appCounter:t,downloadCounter:i,reviewCard1:r,reviewCard2:s,reviewCard3:o,reviewCard4:a,scrollToReview:l}}},YR={class:"relative overflow-visible bg-dark"},$R={class:"bg-transparent text-white flex items-center justify-center relative pt-0 hero-section"},jR={class:"section-container relative z-10 w-full px-5 sm:px-6 md:px-8"},KR={class:"flex flex-col items-center"},ZR={"data-aos":"fade-up",class:"max-w-3xl text-center mx-auto"},JR={class:"mt-4 md:mt-6 lg:mt-0 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6","data-aos":"fade-up","data-aos-delay":"200"},QR={id:"impacto",class:"py-16 bg-dark"},eC={class:"section-container"},tC={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"},nC={class:"bg-dark-light p-6 rounded-lg shadow-md text-center card-hover","data-aos":"fade-up","data-aos-delay":"200"},iC={class:"text-4xl font-bold text-primary-light"},rC={ref:"clientCounter"},sC={class:"bg-dark-light p-6 rounded-lg shadow-md text-center card-hover","data-aos":"fade-up","data-aos-delay":"300"},oC={class:"text-4xl font-bold text-primary-light"},aC={ref:"projectCounter"},lC={class:"bg-dark-light p-6 rounded-lg shadow-md text-center card-hover sm:col-span-2 lg:col-span-1","data-aos":"fade-up","data-aos-delay":"500"},cC={class:"text-4xl font-bold text-primary-light"},uC={ref:"downloadCounter"},fC={id:"testimonios",class:"py-20 bg-dark text-white"},dC={class:"section-container"},hC={class:"reviews-slider-container","data-aos":"fade-up","data-aos-delay":"100"},pC={class:"reviews-slider"},mC={class:"review-card tilt-card",ref:"reviewCard1"},_C={class:"review-card tilt-card",ref:"reviewCard2"},gC={class:"review-card tilt-card",ref:"reviewCard3"},vC={class:"review-card tilt-card",ref:"reviewCard4"},xC={class:"reviews-navigation"},yC={id:"contact",class:"py-20 bg-dark text-white"},SC={class:"section-container text-center"},MC={class:"flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4","data-aos":"fade-up","data-aos-delay":"200"};function bC(n,e,t,i,r,s){const o=Tr("WaveBackground"),a=Tr("router-link"),l=Tr("MainLayout");return Bi(),zf(l,null,{default:Yi(()=>[O("div",YR,[wt(o,{class:"absolute inset-0 pointer-events-none z-10",flowHeight:200,particleCount:2e3,speed:.3}),O("section",$R,[O("div",jR,[O("div",KR,[O("div",ZR,[e[5]||(e[5]=O("h1",{class:"text-3xl md:text-5xl lg:text-landing font-bold text-primary-light font-nohemi leading-tight"},[an(" Transformamos "),O("span",{class:"font-nohemi gradient-text"},"ideas"),an(" en "),O("span",{class:"font-nohemi gradient-text"},"experiencias"),an(" digitales "),O("span",{class:"font-nohemi gradient-text"},"unicas")],-1)),O("div",JR,[wt(a,{to:"/#proyectos",class:"btn-primary-outline font-nohemi text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transform hover:scale-105 transition-all duration-300"},{default:Yi(()=>e[4]||(e[4]=[an(" Ver Proyectos ")])),_:1})])])])]),e[6]||(e[6]=O("div",{class:"hero-fade-out"},null,-1))]),e[7]||(e[7]=O("section",{id:"nosotros",class:"bg-dark bg-opacity-85 text-white py-16 relative z-20 mt-[-100px]"},[O("div",{class:"absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark opacity-95 z-0"}),O("div",{class:"section-container relative z-10"},[O("div",{class:"text-center mb-12"},[O("h2",{class:"text-heading-1 font-bold mb-4 font-nohemi","data-aos":"fade-up"}," Nosotros "),O("p",{class:"text-body-large text-gray-300 max-w-3xl mx-auto","data-aos":"fade-up","data-aos-delay":"100"}," En Tenzoft, nos dedicamos a transformar ideas innovadoras en soluciones digitales excepcionales. ")]),O("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"},[O("div",{class:"card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300","data-aos":"fade-up","data-aos-delay":"200"},[O("h3",{class:"text-heading-3 font-semibold mb-4 font-nohemi"}," Nuestra Misión "),O("p",{class:"text-body-large text-gray-300"}," Crear soluciones tecnológicas que permitan a nuestros clientes alcanzar sus objetivos de negocio, combinando innovación técnica con una experiencia de usuario excepcional. ")]),O("div",{class:"card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300","data-aos":"fade-up","data-aos-delay":"300"},[O("h3",{class:"text-heading-3 font-semibold mb-4 font-nohemi"}," Nuestra Visión "),O("p",{class:"text-body-large text-gray-300"}," Ser reconocidos como líderes en el desarrollo de software personalizado y aplicaciones móviles que marcan la diferencia en la transformación digital de nuestros clientes. ")]),O("div",{id:"tecnologias",class:"card-hover bg-dark-light py-8 rounded-lg transform transition-all duration-300 md:col-span-2 mt-4","data-aos":"fade-up","data-aos-delay":"400"},[O("h3",{class:"text-heading-3 font-semibold mb-6 font-nohemi text-center"}," Tecnologías Usadas "),O("div",{class:"tech-icons-container"},[O("div",{class:"tech-icons-grid"},[O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 384 512",fill:"currentColor"},[O("path",{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"})]),O("p",{class:"text-gray-300 mt-2"},"HTML5")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 384 512",fill:"currentColor"},[O("path",{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"})]),O("p",{class:"text-gray-300 mt-2"},"CSS")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 448 512",fill:"currentColor"},[O("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"})]),O("p",{class:"text-gray-300 mt-2"},"JavaScript")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 24 24",fill:"currentColor"},[O("path",{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"})]),O("p",{class:"text-gray-300 mt-2"},"Tailwind")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 16 16",fill:"currentColor"},[O("path",{d:"M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"}),O("path",{d:"M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"})]),O("p",{class:"text-gray-300 mt-2"},"Bootstrap")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 512 512",fill:"currentColor"},[O("path",{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})]),O("p",{class:"text-gray-300 mt-2"},"React")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 448 512",fill:"currentColor"},[O("path",{d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"})]),O("p",{class:"text-gray-300 mt-2"},"Vue")]),O("div",{class:"tech-item text-center"},[O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"tech-icon",viewBox:"0 0 512 512",fill:"currentColor"},[O("path",{d:"M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 00-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0031.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 00-19.36 0L85.83 375.74z"})]),O("p",{class:"text-gray-300 mt-2"},"Firebase")])])])])])])],-1))]),e[26]||(e[26]=O("section",{id:"proyectos",class:"py-20 bg-dark text-white"},[O("div",{class:"section-container"},[O("div",{class:"text-center mb-12"},[O("h2",{class:"text-heading-1 font-bold mb-4 font-nohemi","data-aos":"fade-up"}," Nuestros Proyectos "),O("p",{class:"text-body-large text-gray-300 max-w-3xl mx-auto","data-aos":"fade-up","data-aos-delay":"100"}," Descubre algunos de nuestros trabajos más destacados ")]),O("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"},[O("div",{class:"project-card bg-dark-light rounded-lg overflow-hidden","data-aos":"fade-right","data-aos-delay":"200"},[O("div",{class:"relative h-64 overflow-hidden"},[O("img",{src:VR,alt:"Pawhouse Dog Hotel mockup",class:"w-full h-full object-cover object-center"}),O("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"}),O("div",{class:"absolute bottom-0 left-0 right-0 p-6"},[O("h3",{class:"text-heading-3 font-nohemi mb-2"},"Pawhouse Dog Hotel"),O("p",{class:"text-gray-300"},"Sistema de administración y website para hotel canino")])]),O("div",{class:"p-6"},[O("div",{class:"flex flex-wrap gap-2 mb-4"},[O("span",{class:"tech-tag"},"Flutter"),O("span",{class:"tech-tag"},"Firebase"),O("span",{class:"tech-tag"},"HTML"),O("span",{class:"tech-tag"},"CSS"),O("span",{class:"tech-tag"},"JavaScript")]),O("div",{class:"flex items-left"},[O("a",{href:"https://pawhouse-hotel.web.app/",target:"_blank",rel:"noopener noreferrer",class:"inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"},[an(" Visitar sitio "),O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block w-3 h-3 ml-1",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),O("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})])])])])]),O("div",{class:"project-card bg-dark-light rounded-lg overflow-hidden","data-aos":"fade-left","data-aos-delay":"300"},[O("div",{class:"relative h-64 overflow-hidden"},[O("img",{src:GR,alt:"Mua Arquitectos mockup",class:"w-full h-full object-cover object-center"}),O("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"}),O("div",{class:"absolute bottom-0 left-0 right-0 p-6"},[O("h3",{class:"text-heading-3 font-nohemi mb-2"},"Mua Arquitectos"),O("p",{class:"text-gray-300"},"Portfolio digital para estudio de arquitectura")])]),O("div",{class:"p-6"},[O("div",{class:"flex flex-wrap gap-2 mb-4"},[O("span",{class:"tech-tag"},"React"),O("span",{class:"tech-tag"},"HTML"),O("span",{class:"tech-tag"},"CSS"),O("span",{class:"tech-tag"},"JavaScript")]),O("div",{class:"flex justify-between items-center"},[O("a",{href:"https://muaarquitectos.com/",target:"_blank",rel:"noopener noreferrer",class:"inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"},[an(" Visitar sitio "),O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block w-3 h-3 ml-1",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),O("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})])])])])]),O("div",{class:"project-card bg-dark-light rounded-lg overflow-hidden","data-aos":"fade-right","data-aos-delay":"400"},[O("div",{class:"relative h-64 overflow-hidden"},[O("img",{src:WR,alt:"La Casa Del Nicho mockup",class:"w-full h-full object-cover object-center"}),O("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"}),O("div",{class:"absolute bottom-0 left-0 right-0 p-6"},[O("h3",{class:"text-heading-3 font-nohemi mb-2"},"La Casa Del Nicho"),O("p",{class:"text-gray-300"},"E-commerce y sistema de inventario")])]),O("div",{class:"p-6"},[O("div",{class:"flex flex-wrap gap-2 mb-4"},[O("span",{class:"tech-tag"},"Shopify"),O("span",{class:"tech-tag"},"JavaScript"),O("span",{class:"tech-tag"},"CSS")]),O("div",{class:"flex justify-between items-center"},[O("a",{href:"https://lacasadelnicho.com/",target:"_blank",rel:"noopener noreferrer",class:"inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"},[an(" Visitar sitio "),O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block w-3 h-3 ml-1",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),O("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})])])])])]),O("div",{class:"project-card bg-dark-light rounded-lg overflow-hidden","data-aos":"fade-left","data-aos-delay":"500"},[O("div",{class:"relative h-64 overflow-hidden"},[O("img",{src:XR,alt:"Outwork Calisthenics mockup",class:"w-full h-full object-cover object-center"}),O("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"}),O("div",{class:"absolute bottom-0 left-0 right-0 p-6"},[O("h3",{class:"text-heading-3 font-nohemi mb-2"},"Outwork Calisthenics"),O("p",{class:"text-gray-300"},"Sistema de reservas y website de presentación")])]),O("div",{class:"p-6"},[O("div",{class:"flex flex-wrap gap-2 mb-4"},[O("span",{class:"tech-tag"},"HTML"),O("span",{class:"tech-tag"},"CSS"),O("span",{class:"tech-tag"},"JavaScript"),O("span",{class:"tech-tag"},"Bootstrap"),O("span",{class:"tech-tag"},"Firebase")]),O("div",{class:"flex items-left"},[O("a",{href:"https://outwork.mx/",target:"_blank",rel:"noopener noreferrer",class:"inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"},[an(" Visitar sitio "),O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block w-3 h-3 ml-1",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),O("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})])])])])])])])],-1)),O("section",QR,[O("div",eC,[e[17]||(e[17]=O("div",{class:"text-center mb-12"},[O("h2",{class:"text-heading-1 font-nohemi font-bold mb-4 text-white","data-aos":"fade-up"}," Nuestro Impacto "),O("p",{class:"text-xl text-gray-300 max-w-3xl mx-auto","data-aos":"fade-up","data-aos-delay":"100"}," Nuestros números hablan por sí mismos ")],-1)),O("div",tC,[O("div",nC,[e[9]||(e[9]=O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mx-auto card-icon mb-4",viewBox:"0 0 640 512",fill:"currentColor"},[O("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"})],-1)),e[10]||(e[10]=O("h3",{class:"text-heading-3 font-nohemi mb-2 text-white"},"Clientes",-1)),O("div",iC,[O("span",rC,"0",512),e[8]||(e[8]=an("+ "))])]),O("div",sC,[e[12]||(e[12]=O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mx-auto card-icon mb-4",viewBox:"0 0 640 512",fill:"currentColor"},[O("path",{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"})],-1)),e[13]||(e[13]=O("h3",{class:"text-heading-3 font-nohemi mb-2 text-white"},"Proyectos",-1)),O("div",oC,[O("span",aC,"0",512),e[11]||(e[11]=an("+ "))])]),O("div",lC,[e[15]||(e[15]=O("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mx-auto card-icon mb-4",viewBox:"0 0 512 512",fill:"currentColor"},[O("path",{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"})],-1)),e[16]||(e[16]=O("h3",{class:"text-heading-3 font-nohemi mb-2 text-white"},"Impresiones",-1)),O("div",cC,[O("span",uC,"0",512),e[14]||(e[14]=an("k+ "))])])])])]),O("section",fC,[O("div",dC,[e[22]||(e[22]=O("div",{class:"text-center mb-6"},[O("h3",{class:"text-heading-1 font-nohemi font-bold text-white","data-aos":"fade-up"}," Lo que nuestros clientes dicen de nosotros ")],-1)),O("div",hC,[O("div",pC,[O("div",mC,e[18]||(e[18]=[O("div",{class:"review-content"},[O("p",{class:"text-body-large text-gray-200 mb-8"},' "Nos gusto mucho trabajar con Tenzoft, trabajan rapido y se encargaron de entender realmente que es lo que el hotel necesitaba. Aparte de crearnos el sistema nos ayudaron a entender que necesitabamos." '),O("div",{class:"review-author"},[O("p",{class:"text-primary-light font-semibold font-nohemi text-lg"}," Website Hotel / Sistema Admistrativo "),O("p",{class:"text-gray-400"},"Pawhouse Dog Hotel")])],-1),O("div",{class:"tilt-effect"},null,-1)]),512),O("div",_C,e[19]||(e[19]=[O("div",{class:"review-content"},[O("p",{class:"text-body-large text-gray-200 mb-8"},' "Muy buena atencion, siempre estaban atentos a nuestras dudas de como ibamos a llevar a cabo el proyecto. Yo llegue con una idea y me gusto que ellos nos solamente hacen el trabajo que pides. Si no que se suman al proyecto y aportan ideas para que quede mejor lo que necestas. " '),O("div",{class:"review-author"},[O("p",{class:"text-primary-light font-semibold font-nohemi text-lg"}," Website Portafolio "),O("p",{class:"text-gray-400"},"Mua Arquitectos")])],-1),O("div",{class:"tilt-effect"},null,-1)]),512),O("div",gC,e[20]||(e[20]=[O("div",{class:"review-content"},[O("p",{class:"text-body-large text-gray-200 mb-8"},' "Excelente tiempo de entrega, fueron muy profesionales y me ayudaron a entender como funcionaba el sistema que desarollaron. Recomendado." '),O("div",{class:"review-author"},[O("p",{class:"text-primary-light font-semibold font-nohemi text-lg"}," Website E-commerce / Sistema De Inventario "),O("p",{class:"text-gray-400"},"La Casa Del Nicho")])],-1),O("div",{class:"tilt-effect"},null,-1)]),512),O("div",vC,e[21]||(e[21]=[O("div",{class:"review-content"},[O("p",{class:"text-body-large text-gray-200 mb-8"},' "Cuandos nos asercamos con el equipo de Tenzoft, realmente no sabiamos bien del todo lo que necesitabamos. Me llevo una muy buena experiencia ya que no solamente vendieron por vender si no que realmente senti que estaban comprometidos a ayudarme a tener un buen sistema espesializado para las necesidades de mi gym." '),O("div",{class:"review-author"},[O("p",{class:"text-primary-light font-semibold font-nohemi text-lg"}," Outwork Calistenics Studio "),O("p",{class:"text-gray-400"},"Website Presentacion / Sistema De Reservas")])],-1),O("div",{class:"tilt-effect"},null,-1)]),512)]),O("div",xC,[O("button",{class:"nav-dot active",onClick:e[0]||(e[0]=c=>i.scrollToReview(0))}),O("button",{class:"nav-dot",onClick:e[1]||(e[1]=c=>i.scrollToReview(1))}),O("button",{class:"nav-dot",onClick:e[2]||(e[2]=c=>i.scrollToReview(2))}),O("button",{class:"nav-dot",onClick:e[3]||(e[3]=c=>i.scrollToReview(3))})])])])]),O("section",yC,[O("div",SC,[e[24]||(e[24]=O("h2",{class:"text-heading-1 font-bold mb-6 font-nohemi","data-aos":"fade-up"}," ¿Estas listo para convertir tu vision en una realidad? ",-1)),e[25]||(e[25]=O("p",{class:"text-body-large mb-8 max-w-2xl mx-auto font-nohemi font-light","data-aos":"fade-up","data-aos-delay":"100"}," Iniciemos juntos tu proyecto digital ",-1)),O("div",MC,[wt(a,{to:"/#contact",class:"btn-primary"},{default:Yi(()=>e[23]||(e[23]=[O("i",{class:"fa-brands fa-whatsapp mr-2"},null,-1),an(" Contactanos ")])),_:1})])])])]),_:1})}const EC=ua(qR,[["render",bC],["__scopeId","data-v-834387dc"]]),TC={},wC={class:"p-6 bg-white"};function AC(n,e){return Bi(),es("div",wC,e[0]||(e[0]=[Hf('<h2 class="text-2xl font-bold mb-6">Tenzorial Software Color Palette</h2><div class="mb-12"><h3 class="text-xl font-bold mb-4">Primary Color</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-2"><div class="bg-primary-50 h-16 rounded flex items-center justify-center p-2 text-center">primary-50</div><div class="bg-primary-100 h-16 rounded flex items-center justify-center p-2 text-center">primary-100</div><div class="bg-primary-200 h-16 rounded flex items-center justify-center p-2 text-center">primary-200</div><div class="bg-primary-300 h-16 rounded flex items-center justify-center p-2 text-center">primary-300</div><div class="bg-primary-400 h-16 rounded flex items-center justify-center p-2 text-center">primary-400</div><div class="bg-primary-500 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-500</div><div class="bg-primary-600 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-600</div><div class="bg-primary-700 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-700</div><div class="bg-primary-800 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-800</div><div class="bg-primary-900 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-900</div><div class="bg-primary-950 h-16 rounded flex items-center justify-center p-2 text-center text-white">primary-950</div></div></div><div class="mb-12"><h3 class="text-xl font-bold mb-4">Secondary Color</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-2"><div class="bg-secondary-50 h-16 rounded flex items-center justify-center p-2 text-center">secondary-50</div><div class="bg-secondary-100 h-16 rounded flex items-center justify-center p-2 text-center">secondary-100</div><div class="bg-secondary-200 h-16 rounded flex items-center justify-center p-2 text-center">secondary-200</div><div class="bg-secondary-300 h-16 rounded flex items-center justify-center p-2 text-center">secondary-300</div><div class="bg-secondary-400 h-16 rounded flex items-center justify-center p-2 text-center">secondary-400</div><div class="bg-secondary-500 h-16 rounded flex items-center justify-center p-2 text-center text-white">secondary-500</div><div class="bg-secondary-600 h-16 rounded flex items-center justify-center p-2 text-center text-white">secondary-600</div><div class="bg-secondary-700 h-16 rounded flex items-center justify-center p-2 text-center text-white">secondary-700</div><div class="bg-secondary-800 h-16 rounded flex items-center justify-center p-2 text-center text-white">secondary-800</div><div class="bg-secondary-900 h-16 rounded flex items-center justify-center p-2 text-center text-white">secondary-900</div></div></div><div class="mb-12"><h3 class="text-xl font-bold mb-4">Dark Color</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-2"><div class="bg-dark-50 h-16 rounded flex items-center justify-center p-2 text-center">dark-50</div><div class="bg-dark-100 h-16 rounded flex items-center justify-center p-2 text-center">dark-100</div><div class="bg-dark-200 h-16 rounded flex items-center justify-center p-2 text-center">dark-200</div><div class="bg-dark-300 h-16 rounded flex items-center justify-center p-2 text-center">dark-300</div><div class="bg-dark-400 h-16 rounded flex items-center justify-center p-2 text-center">dark-400</div><div class="bg-dark-500 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-500</div><div class="bg-dark-600 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-600</div><div class="bg-dark-700 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-700</div><div class="bg-dark-800 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-800</div><div class="bg-dark-900 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-900</div><div class="bg-dark-950 h-16 rounded flex items-center justify-center p-2 text-center text-white">dark-950</div></div></div><div class="mb-12"><h3 class="text-xl font-bold mb-4">Accent Colors</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-accent h-16 rounded flex items-center justify-center text-white">accent</div></div></div>',5)]))}const RC=ua(TC,[["render",AC]]);P1.init({duration:800,easing:"ease-in-out",once:!0});window.gsap=Ns;const CC=[{path:"/",name:"home",component:EC},{path:"/colors",name:"colors",component:RC}],PC=M1({history:ZS(),routes:CC,scrollBehavior(n,e,t){return n.hash?{el:n.hash,behavior:"smooth"}:t||{top:0}}});vS(T1).use(PC).mount("#app");
