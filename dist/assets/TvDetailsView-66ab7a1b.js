import{bB as u,aM as p,D as v,g as V,o as T,a as n,c,b as t,f as a,t as r,F as i,d as h,p as m,h as g}from"./index-c4808fc9.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const f=u("tv",()=>{const s=p({currentTV:{}});return{currentTV:v(()=>s.currentTV),getTVDetail:async _=>{const d=await V.get(`tv/${_}`);s.currentTV=d.data}}});const w=s=>(m("data-v-354b7a9e"),s=s(),g(),s),D={class:"main"},S={class:"content"},I={class:"fundo"},k=["src","alt"],x={class:"details"},y={class:"sobreTV"},B={class:"prod"},$=w(()=>t("div",null,[t("h1",null,"Produtoras:")],-1)),E={class:"companies"},F=["src","alt"],M={key:1},N={__name:"TvDetailsView",props:{TVId:{type:Number,required:!0}},setup(s){const l=s,e=f();return T(async()=>{await e.getTVDetail(l.TVId)}),(_,d)=>(n(),c(i,null,[t("div",D,[t("div",S,[t("div",I,[t("img",{src:`https://image.tmdb.org/t/p/w300${a(e).currentTV.poster_path}`,alt:a(e).currentTV.title},null,8,k)]),t("div",x,[t("h1",null,"Série: "+r(a(e).currentTV.name),1),t("p",null,r(a(e).currentTV.tagline),1),t("div",y,[t("p",null,r(a(e).currentTV.overview),1)]),t("p",null,"Primeira Exibição: "+r(a(e).currentTV.first_air_date),1),t("p",null,"Avaliação: "+r(a(e).currentTV.vote_average),1)])])]),t("div",B,[$,t("div",E,[(n(!0),c(i,null,h(a(e).currentTV.production_companies,o=>(n(),c(i,{key:o.id},[o.logo_path?(n(),c("img",{key:0,src:`https://image.tmdb.org/t/p/w92${o.logo_path}`,alt:o.name},null,8,F)):(n(),c("p",M,r(o.name),1))],64))),128))])])],64))}},A=b(N,[["__scopeId","data-v-354b7a9e"]]);export{A as default};