import{B as we,h as Ce,C as ke,E as Pe,F as Ne,K as Ee,R as Me,S as xe,i as je,T as Be,j as Re,k as Le,l as $e,V as Te,m as Oe,n as Ve,q as Fe,s as Ae,v as De,w as ze,x as He,y as I,z as Ie,A as Ue,D as We,c as Ge,a as Xe,G as qe,H as Ke,I as Je,J as Qe,L as Ye,M as Ze,N as et,e as tt,O as at,P as nt,Q as st,U as ot,W as rt,X as it,Y as ct,Z as lt,$ as ut,a0 as dt,a1 as ft,a2 as pt,a3 as mt,a4 as Z,a5 as ht,a6 as ee,a7 as gt,a8 as bt,a9 as _t,aa as vt,ab as te,ac as yt,ad as St,ae as wt,af as ae,ag as Ct,ah as kt,ai as U,aj as Pt,ak as L,al as Nt,am as Et,an as Mt,ao as ne,ap as xt,aq as jt,ar as Bt,as as se,at as Rt,au as Lt,av as $t,aw as Tt,ax as Ot,ay as Vt,az as Ft,aA as At,aB as Dt,b as zt,aC as Ht,aD as It,aE as oe,aF as Ut,aG as Wt,aH as Gt,o as Xt,f as qt,aI as Kt,aJ as Jt,p as Qt,aK as Yt,aL as W,aM as Zt,r as re,aN as ea,aO as ta,d as aa,aP as na,aQ as sa,aR as oa,aS as ra,aT as ia,aU as ca,aV as la,aW as ua,aX as da,aY as fa,aZ as pa,a_ as ma,a$ as ha,b0 as ga,b1 as ba,t as _a,b2 as va,b3 as ya,b4 as ie,b5 as Sa,b6 as ce,b7 as wa,b8 as Ca,b9 as ka,u as Pa,ba as Na,bb as Ea,bc as Ma,bd as xa,be as ja,bf as Ba,bg as Ra,bh as La,bi as $a,bj as Ta,bk as Oa,bl as Va,bm as Fa,bn as Aa,bo as Da,bp as le,bq as za,br as Ha,bs as Ia,bt as Ua,bu as Wa,bv as Ga,bw as Xa,bx as qa,by as Ka,bz as Ja,bA as Qa,g as Ya}from"./index-1c5902a1.js";const Za=()=>{},en=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:we,BaseTransitionPropsValidators:Ce,Comment:ke,EffectScope:Pe,Fragment:Ne,KeepAlive:Ee,ReactiveEffect:Me,Static:xe,Suspense:je,Teleport:Be,Text:Re,Transition:Le,TransitionGroup:$e,VueElement:Te,assertNumber:Oe,callWithAsyncErrorHandling:Ve,callWithErrorHandling:Fe,camelize:Ae,capitalize:De,cloneVNode:ze,compatUtils:He,compile:Za,computed:I,createApp:Ie,createBlock:Ue,createCommentVNode:We,createElementBlock:Ge,createElementVNode:Xe,createHydrationRenderer:qe,createPropsRestProxy:Ke,createRenderer:Je,createSSRApp:Qe,createSlots:Ye,createStaticVNode:Ze,createTextVNode:et,createVNode:tt,customRef:at,defineAsyncComponent:nt,defineComponent:st,defineCustomElement:ot,defineEmits:rt,defineExpose:it,defineModel:ct,defineOptions:lt,defineProps:ut,defineSSRCustomElement:dt,defineSlots:ft,get devtools(){return pt},effect:mt,effectScope:Z,getCurrentInstance:ht,getCurrentScope:ee,getTransitionRawChildren:gt,guardReactiveProps:bt,h:_t,handleError:vt,hasInjectionContext:te,hydrate:yt,initCustomFormatter:St,initDirectivesForSSR:wt,inject:ae,isMemoSame:Ct,isProxy:kt,isReactive:U,isReadonly:Pt,isRef:L,isRuntimeOnly:Nt,isShallow:Et,isVNode:Mt,markRaw:ne,mergeDefaults:xt,mergeModels:jt,mergeProps:Bt,nextTick:se,normalizeClass:Rt,normalizeProps:Lt,normalizeStyle:$t,onActivated:Tt,onBeforeMount:Ot,onBeforeUnmount:Vt,onBeforeUpdate:Ft,onDeactivated:At,onErrorCaptured:Dt,onMounted:zt,onRenderTracked:Ht,onRenderTriggered:It,onScopeDispose:oe,onServerPrefetch:Ut,onUnmounted:Wt,onUpdated:Gt,openBlock:Xt,popScopeId:qt,provide:Kt,proxyRefs:Jt,pushScopeId:Qt,queuePostFlushCb:Yt,reactive:W,readonly:Zt,ref:re,registerRuntimeCompiler:ea,render:ta,renderList:aa,renderSlot:na,resolveComponent:sa,resolveDirective:oa,resolveDynamicComponent:ra,resolveFilter:ia,resolveTransitionHooks:ca,setBlockTracking:la,setDevtoolsHook:ua,setTransitionHooks:da,shallowReactive:fa,shallowReadonly:pa,shallowRef:ma,ssrContextKey:ha,ssrUtils:ga,stop:ba,toDisplayString:_a,toHandlerKey:va,toHandlers:ya,toRaw:ie,toRef:Sa,toRefs:ce,toValue:wa,transformVNodeArgs:Ca,triggerRef:ka,unref:Pa,useAttrs:Na,useCssModule:Ea,useCssVars:Ma,useModel:xa,useSSRContext:ja,useSlots:Ba,useTransitionState:Ra,vModelCheckbox:La,vModelDynamic:$a,vModelRadio:Ta,vModelSelect:Oa,vModelText:Va,vShow:Fa,version:Aa,warn:Da,watch:le,watchEffect:za,watchPostEffect:Ha,watchSyncEffect:Ia,withAsyncContext:Ua,withCtx:Wa,withDefaults:Ga,withDirectives:Xa,withKeys:qa,withMemo:Ka,withModifiers:Ja,withScopeId:Qa},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ue;const G=e=>ue=e,tn=Symbol();function z(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var R;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(R||(R={}));const de=()=>{};function Y(e,o,s,n=de){e.push(o);const c=()=>{const r=e.indexOf(o);r>-1&&(e.splice(r,1),n())};return!s&&ee()&&oe(c),c}function B(e,...o){e.slice().forEach(s=>{s(...o)})}const an=e=>e();function H(e,o){e instanceof Map&&o instanceof Map&&o.forEach((s,n)=>e.set(n,s)),e instanceof Set&&o instanceof Set&&o.forEach(e.add,e);for(const s in o){if(!o.hasOwnProperty(s))continue;const n=o[s],c=e[s];z(c)&&z(n)&&e.hasOwnProperty(s)&&!L(n)&&!U(n)?e[s]=H(c,n):e[s]=n}return e}const nn=Symbol();function sn(e){return!z(e)||!e.hasOwnProperty(nn)}const{assign:N}=Object;function on(e){return!!(L(e)&&e.effect)}function rn(e,o,s,n){const{state:c,actions:r,getters:p}=o,t=s.state.value[e];let d;function u(){t||(s.state.value[e]=c?c():{});const _=ce(s.state.value[e]);return N(_,r,Object.keys(p||{}).reduce((v,y)=>(v[y]=ne(I(()=>{G(s);const S=s._s.get(e);return p[y].call(S,S)})),v),{}))}return d=fe(e,u,o,s,n,!0),d}function fe(e,o,s={},n,c,r){let p;const t=N({actions:{}},s),d={deep:!0};let u,_,v=[],y=[],S;const P=n.state.value[e];!r&&!P&&(n.state.value[e]={}),re({});let $;function T(l){let i;u=_=!1,typeof l=="function"?(l(n.state.value[e]),i={type:R.patchFunction,storeId:e,events:S}):(H(n.state.value[e],l),i={type:R.patchObject,payload:l,storeId:e,events:S});const g=$=Symbol();se().then(()=>{$===g&&(u=!0)}),_=!0,B(v,i,n.state.value[e])}const X=r?function(){const{state:i}=s,g=i?i():{};this.$patch(C=>{N(C,g)})}:de;function O(){p.stop(),v=[],y=[],n._s.delete(e)}function V(l,i){return function(){G(n);const g=Array.from(arguments),C=[],M=[];function K(h){C.push(h)}function A(h){M.push(h)}B(y,{args:g,name:l,store:m,after:K,onError:A});let x;try{x=i.apply(this&&this.$id===e?this:m,g)}catch(h){throw B(M,h),h}return x instanceof Promise?x.then(h=>(B(C,h),h)).catch(h=>(B(M,h),Promise.reject(h))):(B(C,x),x)}}const F={_p:n,$id:e,$onAction:Y.bind(null,y),$patch:T,$reset:X,$subscribe(l,i={}){const g=Y(v,l,i.detached,()=>C()),C=p.run(()=>le(()=>n.state.value[e],M=>{(i.flush==="sync"?_:u)&&l({storeId:e,type:R.direct,events:S},M)},N({},d,i)));return g},$dispose:O},m=W(F);n._s.set(e,m);const q=n._a&&n._a.runWithContext||an,E=n._e.run(()=>(p=Z(),q(()=>p.run(o))));for(const l in E){const i=E[l];if(L(i)&&!on(i)||U(i))r||(P&&sn(i)&&(L(i)?i.value=P[l]:H(i,P[l])),n.state.value[e][l]=i);else if(typeof i=="function"){const g=V(l,i);E[l]=g,t.actions[l]=i}}return N(m,E),N(ie(m),E),Object.defineProperty(m,"$state",{get:()=>n.state.value[e],set:l=>{T(i=>{N(i,l)})}}),n._p.forEach(l=>{N(m,p.run(()=>l({store:m,app:n._a,pinia:n,options:t})))}),P&&r&&s.hydrate&&s.hydrate(m.$state,P),u=!0,_=!0,m}function cn(e,o,s){let n,c;const r=typeof o=="function";typeof e=="string"?(n=e,c=r?s:o):(c=e,n=e.id);function p(t,d){const u=te();return t=t||(u?ae(tn,null):null),t&&G(t),t=ue,t._s.has(n)||(r?fe(n,o,c,t):rn(n,c,t)),t._s.get(n)}return p.$id=n,p}var ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function un(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dn(e){if(e.__esModule)return e;var o=e.default;if(typeof o=="function"){var s=function n(){return this instanceof n?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};s.prototype=o.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var c=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(s,n,c.get?c:{enumerable:!0,get:function(){return e[n]}})}),s}var pe={exports:{}};const fn=dn(en);(function(e,o){(function(n,c){e.exports=c(fn)})(ln,s=>(()=>{var n={657:(t,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.default=(u,_)=>{const v=u.__vccOpts||u;for(const[y,S]of _)v[y]=S;return v}},976:t=>{t.exports=s}},c={};function r(t){var d=c[t];if(d!==void 0)return d.exports;var u=c[t]={exports:{}};return n[t](u,u.exports,r),u.exports}r.d=(t,d)=>{for(var u in d)r.o(d,u)&&!r.o(t,u)&&Object.defineProperty(t,u,{enumerable:!0,get:d[u]})},r.o=(t,d)=>Object.prototype.hasOwnProperty.call(t,d),r.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{r.r(p),r.d(p,{Component:()=>D,LoadingPlugin:()=>ve,default:()=>ye,useLoading:()=>J});var t=r(976);function d(a){var f;typeof a.remove<"u"?a.remove():(f=a.parentNode)==null||f.removeChild(a)}function u(a,f,k){let w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const j=(0,t.h)(a,f,w),b=document.createElement("div");return b.classList.add("vld-container"),k.appendChild(b),(0,t.render)(j,b),j.component}function _(){return typeof window<"u"}const v=_()?window.HTMLElement:Object,y=["aria-busy"],S={class:"vl-icon"};function P(a,f,k,w,j,b){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{name:a.transition},{default:(0,t.withCtx)(()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{tabindex:"0",class:(0,t.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":a.isFullPage}]),"aria-busy":a.isActive,"aria-label":"Loading",style:(0,t.normalizeStyle)({zIndex:a.zIndex})},[(0,t.createElementVNode)("div",{class:"vl-background",onClick:f[0]||(f[0]=(0,t.withModifiers)(function(){return a.cancel&&a.cancel(...arguments)},["prevent"])),style:(0,t.normalizeStyle)(a.bgStyle)},null,4),(0,t.createElementVNode)("div",S,[(0,t.renderSlot)(a.$slots,"before"),(0,t.renderSlot)(a.$slots,"default",{},()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(a.loader),{color:a.color,width:a.width,height:a.height},null,8,["color","width","height"]))]),(0,t.renderSlot)(a.$slots,"after")])],14,y),[[t.vShow,a.isActive]])]),_:3},8,["name"])}const $={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(a){if(!this.isActive||a.target===this.$el||this.$el.contains(a.target))return;let f=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||f&&f.contains(a.target))&&(a.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},T=["width","height","stroke"],O=[(0,t.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function V(a,f,k,w,j,b){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:a.width,height:a.height,stroke:a.color},O,8,T)}const F=(0,t.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var m=r(657);const E=(0,m.default)(F,[["render",V]]),l=["fill","width","height"],g=[(0,t.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function C(a,f,k,w,j,b){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:a.color,width:a.width,height:a.height},g,8,l)}const M=(0,t.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),A=(0,m.default)(M,[["render",C]]),x=["height","width","fill"],me=[(0,t.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function he(a,f,k,w,j,b){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:a.height,width:a.width,fill:a.color},me,8,x)}const ge=(0,t.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),be={Spinner:E,Dots:A,Bars:(0,m.default)(ge,[["render",he]])},_e=(0,t.defineComponent)({name:"VueLoading",mixins:[$],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,v],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:be,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const a=this.$el.parentElement;(0,t.render)(null,a),d(a)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(a){a.keyCode===27&&this.cancel()}},watch:{active(a){this.isActive=a},isActive(a){a?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),D=(0,m.default)(_e,[["render",P]]);function J(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f;const b={...a,...k,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let Q=b.container;b.container||(Q=document.body,b.isFullPage=!0);const Se={...f,...w};return{hide:u(D,b,Q,Se).ctx.hide}}}}const ve=function(a){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const w=J(f,k);a.config.globalProperties.$loading=w,a.provide("$loading",w)},ye=D})(),p})())})(pe);var pn=pe.exports;const yn=un(pn),mn=cn("genre",()=>{const e=W({genres:[]});return{genres:I(()=>e.genres),getAllGenres:async c=>{const r=await Ya.get(`genre/${c}/list?language=pt-BR`);e.genres=r.data.genres},getGenreName:c=>e.genres.find(r=>r.id===c).name}}),Sn=mn();export{yn as L,Sn as g};