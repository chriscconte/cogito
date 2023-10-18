import{m as Y,u as X,a as he}from"./tag-13d05c2a.js";import{Q as st,R as rt,l as M,S as be,t as Ht,q as Be,m as c,E as j,n as Ae,p as O,y as zt,U as re,u as we,w as pe,c as k,V as ct,W as ut,r as q,X as G,D as Te,A as R,Y as W,Z as qt,_ as ce,b as T,z as qe,F as Ie,$ as dt,i as ft,a0 as Yt,g as Fe,a1 as Gt,s as te,a2 as Jt,o as Ut,a as vt,d as Kt,a3 as Xt,B as Zt,C as mt,x as Qt,v as gt,a4 as en,a5 as tn,M as nn,a6 as an,G as De,H as Me,I as $e,J as b,a7 as L,a8 as D,a9 as Se}from"./index-503246a7.js";import{i as Ne,b as yt,j as on,k as ht,l as bt,n as wt,f as pt,o as ln,V as ie,p as sn,q as St,g as me,m as rn,r as xt,a as cn,s as un,t as dn,v as fn,w as vn,R as mn,d as gn,x as Ct,e as yn,y as hn,z as bn,A as wn,B as pn,L as Sn,C as Ye,D as xe,E as Ce,F as Ge,G as Je,H as xn,c as Cn,I as En,J as _n,M as kn,h as Oe,K as Pn,N as An}from"./VBtn-348b5ad5.js";import{V as On}from"./VContainer-fa6b3cf9.js";class ne{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ue(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Et(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,l,s,r;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=+o[0],l=+o[5],s=+o[12],r=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=+o[0],l=+o[3],s=+o[4],r=+o[5];else return new ne(n);const u=t.transformOrigin,d=n.x-s-(1-i)*parseFloat(u),v=n.y-r-(1-l)*parseFloat(u.slice(u.indexOf(" ")+1)),m=i?n.width/i:e.offsetWidth+1,g=l?n.height/l:e.offsetHeight+1;return new ne({x:d,y:v,width:m,height:g})}else return new ne(n)}function oe(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const de=new WeakMap;function Vn(e,n){Object.keys(n).forEach(t=>{if(st(t)){const a=rt(t),o=de.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[l,s]=i;l===a&&(e.removeEventListener(a,s),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),de.has(e)||de.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ln(e,n){Object.keys(n).forEach(t=>{if(st(t)){const a=rt(t),o=de.get(e);o==null||o.forEach(i=>{const[l,s]=i;l===a&&(e.removeEventListener(a,s),o.delete(i))})}else e.removeAttribute(t)})}function je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return M()({name:t??be(Ht(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Y()},setup(a,o){let{slots:i}=o;return()=>{var l;return Be(a.tag,{class:[e,a.class],style:a.style},(l=i.default)==null?void 0:l.call(i))}}})}function _t(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Ve="cubic-bezier(0.4, 0, 0.2, 1)",Rn="cubic-bezier(0.0, 0, 0.2, 1)",Bn="cubic-bezier(0.4, 0, 1, 1)";function Tn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?In(e):We(e))return e;e=e.parentElement}return document.scrollingElement}function ge(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(We(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function We(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function In(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Fn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Dn=O({target:Object},"v-dialog-transition"),Mn=M()({name:"VDialogTransition",props:Dn(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,i){var m;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),o.style.visibility="";const{x:l,y:s,sx:r,sy:u,speed:d}=Xe(e.target,o),v=oe(o,[{transform:`translate(${l}px, ${s}px) scale(${r}, ${u})`,opacity:0},{}],{duration:225*d,easing:Rn});(m=Ke(o))==null||m.forEach(g=>{oe(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:Ve})}),v.finished.then(()=>i())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,i){var m;await new Promise(g=>requestAnimationFrame(g));const{x:l,y:s,sx:r,sy:u,speed:d}=Xe(e.target,o);oe(o,[{},{transform:`translate(${l}px, ${s}px) scale(${r}, ${u})`,opacity:0}],{duration:125*d,easing:Bn}).finished.then(()=>i()),(m=Ke(o))==null||m.forEach(g=>{oe(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:Ve})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?c(Ae,j({name:"dialog-transition"},a,{css:!1}),t):c(Ae,{name:"dialog-transition"},t)}});function Ke(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Xe(e,n){const t=e.getBoundingClientRect(),a=Et(n),[o,i]=getComputedStyle(n).transformOrigin.split(" ").map(_=>parseFloat(_)),[l,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=t.left+t.width/2;l==="left"||s==="left"?r-=t.width/2:(l==="right"||s==="right")&&(r+=t.width/2);let u=t.top+t.height/2;l==="top"||s==="top"?u-=t.height/2:(l==="bottom"||s==="bottom")&&(u+=t.height/2);const d=t.width/a.width,v=t.height/a.height,m=Math.max(1,d,v),g=d/m||0,h=v/m||0,y=a.width*a.height/(window.innerWidth*window.innerHeight),E=y>.12?Math.min(1.5,(y-.12)*10+1):1;return{x:r-(o+a.left),y:u-(i+a.top),sx:g,sy:h,speed:E}}const $n="/cogito/assets/classes-6acfa0aa.png",Nn="/cogito/assets/curriculum-3d42f5b4.png",jn="/cogito/assets/profile-0dc937fd.png";const kt=M()({name:"VCardActions",props:Y(),setup(e,n){let{slots:t}=n;return zt({VBtn:{variant:"text"}}),X(()=>{var a;return c("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Wn=je("v-card-subtitle"),le=je("v-card-title");const Hn=O({start:Boolean,end:Boolean,icon:re,image:String,...Y(),...Ne(),...yt(),...on(),...he(),...we(),...ht({variant:"flat"})},"VAvatar"),Ze=M()({name:"VAvatar",props:Hn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=pe(e),{colorClasses:o,colorStyles:i,variantClasses:l}=bt(e),{densityClasses:s}=wt(e),{roundedClasses:r}=pt(e),{sizeClasses:u,sizeStyles:d}=ln(e);return X(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,s.value,r.value,u.value,l.value,e.class],style:[i.value,d.value,e.style]},{default:()=>{var v;return[e.image?c(ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(sn,{key:"icon",icon:e.icon},null):(v=t.default)==null?void 0:v.call(t),St(!1,"v-avatar")]}})),{}}}),zn=O({appendAvatar:String,appendIcon:re,prependAvatar:String,prependIcon:re,subtitle:String,title:String,...Y(),...Ne()},"VCardItem"),qn=M()({name:"VCardItem",props:zn(),setup(e,n){let{slots:t}=n;return X(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),l=!!(i||t.append),s=!!(e.title||t.title),r=!!(e.subtitle||t.subtitle);return c("div",{class:["v-card-item",e.class],style:e.style},[o&&c("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?c(me,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&c(Ze,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),c("div",{class:"v-card-item__content"},[s&&c(le,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),r&&c(Wn,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),l&&c("div",{key:"append",class:"v-card-item__append"},[t.append?c(me,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&c(Ze,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),se=je("v-card-text"),Yn=O({appendAvatar:String,appendIcon:re,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:re,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...rn(),...Y(),...Ne(),...xt(),...cn(),...un(),...dn(),...fn(),...yt(),...vn(),...he(),...we(),...ht({variant:"elevated"})},"VCard"),fe=M()({name:"VCard",directives:{Ripple:mn},props:Yn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=pe(e),{borderClasses:i}=gn(e),{colorClasses:l,colorStyles:s,variantClasses:r}=bt(e),{densityClasses:u}=wt(e),{dimensionStyles:d}=Ct(e),{elevationClasses:v}=yn(e),{loaderClasses:m}=hn(e),{locationStyles:g}=bn(e),{positionClasses:h}=wn(e),{roundedClasses:y}=pt(e),E=pn(e,t),_=k(()=>e.link!==!1&&E.isLink.value),p=k(()=>!e.disabled&&e.link!==!1&&(e.link||E.isClickable.value));return X(()=>{const f=_.value?"a":e.tag,V=!!(a.title||e.title),$=!!(a.subtitle||e.subtitle),H=V||$,z=!!(a.append||e.appendAvatar||e.appendIcon),J=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),I=H||J||z,P=!!(a.text||e.text);return ct(c(f,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":p.value},o.value,i.value,l.value,u.value,v.value,m.value,h.value,y.value,r.value,e.class],style:[s.value,d.value,g.value,e.style],href:E.href.value,onClick:p.value&&E.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var x;return[U&&c("div",{key:"image",class:"v-card__image"},[a.image?c(me,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):c(ie,{key:"image-img",cover:!0,src:e.image},null)]),c(Sn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),I&&c(qn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),P&&c(se,{key:"text"},{default:()=>{var w;return[((w=a.text)==null?void 0:w.call(a))??e.text]}}),(x=a.default)==null?void 0:x.call(a),a.actions&&c(kt,null,{default:a.actions}),St(p.value,"v-card")]}}),[[ut("ripple"),p.value&&e.ripple]])}),{}}});function Ee(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Gn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Qe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return Ee({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return Ee({x:o,y:i},n)}return Ee({x:n.width/2,y:n.height/2},n)}const Pt={static:Kn,connected:Zn},Jn=O({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Pt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Un(e,n){const t=q({}),a=q();G&&(Te(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,s;R(()=>e.locationStrategy,i),W(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:a.value=(s=Pt[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation}),window.addEventListener("resize",o,{passive:!0}),W(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(i){var l;(l=a.value)==null||l.call(a,i)}return{contentStyles:t,updateLocation:a}}function Kn(){}function Xn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Et(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Zn(e,n,t){Fn(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=qt(()=>{const h=Ye(n.location,e.isRtl.value),y=n.origin==="overlap"?h:n.origin==="auto"?xe(h):Ye(n.origin,e.isRtl.value);return h.side===y.side&&h.align===Ce(y).align?{preferredAnchor:Ge(h),preferredOrigin:Ge(y)}:{preferredAnchor:h,preferredOrigin:y}}),[l,s,r,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>k(()=>{const y=parseFloat(n[h]);return isNaN(y)?1/0:y})),d=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const h=n.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const m=new ResizeObserver(()=>{v&&g()});R([e.activatorEl,e.contentEl],(h,y)=>{let[E,_]=h,[p,f]=y;p&&m.unobserve(p),E&&m.observe(E),f&&m.unobserve(f),_&&m.observe(_)},{immediate:!0}),W(()=>{m.disconnect()});function g(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),y=Xn(e.contentEl.value,e.isRtl.value),E=ge(e.contentEl.value),_=12;E.length||(E.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(y.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),y.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=E.reduce((P,x)=>{const w=x.getBoundingClientRect(),C=new ne({x:x===document.documentElement?0:w.x,y:x===document.documentElement?0:w.y,width:x.clientWidth,height:x.clientHeight});return P?new ne({x:Math.max(P.left,C.left),y:Math.max(P.top,C.top),width:Math.min(P.right,C.right)-Math.max(P.left,C.left),height:Math.min(P.bottom,C.bottom)-Math.max(P.top,C.top)}):C},void 0);p.x+=_,p.y+=_,p.width-=_*2,p.height-=_*2;let f={anchor:o.value,origin:i.value};function V(P){const x=new ne(y),w=Qe(P.anchor,h),C=Qe(P.origin,x);let{x:F,y:N}=Gn(w,C);switch(P.anchor.side){case"top":N-=d.value[0];break;case"bottom":N+=d.value[0];break;case"left":F-=d.value[0];break;case"right":F+=d.value[0];break}switch(P.anchor.align){case"top":N-=d.value[1];break;case"bottom":N+=d.value[1];break;case"left":F-=d.value[1];break;case"right":F+=d.value[1];break}return x.x+=F,x.y+=N,x.width=Math.min(x.width,r.value),x.height=Math.min(x.height,u.value),{overflows:Ue(x,p),x:F,y:N}}let $=0,H=0;const z={x:0,y:0},J={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:P,y:x,overflows:w}=V(f);$+=P,H+=x,y.x+=P,y.y+=x;{const C=Je(f.anchor),F=w.x.before||w.x.after,N=w.y.before||w.y.after;let Z=!1;if(["x","y"].forEach(A=>{if(A==="x"&&F&&!J.x||A==="y"&&N&&!J.y){const S={anchor:{...f.anchor},origin:{...f.origin}},B=A==="x"?C==="y"?Ce:xe:C==="y"?xe:Ce;S.anchor=B(S.anchor),S.origin=B(S.origin);const{overflows:K}=V(S);(K[A].before<=w[A].before&&K[A].after<=w[A].after||K[A].before+K[A].after<(w[A].before+w[A].after)/2)&&(f=S,Z=J[A]=!0)}}),Z)continue}w.x.before&&($+=w.x.before,y.x+=w.x.before),w.x.after&&($-=w.x.after,y.x-=w.x.after),w.y.before&&(H+=w.y.before,y.y+=w.y.before),w.y.after&&(H-=w.y.after,y.y-=w.y.after);{const C=Ue(y,p);z.x=p.width-C.x.before-C.x.after,z.y=p.height-C.y.before-C.y.after,$+=C.x.before,y.x+=C.x.before,H+=C.y.before,y.y+=C.y.before}break}const I=Je(f.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${f.anchor.side} ${f.anchor.align}`,transformOrigin:`${f.origin.side} ${f.origin.align}`,top:T(_e(H)),left:e.isRtl.value?void 0:T(_e($)),right:e.isRtl.value?T(_e(-$)):void 0,minWidth:T(I==="y"?Math.min(l.value,h.width):l.value),maxWidth:T(et(qe(z.x,l.value===1/0?0:l.value,r.value))),maxHeight:T(et(qe(z.y,s.value===1/0?0:s.value,u.value)))}),{available:z,contentBox:y}}return R(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ce(()=>{const h=g();if(!h)return;const{available:y,contentBox:E}=h;E.height>y.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function _e(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function et(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Le=!0;const ye=[];function Qn(e){!Le||ye.length?(ye.push(e),Re()):(Le=!1,e(),Re())}let tt=-1;function Re(){cancelAnimationFrame(tt),tt=requestAnimationFrame(()=>{const e=ye.shift();e&&e(),ye.length?Re():Le=!0})}const ve={none:null,close:na,block:aa,reposition:oa},ea=O({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ve}},"VOverlay-scroll-strategies");function ta(e,n){if(!G)return;let t;Ie(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=dt(),await ce(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ve[e.scrollStrategy])==null||a.call(ve,n,e,t)}))}),W(()=>{t==null||t.stop()})}function na(e){function n(t){e.isActive.value=!1}At(e.activatorEl.value??e.contentEl.value,n)}function aa(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,a=[...new Set([...ge(e.activatorEl.value,n.contained?t:void 0),...ge(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(s=>We(s)&&s)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,r)=>{s.style.setProperty("--v-body-scroll-x",T(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",T(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",T(o)),s.classList.add("v-overlay-scroll-blocked")}),W(()=>{a.forEach((s,r)=>{const u=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-u,s.scrollTop=-d}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function oa(e,n,t){let a=!1,o=-1,i=-1;function l(s){Qn(()=>{var d,v;const r=performance.now();(v=(d=e.updateLocation).value)==null||v.call(d,s),a=(performance.now()-r)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{At(e.activatorEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{l(s)})})):l(s)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function At(e,n){const t=[document,...ge(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const ia=Symbol.for("vuetify:v-menu"),la=O({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function sa(e,n){const t={},a=o=>()=>{if(!G)return Promise.resolve(!0);const i=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(l=>{const s=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(i),l(i)},s)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const ra=O({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...la()},"VOverlay-activator");function ca(e,n){let{isActive:t,isTop:a}=n;const o=q();let i=!1,l=!1,s=!0;const r=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:d,runCloseDelay:v}=sa(e,f=>{f===(e.openOnHover&&i||r.value&&l)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==f&&(s=!0),t.value=f)}),m={onClick:f=>{f.stopPropagation(),o.value=f.currentTarget||f.target,t.value=!t.value},onMouseenter:f=>{var V;(V=f.sourceCapabilities)!=null&&V.firesTouchEvents||(i=!0,o.value=f.currentTarget||f.target,d())},onMouseleave:f=>{i=!1,v()},onFocus:f=>{Gt(f.target,":focus-visible")!==!1&&(l=!0,f.stopPropagation(),o.value=f.currentTarget||f.target,d())},onBlur:f=>{l=!1,f.stopPropagation(),v()}},g=k(()=>{const f={};return u.value&&(f.onClick=m.onClick),e.openOnHover&&(f.onMouseenter=m.onMouseenter,f.onMouseleave=m.onMouseleave),r.value&&(f.onFocus=m.onFocus,f.onBlur=m.onBlur),f}),h=k(()=>{const f={};if(e.openOnHover&&(f.onMouseenter=()=>{i=!0,d()},f.onMouseleave=()=>{i=!1,v()}),r.value&&(f.onFocusin=()=>{l=!0,d()},f.onFocusout=()=>{l=!1,v()}),e.closeOnContentClick){const V=ft(ia,null);f.onClick=()=>{t.value=!1,V==null||V.closeParents()}}return f}),y=k(()=>{const f={};return e.openOnHover&&(f.onMouseenter=()=>{s&&(i=!0,s=!1,d())},f.onMouseleave=()=>{i=!1,v()}),f});R(a,f=>{f&&(e.openOnHover&&!i&&(!r.value||!l)||r.value&&!l&&(!e.openOnHover||!i))&&(t.value=!1)});const E=q();Ie(()=>{E.value&&ce(()=>{o.value=Yt(E.value)})});const _=Fe("useActivator");let p;return R(()=>!!e.activator,f=>{f&&G?(p=dt(),p.run(()=>{ua(e,_,{activatorEl:o,activatorEvents:g})})):p&&p.stop()},{flush:"post",immediate:!0}),W(()=>{p==null||p.stop()}),{activatorEl:o,activatorRef:E,activatorEvents:g,contentEvents:h,scrimEvents:y}}function ua(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(r,u)=>{if(u&&r!==u){const d=s(u);d&&l(d)}r&&ce(()=>i())},{immediate:!0}),R(()=>e.activatorProps,()=>{i()}),W(()=>{l()});function i(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&Vn(r,j(o.value,u))}function l(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&Ln(r,j(o.value,u))}function s(){var d,v;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(r)if(r==="parent"){let m=(v=(d=n==null?void 0:n.proxy)==null?void 0:d.$el)==null?void 0:v.parentNode;for(;m!=null&&m.hasAttribute("data-no-activator");)m=m.parentNode;u=m}else typeof r=="string"?u=document.querySelector(r):"$el"in r?u=r.$el:u=r;return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,a.value}}function da(){if(!G)return te(!1);const{ssr:e}=Jt();if(e){const n=te(!1);return Ut(()=>{n.value=!0}),n}else return te(!0)}const fa=O({eager:Boolean},"lazy");function va(e,n){const t=te(!1),a=k(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function Ot(){const n=Fe("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const nt=Symbol.for("vuetify:stack"),ae=vt([]);function ma(e,n,t){const a=Fe("useStack"),o=!t,i=ft(nt,void 0),l=vt({activeChildren:new Set});Kt(nt,l);const s=te(+n.value);Te(e,()=>{var v;const d=(v=ae.at(-1))==null?void 0:v[1];s.value=d?d+10:+n.value,o&&ae.push([a.uid,s.value]),i==null||i.activeChildren.add(a.uid),W(()=>{if(o){const m=Xt(ae).findIndex(g=>g[0]===a.uid);ae.splice(m,1)}i==null||i.activeChildren.delete(a.uid)})});const r=te(!0);o&&Ie(()=>{var v;const d=((v=ae.at(-1))==null?void 0:v[0])===a.uid;setTimeout(()=>r.value=d)});const u=k(()=>!l.activeChildren.size);return{globalTop:Zt(r),localTop:u,stackStyles:k(()=>({zIndex:s.value}))}}function ga(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!G)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function ya(){return!0}function Vt(e,n,t){if(!e||Lt(e,t)===!1)return!1;const a=_t(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function Lt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||ya)(e)}function ha(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Vt(e,n,t)&&setTimeout(()=>{Lt(e,t)&&a&&a(e)},0)}function at(e,n){const t=_t(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const ba={mounted(e,n){const t=o=>ha(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=Vt(o,e,n)};at(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(at(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function wa(e){const{modelValue:n,color:t,...a}=e;return c(Ae,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&c("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Rt=O({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ra(),...Y(),...xt(),...fa(),...Jn(),...ea(),...we(),...xn()},"VOverlay"),ot=M()({name:"VOverlay",directives:{ClickOutside:ba},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Rt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=mt(e,"modelValue"),l=k({get:()=>i.value,set:S=>{S&&e.disabled||(i.value=S)}}),{teleportTarget:s}=ga(k(()=>e.attach||e.contained)),{themeClasses:r}=pe(e),{rtlClasses:u,isRtl:d}=Qt(),{hasContent:v,onAfterLeave:m}=va(e,l),g=Cn(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:y,stackStyles:E}=ma(l,gt(e,"zIndex"),e._disableGlobalStack),{activatorEl:_,activatorRef:p,activatorEvents:f,contentEvents:V,scrimEvents:$}=ca(e,{isActive:l,isTop:y}),{dimensionStyles:H}=Ct(e),z=da(),{scopeId:J}=Ot();R(()=>e.disabled,S=>{S&&(l.value=!1)});const U=q(),I=q(),{contentStyles:P,updateLocation:x}=Un(e,{isRtl:d,contentEl:I,activatorEl:_,isActive:l});ta(e,{root:U,contentEl:I,activatorEl:_,isActive:l,updateLocation:x});function w(S){o("click:outside",S),e.persistent?A():l.value=!1}function C(){return l.value&&h.value}G&&R(l,S=>{S?window.addEventListener("keydown",F):window.removeEventListener("keydown",F)},{immediate:!0});function F(S){var B,K;S.key==="Escape"&&h.value&&(e.persistent?A():(l.value=!1,(B=I.value)!=null&&B.contains(document.activeElement)&&((K=_.value)==null||K.focus())))}const N=En();Te(()=>e.closeOnBack,()=>{_n(N,S=>{h.value&&l.value?(S(!1),e.persistent?A():l.value=!1):S()})});const Z=q();R(()=>l.value&&(e.absolute||e.contained)&&s.value==null,S=>{if(S){const B=Tn(U.value);B&&B!==document.scrollingElement&&(Z.value=B.scrollTop)}});function A(){e.noClickAnimation||I.value&&oe(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ve})}return X(()=>{var S;return c(nn,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:l.value,props:j({ref:p},f.value,e.activatorProps)}),z.value&&v.value&&c(en,{disabled:!s.value,to:s.value},{default:()=>[c("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},r.value,u.value,e.class],style:[E.value,{top:T(Z.value)},e.style],ref:U},J,a),[c(wa,j({color:g,modelValue:l.value&&!!e.scrim},$.value),null),c(kn,{appear:!0,persisted:!0,transition:e.transition,target:_.value,onAfterLeave:()=>{m(),o("afterLeave")}},{default:()=>{var B;return[ct(c("div",j({ref:I,class:["v-overlay__content",e.contentClass],style:[H.value,P.value]},V.value,e.contentProps),[(B=t.default)==null?void 0:B.call(t,{isActive:l})]),[[tn,l.value],[ut("click-outside"),{handler:w,closeConditional:C,include:()=>[_.value]}]])]}})])]})])}),{activatorEl:_,animateClick:A,contentEl:I,globalTop:h,localTop:y,updateLocation:x}}}),ke=Symbol("Forwarded refs");function Pe(e,n){let t=e;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,n);if(a)return a;t=Object.getPrototypeOf(t)}}function pa(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return e[ke]=t,new Proxy(e,{get(o,i){if(Reflect.has(o,i))return Reflect.get(o,i);if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const l of t)if(l.value&&Reflect.has(l.value,i)){const s=Reflect.get(l.value,i);return typeof s=="function"?s.bind(l.value):s}}},has(o,i){if(Reflect.has(o,i))return!0;if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const l of t)if(l.value&&Reflect.has(l.value,i))return!0;return!1},set(o,i,l){if(Reflect.has(o,i))return Reflect.set(o,i,l);if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,i))return Reflect.set(s.value,i,l);return!1},getOwnPropertyDescriptor(o,i){var s;const l=Reflect.getOwnPropertyDescriptor(o,i);if(l)return l;if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const r of t){if(!r.value)continue;const u=Pe(r.value,i)??("_"in r.value?Pe((s=r.value._)==null?void 0:s.setupState,i):void 0);if(u)return u}for(const r of t){const u=r.value&&r.value[ke];if(!u)continue;const d=u.slice();for(;d.length;){const v=d.shift(),m=Pe(v.value,i);if(m)return m;const g=v.value&&v.value[ke];g&&d.push(...g)}}}}})}const Sa=O({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Rt({origin:"center center",scrollStrategy:"block",transition:{component:Mn},zIndex:2400})},"VDialog"),xa=M()({name:"VDialog",props:Sa(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=mt(e,"modelValue"),{scopeId:o}=Ot(),i=q();function l(r){var v,m;const u=r.relatedTarget,d=r.target;if(u!==d&&((v=i.value)!=null&&v.contentEl)&&((m=i.value)!=null&&m.globalTop)&&![document,i.value.contentEl].includes(d)&&!i.value.contentEl.contains(d)){const g=an(i.value.contentEl);if(!g.length)return;const h=g[0],y=g[g.length-1];u===h?y.focus():h.focus()}}G&&R(()=>a.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),R(a,async r=>{var u,d;await ce(),r?(u=i.value.contentEl)==null||u.focus({preventScroll:!0}):(d=i.value.activatorEl)==null||d.focus({preventScroll:!0})});const s=k(()=>j({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return X(()=>{const[r]=ot.filterProps(e);return c(ot,j({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:a.value,"onUpdate:modelValue":u=>a.value=u,"aria-modal":"true",activatorProps:s.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var u=arguments.length,d=new Array(u),v=0;v<u;v++)d[v]=arguments[v];return c(me,{root:"VDialog"},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t,...d)]}})}})}),pa({},i)}}),Ca=D("p",{class:"my-2 font-italic"}," Any other questions? Here are our cell numbers: ",-1),Ea=D("p",null,[D("i",null,"Chris: "),L("206-451-9402")],-1),_a=D("p",null,[D("i",null,"Lukas: "),L("617-708-4850")],-1),ka=De({__name:"WaitList",setup(e){const n=defineModel();return(t,a)=>(Me(),$e(xa,null,{default:b(()=>[c(fe,null,{default:b(()=>[c(le,null,{default:b(()=>[L(" How does the waitlist work? ")]),_:1}),c(se,null,{default:b(()=>[L(" Join now, to get the opportunity to test as we build, as well as 50% off when we launch. We plan to ship in January, 2024. You may cancel before at any time, and we'll remind you before we start charging. "),Ca,Ea,_a]),_:1}),c(kt,null,{default:b(()=>[c(Oe,{flat:"",color:"primary",target:"_blank",onClick:a[0]||(a[0]=o=>n.value=!1),href:"https://buy.stripe.com/14k8Ax63Vg2s3zqfYY?prefilled_promo_code=WAITLIST"},{default:b(()=>[L(" Join our waitlist! ")]),_:1})]),_:1})]),_:1})]),_:1}))}});const Pa=O({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Y(),...we()},"VDivider"),ue=M()({name:"VDivider",props:Pa(),setup(e,n){let{attrs:t}=n;const{themeClasses:a}=pe(e),{textColorClasses:o,textColorStyles:i}=Pn(gt(e,"color")),l=k(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=T(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=T(e.thickness)),s});return X(()=>c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,o.value,e.class],style:[l.value,i.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Bt=(()=>Se.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),Tt=(()=>Se.reduce((e,n)=>{const t="offset"+be(n);return e[t]={type:[String,Number],default:null},e},{}))(),It=(()=>Se.reduce((e,n)=>{const t="order"+be(n);return e[t]={type:[String,Number],default:null},e},{}))(),it={col:Object.keys(Bt),offset:Object.keys(Tt),order:Object.keys(It)};function Aa(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Oa=["auto","start","end","center","baseline","stretch"],Va=O({cols:{type:[Boolean,String,Number],default:!1},...Bt,offset:{type:[String,Number],default:null},...Tt,order:{type:[String,Number],default:null},...It,alignSelf:{type:String,default:null,validator:e=>Oa.includes(e)},...Y(),...he()},"VCol"),Q=M()({name:"VCol",props:Va(),setup(e,n){let{slots:t}=n;const a=k(()=>{const o=[];let i;for(i in it)it[i].forEach(s=>{const r=e[s],u=Aa(i,s,r);u&&o.push(u)});const l=o.some(s=>s.startsWith("v-col-"));return o.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return Be(e.tag,{class:[a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),He=["start","end","center"],Ft=["space-between","space-around","space-evenly"];function ze(e,n){return Se.reduce((t,a)=>{const o=e+be(a);return t[o]=n(),t},{})}const La=[...He,"baseline","stretch"],Dt=e=>La.includes(e),Mt=ze("align",()=>({type:String,default:null,validator:Dt})),Ra=[...He,...Ft],$t=e=>Ra.includes(e),Nt=ze("justify",()=>({type:String,default:null,validator:$t})),Ba=[...He,...Ft,"stretch"],jt=e=>Ba.includes(e),Wt=ze("alignContent",()=>({type:String,default:null,validator:jt})),lt={align:Object.keys(Mt),justify:Object.keys(Nt),alignContent:Object.keys(Wt)},Ta={align:"align",justify:"justify",alignContent:"align-content"};function Ia(e,n,t){let a=Ta[e];if(t!=null){if(n){const o=n.replace(e,"");a+=`-${o}`}return a+=`-${t}`,a.toLowerCase()}}const Fa=O({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Dt},...Mt,justify:{type:String,default:null,validator:$t},...Nt,alignContent:{type:String,default:null,validator:jt},...Wt,...Y(),...he()},"VRow"),ee=M()({name:"VRow",props:Fa(),setup(e,n){let{slots:t}=n;const a=k(()=>{const o=[];let i;for(i in lt)lt[i].forEach(l=>{const s=e[l],r=Ia(i,l,s);r&&o.push(r)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return Be(e.tag,{class:["v-row",a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Da=D("div",{class:"py-12"},null,-1),Ma=D("h2",{class:"text-subtitle-2"}," Continued education classes for busy people ",-1),$a=D("h2",{class:"text-h2 font-weight-bold italic"},"Introducing Cogito",-1),Na=D("div",{class:"py-12"},null,-1),ja=D("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/R4lUJFG88-E?si=7fV_a__8OdRam2ED",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),Wa=D("div",{class:"py-6"},null,-1),Ha=De({__name:"ForLearners",setup(e){const n=q(!1);return(t,a)=>(Me(),$e(On,{class:"fill-height flex-column align-items-center justify-content-center justify-center"},{default:b(()=>[Da,c(ee,null,{default:b(()=>[Ma]),_:1}),c(ue,{class:"my-6"}),c(ee,null,{default:b(()=>[$a,c(ie,{height:"450px",width:"100%",src:$n})]),_:1}),c(Oe,{flat:"",color:"primary",onClick:a[0]||(a[0]=o=>n.value=!0)},{default:b(()=>[L(" Join our waitlist! ")]),_:1}),Na,c(ee,{justify:"space-around"},{default:b(()=>[c(Q,{cols:"12",sm:"4","align-self":"center"},{default:b(()=>[c(fe,null,{default:b(()=>[c(le,null,{default:b(()=>[L(" Microdose College ")]),_:1}),c(se,null,{default:b(()=>[L(" Cogito is an iOS app offering you a better way to learn new things outside of work. It features ~15min micro classes across a wide range of topics (e.g., art history, wine, investing.) ")]),_:1})]),_:1})]),_:1}),c(Q,{cols:"12",sm:"6"},{default:b(()=>[c(ie,{width:"70%",src:Nn})]),_:1})]),_:1}),c(ue,{class:"my-12"}),c(ee,{justify:"space-around"},{default:b(()=>[c(Q,{cols:"12",sm:"6",justify:"center"},{default:b(()=>[c(ie,{style:{"margin-inline-start":"auto"},width:"70%",src:jn})]),_:1}),c(Q,{cols:"12",sm:"4","align-self":"center"},{default:b(()=>[c(fe,null,{default:b(()=>[c(le,null,{default:b(()=>[L(" Learn Effectively ")]),_:1}),c(se,null,{default:b(()=>[L(" Classes are created by vetted experts and available as video, audio, and text. Cogito creates a structured curriculum across subjects based on your learning goals. It also helps you discover new interests by showing you what your friends are learning and by recommending new classes. ")]),_:1})]),_:1})]),_:1})]),_:1}),c(ue,{class:"my-12"}),c(ee,{justify:"space-around"},{default:b(()=>[c(Q,{cols:"12",sm:"3","align-self":"center"},{default:b(()=>[c(fe,null,{default:b(()=>[c(le,null,{default:b(()=>[L(" All for $15 ")]),_:1}),c(se,null,{default:b(()=>[L(" Join our waitlist now to try Cogito before public launch, give direct feedback and input into content, and get 50% off Cogito when we launch (eta. early 2024!) ")]),_:1})]),_:1})]),_:1}),c(Q,{cols:"12",sm:"8","align-self":"center"},{default:b(()=>[c(An,{class:"pa-2","aspect-ratio":16/9,width:"100%"},{default:b(()=>[ja]),_:1})]),_:1})]),_:1}),c(ue,{class:"my-12"}),c(ee,{"no-gutters":""},{default:b(()=>[Wa,c(Oe,{flat:"",color:"primary",onClick:a[1]||(a[1]=o=>n.value=!0)},{default:b(()=>[L(" Join our waitlist! ")]),_:1}),c(ka,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=o=>n.value=o),width:"auto"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Ja=De({__name:"ForLearners",setup(e){return(n,t)=>(Me(),$e(Ha))}});export{Ja as default};
